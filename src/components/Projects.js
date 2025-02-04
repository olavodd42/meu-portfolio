import React from 'react';
import Slider from 'react-slick';
import '../css/Projects.css';
import Progress_bar from "./Progress_bar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        title: "Plataforma de Comércio Eletrônico",
        bgcolor: "#ff00ff",
        progress: "80",
        technologies: ["Express.JS", "Node.JS", "JWT Auth", "Sequelize", "Redis", "React.JS", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        link: "https://github.com/olavodd42/ecommerce-site"
    },
    {
        title: "App To-Do List (CRUD App, JWT Auth)",
        bgcolor: "#ff00ff",
        progress: "100",
        technologies: ["Express.JS", "Node.JS", "JWT Auth", "Sequelize", "React.JS", "JavaScript", "Tailwind CSS", "PostgreSQL"],
        link: "https://github.com/olavodd42/sistema-gerenciamento-tarefas"
    },
    {
        title: "Sistema de Gerenciamento de Academia",
        bgcolor: "red",
        progress: "100",
        technologies: ["Java", "JavaFX", "Git/Github"],
        link: "https://github.com/olavodd42/GymProject"
    },
    {
        title: "Sistema de Gerenciamento de Biblioteca*",
        bgcolor: "red",
        progress: "100",
        technologies: ["HTML/CSS", "PHP", "SQL", "Git/Github"],
        link: "https://github.com/FredericoSSicorra/grupoX-CDI-20242-tg2"
    },
    {
        title: "Calculadora Online",
        bgcolor: "#ff00ff",
        progress: "100",
        technologies: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/olavodd42/Calculadora-js"
    },
    {
        title: "Portfolio Web",
        bgcolor: "#ff00ff",
        progress: "100",
        technologies: ["React.JS", "HTML", "CSS (Tailwind CSS)", "JavaScript"],
        link: "https://github.com/olavodd42/meu-portfolio"
    },
    {
        title: "Seletores utilizando Cheerio",
        bgcolor: "#ff00ff",
        progress: "100",
        technologies: ["Express.JS", "Node.JS", "Cheerio", "JavaScript"],
        link: "https://github.com/olavodd42/meu-portfolio"
    }
    

];

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 p-2 rounded-full cursor-pointer hover:bg-indigo-600 transition"
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 p-2 rounded-full cursor-pointer hover:bg-indigo-600 transition"
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
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
        cssEase: "ease-in-out",  // Transição suave personalizada
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <div className="flex flex-col justify-center items-center mt-16 px-4" id="projects">
            <h2 className="text-5xl text-indigo-500 font-bold text-center mb-8">
                Meus Projetos
            </h2>
            <div className="w-full max-w-3xl relative">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div className="flex flex-col items-center mb-8 bg-gray-700 p-6 rounded-lg shadow-lg text-white" key={index}>
                            <div className="flex items-center w-full mb-2">
                                <span className="w-1/3 text-right mr-4 font-semibold text-lg">{project.title}</span>
                                <div className="w-2/3">
                                    <Progress_bar
                                        bgcolor={project.bgcolor}
                                        progress={project.progress}
                                        height={30}
                                    />
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-left w-full text-gray-300">
                                {project.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                            <a 
                                href={project.link} 
                                className="text-indigo-400 underline mt-4 hover:text-indigo-300 transition duration-300"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Ver repositório
                            </a>
                            {project.title === "Sistema de Gerenciamento de Biblioteca*" && <span className='text-xs'>*Realizado em grupo</span>}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
