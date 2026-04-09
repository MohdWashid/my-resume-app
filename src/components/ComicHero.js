import React from 'react';
import { motion } from 'framer-motion';

const ComicHero = ({ theme }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-purple-900 to-blue-900 pt-20">
            {/* Comic Book Dots Pattern */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} />

            {/* Explosive Background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
            </motion.div>

            {/* Floating Code Symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {['</', '{', '}', '( )', '=>', '[]', '< >'].map((symbol, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-green-400 font-mono text-4xl opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl">
                {/* Code Bracket Decoration */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-0 text-yellow-400 font-mono text-6xl font-black"
                    style={{ textShadow: '3px 3px 0px #000' }}
                >
                    &lt;/&gt;
                </motion.div>

                {/* Comic Book Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <h1 className="text-7xl md:text-[10rem] font-black mb-6 tracking-tighter"
                        style={{
                            textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
                            WebkitTextStroke: '3px black',
                            color: '#FFD700',
                            fontFamily: 'Impact, sans-serif'
                        }}>
                        &lt;WASHID/&gt;
                    </h1>
                </motion.div>

                {/* Terminal-Style Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block bg-gray-900 border-6 border-green-500 px-8 py-6 mb-8 font-mono shadow-2xl"
                    style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}
                >
                    <div className="text-green-400 text-left space-y-1">
                        <div><span className="text-yellow-400">$</span> <span className="text-blue-400">whoami</span></div>
                        <div className="pl-4 text-2xl md:text-4xl font-black">→ FULL STACK DEVELOPER</div>
                        <div><span className="text-yellow-400">$</span> <span className="text-blue-400">echo $SUPERPOWER</span></div>
                        <div className="pl-4 text-xl text-yellow-400">→ "Turning coffee into code!"</div>
                        <div className="animate-pulse">█</div>
                    </div>
                </motion.div>

                {/* Comic Speech Bubble */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative inline-block bg-white text-black px-12 py-6 rounded-3xl border-8 border-black shadow-2xl mb-8"
                    style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}
                >
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px] border-t-black" />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[35px] border-t-white" />
                    
                    <p className="text-2xl md:text-4xl font-black uppercase"
                       style={{ fontFamily: 'Impact, sans-serif' }}>
                        The Code Avenger!
                    </p>
                </motion.div>

                {/* Power Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {[
                        { text: 'FLUTTER', color: 'from-blue-600 to-cyan-600' },
                        { text: 'REACT', color: 'from-cyan-600 to-blue-400' },
                        { text: 'NODE.JS', color: 'from-green-600 to-emerald-600' },
                        { text: 'MOBILE DEV', color: 'from-purple-600 to-pink-600' }
                    ].map((badge, i) => (
                        <motion.div
                            key={badge.text}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`bg-gradient-to-r ${badge.color} border-4 border-black px-6 py-3 font-black text-white`}
                            style={{ 
                                boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                                fontFamily: 'Impact, sans-serif'
                            }}
                        >
                            {badge.text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tagline with comic style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="bg-yellow-400 border-8 border-black inline-block px-12 py-6 transform rotate-2 mb-12"
                         style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                        <p className="text-2xl md:text-4xl font-black text-black uppercase"
                            style={{ fontFamily: 'Impact, sans-serif' }}>
                            🚀 BUILDING APPS THAT SAVE THE DAY! ⚡
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Indicator - POW Style */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                    className="inline-block"
                >
                    <div className="bg-red-600 border-6 border-black px-8 py-4 transform -rotate-3"
                         style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                        <span className="text-4xl font-black text-yellow-400"
                              style={{ 
                                  fontFamily: 'Impact, sans-serif',
                                  textShadow: '2px 2px 0px #000'
                              }}>
                            ↓ EXPLORE ↓
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComicHero;

