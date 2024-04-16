import { projects } from "../../../../data/projects.js";
import gitIcon from "../../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      {projects.map((project) => {
        return (
          <ul className={styles.projectItem} key={project.name}>
            <div className={styles.projectItem_container}>
              <li className={styles.projectItem_list}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" id={styles.saiba_mais}> Saiba mais </a>
              </li>
            </div>

            <div className={styles.projectItem_img_container}>
              <img id={styles.projectImg} src={gitIcon} />
            </div>
          </ul>
        );
      })}
    </div>
  );
};
