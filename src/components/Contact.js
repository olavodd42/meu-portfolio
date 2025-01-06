import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Certifique-se de instalar esta dependência
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Substitua pelos seus valores do EmailJS
        const serviceId = 'service_yr8crtn';
        const templateId = 'template_vywvuak';
        const userId = 'AFKTUaXPgJ6P9p_Nv'; // Opcional, se configurado na chave pública

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((result) => {
                console.log('Message sent:', result.text);
                alert('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' }); // Reseta o formulário
            })
            .catch((error) => {
                console.error('Error:', error.text);
                alert('Erro ao enviar a mensagem. Tente novamente.');
            });
    };

    return (
        <section
            id="contact"
            className="my-40 align-center max-w-5xl mx-auto p-3"
        >
            <h2 className="text-5xl font-bold text-indigo-500 text-center">
                Contato
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 mt-10"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 text-gray-800"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 text-gray-800"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 text-gray-800"
                    required
                />
                <button
                    type="submit"
                    className="p-3 bg-indigo-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Enviar
                </button>
            </form>
            <div className="flex justify-center gap-5 mt-10">
                <a href="https://www.linkedin.com/in/olavo-defendi-dalberto-050144235" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#E1306C" /> Olavo Defendi Dalberto
                </a>
                <a href="https://www.instagram.com/dalbertolavo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" /> @dalbertolavo
                </a>
                <a href="https://www.github.com/olavodd42" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#E1306C" /> @olavodd42
                </a>
                <a href="https://www.facebook.com/OlavoDDalberto" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#E1306C" /> Olavo Dalberto
                </a>
            </div>
        </section>
    );
}