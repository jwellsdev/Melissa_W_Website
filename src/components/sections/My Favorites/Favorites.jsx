import Section from "../../common/Section";
import Card from "../../common/Card";
import { categories } from "../../../data/categories";
import sectionStyles from "../../common/Section.module.css";

const Favorites = ({ id }) => {
  return (
    <Section
      id={id}
      title="Favorite Categories"
      subtitle="Explore content and recommendations by category."
    >
      <div className={sectionStyles.cardGrid}>
        {categories.map((cat) => (
          <Card key={cat.name} title={cat.name} href={cat.url} />
        ))}
      </div>
    </Section>
  );
};

export default Favorites;
