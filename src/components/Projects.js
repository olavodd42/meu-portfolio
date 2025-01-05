//import "./App.css"; // Descomente se necessário
import Progress_bar from "./Progress_bar";

export default function Projects() {
    const styleBar = {
        height: 30,
        width: '100px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-4">
                <h2 className="text-5xl text-emerald-500 font-bold text-center">
                    Meus Projetos
                </h2>
                <div className="progress-bars w-full max-w-lg">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex items-center w-full">
                            <span className="w-1/3 text-right mr-4">Sistema de Gerenciamento de uma Academia</span>
                            <div className="w-2/3">
                                <Progress_bar
                                    bgcolor="orange"
                                    progress="100"
                                    height={30}
                                    style={styleBar}
                                />
                            </div>
                        </div>
                        <ul className="list-disc list-inside mt-2">
                            <li>Java</li>
                            <li>Programação Orientada a Objetos</li>
                            <li>JavaFX</li>
                        </ul>
                        <a href="https://github.com/usuario/repositorio-academia" className="text-blue-500 underline mt-2">
                            Ver repositório
                        </a>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex items-center w-full">
                            <span className="w-1/3 text-right mr-4">Sistema de Gerenciamento de uma Biblioteca</span>
                            <div className="w-2/3">
                                <Progress_bar
                                    bgcolor="red"
                                    progress="100"
                                    height={30}
                                    style={styleBar}
                                />
                            </div>
                        </div>
                        <ul className="list-disc list-inside mt-2">
                            <li>HTML/CSS</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>Git/Github</li>
                        </ul>
                        <a href="https://github.com/usuario/repositorio-biblioteca" className="text-blue-500 underline mt-2">
                            Ver repositório
                        </a>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex items-center w-full">
                            <span className="w-1/3 text-right mr-4">Calculadora Online</span>
                            <div className="w-2/3">
                                <Progress_bar
                                    bgcolor="#99ff66"
                                    progress="95"
                                    height={30}
                                    style={styleBar}
                                />
                            </div>
                        </div>
                        <ul className="list-disc list-inside mt-2">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>CSS</li>
                        </ul>
                        <a href="https://github.com/usuario/repositorio-calculadora" className="text-blue-500 underline mt-2">
                            Ver repositório
                        </a>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex items-center w-full">
                            <span className="w-1/3 text-right mr-4">Portfolio Web</span>
                            <div className="w-2/3">
                                <Progress_bar
                                    bgcolor="#ff00ff"
                                    progress="10"
                                    height={30}
                                    style={styleBar}
                                />
                            </div>
                        </div>
                        <ul className="list-disc list-inside mt-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <a href="https://github.com/usuario/repositorio-portfolio" className="text-blue-500 underline mt-2">
                            Ver repositório
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
