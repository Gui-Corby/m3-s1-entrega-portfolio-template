import { projects } from "../../../../data/projects.js";
import gitIcon from "../../../../assets/git-icon.png";


export const ProjectCard = () => {
    return (
        <div className="projectCard">
            {projects.map((project) => {
                return (
                    <ul key={project.name}>
                        <li>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a className="paragraph blue">Saiba mais</a>
                    </li>
                    <img src={gitIcon}/>
                    </ul>
                    
                    
                );
            })}
        </div>
    );
}
            