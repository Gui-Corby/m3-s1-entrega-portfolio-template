
import { TechnologiesList } from "./TechList";
import styles from "./style.module.css";

export const TechSection = ({ technologies }) => {
  return (
    <section className="technologies-section">
      <div className={styles.technologies_container}>
        <h2 className="title md">Tecnologias</h2>
        <ul className="technologyList">
          <TechnologiesList technologies={technologies}  />
        </ul>
      </div>
    </section>
  );
};
