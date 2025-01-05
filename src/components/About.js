// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-gradient-to-r from-emerald-200 to-emerald-400 max-w-5xl mx-auto shadow-lg rounded-lg">
            <div className="flex-1">
                <img src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full object-cover rounded-lg shadow-md"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-600 
                                   text-5xl font-bold">
                        Sobre mim
                    </h2>
                </div>
                <p className="text-center text-lg text-gray-700 leading-relaxed">
                    Olá, eu sou Olavo Dalberto, um desenvolvedor
                    apaixonado e autodidata (o que é algo bastante
                    subjetivo, já que aprendi com professores no
                    YouTube, então isso realmente conta? Não sei).
                    Tenho uma experiência de cerca de 2 anos e
                    tenho um profundo entendimento de como criar
                    produtos web.
                </p>
                <p className="text-center text-lg text-gray-700 leading-relaxed">
                    Sou estudante do 7<code>&deg;</code> semestre de
                    Engenharia de Computação na Universidade Federal
                    de Santa Maria (UFSM). Durante a minha jornada,
                    tive a oportunidade de trabalhar em projetos
                    incríveis, que me permitiram aprender muito e
                    evoluir como desenvolvedor, principalmente na
                    área de desenvolvimento full-stack.
                </p>
                <p className="text-center text-lg text-gray-700 leading-relaxed">
                    Estou sempre em busca de novos desafios e
                    oportunidades para aprender e crescer. Se você
                    gostou do que viu até agora, entre em contato
                    comigo para que possamos trabalhar juntos.
                </p>
            </div>
        </section>
    );
}
