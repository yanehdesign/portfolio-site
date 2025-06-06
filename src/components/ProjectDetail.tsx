import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="container mx-auto px-6 py-16">
      <button className="mb-4 text-pink-800" onClick={() => navigate(-1)}>&larr; Back</button>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="mb-6 rounded" />
      <p className="mb-6">{project.description}</p>
      {/* Add more detailed info about Puebla here */}
      {project.id === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">More About Puebla</h2>
          <p>Put your extra information about Puebla here!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;