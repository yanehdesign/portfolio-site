import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects, onProjectClick }) => {
  const navigate = useNavigate();

  if (!projects || projects.length === 0) return null;

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
    onProjectClick(project);
  };

  return (
    <section className="relative w-full bg-cream py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-burgundy mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-crimson max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
          loop
          className="!overflow-visible"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="p-2">
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;