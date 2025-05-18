import React from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-800 mb-2">Projects</h2>
        <p className="text-pink-700 mb-12 max-w-2xl">
          Below is a portfolio selection highlighting a range of projects that demonstrate my skills and evolving style.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;