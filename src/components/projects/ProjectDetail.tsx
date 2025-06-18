import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import FullWidthCarousel from '../ui/FullWidthCarousel';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projects.find((p) => String(p.id) === String(id)) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-burgundy text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Back Button */}
      <nav aria-label="breadcrumb" className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-burgundy hover:text-crimson px-4 py-2 rounded-lg transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to Projects</span>
        </button>
      </nav>

      {/* Project Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Featured Image */}
        <div className="lg:col-span-7">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[70vh] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Project Details Card */}
        <div className="lg:col-span-5">
          <div className="bg-cream/95 backdrop-blur-md rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-display font-bold mb-6 text-burgundy">
              {project.title}
            </h1>
            
            {project.details && (
              <div className="mb-6">
                <h2 className="text-xl font-display font-semibold text-burgundy mb-2">
                  Project Overview
                </h2>
                <p className="text-crimson leading-relaxed">{project.details}</p>
              </div>
            )}

            {/* Project Metadata */}
            <div className="space-y-4">
              {project.goal && (
                <div className="flex gap-2">
                  <span className="font-medium text-burgundy">Goal:</span>
                  <span className="text-crimson">{project.goal}</span>
                </div>
              )}
              
              {project.role && (
                <div className="flex gap-2">
                  <span className="font-medium text-burgundy">Role:</span>
                  <span className="text-crimson">{project.role}</span>
                </div>
              )}
              
              {project.tools && (
                <div className="flex gap-2">
                  <span className="font-medium text-burgundy">Tools:</span>
                  <span className="text-crimson">{project.tools.join(", ")}</span>
                </div>
              )}
              
              {project.challenges && (
                <div className="flex gap-2">
                  <span className="font-medium text-burgundy">Challenges:</span>
                  <span className="text-crimson">{project.challenges}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      {Array.isArray(project.extraImages) && project.extraImages.length > 0 && (
        <div className="bg-cream/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
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