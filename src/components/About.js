// About.js
import Image from './photo.jpg';

export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-gradient-to-r from-indigo-200 to-indigo-800 max-w-5xl mx-auto shadow-lg rounded-lg">
            <div className="flex-1">
                <img src={Image}
                    alt="About"
                    className="w-full h-full object-cover rounded-lg shadow-md"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-blue-800 
                                   text-5xl font-extrabold mb-6">
                        Sobre mim
                    </h2>
                </div>
                <p className="text-center text-lg text-gray-100 leading-relaxed mb-4">
                    Olá, eu sou Olavo Dalberto, um desenvolvedor
                    apaixonado e autodidata (o que é algo bastante
                    subjetivo, já que aprendi com professores no
                    YouTube, então isso realmente conta? Não sei).
                    Tenho cerca de 2 anos de experiência em 
                    transformar café e linhas de código em produtos
                    web funcionais (ou quase sempre funcionais,
                    depende do bug).
                </p>
                <p className="text-center text-lg text-gray-100 leading-relaxed mb-4">
                Atualmente, sou estudante do 7º semestre de
                Engenharia de Computação na Universidade Federal
                de Santa Maria (UFSM). Minha jornada tem sido um 
                misto de noites longas, aprendizado constante e 
                aquela luta eterna para lembrar de colocar ponto 
                e vírgula no final das linhas (quem nunca, né?).
                </p>
                <p className="text-center text-lg text-gray-100 leading-relaxed mb-4">
                Trabalhar em projetos incríveis ao longo desse caminho me permitiu
                evoluir como desenvolvedor, especialmente na área de desenvolvimento
                full-stack. Estou sempre em busca de novos desafios, aprendizados e
                memes relacionados à programação.
                </p>
                <p className="text-center text-lg text-gray-100 leading-relaxed">
                Se você acha que posso ajudar no seu próximo projeto, me chama!
                Prometo trazer muita dedicação, algumas piadas ruins e, com sorte,
                uma solução para o seu problema.
                </p>
            </div>
        </section>
    );
}
