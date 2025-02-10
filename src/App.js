// src/App.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading3D from './components/Loading3D';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Education from './components/Education';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula operações assíncronas (por exemplo, carregamento de dados)
    const timer = setTimeout(() => setIsLoading(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <Loading3D />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <div className="min-h-screen">
            <Hero />
            <Navbar />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
