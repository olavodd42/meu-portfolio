// About.js
import Image from './photo.jpg';

export default function About() {
    return (
        <section
            id="about"
            className="w-[30rem] h-[40rem] flex flex-col justify-center items-center 
                       bg-gradient-to-r from-indigo-200 to-indigo-800 
                       mx-auto shadow-lg rounded-full p-10 overflow-clip text-center">
            <div className="w-36 h-36 mb-6">
                <img 
                    src={Image} 
                    alt="About" 
                    className="w-full h-full object-cover rounded-full shadow-md"
                />
            </div>
            <div className="flex flex-col justify-center gap-4 px-6">
                <h2 className="text-blue-800 text-2xl font-extrabold">
                    Sobre mim
                </h2>
                <p className="text-sm text-gray-100 leading-relaxed">
                    Olá, eu sou Olavo Dalberto, um desenvolvedor apaixonado e autodidata.
                    Tenho cerca de 2 anos de experiência em transformar café e linhas de 
                    código em produtos web funcionais.
                </p>
                <p className="text-sm text-gray-100 leading-relaxed">
                    Atualmente, sou estudante do 7º semestre de Engenharia de Computação
                    na UFSM. Minha jornada é um misto de aprendizado constante e uma luta
                    eterna com ponto e vírgula.
                </p>
                <p className="text-sm text-gray-100 leading-relaxed">
                    Se você acha que posso ajudar no seu próximo projeto, me chama!
                    Prometo dedicação, piadas ruins e uma solução para o seu problema.
                </p>
            </div>
        </section>
    );
}
