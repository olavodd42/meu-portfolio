import React from 'react';
import Image from './programmer.png';

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h1 className="text-center text-emerald-500 text-5xl font-bold">
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
        </section>
    );
}
