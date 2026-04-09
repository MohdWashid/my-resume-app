import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaRocket, FaWhatsapp, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

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
        <div className="space-y-8">
                    {/* Contact Form Card - Comic Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-8 border-black bg-gradient-to-br from-purple-600 to-blue-600 p-8 transform rotate-1"
                        style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
                    >
                        {/* Halftone pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)',
                            backgroundSize: '12px 12px'
                        }} />

                        <div className="relative z-10 mb-6">
                            <div className="bg-yellow-400 border-4 border-black inline-block px-6 py-3 mb-4 transform -rotate-2"
                                 style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}>
                                <h3 className="text-3xl font-black text-black flex items-center"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    <FaPaperPlane className="mr-3" />
                                    SEND MESSAGE!
                                </h3>
                            </div>
                            <p className="text-2xl font-bold text-white"
                               style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                LET'S TEAM UP!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-xl font-black text-white flex items-center"
                                       style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                    <FaUser className="mr-2 text-yellow-400" />
                                    YOUR NAME:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border-4 border-black font-bold text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-xl font-black text-white flex items-center"
                                       style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                    <FaEnvelope className="mr-2 text-yellow-400" />
                                    YOUR EMAIL:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border-4 border-black font-bold text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-xl font-black text-white flex items-center"
                                       style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                    <FaPaperPlane className="mr-2 text-yellow-400" />
                                    YOUR MESSAGE:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                    rows="5"
                                    className="w-full px-4 py-3 border-4 border-black font-bold text-black placeholder-gray-500 resize-none focus:outline-none focus:ring-4 focus:ring-yellow-400"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full px-8 py-4 border-4 border-black font-black text-2xl flex items-center justify-center
                                ${status === 'sending' ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-yellow-400 text-black'}`}
                                style={{ 
                                    boxShadow: '6px 6px 0px rgba(0,0,0,0.8)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                <FaRocket className="mr-2" />
                                {status === 'sending' ? 'SENDING...' : 'SEND NOW!'}
                            </motion.button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex items-center justify-center p-4 bg-green-500 border-4 border-black text-black font-black"
                                    style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)', fontFamily: 'Impact, sans-serif' }}
                                >
                                    <FaCheckCircle className="mr-2 text-2xl" />
                                    <span className="text-xl">SUCCESS! MESSAGE SENT!</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex items-center justify-center p-4 bg-red-500 border-4 border-black text-white font-black"
                                    style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)', fontFamily: 'Impact, sans-serif' }}
                                >
                                    <FaExclamationCircle className="mr-2 text-2xl" />
                                    <span className="text-xl">ERROR! TRY AGAIN!</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Social Links - Comic Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="border-8 border-black bg-gradient-to-br from-red-600 to-orange-600 p-8 transform -rotate-1"
                        style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
                    >
                        <div className="relative z-10">
                            <div className="bg-yellow-400 border-4 border-black inline-block px-8 py-4 mb-6 transform rotate-2"
                                 style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}>
                                <h3 className="text-4xl font-black text-black text-center"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    FIND ME ON:
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center justify-center p-6 bg-white border-4 border-black"
                                        style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}
                                    >
                                        <div className="text-5xl mb-2 text-black">
                                            {link.icon}
                                        </div>
                                        <span className="text-sm font-black text-black"
                                              style={{ fontFamily: 'Impact, sans-serif' }}>
                                            {link.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action - Comic Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 border-8 border-black p-8 text-center transform rotate-1"
                        style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}
                    >
                        <h4 className="text-4xl font-black text-black mb-4"
                            style={{ 
                                fontFamily: 'Impact, sans-serif',
                                textShadow: '3px 3px 0px rgba(255,255,255,0.5)'
                            }}>
                            💼 READY FOR ACTION!
                        </h4>
                        <p className="text-xl font-bold text-black">
                            Looking for a HERO to join your team? <br />
                            Let's create something LEGENDARY together!
                        </p>
                    </motion.div>
                </div>
    );
};

export default Contact;