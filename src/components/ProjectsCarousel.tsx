import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { Project } from "../types";
import { useNavigate } from "react-router-dom";
import FullWidthCarousel from "./FullWidthCarousel";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: { id: any }) => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects, onProjectClick }) => {
  const navigate = useNavigate();

  if (!projects || projects.length === 0) return null;

  return (
    <div
      id="projects"
      className="relative w-screen left-1/2 -translate-x-1/2 px-0 py-0 mb-16 z-20"
      style={{ background: 'var(--color-1)' }}
    >
      <div className="grid grid-cols-12 gap-6 px-4 md:px-12 py-12 max-w-screen-xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={2}
          loop
          className="w-full"
          style={{ padding: "2rem 0" }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <div className="w-full max-w-2xl">
                <ProjectCard
                  project={project}
                  onClick={() => {
                    navigate(`/project/${project.id}`);
                    onProjectClick(project);
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="col-span-12">
          <FullWidthCarousel images={projects.flatMap(project => project.extraImages)} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;