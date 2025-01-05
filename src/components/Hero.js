import React from 'react';
import Image from './programmer.png'; // Certifique-se de ajustar o caminho da imagem

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4">
            {/* Texto central */}
            <div className="text-center flex flex-col items-center justify-center space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-emerald-500">
                    Olavo Defendi Dalberto
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-gray-700">
                    Programmer. Entusiasta de café e bugs inexplicáveis.
                </p>
            </div>
            
            {/* Imagem */}
            <div className="w-full max-w-md mt-8">
                <img
                    src={Image}
                    alt="Programmer"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
            
            {/* Botões de ação */}
            <div className="absolute bottom-4 flex justify-between w-full px-4">
                <a
                    href="https://wa.me/+5555999684802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-emerald-600 transition">
                    Contate-me
                </a>
                <button
                    className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-emerald-600 transition">
                    Saiba mais
                </button>
            </div>
        </section>
    );
}
