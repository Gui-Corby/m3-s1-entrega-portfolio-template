
import styles from "./style.module.css";

export const TechSection = ({ children }) => {
  return (
    <section className="technologies-section">
      <div className={styles.technologies_container}>
        <h2 className="title md">Tecnologias</h2>
        <ul className="technologyList">
          {children}
        </ul>
      </div>
    </section>
  );
};
