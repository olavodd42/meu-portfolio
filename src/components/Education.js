import React from 'react';

export default function Education() {
    const educationList = [
        {
            institution: "Universidade Federal de Santa Maria (UFSM) - Santa Maria/RS",
            degree: "Bacharelado em Engenharia da Computação",
            period: "2021 - ... (em andamento, 7º semestre)",
            description: "Faculdade que envolve a integração entre software e hardware, envolvendo disciplinas de programação, eletrônica, redes de computadores, sistemas embarcados, entre outras."
        },
        {
            institution: "Colégio Scalabrini - Guaporé/RS",
            degree: "Ensino Médio",
            period: "2018 - 2020",
            description: ""
        },
        {
            institution: "Colégio Scalabrini - Guaporé/RS",
            degree: "Ensino Fundamental",
            period: "2016 - 2017",
            description: ""
        },
        {
            institution: "Colégio Estadual de Ensino MédioCarneiro de Campos - Serafina Corrêa/RS",
            degree: "Ensino Fundamental",
            period: "2009 - 2015",
            description: ""
        }
    ];
    //const skills = ["Python", "HTML", "CSS", "Javascript", "React", "SQL", "Git e Github", "Docker", "Linux", "Java", "C++", "C"];
    return (
        <section id="Education"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <div className="education-section">
            <h2 className="text-4xl font-bold text-center mb-8">Formações Acadêmicas</h2>
            <div className="education-list">
                {educationList.map((education, index) => (
                    <div key={index} className="education-item mb-6">
                        <h3 className="text-2xl font-semibold">{education.institution}</h3>
                        <p className="text-xl">{education.degree}</p>
                        <p className="text-md text-gray-600">{education.period}</p>
                        <p className="text-md">{education.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}
