import React from 'react';
import Image from './programmer.png'; // Certifique-se de ajustar o caminho da imagem

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-emerald-500">
                        Olavo Defendi Dalberto
                    </h1>
                </div>
                <p className="text-center text-lg font-bold">
                    Programmer. Entusiasta de café e bugs inexplicáveis.
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={Image} alt="Programmer" className="w-3/4 h-auto bg-cover rounded-lg shadow-lg"/>
            </div>
            <a href='wa.me/+5555999684802' target='_blank' rel='noopener noreferrer' className='absolute bottom-0 right-0 mb-4 mr-4 bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg'>
            <button className="absolute bottom-0 left-0 mb-4 ml-4 bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                Contate-me
            </button>
            </a>
        </section>
    );
}
