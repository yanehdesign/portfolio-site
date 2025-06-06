import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projectsData';
import ProjectDetail from './components/ProjectDetail';

function App() {
  useEffect(() => {
    document.title = "Janet Garcia | Graphic Designer";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="projects" className="py-16">
                  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => window.location.href = `/project/${project.id}`}
                      />
                    ))}
                  </div>
                </section>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;