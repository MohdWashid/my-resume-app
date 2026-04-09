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
        <motion.div 
            className="relative min-h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Background Blobs - Enhanced */}
            <motion.div
                className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.5, 1.2, 1.8, 1],
                    rotate: [0, 90, 180, 270, 360],
                    x: [0, 50, -30, 40, 0],
                    y: [0, -40, 30, -20, 0],
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-72 md:w-[30rem] h-72 md:h-[30rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.8, 1.3, 1.6, 1],
                    rotate: [360, 270, 180, 90, 0],
                    x: [0, -60, 40, -30, 0],
                    y: [0, 50, -40, 30, 0],
                }}
                transition={{
                    duration: 30,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-1/3 w-80 md:w-[35rem] h-80 md:h-[35rem] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
                animate={{
                    scale: [1, 1.6, 1.4, 1.9, 1],
                    rotate: [0, 120, 240, 360, 0],
                    x: [0, -40, 50, -35, 0],
                    y: [0, -30, 40, -25, 0],
                }}
                transition={{
                    duration: 35,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center lg:justify-around min-h-screen p-4 sm:p-6 md:p-8 bg-transparent gap-6 md:gap-8 max-w-7xl mx-auto">
                {/* Left Profile Section */}
                <motion.div 
                    className="w-full lg:w-1/3 lg:sticky lg:top-24 h-fit"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="glassmorphism relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl p-6 sm:p-8">
                        {/* Decorative gradient top border - Animated */}
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        ></motion.div>
                        
                        {/* Profile Image - Enhanced 3D */}
                        <motion.div 
                            className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto mb-6"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            ></motion.div>
                            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-gray-800/50 backdrop-blur-sm">
                                <motion.img
                                    src={process.env.PUBLIC_URL + "/images/Passport.jpg"}
                                    alt="Mohd Washid"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
                        </motion.div>

                        {/* Name and Title */}
                        <motion.h2 
                            className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-gradient">Mohd Washid</span>
                        </motion.h2>
                        <motion.div 
                            className="mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <TypewriterEffect words={skills} />
                        </motion.div>

                        {/* Education Section */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                                <FaGraduationCap className="mr-2" />
                                Education
                            </h3>
                            <div className="space-y-4">
                                {educationData.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="glassmorphism-light p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-blue cursor-pointer"
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
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
                                    </motion.div>
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
                                <motion.a
                                    href="tel:+918958618665"
                                    className="glassmorphism-light flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-blue text-gray-300 hover:text-white group"
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaPhone className="mr-3 text-green-400 group-hover:animate-bounce" />
                                    <span className="text-sm sm:text-base">+91 8958618665</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:mwashid914@gmail.com"
                                    className="glassmorphism-light flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-purple text-gray-300 hover:text-white group"
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaEnvelope className="mr-3 text-blue-400 group-hover:animate-bounce" />
                                    <span className="text-sm sm:text-base break-all">mwashid914@gmail.com</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content Section */}
                <motion.div 
                    className="w-full lg:w-2/3 space-y-6"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {/* Introduction Card */}
                    <motion.div 
                        className="glassmorphism relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl p-6 sm:p-8"
                        whileHover={{ y: -5 }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        ></motion.div>
                        
                        <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="text-gradient animate-gradient-shift">
                                Hello, Welcome!
                            </span>
                        </motion.h1>
                        <motion.div 
                            className="mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <TypewriterEffect words={skills} />
                        </motion.div>
                        <motion.p 
                            className="text-base sm:text-lg leading-relaxed text-gray-300"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Driven by a passion for crafting dynamic and intuitive applications, I bring solid experience in Flutter development. My expertise lies in creating solutions that seamlessly blend creativity with performance, resulting in interactive and engaging digital experiences. I thrive on combining sleek design with robust functionality to deliver applications that not only look great but also perform flawlessly.
                        </motion.p>
                    </motion.div>

                    {/* Resume Download Card */}
                    <motion.div 
                        className="glassmorphism relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl p-6 sm:p-8"
                        whileHover={{ y: -5 }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        ></motion.div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Get My Resume</h3>
                        <motion.a
                            href="/pdf/MohdWashid-resume.pdf"
                            download
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg
                            transition-all duration-300 transform
                            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                            text-white shadow-lg hover:shadow-blue-500/50 glow-blue"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaFileDownload className="mr-2 animate-bounce" /> Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Philosophy Section */}
                    <motion.div 
                        className="glassmorphism relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl p-6 sm:p-8"
                        whileHover={{ y: -5 }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        ></motion.div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">My Philosophy</h3>
                        <div className="space-y-6">
                            {philosophies.map((philosophy, index) => (
                                <motion.div
                                    key={index}
                                    className="glassmorphism-light group p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:glow-purple cursor-pointer"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ x: -5 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div 
                                            className={`text-transparent bg-clip-text bg-gradient-to-r ${philosophy.gradient}`}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ type: "spring" }}
                                        >
                                            {philosophy.icon}
                                        </motion.div>
                                        <div className="flex-1">
                                            <FaQuoteLeft className="text-gray-500 mb-2 text-sm" />
                                            <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
                                                {philosophy.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;