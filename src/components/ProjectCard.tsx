import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 h-[400px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Make the image clickable */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url(${project.imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          cursor: 'pointer'
        }}
        onClick={onClick}
        aria-label={`View details for ${project.title}`}
        role="button"
        tabIndex={0}
        onKeyPress={e => { if (e.key === 'Enter') onClick(); }}
      />
      
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
        style={{
          background: 'linear-gradient(to top, var(--color-3), rgba(201,89,116,0.7), transparent)'
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onKeyPress={e => { if (e.key === 'Enter') onClick(); }}
      >
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-1)' }}>{project.title}</h3>
        <p className="mb-4" style={{ color: 'var(--color-5)' }}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;