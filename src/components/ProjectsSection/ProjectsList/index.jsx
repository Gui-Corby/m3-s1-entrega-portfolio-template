import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.css";

export const ProjectList = ({ children }) => {
  return (
    <div className={styles.projectContainer}>
      <ul className={styles.projectList}>{children}</ul>
    </div>
  );
};
