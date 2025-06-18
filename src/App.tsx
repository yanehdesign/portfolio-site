import { HashRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { projects } from "./data/projectsData";
import ProjectDetail from "./components/projects/ProjectDetail";
import ProjectsCarousel from "./components/projects/ProjectsCarousel";
import { Project } from "./types";
import "./index.css";

// Types
interface ProjectClickProps {
  project: Project;
}

// Custom hooks
const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bgPattern = document.querySelector(".bg-pattern");
      if (bgPattern instanceof HTMLElement) {
        const patternOffset = window.scrollY * 0.1;
        bgPattern.style.transform = `translateY(${patternOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

// Helper Components
const ProjectDetailWithKey = () => {
  const { id } = useParams<{ id: string }>();
  return <ProjectDetail key={id} />;
};

// Main Content Component
const AppContent = () => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  usePageTitle("Janet Garcia | Graphic Designer");
  useScrollEffect();

  const handleProjectClick = ({ project }: ProjectClickProps) => {
    window.location.hash = `/project/${project.id}`;
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {!isProjectDetail && <Header />}

      <main className="flex-grow relative">
        <Routes>
          <Route
            path="/"
            element={
              <ProjectsCarousel
                projects={projects}
                onProjectClick={handleProjectClick}
              />
            }
          />
          <Route
            path="/project/:id"
            element={<ProjectDetailWithKey />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

// Root App Component
const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.toggle("no-animations", prefersReducedMotion);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;