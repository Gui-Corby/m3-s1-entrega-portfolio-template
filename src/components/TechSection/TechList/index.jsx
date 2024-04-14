import { technologies } from "../../../data/technologies.js";

export const TechnologiesList = () => {
  return (
      <div className="technoliges-section_list">
        {technologies.map((tech) => {
          return (
            <li key={tech.name}>
              <img src={tech.img} alt={tech.name} />
              <h3>{tech.name}</h3>
            </li>
          );
        })}
      </div>
  );
};