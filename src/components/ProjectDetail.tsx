import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import FullWidthCarousel from "./FullWidthCarousel";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="container mx-auto px-6 py-16">
      <button
        aria-label="Go back"
        className="mb-4 font-raleway text-lg font-semibold transition-colors duration-200"
        style={{ color: 'var(--color-1)', background: 'transparent' }}
        onMouseOver={e => (e.currentTarget.style.background = 'var(--color-6)')}
        onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
      <h1 onClick={() => navigate(-1)}
        className="text-9xl font-tahoma font-bold mb-30 leading-tight text-center"
        style={{ color: 'var(--color-1)' }}
      >
        {project.title}
      </h1>
      {project.details && (
        <div className="mb-8 font-raleway font-light text-lg text-center">
          <p style={{ color: 'black' }}>{project.details}</p>
        </div>
      )}
      <div className="text-center">
        <img src={project.imageUrl} alt={project.title} className="mb-20 rounded shadow" />
      </div>
      {Array.isArray(project.extraImages) && project.extraImages.length > 0 && (
        <FullWidthCarousel images={project.extraImages} />
      )}
    </div>
  );
};

export default ProjectDetail;

/* In your routing file, ensure you have the following route defined:
<Route path="/project/:id" element={<ProjectDetail />} />;
*/