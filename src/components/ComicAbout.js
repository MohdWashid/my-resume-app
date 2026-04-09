import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComicAbout = ({ theme }) => {
    const [imageHovered, setImageHovered] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    const roles = [
        'Flutter Developer',
        'Android Developer', 
        'iOS Developer',
        'Mobile App Expert',
        'Dart Specialist',
        'BLoC Architect',
        'UI/UX Designer'
    ];

    // Typing animation effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentRole.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, roleIndex]);

    return (
        <div className="min-h-screen py-32 px-4 relative overflow-hidden">
            {/* Comic background effects */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.3) 2px, transparent 2px)',
                backgroundSize: '40px 40px'
            }} />

            {/* Floating comic elements */}
            {['📱', '💻', '⚡', '🚀', '💥', '✨'].map((emoji, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl opacity-20"
                    style={{
                        left: `${5 + i * 15}%`,
                        top: `${10 + i * 12}%`
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.3
                    }}
                >
                    {emoji}
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title - Comic Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="mb-12 md:mb-20 text-center"
                >
                    <div className="inline-block relative">
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-4 md:border-8 border-black px-4 md:px-12 py-3 md:py-6 transform -rotate-2"
                             style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                            <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-black"
                                style={{ 
                                    fontFamily: 'Impact, sans-serif',
                                    textShadow: '3px 3px 0px rgba(255,255,255,0.5)',
                                    WebkitTextStroke: '2px black'
                                }}>
                                THE MOBILE HERO
                            </h2>
                        </div>
                        {/* Comic burst lines */}
                        <motion.div
                            className="absolute -inset-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {[...Array(16)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-16 bg-yellow-400"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transformOrigin: '0 0',
                                        transform: `rotate(${i * 22.5}deg)`,
                                        opacity: 0.4
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
                    {/* Left: Profile Image - Comic Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, rotate: -10 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="relative"
                        onHoverStart={() => setImageHovered(true)}
                        onHoverEnd={() => setImageHovered(false)}
                    >
                        {/* Comic Panel Frame */}
                        <motion.div
                            className="border-4 md:border-8 border-black bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-3 md:p-6 transform rotate-2"
                            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}
                            whileHover={{ rotate: 0, scale: 1.02 }}
                        >
                            {/* Halftone dots effect */}
                            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)',
                                backgroundSize: '15px 15px'
                            }} />

                            {/* Image Container */}
                            <div className="relative border-4 border-black overflow-hidden bg-white">
                                <motion.img
                                    src={process.env.PUBLIC_URL + "/images/Passport.jpg"}
                                    alt="Mohd Washid"
                                    className="w-full h-auto"
                                    style={{
                                        filter: 'contrast(1.2) saturate(1.3)'
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                
                                {/* Comic effect overlay */}
                                <div className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none"
                                     style={{
                                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                                     }} />
                                
                                {/* BOOM effect on hover */}
                                <AnimatePresence>
                                    {imageHovered && (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0, rotate: 45 }}
                                            className="absolute top-4 right-4 bg-yellow-400 border-4 border-black px-6 py-3 transform rotate-12"
                                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                        >
                                            <span className="text-3xl font-black text-black"
                                                  style={{ fontFamily: 'Impact, sans-serif' }}>
                                                BOOM!
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Flutter badge decoration */}
                            <motion.div
                                className="absolute -top-4 md:-top-6 -left-4 md:-left-6 bg-blue-600 border-3 md:border-4 border-black px-3 md:px-6 py-2 md:py-3 transform -rotate-12"
                                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                animate={{ rotate: [-12, -8, -12] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-2xl md:text-4xl font-black text-white"
                                      style={{ fontFamily: 'Impact, sans-serif' }}>
                                    FLUTTER
                                </span>
                            </motion.div>

                            {/* Status Badge */}
                            <motion.div
                                className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-green-500 border-3 md:border-4 border-black px-4 md:px-8 py-2 md:py-4 transform rotate-6"
                                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                animate={{ 
                                    rotate: [6, 10, 6],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-xl md:text-3xl font-black text-black"
                                      style={{ fontFamily: 'Impact, sans-serif' }}>
                                    ⚡ ACTIVE
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Action lines decoration */}
                        <div className="absolute -bottom-4 -left-4 opacity-30">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} 
                                     className="bg-cyan-400 h-1 mb-1"
                                     style={{
                                         width: `${100 - i * 12}px`,
                                         transform: `translateX(${i * 4}px)`
                                     }} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: About Content */}
                    <div className="space-y-6">
                        {/* Typing Animation Speech Bubble */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                            className="relative bg-white border-4 md:border-8 border-black p-4 md:p-8 rounded-3xl"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                        >
                            {/* Speech bubble pointer - hidden on mobile */}
                            <div className="hidden md:block absolute -left-8 top-12 w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[35px] border-r-black" />
                            <div className="hidden md:block absolute -left-6 top-12 w-0 h-0 border-t-[22px] border-t-transparent border-b-[22px] border-b-transparent border-r-[32px] border-r-white" />
                            
                            <h3 className="text-3xl md:text-4xl font-black text-black mb-4"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                HEY! I'M WASHID 👋
                            </h3>
                            
                            {/* Typing Animation */}
                            <div className="bg-gray-900 border-3 md:border-4 border-cyan-400 p-3 md:p-4 font-mono mb-4"
                                 style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                                <div className="text-cyan-400 text-base md:text-xl lg:text-2xl font-bold break-words">
                                    <span className="text-yellow-400">I'm a </span>
                                    <span className="text-green-400">{typedText}</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="text-yellow-400"
                                    >
                                        |
                                    </motion.span>
                                </div>
                            </div>

                            <p className="text-lg text-black leading-relaxed font-bold">
                                Building <span className="text-blue-600 text-xl">CROSS-PLATFORM</span> mobile apps 
                                that run on <span className="text-green-600 text-xl">Android</span> & 
                                <span className="text-gray-600 text-xl"> iOS</span>! 
                                <span className="text-yellow-600 text-2xl"> 📱⚡</span>
                            </p>
                        </motion.div>

                        {/* Mobile Tech Stack - Comic Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { label: 'FLUTTER', icon: '🦋', color: 'from-blue-600 to-cyan-500' },
                                { label: 'DART', icon: '🎯', color: 'from-cyan-600 to-blue-400' },
                                { label: 'BLOC', icon: '🧊', color: 'from-purple-600 to-pink-500' },
                                { label: 'ANDROID', icon: '🤖', color: 'from-green-600 to-emerald-500' },
                                { label: 'iOS', icon: '🍎', color: 'from-gray-700 to-gray-500' },
                                { label: 'FIREBASE', icon: '🔥', color: 'from-orange-600 to-red-600' }
                            ].map((skill, i) => (
                                <motion.div
                                    key={skill.label}
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1, type: "spring", bounce: 0.7 }}
                                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                                    className={`bg-gradient-to-br ${skill.color} border-4 border-black p-4 text-center transform ${
                                        i % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                    }`}
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                                >
                                    <motion.div 
                                        className="text-5xl mb-2"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <div className="text-xl md:text-2xl font-black text-white"
                                         style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                        {skill.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education & Experience - Terminal Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="bg-gray-900 border-6 border-purple-500 p-6 font-mono"
                            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}
                        >
                            <div className="text-green-400 space-y-3">
                                {/* Current Role */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.6 }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-yellow-400">$</span>
                                        <span className="text-blue-400">cat current_job.txt</span>
                                    </div>
                                    <div className="pl-4 space-y-1">
                                        <p className="text-cyan-400 font-bold text-lg">
                                            💼 <span className="text-yellow-400">Flutter Developer</span>
                                        </p>
                                        <p className="text-white">
                                            @ <span className="text-purple-400 font-bold">Webmass Digital OPC</span>
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            📍 Noida, India | 📅 Oct 2023 - Present
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Education */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.8 }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-yellow-400">$</span>
                                        <span className="text-blue-400">cat hero_training.txt</span>
                                    </div>
                                    <div className="pl-4 space-y-2">
                                        <div className="bg-blue-900/30 border-l-4 border-blue-400 pl-3 py-1">
                                            <p className="text-blue-400 font-bold">
                                                🎓 MCA - MASTER'S TRAINING
                                            </p>
                                            <p className="text-cyan-400 text-sm">
                                                Graphic Era Hill University, Dehradun
                                            </p>
                                            <p className="text-gray-400 text-sm">2022 - 2024</p>
                                        </div>
                                        <div className="bg-purple-900/30 border-l-4 border-purple-400 pl-3 py-1">
                                            <p className="text-purple-400 font-bold">
                                                🎓 BCA - FOUNDATION POWERS
                                            </p>
                                            <p className="text-pink-400 text-sm">
                                                Teerthanker Mahaveer University, Moradabad
                                            </p>
                                            <p className="text-gray-400 text-sm">2019 - 2022</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Specialization */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.0 }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-yellow-400">$</span>
                                        <span className="text-blue-400">echo $SPECIALIZATION</span>
                                    </div>
                                    <div className="pl-4">
                                        <p className="text-cyan-400">
                                            → Mobile App Development 📱
                                        </p>
                                        <p className="text-cyan-400">
                                            → Cross-Platform Solutions 🌐
                                        </p>
                                        <p className="text-cyan-400">
                                            → State Management (BLoC, Provider, Riverpod) 🧊
                                        </p>
                                        <p className="text-cyan-400">
                                            → UI/UX Design & Animations 🎨
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="mt-3">
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        █
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="tel:+918958618665"
                                whileHover={{ scale: 1.15, rotate: -5, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-red-600 to-pink-600 border-3 md:border-4 border-black px-6 md:px-8 py-3 md:py-4 font-black text-white text-lg md:text-xl text-center"
                                style={{ 
                                    boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                📞 CALL ME!
                            </motion.a>
                            <motion.a
                                href="mailto:mwashid914@gmail.com"
                                whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 border-3 md:border-4 border-black px-6 md:px-8 py-3 md:py-4 font-black text-white text-lg md:text-xl text-center"
                                style={{ 
                                    boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                ✉️ EMAIL ME!
                            </motion.a>
                        </motion.div>

                        {/* Hero Powers & Philosophy */}
                        <div className="space-y-4">
                            {/* Power 1: Performance */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.4 }}
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                className="border-4 md:border-6 border-black bg-gradient-to-br from-blue-600 to-cyan-500 p-4 md:p-6 transform -rotate-1"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-3 transform rotate-12 flex-shrink-0"
                                         style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                                        <span className="text-3xl md:text-4xl">⚡</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl md:text-2xl font-black text-white mb-2"
                                            style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                            SPEED POWER
                                        </h4>
                                        <p className="text-white font-bold leading-relaxed text-sm md:text-base">
                                            Efficiency and performance are my SUPERPOWERS! I create blazing-fast, 
                                            responsive mobile apps that deliver smooth experiences! 🚀
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Power 2: Creativity */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.6 }}
                                whileHover={{ scale: 1.02, rotate: -1 }}
                                className="border-4 md:border-6 border-black bg-gradient-to-br from-purple-600 to-pink-500 p-4 md:p-6 transform rotate-1"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-3 transform -rotate-12 flex-shrink-0"
                                         style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                                        <span className="text-3xl md:text-4xl">🎨</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl md:text-2xl font-black text-white mb-2"
                                            style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                            CREATIVE VISION
                                        </h4>
                                        <p className="text-white font-bold leading-relaxed text-sm md:text-base">
                                            Blending creativity with code to craft experiences that INSPIRE and INNOVATE! 
                                            Every app tells a story! 💫
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Power 3: Reliability */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.8 }}
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                className="border-4 md:border-6 border-black bg-gradient-to-br from-orange-600 to-red-600 p-4 md:p-6 transform -rotate-1"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-3 transform rotate-12 flex-shrink-0"
                                         style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                                        <span className="text-3xl md:text-4xl">🛡️</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl md:text-2xl font-black text-white mb-2"
                                            style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}>
                                            RELIABILITY SHIELD
                                        </h4>
                                        <p className="text-white font-bold leading-relaxed text-sm md:text-base">
                                            Creating ROBUST solutions that seamlessly blend sleek design with powerful 
                                            functionality! Apps that look great AND perform flawlessly! 💪
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Achievement Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 3.0, type: "spring", bounce: 0.8 }}
                            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-4 md:border-6 border-black p-4 md:p-6 transform -rotate-1 relative overflow-hidden"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                        >
                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                animate={{
                                    x: ['-100%', '200%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            />
                            
                            <div className="text-center relative z-10">
                                <motion.p 
                                    className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-2"
                                    style={{ 
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                                    }}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    ⚡ 10+ PRODUCTION APPS ⚡
                                </motion.p>
                                <p className="text-base md:text-lg lg:text-xl font-black text-black"
                                   style={{ fontFamily: 'Impact, sans-serif' }}>
                                    PUBLISHED ON PLAY STORE & APP STORE!
                                </p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <span className="text-2xl md:text-3xl">🤖</span>
                                    <span className="text-2xl md:text-3xl">🍎</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComicAbout;
