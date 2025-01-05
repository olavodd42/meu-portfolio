import React from 'react';

const educationList = [
    {
        institution: "Universidade Federal de Santa Maria (UFSM) - Santa Maria/RS",
        degree: "Bacharelado em Engenharia da Computação",
        period: "2021 - ... (em andamento, 7º semestre)",
        description: "Essa graduação é praticamente um\
        buffet: tem de tudo! Programação, eletrônica,\
        redes, sistemas embarcados... e umas matérias\
        que fazem você questionar suas escolhas de vida."
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
        institution: "Colégio Estadual de Ensino Médio Carneiro de Campos - Serafina Corrêa/RS",
        degree: "Ensino Fundamental",
        period: "2009 - 2015",
        description: ""
    }
];

export default function Education() {
    return (
        <section id="education" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <div className="education-section">
                <h2 className="text-4xl font-bold text-center mb-8">Formações Acadêmicas</h2>
                <div className="education-list">
                    {educationList.map((education, index) => (
                        <div key={index} className="education-item mb-6 p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-emerald-600">{education.institution}</h3>
                            <p className="text-xl text-gray-800">{education.degree}</p>
                            <p className="text-md text-gray-600">{education.period}</p>
                            <p className="text-md text-gray-700">{education.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
