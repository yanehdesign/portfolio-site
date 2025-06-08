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
      onClick={onClick}
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
        <p className="mb-2 text-white">{project.goal}</p>
        <p className="mb-2 text-white text-sm"><b>Role:</b> {project.role}</p>
        <p className="mb-2 text-white text-sm"><b>Tools:</b> {project.tools?.join(', ')}</p>
        <p className="mb-2 text-white text-xs">{project.challenges}</p>
      </div>
    </div>
  );
};

export default ProjectCard;