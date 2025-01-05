import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Education from "./components/Education";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}