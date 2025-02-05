import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setActive(id);
    };

    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-90 px-6 py-3 rounded-full shadow-lg w-[95%] max-w-md md:px-10 lg:w-[80%] xl:max-w-lg">
            <ul className="flex flex-wrap md:flex-nowrap justify-around md:justify-center space-x-4 md:space-x-8 text-white text-sm font-semibold tracking-wide">
                {["home", "about", "education", "projects", "contact"].map((item) => (
                    <li key={item} className="relative">
                    <a
                        href={`#${item}`}
                        onClick={() => handleScroll(item)}
                        className={`${
                        active === item ? "text-teal-400" : "text-gray-400"
                        } hover:text-teal-300 transition relative`}
                    >
                        {item.toUpperCase()}
                    </a>
                    </li>
                ))}
                </ul>

        </nav>
    );
}
