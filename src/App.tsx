import { HashRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { projects } from './data/projectsData';
import ProjectDetail from './components/ProjectDetail';
import ProjectsCarousel from "./components/ProjectsCarousel";
import './index.css';
import { useNavigate } from 'react-router-dom';
import FullWidthCarousel from './FullWidthCarousel';

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  useEffect(() => {
    document.title = "Janet Garcia | Graphic Designer";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bgPattern = document.querySelector('.bg-pattern');
      if (bgPattern) {
        const patternOffset = window.scrollY * 0.1;
        (bgPattern as HTMLElement).style.transform = `translateY(${patternOffset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!isProjectDetail && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProjectsCarousel
              projects={projects}
              onProjectClick={(project: { id: any }) => window.location.hash = `/project/${project.id}`}
            />
          }
        />
        <Route
          path="/project/:id"
          element={<ProjectDetailWithKey />}
        />
      </Routes>
      <Footer />
    </>
  );
}

function ProjectDetailWithKey() {
  const { id } = useParams();
  return <ProjectDetail key={id} />;
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('no-animations');
    } else {
      document.body.classList.remove('no-animations');
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;