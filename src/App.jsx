import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { AboutMe } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { TechnologiesList } from "./components/TechSection/TechList/index.jsx";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { projects } from "./data/projects.js";
import { technologies } from "./data/technologies.js";
import { ProjectList } from "./components/ProjectsSection/ProjectsList/index.jsx";
import { ProjectCard } from "./components/ProjectsSection/ProjectsList/ProjectCard/index.jsx"
// import "../src/components/TechSection/TechList/style.module.css";

function App() {
  return (
    <>
      <Header />

      <main>
        
        <BannerSection />

        <AboutMe />

        <TechSection>
          <TechnologiesList>
            {technologies.map((tech) => {
              return (
                <li className="techItem" key={tech.name}>
                  <img src={tech.img} alt={tech.name} />
                  <h3>{tech.name}</h3>
                </li>
              );
            })}
          </TechnologiesList>
        </TechSection>

        <ProjectsSection>
          <ProjectList>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ProjectList>
        </ProjectsSection>

      </main>

      <Footer />
    </>
  );
}

export default App;
