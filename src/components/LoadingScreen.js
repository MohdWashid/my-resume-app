import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 8;
                });
            }, 200);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    // Captain America Shield - Made with SVG Code
    const CaptainAmericaShield = () => (
        <svg width="300" height="300" viewBox="0 0 200 200" className="shield">
            <defs>
                {/* Comic halftone pattern */}
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1.5" fill="#000" opacity="0.15"/>
                </pattern>
                
                {/* Glossy effect */}
                <radialGradient id="gloss">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
            </defs>
            
            {/* Outer red ring */}
            <circle cx="100" cy="100" r="95" fill="#DC2626" stroke="#000" strokeWidth="8"/>
            
            {/* White ring */}
            <circle cx="100" cy="100" r="85" fill="#FFFFFF" stroke="#000" strokeWidth="6"/>
            
            {/* Middle red ring */}
            <circle cx="100" cy="100" r="70" fill="#DC2626" stroke="#000" strokeWidth="6"/>
            
            {/* Inner white ring */}
            <circle cx="100" cy="100" r="60" fill="#FFFFFF" stroke="#000" strokeWidth="5"/>
            
            {/* Blue center circle */}
            <circle cx="100" cy="100" r="50" fill="#2563EB" stroke="#000" strokeWidth="5"/>
            
            {/* White star in center */}
            <path d="M100,65 L109,88 L133,88 L114,103 L123,126 L100,111 L77,126 L86,103 L67,88 L91,88 Z" 
                  fill="#FFFFFF" 
                  stroke="#000" 
                  strokeWidth="4"
                  strokeLinejoin="round"/>
            
            {/* Glossy shine effect */}
            <ellipse cx="80" cy="70" rx="40" ry="50" fill="url(#gloss)" opacity="0.4"/>
            
            {/* Comic halftone overlay */}
            <circle cx="100" cy="100" r="95" fill="url(#dots)" pointerEvents="none"/>
        </svg>
    );

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    {/* Comic book dots background */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                    }} />

                    {/* Speed lines - Comic book style */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 bg-yellow-400 opacity-30"
                            style={{
                                height: '200px',
                                left: '50%',
                                top: '50%',
                                transformOrigin: '0 0',
                                transform: `rotate(${i * 30}deg)`
                            }}
                            animate={{
                                scaleY: [0, 1, 0],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}

                    {/* Title */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 border-8 border-black px-8 md:px-16 py-4 md:py-6 transform -rotate-2"
                             style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}>
                            <h1 className="text-5xl md:text-9xl font-black text-white text-center"
                                style={{ 
                                    fontFamily: 'Impact, sans-serif',
                                    textShadow: '5px 5px 0px #000',
                                    WebkitTextStroke: '3px black',
                                    letterSpacing: '0.05em'
                                }}>
                                WASHID
                            </h1>
                        </div>
                    </motion.div>

                    {/* Captain America Shield - Main Element */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                            scale: 1,
                            rotate: 360
                        }}
                        transition={{ 
                            scale: { duration: 0.8, type: "spring", bounce: 0.6 },
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                        }}
                        className="relative mb-12"
                    >
                        <CaptainAmericaShield />
                        
                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(37, 99, 235, 0.5)',
                                    '0 0 60px rgba(220, 38, 38, 0.8)',
                                    '0 0 20px rgba(37, 99, 235, 0.5)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-xl px-8">
                        <div className="relative h-12 bg-gray-900 border-6 border-yellow-400 overflow-hidden mb-4"
                             style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-600 via-white to-blue-600 relative"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Halftone pattern */}
                                <div className="absolute inset-0 opacity-30" style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1px)',
                                    backgroundSize: '8px 8px'
                                }} />
                                
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                                    animate={{
                                        x: ['-100%', '200%']
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </motion.div>
                        </div>
                        
                        <div className="text-center">
                            <motion.p
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                                className="text-4xl md:text-6xl font-black text-yellow-400"
                                style={{ 
                                    fontFamily: 'Impact, sans-serif',
                                    textShadow: '4px 4px 0px #000',
                                    WebkitTextStroke: '1px black'
                                }}>
                                {progress}%
                            </motion.p>
                        </div>
                    </div>

                    {/* Loading Text with Comic Bubble */}
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mt-8 relative"
                    >
                        <div className="bg-white border-6 border-black px-8 py-4 rounded-2xl relative"
                             style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                            {/* Speech bubble pointer */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 
                                          border-l-[20px] border-l-transparent 
                                          border-r-[20px] border-r-transparent 
                                          border-b-[25px] border-b-black" />
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 
                                          border-l-[17px] border-l-transparent 
                                          border-r-[17px] border-r-transparent 
                                          border-b-[22px] border-b-white" />
                            
                            <p className="text-xl md:text-3xl font-black text-black"
                               style={{ 
                                   fontFamily: 'Impact, sans-serif',
                                   letterSpacing: '1px'
                               }}>
                                ASSEMBLING HERO...
                            </p>
                        </div>
                    </motion.div>

                    {/* POW! effect when complete */}
                    {progress >= 100 && (
                        <>
                            {/* BOOM explosion */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                animate={{ 
                                    scale: [0, 1.5, 2.5],
                                    opacity: [0, 1, 0],
                                    rotate: 0
                                }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="text-[12rem] md:text-[20rem] font-black text-yellow-400"
                                     style={{ 
                                         fontFamily: 'Impact, sans-serif',
                                         textShadow: '8px 8px 0px #000, 0 0 40px rgba(255, 215, 0, 0.8)',
                                         WebkitTextStroke: '6px black'
                                     }}>
                                    POW!
                                </div>
                            </motion.div>
                            
                            {/* Star burst */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-20 bg-yellow-400"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transformOrigin: '0 0',
                                        transform: `rotate(${i * 45}deg)`
                                    }}
                                    initial={{ scaleY: 0, opacity: 1 }}
                                    animate={{ scaleY: [0, 1, 0], opacity: [1, 1, 0] }}
                                    transition={{ duration: 0.5 }}
                                />
                            ))}
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
