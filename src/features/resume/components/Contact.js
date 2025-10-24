import React, { useState } from 'react';
import AnimatedSection from '../../../AnimatedSection';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaRocket, FaWhatsapp, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { sendEmail } from '../../../services/contactService';

const Contact = ({ theme }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'ca737d96-0a59-438c-ba6b-ba8254d4add1',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    const socialLinks = [
        {
            name: 'Email',
            url: 'mailto:mwashid914@gmail.com',
            icon: <FaEnvelope />,
            color: 'red',
            gradient: 'from-red-600 to-pink-500'
        },
        {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=918958618665',
            icon: <FaWhatsapp />,
            color: 'green',
            gradient: 'from-green-600 to-emerald-500'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mohd-washid-b1091b356/',
            icon: <FaLinkedin />,
            color: 'blue',
            gradient: 'from-blue-600 to-cyan-500'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/DEVILGHAZI',
            icon: <FaGithub />,
            color: 'gray',
            gradient: 'from-gray-700 to-gray-600'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/washidx08/',
            icon: <FaInstagram />,
            color: 'pink',
            gradient: 'from-pink-600 to-purple-500'
        }
    ];

    return (
        <AnimatedSection
            title="Get In Touch"
            content={
                <div className="space-y-8">
                    {/* Contact Form Card */}
                    <div
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${theme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                                : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            } shadow-xl p-8`}
                    >
                        {/* Decorative gradient top border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                                <FaPaperPlane className="text-blue-400 mr-3" />
                                Send Me a Message
                            </h3>
                            <p className="text-gray-400">Feel free to reach out for any inquiries or opportunities</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 flex items-center">
                                    <FaUser className="mr-2 text-blue-400" />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                            : 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                        }`}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 flex items-center">
                                    <FaEnvelope className="mr-2 text-blue-400" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                            : 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                        }`}
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 flex items-center">
                                    <FaPaperPlane className="mr-2 text-blue-400" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                            : 'bg-gray-700 border-gray-600 hover:border-gray-500 text-white placeholder-gray-400'
                                        }`}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full px-8 py-4 rounded-xl font-bold text-lg
                                transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${theme === 'dark'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/50'
                                        : 'bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-400/50'
                                    } ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <FaRocket className="mr-2" />
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="flex items-center justify-center p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-400">
                                    <FaCheckCircle className="mr-2 text-xl" />
                                    <span className="font-semibold">Message sent successfully!</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center justify-center p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-400">
                                    <FaExclamationCircle className="mr-2 text-xl" />
                                    <span className="font-semibold">Error sending message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Social Links Card */}
                    <div
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${theme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                                : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            } shadow-xl p-8`}
                    >
                        {/* Decorative gradient top border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white text-center mb-2">
                                Connect With Me
                            </h3>
                            <p className="text-gray-400 text-center">Find me on these platforms</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/item flex flex-col items-center justify-center p-6 rounded-xl
                                    transition-all duration-300 transform hover:scale-110 hover:-translate-y-2
                                    bg-gray-700/50 hover:bg-gradient-to-r hover:${link.gradient}
                                    border border-gray-600/50 hover:border-transparent shadow-lg hover:shadow-xl`}
                                >
                                    <div className="text-4xl mb-2 text-gray-300 group-hover/item:text-white transition-colors duration-300">
                                        {link.icon}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors duration-300">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`p-6 rounded-2xl text-center ${theme === 'dark'
                            ? 'bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-2 border-blue-700/30'
                            : 'bg-gradient-to-r from-blue-800/40 via-purple-800/40 to-pink-800/40 border-2 border-blue-600/30'
                        } shadow-xl`}>
                        <h4 className="text-lg font-bold text-white mb-2">
                            💼 Open to Opportunities
                        </h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
                            I'm always interested in hearing about new projects and opportunities.
                            Let's build something amazing together!
                        </p>
                    </div>
                </div>
            }
        />
    );
};

export default Contact;