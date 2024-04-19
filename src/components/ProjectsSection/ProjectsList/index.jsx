import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.css";

export const ProjectList = ({ children }) => {
  return (
    <div className={styles.projectContainer}>
      <ul className={styles.projectList}>
        {children}
        {/* {projects.map((project) => (
          <li className={styles.projectItem_list} key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))} */}
      </ul>
    </div>
  );
};
