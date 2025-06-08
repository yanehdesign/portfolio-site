import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { projects } from './data/projectsData';
import ProjectDetail from './components/ProjectDetail';
import ProjectsCarousel from "./components/ProjectsCarousel";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    document.title = "Janet Garcia | Graphic Designer";
  }, []);

  const handleProjectClick = (project: any) => {
    // What should happen when a project is clicked?
    // For now, just log it:
    console.log(project);
  };

  return (
    <Router>
      <div className="min-h-screen bg-pink-100 text-white font-sans">
        <div className="absolute inset-0 w-full h-full -z-10 bg-animated-gradient"></div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProjectsCarousel projects={projects} onProjectClick={handleProjectClick} />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;