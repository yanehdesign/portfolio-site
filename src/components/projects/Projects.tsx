import { projects } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => navigate(`/project/${project.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
