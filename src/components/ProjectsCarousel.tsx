import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { Project } from "../types";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Footer } from './Footer';

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    centerPadding: "20px",       // No side padding, full-bleed
    slidesToShow: 2,            // Show 1 at a time (increase for multi)
    slidesToScroll: 1,
    variableWidth: false,        // Allow variable width for slides
    focusOnSelect: true,        // Enable focus on select
    adaptiveHeight: false, // Adjust height based on current slide
    cssEase: "ease-in-out",     // Smooth transition
    fade: false,                // Disable fade effect
    lazyLoad: "ondemand" as const,       // Lazy load images
    arrows: true,              // Show navigation arrows
    prevArrow: (
      <button
        className="slick-prev"
        style={{
          fontSize: '400.5rem',      // Make arrow text/icon bigger
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--color-4)',
          color: 'var(--color-1)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          cursor: 'default'
        }}
      >
        Prev
      </button>
    ), // Custom previous arrow
    nextArrow: (
      <button
        className="slick-next"
        style={{
          fontSize: '400.5rem',      // Make arrow text/icon bigger
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--color-4)',
          color: 'var(--color-1)',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          cursor: 'defualt'
        }}
      >
        Next
      </button>
    ), // Custom next arrow
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 3000,       // Autoplay speed in milliseconds
    pauseOnHover: true,        // Pause on hover
    pauseOnFocus: true,        // Pause on focus
    swipe: true,              // Enable swipe
    touchMove: true,          // Enable touch move
    draggable: true,         // Enable dragging
    initialSlide: 0, // Start at the first slide 
  };

  if (!projects || projects.length === 0) return null;

  return (
    <>
      <Header />
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
                  onClick={() => navigate(`/project/${project.id}`)}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsCarousel;