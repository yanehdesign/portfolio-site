import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import FullWidthCarousel from './FullWidthCarousel';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projects.find((p) => String(p.id) === String(id)) : null;

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Back Button */}
      <nav aria-label="breadcrumb" className="mb-8">
        <button
          aria-label="Go back"
          className="text-base font-semibold text-[var(--color-1)] hover:bg-[var(--color-6)] px-4 py-2 rounded transition"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </nav>

      {/* Big Image + Info Side by Side */}
      <div className="grid grid-cols-12 gap-6 px-4 md:px-12 py-12 max-w-screen-xl mx-auto">
        {/* Image left */}
        <div className="col-span-12 lg:col-span-7">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[70vh] object-cover rounded-xl shadow-md"
            loading="lazy"
          />
        </div>

        {/* Info card right */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-[var(--color-1)]">{project.title}</h1>
            {project.details && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[var(--color-1)] mb-2">Project Overview</h2>
                <p className="text-gray-800">{project.details}</p>
              </div>
            )}
            {project.goal && (
              <div className="mb-2">
                <span className="font-semibold text-[var(--color-1)]">Goal: </span>
                <span>{project.goal}</span>
              </div>
            )}
            {project.role && (
              <div className="mb-2">
                <span className="font-semibold text-[var(--color-1)]">Role: </span>
                <span>{project.role}</span>
              </div>
            )}
            {project.tools && (
              <div className="mb-2">
                <span className="font-semibold text-[var(--color-1)]">Tools: </span>
                <span>{project.tools.join(", ")}</span>
              </div>
            )}
            {project.challenges && (
              <div>
                <span className="font-semibold text-[var(--color-1)]">Challenges: </span>
                <span>{project.challenges}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carousel at the bottom */}
      {Array.isArray(project.extraImages) && project.extraImages.length > 0 && (
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md mb-10">
          <FullWidthCarousel images={project.extraImages} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;

/* In your routing file, ensure you have the following route defined:
<Route path="/project/:id" element={<ProjectDetail />} />;
*/