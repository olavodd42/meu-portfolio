// Hero.js
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Olá, seja bem vindo ao
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              Portfólio de Olavo Dalberto...
            </h2>
          </div>
          <p className="text-center">
                Aqui você encontrará um pouco sobre mim e meus projetos...
          </p>
        </div>
        <div className="flex-1">
          <img src=
  "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }
