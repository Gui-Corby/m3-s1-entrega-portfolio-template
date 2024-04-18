import styles from "./style.module.css";

export const TechnologiesList = ({ technologies }) => {
  return (
    <div className={styles.technoliges_section_list}>
      {technologies.map((tech) => {
        return (
          <li className={styles.techItem} key={tech.name}>
            <img src={tech.img} alt={tech.name} />
            <h3>{tech.name}</h3>
          </li>
        );
      })}
    </div>
  );
};
