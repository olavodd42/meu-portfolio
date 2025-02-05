import React from 'react';

const educationList = [
    {
        institution: "Universidade Federal de Santa Maria (UFSM) - Santa Maria/RS",
        degree: "Bacharelado em Engenharia da Computação",
        period: "2021 - ... (em andamento, 7º semestre)",
        description: "Essa graduação é praticamente um buffet: tem de tudo! Programação, eletrônica, redes, sistemas embarcados... e umas matérias que fazem você questionar suas escolhas de vida."
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
        <section 
            id="education" 
            className="bg-black text-white min-h-screen flex flex-col justify-center px-6 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">
                    Formações Acadêmicas
                </h2>
                <div className="space-y-10">
                    {educationList.map((education, index) => (
                        <div key={index} className="border-b border-gray-700 pb-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 flex items-center justify-center bg-indigo-500 text-black font-bold rounded-full text-lg">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-indigo-300">
                                        {education.institution}
                                    </h3>
                                    <p className="text-lg text-gray-200">
                                        {education.degree}
                                    </p>
                                    <p className="text-md text-gray-400">
                                        {education.period}
                                    </p>
                                    {education.description && (
                                        <p className="text-md text-gray-500 mt-2">
                                            {education.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
