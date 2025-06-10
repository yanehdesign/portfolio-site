import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      role="button"
      aria-label="View project details"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 h-[400px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        {project.goal && <p className="mb-2 text-white">{project.goal}</p>}
        {project.role && (
          <p className="mb-2 text-white text-sm">
            <b>Role:</b> {project.role}
          </p>
        )}
        {project.tools && project.tools.length > 0 && (
          <p className="mb-2 text-white text-sm">
            <b>Tools:</b> {project.tools.join(', ')}
          </p>
        )}
        {project.challenges && (
          <p className="mb-2 text-white text-xs">{project.challenges}</p>
        )}
      </div>
      <div className="bg-white/70 backdrop-blur-md rounded-lg p-6">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default ProjectCard;