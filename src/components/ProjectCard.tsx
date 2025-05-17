import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url(${project.imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/90 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;