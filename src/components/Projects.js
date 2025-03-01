import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projects = [
  {	
    title: "Plataforma de Comércio Eletrônico",
    technologies: ["Express.JS", "Node.JS", "JWT Auth", "Sequelize", "Redis", "React.JS", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/olavodd42/ecommerce-site"
  },
  {
    title: "App To-Do List (CRUD App, JWT Auth)",
    technologies: ["Express.JS", "Node.JS", "JWT Auth", "Sequelize", "React.JS", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/olavodd42/sistema-gerenciamento-tarefas"
  },
  {
    title: "Sistema de Gerenciamento de Academia",
    technologies: ["Java", "JavaFX", "Git/Github"],
    link: "https://github.com/olavodd42/GymProject"
  },
  {
    title: "Sistema de Gerenciamento de Biblioteca*",
    technologies: ["HTML/CSS", "PHP", "SQL", "Git/Github"],
    link: "https://github.com/FredericoSSicorra/grupoX-CDI-20242-tg2"
  },
  {
    title: "Portfolio Web",
    technologies: ["React.JS", "HTML", "CSS (Tailwind CSS)", "JavaScript"],
    link: "https://github.com/olavodd42/meu-portfolio"
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f1c1c] to-[#0a0f10] p-6 rounded-2xl shadow-lg overflow-hidden border border-gray-700 max-w-md mx-auto">
      {/* Neon Light Effect */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-500 opacity-30 blur-3xl"></div>
      
      <div className="relative">
        {/* Project Index */}
        <div className="text-green-400 text-sm font-semibold mb-2 flex items-center">
          <span className="mr-2">—</span> {String(index).padStart(2, '0')}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        
        {/* Technologies */}
        <p className="text-gray-400 text-sm mb-4">
          {project.technologies.join(" · ")}
        </p>
        
        {/* Repository Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition font-medium"
        >
          Ver repositório →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="projects" className="relative flex flex-col items-center py-16 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-green-500 opacity-20 blur-3xl"></div>
      <h2 className="text-5xl font-bold mb-12 relative text-green-300">Meus Projetos</h2>
      <div className="w-full max-w-3xl relative">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard project={project} index={index+1} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
