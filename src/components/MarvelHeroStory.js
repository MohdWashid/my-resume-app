import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MarvelHeroStory = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Captain America Shield
    const Shield = ({ size = 100 }) => (
        <svg width={size} height={size} viewBox="0 0 200 200" className="w-full h-full">
            <defs>
                <radialGradient id="shieldGloss">
                    <stop offset="30%" stopColor="rgba(255,255,255,0.4)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </radialGradient>
            </defs>
            <ellipse cx="105" cy="105" rx="95" ry="90" fill="rgba(0,0,0,0.6)" />
            <circle cx="100" cy="100" r="95" fill="#B91C1C" stroke="#000" strokeWidth="8"/>
            <circle cx="100" cy="100" r="90" fill="#DC2626" stroke="#000" strokeWidth="4"/>
            <circle cx="100" cy="100" r="85" fill="#E5E7EB" stroke="#000" strokeWidth="5"/>
            <circle cx="100" cy="100" r="80" fill="#F9FAFB" stroke="#000" strokeWidth="3"/>
            <circle cx="100" cy="100" r="70" fill="#B91C1C" stroke="#000" strokeWidth="5"/>
            <circle cx="100" cy="100" r="65" fill="#DC2626" stroke="#000" strokeWidth="3"/>
            <circle cx="100" cy="100" r="60" fill="#E5E7EB" stroke="#000" strokeWidth="4"/>
            <circle cx="100" cy="100" r="55" fill="#F9FAFB" stroke="#000" strokeWidth="2"/>
            <circle cx="100" cy="100" r="50" fill="#1E3A8A" stroke="#000" strokeWidth="4"/>
            <circle cx="100" cy="100" r="47" fill="#2563EB" stroke="#000" strokeWidth="2"/>
            <path d="M100,68 L110,92 L136,92 L115,108 L125,132 L100,116 L75,132 L85,108 L64,92 L90,92 Z" 
                  fill="#F9FAFB" stroke="#000" strokeWidth="5" strokeLinejoin="round"/>
            <path d="M100,70 L109,91 L133,91 L114,106 L123,127 L100,112 L77,127 L86,106 L67,91 L91,91 Z" 
                  fill="#FFFFFF" stroke="#000" strokeWidth="3" strokeLinejoin="round"/>
            <ellipse cx="75" cy="75" rx="50" ry="60" fill="url(#shieldGloss)"/>
        </svg>
    );

    // Thor Hammer
    const Hammer = ({ size = 120 }) => (
        <svg width={size} height={size * 1.2} viewBox="0 0 150 180" className="w-full h-full">
            <defs>
                <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9CA3AF"/>
                    <stop offset="50%" stopColor="#D1D5DB"/>
                    <stop offset="100%" stopColor="#6B7280"/>
                </linearGradient>
            </defs>
            <rect x="42" y="35" width="66" height="50" rx="8" fill="rgba(0,0,0,0.5)" />
            <rect x="40" y="30" width="70" height="50" rx="8" fill="url(#metalGrad)" stroke="#000" strokeWidth="6"/>
            <rect x="45" y="35" width="60" height="40" rx="5" fill="#D1D5DB" stroke="#000" strokeWidth="3"/>
            <rect x="50" y="40" width="10" height="25" fill="#6B7280" stroke="#000" strokeWidth="2"/>
            <rect x="90" y="40" width="10" height="25" fill="#6B7280" stroke="#000" strokeWidth="2"/>
            <rect x="72" y="80" width="8" height="80" fill="#78350F" stroke="#000" strokeWidth="5"/>
            <rect x="70" y="85" width="12" height="4" fill="#92400E" stroke="#000" strokeWidth="2"/>
            <rect x="70" y="100" width="12" height="4" fill="#92400E" stroke="#000" strokeWidth="2"/>
            <rect x="70" y="115" width="12" height="4" fill="#92400E" stroke="#000" strokeWidth="2"/>
            <rect x="70" y="130" width="12" height="4" fill="#92400E" stroke="#000" strokeWidth="2"/>
            <rect x="70" y="145" width="12" height="4" fill="#92400E" stroke="#000" strokeWidth="2"/>
            <circle cx="76" cy="165" r="10" fill="#92400E" stroke="#000" strokeWidth="4"/>
            <path d="M20,20 L10,10 M130,20 L140,10 M20,60 L5,60 M130,60 L145,60" 
                  stroke="#FFD700" strokeWidth="4" opacity="0.8"/>
        </svg>
    );

    // Arc Reactor
    const ArcReactor = ({ size = 100 }) => (
        <svg width={size} height={size} viewBox="0 0 200 200" className="w-full h-full">
            <defs>
                <radialGradient id="coreGlow">
                    <stop offset="0%" stopColor="#67E8F9"/>
                    <stop offset="50%" stopColor="#06B6D4"/>
                    <stop offset="100%" stopColor="#0891B2"/>
                </radialGradient>
                <filter id="reactorGlow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <circle cx="100" cy="100" r="90" fill="rgba(6, 182, 212, 0.2)"/>
            <circle cx="100" cy="100" r="80" fill="rgba(6, 182, 212, 0.3)"/>
            <circle cx="100" cy="100" r="85" fill="#0C4A6E" stroke="#000" strokeWidth="6" filter="url(#reactorGlow)"/>
            <circle cx="100" cy="100" r="78" fill="#075985" stroke="#000" strokeWidth="4"/>
            <circle cx="100" cy="100" r="68" fill="#0369A1" stroke="#000" strokeWidth="4"/>
            <circle cx="100" cy="100" r="60" fill="#0284C7" stroke="#000" strokeWidth="3"/>
            <circle cx="100" cy="100" r="50" fill="#0EA5E9" stroke="#000" strokeWidth="3"/>
            <circle cx="100" cy="100" r="42" fill="#38BDF8" stroke="#000" strokeWidth="2"/>
            <circle cx="100" cy="100" r="35" fill="url(#coreGlow)" stroke="#000" strokeWidth="3"/>
            <circle cx="100" cy="100" r="25" fill="#06B6D4" stroke="#000" strokeWidth="2"/>
            <circle cx="100" cy="100" r="15" fill="#67E8F9" stroke="#000" strokeWidth="2"/>
            <path d="M100,60 L115,75 L85,75 Z" fill="#0891B2" stroke="#000" strokeWidth="3"/>
            <path d="M100,140 L115,125 L85,125 Z" fill="#0891B2" stroke="#000" strokeWidth="3"/>
            <path d="M60,100 L75,115 L75,85 Z" fill="#0891B2" stroke="#000" strokeWidth="3"/>
            <path d="M140,100 L125,115 L125,85 Z" fill="#0891B2" stroke="#000" strokeWidth="3"/>
        </svg>
    );

    return (
        <div className="relative bg-black min-h-screen overflow-x-hidden">
            {/* Main Hero Section - COMIC BOOK LAYOUT */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Comic dots background */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Energy orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-900/20 rounded-full blur-3xl" />

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    {/* NEWSPAPER HEADLINE */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 md:mb-12"
                    >
                        <div className="bg-white border-6 md:border-8 border-black p-4 md:p-6 transform -rotate-1 relative"
                             style={{ boxShadow: isMobile ? '8px 8px 0px rgba(0,0,0,1)' : '15px 15px 0px rgba(0,0,0,1)' }}>
                            <div className="border-4 border-red-600 p-3 md:p-4">
                                <p className="text-xs md:text-sm font-black text-gray-600 mb-1 tracking-wider"
                                   style={{ fontFamily: 'Impact, sans-serif' }}>
                                    TECH CHRONICLES • DAILY DEVELOPER • ISSUE #2024
                                </p>
                                <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-black leading-tight"
                                    style={{ 
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                                    }}>
                                    MOHD WASHID: FLUTTER ARCHITECT CRAFTING CROSS-PLATFORM EXCELLENCE
                                </h1>
                                <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 md:mt-3 text-xs md:text-sm font-bold text-gray-700">
                                    <span>📍 Noida, India</span>
                                    <span>•</span>
                                    <span>💼 Webmass Digital OPC</span>
                                    <span>•</span>
                                    <span>🎓 MCA Graduate</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* MAIN COMIC PANEL LAYOUT */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        {/* LEFT: Profile Panel with Dialog Boxes */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Main Profile Panel */}
                            <div className="relative border-6 md:border-8 border-black bg-gradient-to-br from-blue-900 via-purple-900 to-black p-2 md:p-3 transform rotate-1"
                                 style={{ boxShadow: isMobile ? '10px 10px 0px rgba(0,0,0,1)' : '18px 18px 0px rgba(0,0,0,1)' }}>
                                
                                {/* Halftone effect */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)',
                                    backgroundSize: '15px 15px'
                                }} />

                                {/* Inner frame */}
                                <div className="border-4 md:border-6 border-yellow-400 relative overflow-hidden">
                                    <motion.img
                                        src={process.env.PUBLIC_URL + "/images/Passport.jpg"}
                                        alt="Mohd Washid"
                                        className="w-full h-auto"
                                        whileHover={{ scale: 1.05 }}
                                        style={{ 
                                            filter: 'contrast(1.4) saturate(1.5) brightness(1.1)',
                                        }}
                                    />
                                    
                                    {/* Comic halftone overlay */}
                                    <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
                                         style={{
                                             backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.7) 1.5px, transparent 1.5px)',
                                             backgroundSize: '8px 8px'
                                         }} />
                                    
                                    {/* Scan lines */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                                         style={{
                                             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)'
                                         }} />

                                    {/* Name Badge on Image */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t-4 border-yellow-400 p-3 md:p-4">
                                        <h2 className="text-2xl md:text-4xl font-black text-yellow-400"
                                            style={{ 
                                                fontFamily: 'Impact, sans-serif',
                                                textShadow: '3px 3px 0px #000'
                                            }}>
                                            MOHD WASHID
                                        </h2>
                                        <p className="text-sm md:text-base font-bold text-cyan-400">
                                            Software Engineer • Flutter Specialist
                                        </p>
                                    </div>
                                </div>

                                {/* Superhero Items - SMALLER, MORE SUBTLE */}
                                <motion.div
                                    className="absolute -top-8 -right-8 w-16 h-16 md:w-20 md:h-20"
                                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                    transition={{ 
                                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 2, repeat: Infinity }
                                    }}
                                    style={{ filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))' }}
                                >
                                    <Shield />
                                </motion.div>

                                <motion.div
                                    className="absolute -top-10 -left-10 w-16 h-20 md:w-20 md:h-24"
                                    animate={{ rotate: [10, -10, 10], y: [0, -5, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    style={{ filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))' }}
                                >
                                    <Hammer />
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20"
                                    animate={{ 
                                        scale: [1, 1.15, 1],
                                        filter: [
                                            'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))',
                                            'drop-shadow(0 0 20px rgba(6, 182, 212, 1))',
                                            'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))'
                                        ]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArcReactor />
                                </motion.div>
                            </div>

                            {/* Speech Bubble - Professional Bio */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                                className="relative mt-6 md:mt-8 bg-white border-4 md:border-6 border-black p-4 md:p-6 rounded-3xl"
                                style={{ boxShadow: isMobile ? '6px 6px 0px rgba(0,0,0,0.8)' : '10px 10px 0px rgba(0,0,0,0.8)' }}
                            >
                                {/* Speech pointer */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-black" />
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[23px] border-b-white" />
                                
                                <div className="text-xs md:text-sm font-bold text-gray-800 leading-relaxed italic">
                                    "Building high-performance, scalable mobile applications for iOS and Android using Flutter framework. 
                                    Specialized in state management (BLoC, Provider), API integration, and delivering pixel-perfect UI/UX. 
                                    Currently engineering solutions at Webmass Digital OPC, transforming business requirements into 
                                    production-ready applications."
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: Info Panels */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="space-y-4 md:space-y-6"
                        >
                            {/* NARRATIVE BOX - Current Role */}
                            <div className="bg-yellow-400 border-4 md:border-6 border-black p-4 md:p-6 transform -rotate-1"
                                 style={{ boxShadow: isMobile ? '6px 6px 0px rgba(0,0,0,0.8)' : '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                <div className="border-2 border-black p-3 md:p-4 bg-yellow-300">
                                    <p className="text-xs md:text-sm font-black text-gray-800 mb-2 tracking-wider"
                                       style={{ fontFamily: 'Impact, sans-serif' }}>
                                        CURRENTLY AT:
                                    </p>
                                    <h3 className="text-xl md:text-3xl font-black text-black mb-2"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        WEBMASS DIGITAL OPC
                                    </h3>
                                    <p className="text-sm md:text-base font-bold text-gray-900">
                                        Flutter Developer • Noida, India<br/>
                                        Developing enterprise-grade mobile solutions
                                    </p>
                                </div>
                            </div>

                            {/* Terminal Panel - Tech Stack */}
                            <div className="bg-gray-900 border-4 md:border-6 border-cyan-400 transform rotate-1"
                                 style={{ 
                                     boxShadow: isMobile ? '0 0 15px rgba(6, 182, 212, 0.5), 6px 6px 0px rgba(0,0,0,0.8)' : '0 0 20px rgba(6, 182, 212, 0.5), 10px 10px 0px rgba(0,0,0,0.8)'
                                 }}>
                                <div className="border-2 border-cyan-500 p-4 md:p-6 font-mono">
                                    <div className="space-y-2 text-xs md:text-sm">
                                        <div>
                                            <span className="text-yellow-400">$ </span>
                                            <span className="text-cyan-400">cat tech_stack.json</span>
                                        </div>
                                        <div className="text-green-400 space-y-1">
                                            <div className="pl-4">
                                                <span className="text-white">"core":</span> [Flutter, Dart, BLoC, Provider]
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-white">"platforms":</span> [Android, iOS, Web]
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-white">"backend":</span> [REST API, Firebase, SQL]
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-white">"tools":</span> [Git, VS Code, Android Studio]
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-white">"languages":</span> [Dart, C++, JavaScript]
                                            </div>
                                        </div>
                                        <div className="text-cyan-400 mt-2">
                                            → Expertise Level: <span className="text-yellow-400">ADVANCED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Panel */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { icon: '🎓', label: 'EDUCATION', value: 'MCA', detail: '2022-2024' },
                                    { icon: '📱', label: 'PROJECTS', value: '10+', detail: 'Published' },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className={`bg-gradient-to-br ${
                                            i === 0 ? 'from-blue-600 to-blue-800' : 'from-purple-600 to-purple-800'
                                        } border-4 md:border-6 border-black p-4 md:p-6 transform ${
                                            i === 0 ? 'rotate-2' : '-rotate-2'
                                        }`}
                                        style={{ boxShadow: isMobile ? '5px 5px 0px rgba(0,0,0,0.9)' : '8px 8px 0px rgba(0,0,0,0.9)' }}
                                    >
                                        <div className="text-4xl md:text-5xl mb-2">{stat.icon}</div>
                                        <div className="bg-white border-3 border-black inline-block px-3 py-1 mb-2">
                                            <p className="text-xs md:text-sm font-black text-black"
                                               style={{ fontFamily: 'Impact, sans-serif' }}>
                                                {stat.label}
                                            </p>
                                        </div>
                                        <p className="text-2xl md:text-3xl font-black text-white"
                                           style={{ 
                                               fontFamily: 'Impact, sans-serif',
                                               textShadow: '2px 2px 0px #000'
                                           }}>
                                            {stat.value}
                                        </p>
                                        <p className="text-xs md:text-sm font-bold text-white/90">{stat.detail}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <motion.a
                                    href="mailto:mwashid914@gmail.com"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-red-600 border-4 border-black px-6 py-4 font-black text-white text-center transform -rotate-1"
                                    style={{ 
                                        boxShadow: isMobile ? '5px 5px 0px rgba(0,0,0,0.8)' : '8px 8px 0px rgba(0,0,0,0.8)',
                                        fontFamily: 'Impact, sans-serif'
                                    }}
                                >
                                    <div className="text-lg md:text-xl">📧 EMAIL</div>
                                    <div className="text-xs">Let's Connect</div>
                                </motion.a>
                                <motion.a
                                    href="tel:+918958618665"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-green-600 border-4 border-black px-6 py-4 font-black text-white text-center transform rotate-1"
                                    style={{ 
                                        boxShadow: isMobile ? '5px 5px 0px rgba(0,0,0,0.8)' : '8px 8px 0px rgba(0,0,0,0.8)',
                                        fontFamily: 'Impact, sans-serif'
                                    }}
                                >
                                    <div className="text-lg md:text-xl">📞 CALL</div>
                                    <div className="text-xs">+91 895-861-8665</div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="bg-yellow-400 border-4 border-black px-6 py-2 transform -rotate-2"
                             style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <p className="text-lg md:text-xl font-black text-black flex items-center gap-2"
                               style={{ fontFamily: 'Impact, sans-serif' }}>
                                <span>↓</span> CONTINUE READING <span>↓</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* DETAILED INFO SECTION - Comic Panels Style */}
            <motion.section 
                className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8"
                style={{ 
                    opacity: useTransform(scrollY, [200, 500], [0, 1]),
                    y: useTransform(scrollY, [200, 600], [100, 0])
                }}
            >
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
                    {/* Education & Expertise Panel */}
                    <motion.div
                        className="border-6 md:border-8 border-black bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 md:p-12 transform -rotate-1 relative overflow-hidden"
                        style={{ 
                            boxShadow: isMobile ? '12px 12px 0px rgba(0,0,0,1)' : '20px 20px 0px rgba(0,0,0,1)',
                            y: y1
                        }}
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 2px, transparent 2px)',
                            backgroundSize: '15px 15px'
                        }} />

                        <div className="relative z-10">
                            <div className="bg-white border-6 border-black inline-block px-6 md:px-10 py-3 md:py-5 mb-6 md:mb-10 transform rotate-2"
                                 style={{ boxShadow: isMobile ? '6px 6px 0px rgba(0,0,0,0.8)' : '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                <h2 className="text-3xl md:text-5xl font-black text-black"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    🎓 ACADEMIC JOURNEY
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {/* MCA */}
                                <div className="bg-white/95 border-4 md:border-6 border-black p-6 md:p-8 transform -rotate-1"
                                     style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                                    <div className="bg-blue-600 text-white px-4 py-2 inline-block border-3 border-black mb-4">
                                        <span className="font-black text-xl md:text-2xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                                            MCA • 2022-2024
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-black text-black mb-2"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        Graphic Era Hill University
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-700 font-semibold">
                                        Master of Computer Applications<br/>
                                        📍 Dehradun, Uttarakhand
                                    </p>
                                </div>

                                {/* BCA */}
                                <div className="bg-white/95 border-4 md:border-6 border-black p-6 md:p-8 transform rotate-1"
                                     style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                                    <div className="bg-purple-600 text-white px-4 py-2 inline-block border-3 border-black mb-4">
                                        <span className="font-black text-xl md:text-2xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                                            BCA • 2019-2022
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-black text-black mb-2"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        Teerthanker Mahaveer University
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-700 font-semibold">
                                        Bachelor of Computer Applications<br/>
                                        📍 Moradabad, Uttar Pradesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Showcase */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { 
                                title: 'MOBILE DEVELOPMENT',
                                skills: ['Flutter', 'Dart', 'Android SDK', 'iOS Development', 'Material Design'],
                                color: 'from-cyan-600 to-blue-700',
                                badge: 'EXPERT'
                            },
                            { 
                                title: 'STATE MANAGEMENT',
                                skills: ['BLoC Pattern', 'Provider', 'GetX', 'Redux', 'MobX'],
                                color: 'from-green-600 to-emerald-700',
                                badge: 'PRO'
                            },
                            { 
                                title: 'BACKEND & TOOLS',
                                skills: ['REST API', 'Firebase', 'SQL', 'Git', 'CI/CD'],
                                color: 'from-orange-600 to-red-700',
                                badge: 'ADVANCED'
                            }
                        ].map((category, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className={`bg-gradient-to-br ${category.color} border-6 border-black p-6 md:p-8 transform ${
                                    i % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                } relative overflow-hidden`}
                                style={{ 
                                    y: i % 2 === 0 ? y1 : y2,
                                    boxShadow: isMobile ? '8px 8px 0px rgba(0,0,0,0.9)' : '12px 12px 0px rgba(0,0,0,0.9)' 
                                }}
                            >
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.4) 2px, transparent 2px)',
                                    backgroundSize: '12px 12px'
                                }} />

                                <div className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black px-4 py-2 transform -rotate-12 z-10"
                                     style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                                    <span className="text-sm md:text-base font-black text-black"
                                          style={{ fontFamily: 'Impact, sans-serif' }}>
                                        {category.badge}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <div className="bg-white border-4 border-black px-4 py-2 mb-6 inline-block">
                                        <h3 className="text-lg md:text-xl font-black text-black"
                                            style={{ fontFamily: 'Impact, sans-serif' }}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-2">
                                        {category.skills.map((skill, idx) => (
                                            <div key={idx} 
                                                 className="bg-black/80 border-2 border-white/30 px-4 py-2 backdrop-blur-sm">
                                                <span className="text-sm md:text-base font-bold text-white">
                                                    → {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        style={{ 
                            opacity: useTransform(scrollY, [800, 1200], [0, 1]),
                            scale: useTransform(scrollY, [800, 1200], [0.8, 1])
                        }}
                        className="text-center"
                    >
                        <div className="relative inline-block">
                            <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 border-8 border-black px-8 md:px-20 py-8 md:py-12 transform rotate-2 relative overflow-hidden"
                                 style={{ boxShadow: isMobile ? '15px 15px 0px rgba(0,0,0,1)' : '25px 25px 0px rgba(0,0,0,1)' }}>
                                
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                                />

                                <div className="relative z-10">
                                    <p className="text-2xl md:text-5xl lg:text-6xl font-black text-black mb-4"
                                       style={{
                                           fontFamily: 'Impact, sans-serif',
                                           textShadow: '5px 5px 0px rgba(255,255,255,0.7)',
                                           lineHeight: '1.2'
                                       }}>
                                        EXPLORE MORE ABOUT MY WORK! ⚡
                                    </p>
                                    <div className="bg-black border-4 border-white px-6 md:px-10 py-3 md:py-4 inline-block">
                                        <p className="text-lg md:text-2xl font-black text-yellow-400"
                                           style={{ fontFamily: 'Impact, sans-serif' }}>
                                            CHECK OTHER TABS FOR PROJECTS & EXPERIENCE
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                className="absolute -top-10 -right-10 md:-top-16 md:-right-16 bg-yellow-400 border-6 border-black px-6 md:px-10 py-3 md:py-5 transform -rotate-12"
                                style={{ boxShadow: isMobile ? '6px 6px 0px rgba(0,0,0,0.8)' : '10px 10px 0px rgba(0,0,0,0.8)' }}
                                animate={{ scale: [1, 1.1, 1], rotate: [-12, -10, -12] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-3xl md:text-5xl font-black text-black"
                                      style={{ fontFamily: 'Impact, sans-serif', textShadow: '3px 3px 0px rgba(255,255,255,0.5)' }}>
                                    BOOM!
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default MarvelHeroStory;
