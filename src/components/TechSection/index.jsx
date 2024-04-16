import { TechnologiesList } from "./TechList";
import styles from "./style.module.css";

export const TechSection = () => {
  return (
    <section className="technologies-section">
      <div className={styles.technologies_container}>
        <h2 className="title md">Tecnologias</h2>
        <TechnologiesList />
      </div>
    </section>
  );
};
