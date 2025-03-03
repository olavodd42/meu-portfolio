import React from 'react';
import Image from './photo.png'; // Ajuste o caminho conforme necessário
import Icon from './icon.png';

export default function Hero() {
    return (
        <section 
            id="home" 
            className="relative w-screen h-screen flex items-center justify-end bg-gradient-to-r from-gray-900 to-gray-700 px-10"
        >
            {/* Imagem de fundo cobrindo toda a tela */}
            <div className="absolute inset-0">
                <img
                    src={Image}
                    alt="Programmer"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-20"
                />
            </div>

            {/* Conteúdo de texto alinhado à direita */}
            <div className="relative z-10 w-1/2 text-right text-white opacity-70">

                {/* Ícone Rotativo */}
                <div className="absolute right-10 top-[100%] w-32 h-32">
                    <img
                        src={Icon}
                        alt="Rotating Icon"
                        className="animate-spin-slow w-full h-full"
                    />
                </div>
                
                <p className="text-sm text-teal-400 uppercase tracking-wide">Full-stack Dev</p>
                <h1 className="text-6xl font-bold leading-tight">
                    Olavo Defendi Dalberto <br /> 
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Cientista de dados
                </p>

                {/* Botão do WhatsApp */}
                <div className="mt-6 flex justify-end">
                    <a
                        href="https://wa.me/+5555999684802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transform active:translate-y-1 active:shadow-none transition-all duration-200 hover:bg-green-600"
                        style={{
                            boxShadow: "0 4px 0 rgba(3, 255, 62, 0.3)", // Cria a sombra 3D
                        }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                        <span>Fale comigo no WhatsApp</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
