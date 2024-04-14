import { Header } from "./components/Header";
import { BannerSection } from "./components/BannerSection";
import { AboutMe } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <BannerSection />
        <AboutMe />
        <TechSection />
        <ProjectsSection />
      </main>

      <Footer />
      
    </>
  );
}

export default App;
