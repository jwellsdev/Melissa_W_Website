import styles from "./Section.module.css";

const Section = ({ id, title, subtitle, children, alt = false }) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${alt ? styles.sectionAlt : ""}`}
    >
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
        <div className={styles.sectionContent}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
