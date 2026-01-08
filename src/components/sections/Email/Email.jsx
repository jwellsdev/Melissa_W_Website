import { useState } from "react";
import Section from "../../common/Section";
import styles from "./Email.module.css";

const FORM_NAME = "pr-collabs";

// Netlify requires URL-encoded form data
const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const Email = ({ id }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot filled → treat as spam, silently succeed
    if (botField) {
      setStatus("success");
      setEmail("");
      setMessage("");
      setBotField("");
      return;
    }

    setStatus("submitting");

    try {
      const body = encode({
        "form-name": FORM_NAME,
        email,
        message,
        "bot-field": botField,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) {
        throw new Error(`Netlify form submit failed: ${res.status}`);
      }

      setStatus("success");
      setEmail("");
      setMessage("");
      setBotField("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Section
      id={id}
      title="PR AND COLLABS"
      subtitle="Get updates on new content, collabs, and recommendations."
    >
      <div className={styles.emailRow}>
        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={styles.emailForm}
          onSubmit={handleSubmit}
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value={FORM_NAME} />

          {/* Honeypot (hidden via CSS) */}
          <p className={styles.honeypot}>
            <label>
              Don’t fill this out:
              <input
                name="bot-field"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                autoComplete="off"
              />
            </label>
          </p>

          <div className={styles.formStack}>
            {/* Row 1: Email */}
            <div className={styles.inputRow}>
              <label className={styles.emailLabel} htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                className={styles.emailInput}
                type="email"
                placeholder="yourname@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Row 2: Message */}
            <div className={styles.messageRow}>
              <label className={styles.messageLabel} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.messageInput}
                placeholder="Write your message here..."
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Row 3: Button */}
            <div className={styles.buttonRow}>
              <button className={styles.emailButton} type="submit">
                EMAIL ME
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Inline status messages */}
      {status === "success" && (
        <p className={styles.successMessage}>
          Thanks — your message has been sent!
        </p>
      )}

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again.
        </p>
      )}
    </Section>
  );
};

export default Email;
