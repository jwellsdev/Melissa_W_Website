import { useState } from "react";
import Section from "../../common/Section";
import styles from "./Email.module.css";

const Email = ({ id }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:melireenesocials@gmail.com?subject=PR%20and%20Collabs${encodeURIComponent(
      email
    )}`; // open a mailto and prompt email to be sent.

    setEmail(""); // clear field after submit
  };

  return (
    <Section
      id={id}
      title="PR & Collabs"
      subtitle="Get updates on new content, collabs, and recommendations."
    >
      <div className={styles.emailRow}>
        {/* form just for the input */}
        <form className={styles.emailForm} onSubmit={handleSubmit}>
          <label className={styles.emailLabel}>
            Email address
            <input
              type="email"
              name="email"
              className={styles.emailInput}
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </form>

        {/* button as sibling so layout is easier */}
        <button
          type="submit"
          className={styles.emailButton}
          onClick={handleSubmit}
        >
          EMAIL ME
        </button>
      </div>
    </Section>
  );
};

export default Email;
