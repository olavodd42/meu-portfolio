import style from "../css/styles.module.css";

export default function Navbar() {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="bg-green-500 shadow-lg">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto p-4">
                <h3 className="text-3xl font-bold text-white p-5">
                    Olavo Defendi Dalberto
                </h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-emerald-600"
                           href="#about"
                           onClick={() => handleScroll('about')}>
                        Sobre mim
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-emerald-600"
                           href="#education"
                           onClick={() => handleScroll('education')}>
                        Educação
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-emerald-600"
                           href="#projects"
                           onClick={() => handleScroll('projects')}>
                        Projetos
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-emerald-600"
                           href="#contact"
                           onClick={() => handleScroll('contact')}>
                        Contato
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}