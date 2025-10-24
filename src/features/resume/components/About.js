import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../AnimatedSection';
import TypewriterEffect from './TypewriterEffect';
import { FaFileDownload, FaUserAstronaut, FaPhone, FaEnvelope, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';

const About = ({ theme }) => {
    const skills = ["Flutter", "Android", "iOS", "WEB", "C++", "SQL", "React", "JavaScript"];

    const educationData = [
        {
            degree: "MCA",
            duration: "2022-2024",
            institution: "Graphic Era Hill University",
            location: "Dehradun",
            color: "blue"
        },
        {
            degree: "BCA",
            duration: "2019-2022",
            institution: "Teerthanker Mahaveer University",
            location: "Moradabad",
            color: "purple"
        }
    ];

    const philosophies = [
        {
            icon: <FaUserAstronaut className="text-4xl" />,
            text: "Efficiency and performance are at the core of my development philosophy. As a Flutter developer, I focus on creating fast, responsive, and reliable mobile applications that provide users with a smooth and enjoyable experience.",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            icon: <FaUserAstronaut className="text-4xl" />,
            text: "Navigating the ever-evolving digital cosmos, I blend creativity and code to craft experiences that inspire and innovate.",
            gradient: "from-purple-600 to-pink-500"
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background Blobs */}
            <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-around min-h-screen p-8 bg-transparent gap-8">
                {/* Left Profile Section */}
                <div className="w-full lg:w-1/3">
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                        theme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                    } shadow-xl p-8`}>
                        {/* Decorative gradient top border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        
                        {/* Profile Image */}
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-gray-800">
                                <img
                                    src={process.env.PUBLIC_URL + "/images/Passport.jpg"}
                                    alt="Mohd Washid"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <h2 className="text-3xl font-bold text-white mb-3 text-center">Mohd Washid</h2>
                        <div className="mb-6">
                            <TypewriterEffect words={skills} />
                        </div>

                        {/* Education Section */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                                <FaGraduationCap className="mr-2" />
                                Education
                            </h3>
                            <div className="space-y-4">
                                {educationData.map((edu, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl transition-all duration-300 hover:scale-105
                                        bg-gray-700/50 border border-gray-600/50 hover:border-${edu.color}-500/50`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${edu.color}-900/50 text-${edu.color}-300 border border-${edu.color}-700/50`}>
                                                {edu.duration}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <FaMapMarkerAlt className="mr-1" />
                                            {edu.location}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                                <FaEnvelope className="mr-2" />
                                Contact
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="tel:+918958618665"
                                    className="flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-105
                                    bg-gray-700/50 border border-gray-600/50 hover:border-green-500/50 text-gray-300 hover:text-white"
                                >
                                    <FaPhone className="mr-3 text-green-400" />
                                    <span>+91 8958618665</span>
                                </a>
                                <a
                                    href="mailto:mwashid914@gmail.com"
                                    className="flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-105
                                    bg-gray-700/50 border border-gray-600/50 hover:border-blue-500/50 text-gray-300 hover:text-white"
                                >
                                    <FaEnvelope className="mr-3 text-blue-400" />
                                    <span>mwashid914@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    {/* Introduction Card */}
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                        theme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                    } shadow-xl p-8`}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
                        
                        <h1 className="text-5xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Hello,
                            </span>
                        </h1>
                        <div className="mb-6">
                            <TypewriterEffect words={skills} />
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Driven by a passion for crafting dynamic and intuitive applications, I bring solid experience in Flutter development. My expertise lies in creating solutions that seamlessly blend creativity with performance, resulting in interactive and engaging digital experiences. I thrive on combining sleek design with robust functionality to deliver applications that not only look great but also perform flawlessly.
                        </p>
                    </div>

                    {/* Resume Download Card */}
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                        theme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                    } shadow-xl p-8`}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"></div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">Get My Resume</h3>
                        <motion.a
                            href="/pdf/MohdWashid-resume.pdf"
                            download
                            className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg
                            transition-all duration-300 transform hover:scale-105
                            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                            text-white shadow-lg hover:shadow-blue-500/50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaFileDownload className="mr-2" /> Download Resume
                        </motion.a>
                    </div>

                    {/* Philosophy Section */}
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                        theme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                            : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900'
                    } shadow-xl p-8`}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                        
                        <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
                        <div className="space-y-6">
                            {philosophies.map((philosophy, index) => (
                                <div
                                    key={index}
                                    className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105
                                    bg-gray-700/30 border border-gray-600/50 hover:border-transparent
                                    hover:bg-gradient-to-r hover:${philosophy.gradient} hover:bg-opacity-10`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${philosophy.gradient} 
                                        group-hover:scale-110 transition-transform duration-300`}>
                                            {philosophy.icon}
                                        </div>
                                        <div className="flex-1">
                                            <FaQuoteLeft className="text-gray-500 mb-2" />
                                            <p className="text-gray-300 italic leading-relaxed">
                                                {philosophy.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;