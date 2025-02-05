import { motion } from "framer-motion";

const skills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "TypeScript", icon: "🔷" },
    { name: "JWT Auth", icon: "🔑" },
    { name: "Redis", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "SQL", icon: "💾" },
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
    { name: "Java", icon: "☕" }
  ];

export default function Skills() {
  const orbitRadius = 150;
  const animationDuration = 10; // Tempo para completar a órbita (em segundos)

  return (
    <section id="skills" className="relative flex justify-center items-center min-h-[500px] bg-black">
      {/* Linhas Orbitais */}
      <div className="absolute w-[400px] h-[400px] border border-gray-600 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] border border-gray-700 rounded-full"></div>
      <div className="absolute w-[200px] h-[200px] border border-gray-800 rounded-full"></div>

      {/* Núcleo central */}
      <div className="absolute w-20 h-20 flex items-center justify-center 
                      bg-green-500/20 border-2 border-green-400/50 rounded-full 
                      shadow-[0_0_40px_#00ff00] animate-pulse text-white text-lg font-bold">
        Competências
      </div>

      {/* Habilidades em órbita */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2; // Distribui as skills uniformemente
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;

        return (
          <motion.div
            key={skill.name}
            className="absolute flex items-center gap-2 px-4 py-2 text-white font-semibold shadow-lg rounded-full 
                       bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 backdrop-blur-md"
            initial={{ x, y }}
            animate={{
              rotate: [0, 360], // Rotação contínua
              x: [x, -x, x], // Movimento circular
              y: [y, -y, y]
            }}
            transition={{
              repeat: Infinity,
              duration: animationDuration,
              ease: "linear"
            }}
          >
            <span>{skill.icon}</span>
            {skill.name}
          </motion.div>
        );
      })}
    </section>
  );
}
