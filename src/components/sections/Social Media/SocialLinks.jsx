import Section from "../../common/Section.jsx";
import Card from "../../common/Card.jsx";
import { socialLinks } from "../../../data/socialLinks.js";
import sectionStyles from "../../common/Section.module.css";

const SocialLinks = ({ id }) => {
  return (
    <Section
      id={id}
      title="Social Media"
      subtitle="Follow me on your favorite platforms."
    >
      <div className={sectionStyles.cardGrid}>
        {socialLinks.map((link) => (
          <Card
            key={link.name}
            title={link.name}
            description={link.description}
            href={link.url}
            type={link.type}
            videoId={link.videoId}
            thumbnailUrl={link.thumbnailUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default SocialLinks;
