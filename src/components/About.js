// About.js
import Image from './photo.jpg';

export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-80 h-80 flex flex-col lg:flex-row py-20 
                       align-center bg-gradient-to-r from-indigo-200 to-indigo-800 
                       mx-auto shadow-lg rounded-full overflow-hidden">
            <div className="flex-1">
                <img src={Image}
                    alt="About"
                    className="w-full h-full object-cover rounded-full shadow-md"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-blue-800 
                                   text-2xl font-extrabold mb-2">
                        Sobre mim
                    </h2>
                </div>
                <p className="text-center text-sm text-gray-100 leading-relaxed mb-2">
                    Olá, eu sou Olavo Dalberto, um desenvolvedor
                    apaixonado e autodidata. Tenho cerca de 2 anos 
                    de experiência em transformar café e linhas de código 
                    em produtos web funcionais.
                </p>
                <p className="text-center text-sm text-gray-100 leading-relaxed mb-2">
                Atualmente, sou estudante do 7º semestre de
                Engenharia de Computação na UFSM. Minha jornada é um
                misto de aprendizado constante e uma luta eterna com
                ponto e vírgula.
                </p>
                <p className="text-center text-sm text-gray-100 leading-relaxed">
                Se você acha que posso ajudar no seu próximo projeto, me chama!
                Prometo dedicação, piadas ruins e uma solução para o seu problema.
                </p>
            </div>
        </section>
    );
}
