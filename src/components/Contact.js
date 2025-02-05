import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_yr8crtn";
    const templateId = "template_vywvuak";
    const userId = "AFKTUaXPgJ6P9p_Nv";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
        Contato
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-2xl">
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
        <button
          type="submit"
          className="p-4 bg-green-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/50 shadow-lg"
          style={{
            boxShadow: "0 0 20px 5px #32CD32, 0 0 30px 10px rgba(50, 205, 50, 0.5)"
          }}
        >
          Enviar
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-4xl border-t border-gray-700 pt-8">
        {[
          { icon: faInstagram, name: "INSTAGRAM", link: "https://www.instagram.com/dalbertolavo" },
          { icon: faLinkedin, name: "LINKEDIN", link: "https://www.linkedin.com/in/olavo-defendi-dalberto-050144235" },
          { icon: faGithub, name: "GITHUB", link: "https://www.github.com/olavodd42" },
          { icon: faFacebook, name: "FACEBOOK", link: "https://www.facebook.com/OlavoDDalberto" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition shadow-lg"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" /> {social.name}
          </a>
        ))}
      </div>

      <div className="mt-8 text-gray-500 text-sm text-center">
        <p>olavodalberto921@gmail.com</p>
        <p>Olavo Dalberto © All Rights Reserved</p>
      </div>
    </section>
  );
}
