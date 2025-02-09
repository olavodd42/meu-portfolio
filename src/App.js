// src/App.js
import React, { useState, useEffect } from 'react';
import Loading3D from './components/Loading3D';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Education from './components/Education';
import './index.css';

console.log('Tipo de Loading3D:', typeof Loading3D);


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula operações assíncronas (por exemplo, carregamento de dados)
    const timer = setTimeout(() => setIsLoading(false), 20000); // Aumente o tempo para 3000ms
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading3D />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
