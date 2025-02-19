export default function About() {
    return (
        <section 
            id="about" 
            className="bg-black text-white min-h-screen flex flex-col justify-center px-6 py-16"
        >
            <div className="max-w-3xl mx-auto">
                {/* Lista de conquistas */}
                <div className="space-y-8">
                    <div className="flex gap-4 items-start border-b border-gray-700 pb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">1</div>
                        <p className="text-lg text-justify">
                        Sou Olavo Defendi Dalberto, estudante de Engenharia da Computação na Universidade Federal de Santa Maria (UFSM),
                        com previsão de conclusão em 2026. Tenho experiência em análise de dados e desenvolvimento, 
                        utilizando tecnologias como React, Node.js e PostgreSQL.
                        </p>
                    </div>
                    
                    <div className="flex gap-4 items-start border-b border-gray-700 pb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">2</div>
                        <p className="text-lg text-justify">
                        Tenho forte interesse pela área de dados e machine learning, com certificações da DeepLearning.AI e Stanford Online.
                        Além disso, possuo conhecimentos sólidos em desenvolvimento web e mobile, administração de sistemas Linux/Windows e
                        práticas DevOps com Docker e CI/CD.
                        </p>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">3</div>
                        <p className="text-lg text-justify">
                        Busco constantemente aprimorar minhas habilidades e contribuir para soluções tecnológicas inovadoras.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
