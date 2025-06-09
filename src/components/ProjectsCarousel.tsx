import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { Project } from "../types";
import { useNavigate } from "react-router-dom";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: { id: any }) => void; // Add this line
}

const PrevArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <button
      className="slick-prev"
      style={{
        fontSize: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'var(--color-4)',
        color: 'var(--color-1)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
      type="button"
      aria-label="Previous"
    >
      Prev
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <button
      className="slick-next"
      style={{
        fontSize: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'var(--color-4)',
        color: 'var(--color-1)',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
      type="button"
      aria-label="Next"
    >
      Next
    </button>
  );
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects, onProjectClick }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    centerPadding: "20px",
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: false,
    focusOnSelect: true,
    adaptiveHeight: false,
    cssEase: "ease-in-out",
    fade: false,
    lazyLoad: "ondemand" as const,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    touchMove: true,
    draggable: true,
    initialSlide: 0,
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div
      id="projects"
      className="relative left-1/2 w-screen -translate-x-1/2 px-0 py-0 mb-16 z-20"
      style={{ background: 'var(--color-1)' }}
    >
      <Slider {...settings} className="w-full max-w-screen-2xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ProjectCard
                project={project}
                onClick={() => {
                  navigate(`/project/${project.id}`);
                  onProjectClick(project); // Add this line
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;