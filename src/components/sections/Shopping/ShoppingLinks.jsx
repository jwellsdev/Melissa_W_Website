import Section from "../../common/Section";
import Card from "../../common/Card";
import { shoppingLinks } from "../../../data/shoppingLinks";
import sectionStyles from "../../common/Section.module.css";

const ShoppingLinks = ({ id }) => {
  return (
    <Section
      id={id}
      title="Shop My Favorites"
      subtitle="Direct links to my storefronts and recommended products."
    >
      <div className={sectionStyles.cardGrid}>
        {shoppingLinks.map((link) => (
          <Card
            key={link.name}
            title={link.name}
            description={link.description}
            href={link.url}
            logo={link.logo}
          />
        ))}
      </div>
    </Section>
  );
};

export default ShoppingLinks;
