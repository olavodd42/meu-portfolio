import React from 'react';
import '../css/Projects.css';
import Progress_bar from "./Progress_bar";

const projects = [
    {
        title: "Sistema de Gerenciamento de Academia",
        bgcolor: "red",
        progress: "100",
        technologies: ["HTML/CSS", "PHP", "SQL", "Git/Github"],
        link: "https://github.com/olavodd42/GymProject"
    },
    {
        title: "Sistema de Gerenciamento de Biblioteca",
        bgcolor: "red",
        progress: "100",
        technologies: ["HTML/CSS", "PHP", "SQL", "Git/Github"],
        link: "https://github.com/FredericoSSicorra/grupoX-CDI-20242-tg2"
    },
    {
        title: "Calculadora Online",
        bgcolor: "#99ff66",
        progress: "95",
        technologies: ["JavaScript", "React", "CSS"],
        link: "https://github.com/olavodd42/Calculadora-js"
    },
    {
        title: "Portfolio Web",
        bgcolor: "#ff00ff",
        progress: "10",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/olavodd42/meu-portfolio"
    }
];

const Projects = () => {
    const styleBar = {
        height: 30,
        width: '100%',  // Ajuste a largura para 100% para garantir que se ajuste ao contêiner pai
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '10px 0',
        boxSizing: 'border-box' // Garante que o padding e a borda sejam incluídos na largura
    };

    return (
        <div className="flex flex-col justify-center items-center mt-16 px-4">
            <h2 className="text-5xl text-emerald-500 font-bold text-center mb-8">
                Meus Projetos
            </h2>
            <div className="progress-bars w-full max-w-3xl">
                {projects.map((project, index) => (
                    <div className="flex flex-col items-center mb-8 bg-gray-800 p-6 rounded-lg shadow-lg text-white" key={index}>
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
                            className="text-emerald-400 underline mt-4 hover:text-emerald-300 transition duration-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Ver repositório
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
