import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { AboutMe } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { projects } from "./data/projects.js";
import { technologies } from "./data/technologies.js";
import { username } from "./data/user.js";
import "../src/styles/globalStyles.css";


function App() {
  return (
    <>
      <Header />

      <main>
        <BannerSection>
          <p className="paragraph_blue">{username}</p>
        </BannerSection>

        <AboutMe />

        <TechSection technologies={technologies} />

        <ProjectsSection projects={projects}>
        </ProjectsSection>
      </main>

      <Footer />
    </>
  );
}

export default App;
