import { useState } from "react";
import Section from "../../common/Section";
import styles from "./Email.module.css";

const FORM_NAME = "pr-collabs";

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const Email = ({ id }) => {
  const [email, setEmail] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot filled => treat as spam; pretend success silently
    if (botField) {
      setStatus("success");
      setEmail("");
      setBotField("");
      return;
    }

    setStatus("submitting");

    try {
      const body = encode({
        "form-name": FORM_NAME,
        email,
        "bot-field": botField,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error(`Netlify form submit failed: ${res.status}`);

      setStatus("success");
      setEmail("");
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
          netlify-honeypot="bot-field"
          className={styles.emailForm}
          onSubmit={handleSubmit}
        >
          {/* required for Netlify */}
          <input type="hidden" name="form-name" value={FORM_NAME} />

          {/* honeypot (hidden via CSS) */}
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

          <label className={styles.emailLabel}>
            Email address
            <input
              type="email"
              name="email"
              className={styles.emailInput}
              placeholder="yourname@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "submitting" || status === "success"}
            />
          </label>

          <button
            type="submit"
            className={styles.emailButton}
            disabled={status === "submitting" || status === "success"}
          >
            {status === "submitting" ? "SENDING..." : "EMAIL ME"}
          </button>
        </form>
      </div>

      {status === "success" && (
        <p className={styles.successMessage}>
          Thanks — you’re all set! We’ll be in touch soon.
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
