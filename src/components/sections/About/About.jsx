import Section from "../../common/Section";
import aboutImage from "../../../assets/images/meli-reads-it-all.jpg";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../../data/socialLinks";

const About = ({ id }) => {
  return (
    <Section
      id={id}
      title="Meli Renee"
      // subtitle="A short intro about who I am and what I do."
    >
      <div className={styles.aboutLayout}>
        <div className={styles.aboutImageWrapper}>
          <img src={aboutImage} alt="About me" className={styles.aboutImage} />
        </div>
        <h3 className={styles.aboutName}>Reads it all</h3>

        <div className={styles.socialIconsRow}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <div className={styles.aboutText}>
          <p>
            After finding true joy on the other side of a dark season, it’s now
            my heart’s mission to help others experience this fulfillment, too.
            Oh yeah, you'll also find lifestyle tips and beauty insider secrets
            along the way. I got your back from the inside out, girl. I’m a
            small town girl from Kentucky who has experienced a lot from Miss
            America to the Amazing Race.
          </p>
          <p>
            If you’re ready to stop sliding into a “just getting by” mindset –
            and begin to truly live intentionally – you’re in the right place. I
            can’t wait to grow and learn alongside you. Because it’s your time
            to begin living fully.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
