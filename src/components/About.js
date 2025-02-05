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
                            Olá, eu sou Olavo Dalberto, um desenvolvedor apaixonado e autodidata.
                            Tenho cerca de 2 anos de experiência em transformar café e linhas de 
                            código em produtos web funcionais.
                        </p>
                    </div>
                    
                    <div className="flex gap-4 items-start border-b border-gray-700 pb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">2</div>
                        <p className="text-lg text-justify">
                            Atualmente, sou estudante do 7º semestre de Engenharia de Computação
                            na <em>Universidade Federal de Santa Maria (UFSM)</em>. Minha jornada é um misto de aprendizado constante e uma luta
                            eterna com ponto e vírgula.
                        </p>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-lg font-bold">3</div>
                        <p className="text-lg text-justify">
                            Se você acha que posso ajudar no seu próximo projeto, me chama!
                            Prometo dedicação, piadas ruins e uma solução para o seu problema.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
