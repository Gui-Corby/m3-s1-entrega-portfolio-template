import styles from "./style.module.css";

export const TechnologiesList = ({ children }) => {
  return <div className={styles.technologies_section_list}>{children}</div>;
};
