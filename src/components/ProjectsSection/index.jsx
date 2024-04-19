// import { ProjectList } from "./ProjectsList";
import styles from "./style.module.css";

export const ProjectsSection = ({ children }) => {
  return (
    <section className="projects-section">
      <div className={styles.projects_container}>
        <h2 className="title md">Projetos</h2>
        {/* <ProjectList projects={projects} /> */}
        {children}
      </div>
    </section>
  );
};
