import gitIcon from "../../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectItem_list} key={project.name}>
      <div className={styles.projectItem}>
        <div className={styles.projectItem_container}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" id={styles.saiba_mais}>
            Saiba mais
          </a>
        </div>

        <div className={styles.projectItem_img_container}>
          <img id={styles.projectImg} src={gitIcon} alt="Project Icon" />
        </div>
      </div>
    </li>
  );
};
