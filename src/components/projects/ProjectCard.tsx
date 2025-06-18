import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      aria-label={`View details for ${project.title}`}
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 h-[400px] cursor-pointer hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-burgundy/80 backdrop-blur-sm flex flex-col justify-center items-center text-center p-8 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-display font-bold mb-4 text-cream">
          {project.title}
        </h3>

        {project.goal && (
          <p className="mb-4 text-cream/90">{project.goal}</p>
        )}

        {project.role && (
          <p className="mb-2 text-rose text-sm">
            <span className="font-medium">Role:</span> {project.role}
          </p>
        )}

        {project.tools && project.tools.length > 0 && (
          <p className="mb-2 text-gold text-sm">
            <span className="font-medium">Tools:</span> {project.tools.join(', ')}
          </p>
        )}

        {project.challenges && (
          <p className="text-cream/80 text-sm leading-relaxed">
            {project.challenges}
          </p>
        )}
      </div>

      {/* Base Card Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-cream/80 backdrop-blur-md p-6">
        <h3 className="text-xl font-display font-bold text-burgundy">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;