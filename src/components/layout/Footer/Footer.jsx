import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>© {new Date().getFullYear()} Meli Renee. All rights reserved.</p>
        {/* <p className={styles.footerSecondary}>
          Built with React & Vite. External links may be affiliate links.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
