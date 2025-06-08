import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { Project } from "../types";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects, onProjectClick }) => {
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
    prevArrow: <button className="click-prev">Prev</button>, // Custom previous arrow
    nextArrow: <button className="slick-next">Next</button>, // Custom next arrow
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 3000,       // Autoplay speed in milliseconds
    pauseOnHover: true,        // Pause on hover
    pauseOnFocus: true,        // Pause on focus
    swipe: true,              // Enable swipe
    touchMove: true,          // Enable touch move
    draggable: true,         // Enable dragging
    initialSlide: 0, // Start at the first slide 
  };

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 px-0 py-0 mb-16">
      <Slider {...settings} className="w-full max-w-screen-2xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ProjectCard project={project} onClick={() => onProjectClick(project)} />
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default ProjectsCarousel;