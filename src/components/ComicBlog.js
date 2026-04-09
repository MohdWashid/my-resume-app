import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComicBlog = () => {
    const [pageFlip, setPageFlip] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-yellow-900 py-6 sm:py-12 px-2 sm:px-4 lg:px-8 overflow-x-hidden">
            {/* Comic Book Page Effect */}
            <div className="max-w-7xl mx-auto">
                {/* COMIC COVER */}
                <motion.div
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-8 sm:mb-16 relative"
                    style={{ perspective: "1000px" }}
                >
                    <div className="relative bg-gradient-to-br from-red-600 via-yellow-500 to-blue-700 border-4 sm:border-8 lg:border-[12px] border-black p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300"
                        style={{
                            boxShadow: '20px 20px 0px rgba(0,0,0,0.9), 0 0 50px rgba(255,215,0,0.4)',
                        }}>

                        {/* Comic Book Title Banner */}
                        <div className="absolute top-0 left-0 right-0 bg-red-600 border-b-4 sm:border-b-8 border-black py-1 sm:py-2 px-2 sm:px-4">
                            <p className="text-white font-black text-xs sm:text-sm tracking-widest text-center"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                MARVEL PRESENTS
                            </p>
                        </div>

                        {/* Issue Number Circle */}
                        <div className="absolute top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 border-3 sm:border-4 lg:border-6 border-black rounded-full flex items-center justify-center transform -rotate-12"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <div className="text-center">
                                <p className="text-[8px] sm:text-xs font-black">ISSUE</p>
                                <p className="text-lg sm:text-2xl lg:text-3xl font-black leading-none">#1</p>
                            </div>
                        </div>

                        {/* Price Tag */}
                        <div className="absolute top-2 sm:top-4 lg:top-6 right-2 sm:right-4 lg:right-6 bg-white border-2 sm:border-4 border-black px-2 sm:px-4 py-1 sm:py-2 transform rotate-6"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <p className="text-sm sm:text-lg lg:text-xl font-black">FREE!</p>
                        </div>

                        <div className="mt-6 sm:mt-8 text-center">
                            {/* Main Title */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                    rotate: [-1, 1, -1]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="mb-4 sm:mb-6"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white mb-1 sm:mb-2 leading-none"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000, 6px 6px 0px rgba(255,0,0,0.5)',
                                        WebkitTextStroke: '2px black',
                                        letterSpacing: '-1px'
                                    }}>
                                    THE
                                </h1>
                                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-600 bg-clip-text text-transparent leading-none"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '0 0 40px rgba(255,215,0,0.8)',
                                        WebkitTextStroke: '3px black',
                                        letterSpacing: '-2px'
                                    }}>
                                    FLUTTER
                                </h1>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000, 6px 6px 0px rgba(0,100,255,0.5)',
                                        WebkitTextStroke: '2px black'
                                    }}>
                                    CHRONICLES
                                </h1>
                            </motion.div>

                            {/* Subtitle Banner */}
                            <div className="bg-black border-3 sm:border-4 lg:border-6 border-yellow-400 py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 inline-block transform -rotate-1 mb-4 sm:mb-6 lg:mb-8"
                                style={{ boxShadow: '8px 8px 0px rgba(255,215,0,0.6)' }}>
                                <p className="text-base sm:text-xl md:text-2xl lg:text-4xl font-black text-yellow-400"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        letterSpacing: '1px'
                                    }}>
                                    AVENGERS: INFINITY CODE
                                </p>
                            </div>

                            {/* Hero Images Row */}
                            <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap mb-4 sm:mb-6">
                                {[
                                    'https://i.ibb.co/PsBQ12HC/image.png',
                                    'https://i.ibb.co/Q7cfhyLF/image.png',
                                    'https://i.ibb.co/G4cknTqm/image.png',
                                    'https://i.ibb.co/6R3V9x7N/image.png',
                                    'https://i.ibb.co/Q3vZQW6N/image.png',
                                    'https://i.ibb.co/gLMyd0Yn/image.png'
                                ].map((img, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="w-12 h-14 sm:w-16 sm:h-20 lg:w-20 lg:h-24 border-2 sm:border-3 lg:border-4 border-black transform hover:scale-110 transition-transform"
                                        style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
                                    >
                                        <img src={img} alt="Hero" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tagline */}
                            <div className="bg-red-600 border-2 sm:border-3 lg:border-4 border-black px-3 sm:px-6 lg:px-8 py-2 sm:py-3 inline-block transform rotate-1">
                                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-white"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    ⚡ ONE CODEBASE TO RULE THEM ALL! ⚡
                                </p>
                            </div>

                            {/* Comics Code Authority Stamp */}
                            <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 right-2 sm:right-4 lg:right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-[6px] sm:text-[8px] font-black">APPROVED</p>
                                    <p className="text-[8px] sm:text-xs font-black leading-none">CCA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sound Effect */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="hidden sm:block absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 text-3xl sm:text-5xl lg:text-7xl font-black text-yellow-400 opacity-80"
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '4px 4px 0px #000',
                            WebkitTextStroke: '2px black'
                        }}>
                        WHOOSH!
                    </motion.div>
                </motion.div>

                {/* Story Begins Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8 lg:mb-12"
                >
                    <div className="bg-yellow-400 border-y-3 sm:border-y-4 lg:border-y-6 border-black py-2 sm:py-3 lg:py-4 text-center"
                        style={{ boxShadow: '0 8px 0px rgba(0,0,0,0.6)' }}>
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-black text-black"
                            style={{ fontFamily: 'Impact, sans-serif' }}>
                            📖 OUR STORY BEGINS... 📖
                        </p>
                    </div>
                </motion.div>

                {/* PANEL 1 - Opening Scene */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        {/* Panel Number */}
                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">1</span>
                        </div>

                        {/* Location Caption */}
                        <div className="bg-yellow-400 border-2 sm:border-3 lg:border-4 border-black px-3 sm:px-4 lg:px-6 py-1 sm:py-2 inline-block mb-3 sm:mb-4"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                            <p className="text-sm sm:text-base lg:text-xl font-black text-black"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                📍 STARK TOWER - NEW YORK CITY
                            </p>
                        </div>

                        {/* Narration Box */}
                        <div className="bg-yellow-100 border-2 sm:border-3 lg:border-4 border-black p-3 sm:p-4 mb-4 sm:mb-6"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.5)' }}>
                            <p className="text-sm sm:text-base lg:text-lg font-bold text-black italic leading-relaxed"
                                style={{ fontFamily: 'Georgia, serif' }}>
                                The Avengers have assembled in Stark's high-tech conference room.
                                But today, they're not preparing for battle against Thanos or Ultron...
                            </p>
                        </div>

                        <div className="bg-gray-900 border-2 sm:border-3 lg:border-4 border-yellow-400 p-3 sm:p-4 mb-3 sm:mb-4"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.5)' }}>
                            <p className="text-base sm:text-lg lg:text-2xl font-black text-yellow-400 italic"
                                style={{ fontFamily: 'Georgia, serif' }}>
                                They're about to discover the most powerful weapon in mobile development...
                            </p>
                        </div>

                        {/* Scene Image */}
                        <div className="border-3 sm:border-4 lg:border-6 border-black relative overflow-hidden"
                            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                            <img
                                src="https://i.ibb.co/ynztjDHz/image.png"
                                alt="Meeting room"
                                className="w-full h-auto object-cover"
                            />
                            {/* Comic dots overlay */}
                            <div className="absolute inset-0 bg-black opacity-20"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
                                    backgroundSize: '4px 4px'
                                }} />
                        </div>

                        {/* Sound Effect */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="hidden sm:block absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 text-2xl sm:text-3xl lg:text-5xl font-black text-cyan-400 transform -rotate-12"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            BZZT!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 2 - Iron Man Explains */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-red-900 to-yellow-800 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        {/* Panel Number */}
                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">2</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            {/* Left: Iron Man Image */}
                            <div className="relative">
                                <div className="border-3 sm:border-4 lg:border-6 border-black bg-red-700 p-2 sm:p-3 transform rotate-2"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/7tKcKtY2/image.png"
                                        alt="Iron Man"
                                        className="w-full h-auto border-2 sm:border-3 lg:border-4 border-yellow-400"
                                    />
                                </div>

                                {/* Character Name Plate */}
                                <div className="bg-yellow-400 border-2 sm:border-3 lg:border-4 border-black px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center mt-2 sm:mt-3 lg:mt-4 transform -rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-base sm:text-xl lg:text-2xl font-black text-black"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        IRON MAN
                                    </p>
                                    <p className="text-xs sm:text-sm font-bold text-red-600">TONY STARK</p>
                                </div>

                                {/* Thought Caption */}
                                <div className="mt-2 sm:mt-3 lg:mt-4 bg-gray-800 border-2 sm:border-3 lg:border-4 border-red-600 p-2 sm:p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-300 italic">
                                        *Genius, Billionaire, Playboy, Philanthropist - and now... Flutter Developer?*
                                    </p>
                                </div>
                            </div>

                            {/* Right: Speech Bubble */}
                            <div className="relative flex items-center">
                                <div className="bg-white border-3 sm:border-4 lg:border-6 border-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    {/* Speech bubble pointer */}
                                    <div className="hidden md:block absolute -left-6 lg:-left-8 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '20px solid transparent',
                                            borderBottom: '20px solid transparent',
                                            borderRight: '30px solid black'
                                        }} />
                                    <div className="hidden md:block absolute -left-5 lg:-left-6 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '18px solid transparent',
                                            borderBottom: '18px solid transparent',
                                            borderRight: '28px solid white'
                                        }} />

                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black mb-2 sm:mb-3 lg:mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "LISTEN UP, TEAM!"
                                    </p>

                                    <p className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 sm:mb-3">
                                        "I've been analyzing this <span className="bg-red-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 font-black text-sm sm:text-base">FLUTTER</span> framework..."
                                    </p>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-3">
                                        "And let me tell you - it's <span className="font-black text-red-600 text-lg sm:text-xl lg:text-2xl">REVOLUTIONARY!</span>"
                                    </p>

                                    <p className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                        "<span className="bg-yellow-400 px-1 sm:px-2 py-0.5 sm:py-1 font-black">ONE CODEBASE</span> for iOS, Android, Web, AND Desktop!"
                                    </p>

                                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-2 sm:mt-3 italic">
                                        "Built by Google with <span className="font-black">DART</span> language. The architecture? Pure genius!"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sound Effect */}
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="hidden sm:block absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 text-3xl sm:text-4xl lg:text-6xl font-black text-yellow-400"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            POW!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 3 - Captain America Questions */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-blue-900 to-red-800 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        {/* Panel Number */}
                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">3</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            {/* Left: Speech Bubble */}
                            <div className="relative flex items-center order-2 md:order-1">
                                <div className="bg-white border-3 sm:border-4 lg:border-6 border-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    {/* Speech bubble pointer */}
                                    <div className="hidden md:block absolute -right-6 lg:-right-8 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '20px solid transparent',
                                            borderBottom: '20px solid transparent',
                                            borderLeft: '30px solid black'
                                        }} />
                                    <div className="hidden md:block absolute -right-5 lg:-right-6 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '18px solid transparent',
                                            borderBottom: '18px solid transparent',
                                            borderLeft: '28px solid white'
                                        }} />

                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black mb-2 sm:mb-3 lg:mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "HOLD ON, TONY!"
                                    </p>

                                    <p className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 sm:mb-3">
                                        "Sounds impressive, but what about <span className="bg-blue-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 font-black text-lg sm:text-xl lg:text-2xl">PERFORMANCE</span>?"
                                    </p>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-3">
                                        "We need <span className="font-black text-blue-600">RELIABILITY!</span>"
                                    </p>

                                    <p className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                        "Can it handle the PRESSURE in the field?"
                                    </p>

                                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-2 sm:mt-3 italic">
                                        "I've seen too many frameworks promise the world..."
                                    </p>
                                </div>
                            </div>

                            {/* Right: Cap Image */}
                            <div className="relative order-1 md:order-2">
                                <div className="border-3 sm:border-4 lg:border-6 border-black bg-blue-700 p-2 sm:p-3 transform -rotate-2"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/KxQpJHnt/image.png"
                                        alt="Captain America"
                                        className="w-full h-auto border-2 sm:border-3 lg:border-4 border-red-600"
                                    />
                                </div>

                                {/* Character Name Plate */}
                                <div className="bg-red-600 border-2 sm:border-3 lg:border-4 border-black px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center mt-2 sm:mt-3 lg:mt-4 transform rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-base sm:text-xl lg:text-2xl font-black text-white"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        CAPTAIN AMERICA
                                    </p>
                                    <p className="text-xs sm:text-sm font-bold text-blue-200">STEVE ROGERS</p>
                                </div>

                                {/* Thought Caption */}
                                <div className="mt-2 sm:mt-3 lg:mt-4 bg-gray-800 border-2 sm:border-3 lg:border-4 border-blue-600 p-2 sm:p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-300 italic">
                                        *Always the voice of reason and skepticism*
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sound Effect */}
                        <motion.div
                            className="hidden sm:block absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 text-2xl sm:text-3xl lg:text-5xl font-black text-blue-400 transform rotate-12"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            CLANG!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 4 - Performance Explanation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-orange-900 to-red-900 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        {/* Panel Number */}
                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">4</span>
                        </div>

                        {/* Info Box - Technical Details */}
                        <div className="bg-yellow-400 border-3 sm:border-4 lg:border-6 border-black p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 transform -rotate-1"
                            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                            <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                                <div className="text-3xl sm:text-4xl lg:text-6xl">🔥</div>
                                <div>
                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black mb-2 sm:mb-3"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        FLUTTER PERFORMANCE BREAKDOWN:
                                    </p>
                                    <ul className="space-y-1 sm:space-y-2">
                                        <li className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                            ⚡ Compiles to <span className="bg-red-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 font-black text-xs sm:text-sm">NATIVE ARM CODE</span>
                                        </li>
                                        <li className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                            🚀 NO JavaScript Bridge = <span className="font-black text-red-600">ZERO LAG!</span>
                                        </li>
                                        <li className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                            💨 Smooth <span className="bg-black text-yellow-400 px-1 sm:px-2 py-0.5 sm:py-1 font-black text-xs sm:text-sm">60 FPS</span> animations
                                        </li>
                                        <li className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                            📱 Works on <span className="font-black">OLD & NEW</span> devices!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="border-2 sm:border-3 lg:border-4 border-black p-2 sm:p-3 lg:p-4 bg-black/60">
                                <img
                                    src="https://i.ibb.co/fYjWwGnJ/image.png"
                                    alt="Performance"
                                    className="w-full object-cover border-2 sm:border-3 lg:border-4 border-yellow-400 mb-2 sm:mb-3"
                                    style={{
                                        height: "auto",
                                        minHeight: "150px",
                                        objectPosition: "center 30%"
                                    }}
                                />
                                <p className="text-center text-yellow-400 font-black text-sm sm:text-base lg:text-xl">
                                    BATTLE-TESTED!
                                </p>
                            </div>

                            <div className="bg-white border-3 sm:border-4 lg:border-6 border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5"
                                style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-base sm:text-lg lg:text-2xl font-black text-red-600 mb-2 sm:mb-3">
                                    IRON MAN SAYS:
                                </p>
                                <p className="text-sm sm:text-base lg:text-xl font-bold text-black">
                                    "Oh, it handles pressure BETTER than my suit, Cap!"
                                </p>
                                <p className="text-xs sm:text-sm lg:text-lg text-gray-800 mt-2 sm:mt-3">
                                    "I've tested it myself. The performance metrics are <span className="font-black text-red-600">OFF THE CHARTS!</span>"
                                </p>
                            </div>
                        </div>

                        {/* Massive Sound Effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [-5, 5, -5]
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="hidden lg:block absolute top-1/2 right-2 lg:right-4 text-5xl lg:text-8xl font-black text-red-500 opacity-30 transform -translate-y-1/2"
                            style={{
                                textShadow: '6px 6px 0px #000',
                                WebkitTextStroke: '3px black'
                            }}>
                            BOOM!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 5 - Black Panther Enters */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-purple-900 via-black to-purple-900 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">5</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="relative">
                                <div className="border-6 border-black bg-gradient-to-br from-purple-700 to-black p-3 transform rotate-2"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/1G1WDt4Z/image.png"
                                        alt="Black Panther"
                                        className="w-full h-auto border-4 border-purple-400"
                                    />
                                </div>

                                <div className="bg-purple-700 border-4 border-black px-4 py-2 text-center mt-4"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-2xl font-black text-purple-200"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        BLACK PANTHER
                                    </p>
                                    <p className="text-sm font-bold text-purple-300">T'CHALLA</p>
                                </div>

                                <div className="mt-4 bg-gray-800 border-4 border-purple-600 p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-xs font-bold text-gray-300 italic">
                                        *King of Wakanda - where technology meets tradition*
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="bg-white border-6 border-black rounded-3xl p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    <div className="hidden md:block absolute -left-8 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '25px solid transparent',
                                            borderBottom: '25px solid transparent',
                                            borderRight: '35px solid black'
                                        }} />
                                    <div className="hidden md:block absolute -left-6 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '22px solid transparent',
                                            borderBottom: '22px solid transparent',
                                            borderRight: '32px solid white'
                                        }} />

                                    <p className="text-2xl md:text-3xl font-black text-black mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "FASCINATING..."
                                    </p>

                                    <p className="text-xl font-bold text-black mb-3">
                                        "In Wakanda, we value <span className="bg-purple-600 text-white px-2 py-1 font-black">INNOVATION</span> above all."
                                    </p>

                                    <p className="text-lg text-gray-800 mb-3">
                                        "Tell me about the <span className="font-black text-purple-600 text-2xl">DEVELOPMENT EXPERIENCE</span>..."
                                    </p>

                                    <p className="text-lg font-bold text-black">
                                        "How fast can developers iterate and improve?"
                                    </p>

                                    <p className="text-base text-gray-700 mt-3 italic">
                                        "Speed and efficiency - these are what matter in the modern world."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="hidden sm:block absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 text-2xl sm:text-3xl lg:text-5xl font-black text-purple-400"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            WAKANDA!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 6 - Thor's Hot Reload Demo */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-gray-700 via-blue-900 to-gray-700 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">6</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="relative flex items-center order-2 md:order-1">
                                <div className="bg-white border-6 border-black rounded-3xl p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    <div className="hidden md:block absolute -right-8 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '25px solid transparent',
                                            borderBottom: '25px solid transparent',
                                            borderLeft: '35px solid black'
                                        }} />
                                    <div className="hidden md:block absolute -right-6 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '22px solid transparent',
                                            borderBottom: '22px solid transparent',
                                            borderLeft: '32px solid white'
                                        }} />

                                    <p className="text-3xl font-black text-blue-600 mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "AH! I CAN ANSWER THAT!"
                                    </p>

                                    <p className="text-2xl font-bold text-black mb-3">
                                        "<span className="bg-yellow-400 px-2 py-1 font-black text-2xl">HOT RELOAD</span> is MAGNIFICENT!"
                                    </p>

                                    <p className="text-lg text-gray-800 mb-3">
                                        "You make changes... and <span className="font-black text-blue-600 text-xl">INSTANTLY</span> see them!"
                                    </p>

                                    <p className="text-lg font-bold text-black">
                                        "Without losing your app state! It's faster than <span className="font-black text-yellow-600">MJÖLNIR</span> returning to my hand!"
                                    </p>

                                    <div className="mt-4 bg-blue-600 border-4 border-black p-3 transform -rotate-1">
                                        <p className="text-center text-white font-black text-lg">
                                            ⚡ SUB-SECOND UPDATES! ⚡
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative order-1 md:order-2">
                                <div className="border-6 border-black bg-gradient-to-br from-gray-600 to-blue-700 p-3 transform -rotate-2"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/gM5Psd5z/image.png"
                                        alt="Thor"
                                        className="w-full h-auto border-4 border-yellow-400"
                                    />
                                </div>

                                <div className="bg-yellow-400 border-4 border-black px-4 py-2 text-center mt-4 transform rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-2xl font-black text-black"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        THOR
                                    </p>
                                    <p className="text-sm font-bold text-gray-700">GOD OF THUNDER</p>
                                </div>

                                <div className="mt-4 bg-gray-800 border-4 border-blue-600 p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-xs font-bold text-gray-300 italic">
                                        *Wielder of Mjölnir and... Hot Reload?*
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, 10, 0]
                            }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="hidden lg:block absolute top-1/2 left-2 lg:left-4 text-4xl lg:text-7xl font-black text-yellow-400 transform -translate-y-1/2 -rotate-12"
                            style={{
                                textShadow: '5px 5px 0px #000',
                                WebkitTextStroke: '3px black'
                            }}>
                            ZAP!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 7 - Spider-Man Widget System */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-red-800 via-blue-900 to-red-800 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">7</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="relative">
                                <div className="border-6 border-black bg-gradient-to-br from-red-600 to-blue-600 p-3 transform rotate-3"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/ymt3vrwy/image.png"
                                        alt="Spider-Man"
                                        className="w-full h-auto border-4 border-black"
                                    />
                                </div>

                                <div className="bg-red-600 border-4 border-black px-4 py-2 text-center mt-4 transform -rotate-2"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-2xl font-black text-white"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        SPIDER-MAN
                                    </p>
                                    <p className="text-sm font-bold text-blue-200">PETER PARKER</p>
                                </div>

                                <div className="mt-4 bg-gray-800 border-4 border-red-600 p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-xs font-bold text-gray-300 italic">
                                        *Your friendly neighborhood Flutter developer!*
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="bg-white border-6 border-black rounded-3xl p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    <div className="hidden md:block absolute -left-8 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '25px solid transparent',
                                            borderBottom: '25px solid transparent',
                                            borderRight: '35px solid black'
                                        }} />
                                    <div className="hidden md:block absolute -left-6 top-1/3 w-0 h-0"
                                        style={{
                                            borderTop: '22px solid transparent',
                                            borderBottom: '22px solid transparent',
                                            borderRight: '32px solid white'
                                        }} />

                                    <p className="text-2xl md:text-3xl font-black text-red-600 mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "MR. STARK! WAIT!"
                                    </p>

                                    <p className="text-xl font-bold text-black mb-3">
                                        "Don't forget the <span className="bg-red-600 text-white px-2 py-1 font-black">WIDGET SYSTEM</span>!"
                                    </p>

                                    <p className="text-lg text-gray-800 mb-3">
                                        "<span className="font-black text-red-600 text-2xl">EVERYTHING</span> is a widget!"
                                    </p>

                                    <p className="text-lg font-bold text-black mb-3">
                                        "Text, buttons, layouts - you build UIs like <span className="font-black text-blue-600">LEGO BLOCKS!</span>"
                                    </p>

                                    <p className="text-base text-gray-700">
                                        "With <span className="font-black">Material Design</span> and <span className="font-black">Cupertino</span> widgets, apps look native EVERYWHERE!"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 360]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="hidden sm:block absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 text-3xl sm:text-4xl lg:text-6xl font-black text-red-500"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            THWIP!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 8 - Loki's State Management Mischief */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-green-900 via-black to-yellow-900 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">8</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="relative flex items-center order-2 md:order-1">
                                <div className="bg-white border-6 border-black rounded-full p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    {/* Thought bubble circles */}
                                    <div className="hidden md:block absolute -right-16 top-12 w-8 h-8 bg-white border-4 border-black rounded-full" />
                                    <div className="hidden md:block absolute -right-10 top-8 w-5 h-5 bg-white border-3 border-black rounded-full" />
                                    <div className="hidden md:block absolute -right-6 top-6 w-3 h-3 bg-white border-2 border-black rounded-full" />

                                    <p className="text-2xl md:text-3xl font-black text-green-600 mb-4 italic"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        *thinking* "Hmm..."
                                    </p>

                                    <p className="text-xl font-bold text-black mb-3 italic">
                                        "But what about <span className="bg-green-600 text-white px-2 py-1 font-black">STATE MANAGEMENT</span>?"
                                    </p>

                                    <p className="text-lg text-gray-800 mb-3 italic">
                                        "I see many options... BLoC, Provider, Riverpod, GetX..."
                                    </p>

                                    <p className="text-lg font-bold text-black italic">
                                        "So many tricks to manage app state. Each with its own... <span className="font-black text-green-600 text-xl">POWER</span>."
                                    </p>

                                    <div className="mt-3 bg-yellow-400 border-4 border-black p-2 transform rotate-2">
                                        <p className="text-center font-black text-sm">
                                            😈 CHOICES... CHOICES... 😈
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative order-1 md:order-2">
                                <div className="border-6 border-black bg-gradient-to-br from-green-700 to-yellow-700 p-3 transform rotate-2"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/1kx27XR/image.png"
                                        alt="Loki"
                                        className="w-full h-auto border-4 border-yellow-400"
                                    />
                                </div>

                                <div className="bg-yellow-500 border-4 border-black px-4 py-2 text-center mt-4 transform -rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-2xl font-black text-black"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        LOKI
                                    </p>
                                    <p className="text-sm font-bold text-green-700">GOD OF MISCHIEF</p>
                                </div>

                                <div className="mt-4 bg-gray-800 border-4 border-green-600 p-3"
                                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}>
                                    <p className="text-xs font-bold text-gray-300 italic">
                                        *Always finding the complicated path...*
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, -10, 10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="hidden sm:block absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 text-2xl sm:text-3xl lg:text-5xl font-black text-green-400 transform"
                            style={{
                                textShadow: '4px 4px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            SNEAK!
                        </motion.div>
                    </div>
                </motion.div>

                {/* PANEL 9 - Black Panther's Wisdom */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-3 sm:p-4 lg:p-6 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600 border-2 sm:border-3 lg:border-4 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-base sm:text-xl lg:text-2xl font-black text-white">9</span>
                        </div>

                        <div className="grid md:grid-cols-[1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] gap-4 sm:gap-6">
                            <div>
                                <div className="border-3 sm:border-4 lg:border-6 border-black bg-purple-700 p-2 sm:p-3"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                    <img
                                        src="https://i.ibb.co/0VvXnpdC/image.png"
                                        alt="Black Panther"
                                        className="w-full h-auto object-cover border-2 sm:border-3 lg:border-4 border-purple-400"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                <div className="bg-white border-3 sm:border-4 lg:border-6 border-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 relative"
                                    style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>

                                    <div className="hidden lg:block absolute -left-6 lg:-left-8 top-1/4 w-0 h-0"
                                        style={{
                                            borderTop: '20px solid transparent',
                                            borderBottom: '20px solid transparent',
                                            borderRight: '30px solid black'
                                        }} />
                                    <div className="hidden lg:block absolute -left-5 lg:-left-6 top-1/4 w-0 h-0"
                                        style={{
                                            borderTop: '18px solid transparent',
                                            borderBottom: '18px solid transparent',
                                            borderRight: '28px solid white'
                                        }} />

                                    <p className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-600 mb-2 sm:mb-3 lg:mb-4"
                                        style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        "THE CHOICE IS YOURS, LOKI."
                                    </p>

                                    <p className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 sm:mb-3">
                                        "But all paths lead to <span className="bg-purple-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 font-black text-lg sm:text-xl lg:text-2xl">POWERFUL APPLICATIONS!</span>"
                                    </p>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-3">
                                        "With Flutter and <span className="font-black text-orange-600">Firebase</span>, <span className="font-black text-blue-600">REST APIs</span>, and thousands of packages on <span className="font-black text-purple-600">pub.dev</span>..."
                                    </p>

                                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                                        "The possibilities are <span className="font-black text-purple-600 text-xl sm:text-2xl lg:text-3xl">LIMITLESS!</span>"
                                    </p>

                                    <div className="mt-3 sm:mt-4 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-3 lg:border-4 border-black p-2 sm:p-3">
                                        <p className="text-center text-white font-black text-sm sm:text-base lg:text-lg">
                                            💜 LIKE WAKANDA'S TECHNOLOGY! 💜
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CLIMAX PANEL - All Avengers Unite */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8 lg:mb-12"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                        style={{ boxShadow: '20px 20px 0px rgba(0,0,0,0.9)' }}>

                        {/* Epic Panel Number */}
                        <div className="absolute -top-3 sm:-top-4 lg:-top-6 -left-3 sm:-left-4 lg:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-400 border-3 sm:border-4 lg:border-6 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-black">10</span>
                        </div>

                        {/* Background action lines */}
                        <div className="absolute inset-0 opacity-20">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute bg-white h-1"
                                    style={{
                                        width: '200%',
                                        top: `${i * 5}%`,
                                        transform: `rotate(${-20 + i * 2}deg)`,
                                        transformOrigin: 'center'
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10">
                            {/* Title Banner */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="bg-yellow-400 border-3 sm:border-4 lg:border-6 border-black inline-block px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-6 mb-4 sm:mb-6 lg:mb-8 transform -rotate-2"
                                style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-black text-center"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        WebkitTextStroke: '2px black'
                                    }}>
                                    AVENGERS...
                                </h2>
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="bg-red-600 border-3 sm:border-4 lg:border-6 border-black inline-block px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8 mb-6 sm:mb-8 lg:mb-10 transform rotate-1"
                                style={{ boxShadow: '14px 14px 0px rgba(0,0,0,0.8)' }}
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white text-center"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000',
                                        WebkitTextStroke: '2px black'
                                    }}>
                                    ASSEMBLED!
                                </h2>
                            </motion.div>

                            {/* Hero Lineup */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                {[
                                    { img: 'https://i.ibb.co/PsBQ12HC/image.png', name: 'IRON MAN' },
                                    { img: 'https://i.ibb.co/Q7cfhyLF/image.png', name: 'CAP' },
                                    { img: 'https://i.ibb.co/G4cknTqm/image.png', name: 'THOR' },
                                    { img: 'https://i.ibb.co/6R3V9x7N/image.png', name: 'PANTHER' },
                                    { img: 'https://i.ibb.co/Q3vZQW6N/image.png', name: 'SPIDEY' },
                                    { img: 'https://i.ibb.co/gLMyd0Yn/image.png', name: 'LOKI' }
                                ].map((hero, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="text-center"
                                    >
                                        <div className="border-2 sm:border-3 lg:border-4 border-yellow-400 bg-black p-1 sm:p-2"
                                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                            <img src={hero.img} alt={hero.name} className="w-full h-20 sm:h-24 lg:h-32 object-cover" />
                                        </div>
                                        <div className="bg-yellow-400 border-1 sm:border-2 border-black mt-1 sm:mt-2 py-0.5 sm:py-1">
                                            <p className="text-[10px] sm:text-xs font-black">{hero.name}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Epic Declaration */}
                            <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 border-3 sm:border-4 lg:border-6 border-black p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6"
                                style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white text-center mb-2 sm:mb-3 lg:mb-4"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000',
                                        WebkitTextStroke: '1px black'
                                    }}>
                                    FLUTTER: THE ULTIMATE WEAPON!
                                </p>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black text-center"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    FOR MOBILE DEVELOPMENT DOMINATION!
                                </p>
                            </div>

                            {/* Power Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                {[
                                    { icon: '⚡', title: 'CROSS-PLATFORM', color: 'red' },
                                    { icon: '🚀', title: 'BLAZING FAST', color: 'blue' },
                                    { icon: '🔥', title: 'HOT RELOAD', color: 'orange' },
                                    { icon: '💎', title: 'BEAUTIFUL UI', color: 'purple' },
                                    { icon: '🎯', title: 'PIXEL PERFECT', color: 'green' },
                                    { icon: '⚙️', title: 'NATIVE POWER', color: 'yellow' }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className={`bg-${feature.color}-600 border-2 sm:border-3 lg:border-4 border-black p-2 sm:p-3 lg:p-4 transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                                        style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                                    >
                                        <p className="text-2xl sm:text-3xl lg:text-4xl text-center mb-1 sm:mb-2">{feature.icon}</p>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-white text-center"
                                            style={{ fontFamily: 'Impact, sans-serif' }}>
                                            {feature.title}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Call to Action */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 border-3 sm:border-4 lg:border-6 border-black px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 inline-block transform rotate-1 cursor-pointer"
                                style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
                            >
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-black text-center"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px rgba(255,255,255,0.5)',
                                        WebkitTextStroke: '1px black'
                                    }}>
                                    🦸‍♂️ JOIN THE FLUTTER REVOLUTION! 🦸‍♀️
                                </p>
                            </motion.div>
                        </div>

                        {/* Massive Sound Effects */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [-10, 10, -10]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="hidden lg:block absolute top-6 lg:top-10 right-6 lg:right-10 text-5xl lg:text-9xl font-black text-yellow-400 opacity-40"
                            style={{
                                textShadow: '8px 8px 0px #000',
                                WebkitTextStroke: '4px black'
                            }}>
                            BOOM!
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [-20, 20, -20]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="hidden lg:block absolute bottom-6 lg:bottom-10 left-6 lg:left-10 text-4xl lg:text-8xl font-black text-red-500 opacity-40"
                            style={{
                                textShadow: '8px 8px 0px #000',
                                WebkitTextStroke: '4px black'
                            }}>
                            POW!
                        </motion.div>
                    </div>
                </motion.div>

                {/* TECHNICAL SPECS PAGE */}
                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8 lg:mb-12"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-yellow-400 p-4 sm:p-6 lg:p-8"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="bg-black border-2 sm:border-3 lg:border-4 border-yellow-400 p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 text-center mb-1 sm:mb-2"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                📊 FLUTTER TECH SPECS 📊
                            </h3>
                            <p className="text-sm sm:text-base lg:text-xl font-bold text-white text-center"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                DECLASSIFIED BY S.H.I.E.L.D.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            <div className="bg-white border-4 border-black p-4"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                <div className="bg-red-600 border-2 border-black p-2 mb-3">
                                    <p className="text-xl font-black text-white text-center">LANGUAGE</p>
                                </div>
                                <p className="text-lg font-bold text-black mb-2">
                                    <span className="bg-blue-600 text-white px-2 py-1">DART</span>
                                </p>
                                <p className="text-sm text-gray-700">
                                    Modern, type-safe, optimized for UI
                                </p>
                            </div>

                            <div className="bg-white border-4 border-black p-4"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                <div className="bg-blue-600 border-2 border-black p-2 mb-3">
                                    <p className="text-xl font-black text-white text-center">PLATFORMS</p>
                                </div>
                                <p className="text-lg font-bold text-black">
                                    iOS • Android • Web • Windows • macOS • Linux
                                </p>
                                <p className="text-sm text-gray-700 mt-2">
                                    📱💻🌐 ALL COVERED!
                                </p>
                            </div>

                            <div className="bg-white border-4 border-black p-4"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                <div className="bg-green-600 border-2 border-black p-2 mb-3">
                                    <p className="text-xl font-black text-white text-center">PERFORMANCE</p>
                                </div>
                                <p className="text-lg font-bold text-black mb-2">
                                    <span className="bg-yellow-400 px-2 py-1">60 FPS</span>
                                </p>
                                <p className="text-sm text-gray-700">
                                    Native compilation, no bridges!
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            <div className="bg-purple-600 border-4 border-black p-6"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-2xl font-black text-white mb-3"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    🎨 UI FEATURES:
                                </p>
                                <ul className="space-y-2 text-white font-bold">
                                    <li>✓ Material Design widgets</li>
                                    <li>✓ Cupertino (iOS) widgets</li>
                                    <li>✓ Custom animations</li>
                                    <li>✓ Gestures & touch</li>
                                    <li>✓ Accessibility built-in</li>
                                </ul>
                            </div>

                            <div className="bg-orange-600 border-4 border-black p-6"
                                style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-2xl font-black text-white mb-3"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    ⚙️ DEV TOOLS:
                                </p>
                                <ul className="space-y-2 text-white font-bold">
                                    <li>✓ Hot Reload (sub-second!)</li>
                                    <li>✓ DevTools debugger</li>
                                    <li>✓ Widget Inspector</li>
                                    <li>✓ Performance profiler</li>
                                    <li>✓ VS Code & Android Studio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* FINAL MESSAGE PANEL */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8 lg:mb-12"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-black bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 lg:p-8 relative"
                        style={{ boxShadow: '15px 15px 0px rgba(0,0,0,0.9)' }}>

                        <div className="text-center">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-yellow-400 mb-4 sm:mb-6"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000',
                                        WebkitTextStroke: '2px black'
                                    }}>
                                    "WITH GREAT POWER..."
                                </p>
                            </motion.div>

                            <div className="bg-red-600 border-3 sm:border-4 lg:border-6 border-yellow-400 p-4 sm:p-6 lg:p-8 inline-block mb-4 sm:mb-6 lg:mb-8 transform -rotate-1"
                                style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000'
                                    }}>
                                    "...COMES GREAT APPS!"
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                <div className="bg-blue-600 border-2 sm:border-3 lg:border-4 border-black p-3 sm:p-4 transform rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-4xl sm:text-5xl lg:text-6xl mb-1 sm:mb-2">🌍</p>
                                    <p className="text-base sm:text-lg lg:text-xl font-black text-white">GLOBAL REACH</p>
                                    <p className="text-xs sm:text-sm font-bold text-blue-100">Deploy anywhere, instantly</p>
                                </div>

                                <div className="bg-purple-600 border-2 sm:border-3 lg:border-4 border-black p-3 sm:p-4 transform -rotate-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-4xl sm:text-5xl lg:text-6xl mb-1 sm:mb-2">⚡</p>
                                    <p className="text-base sm:text-lg lg:text-xl font-black text-white">LIGHTNING FAST</p>
                                    <p className="text-xs sm:text-sm font-bold text-purple-100">Build & iterate rapidly</p>
                                </div>

                                <div className="bg-green-600 border-2 sm:border-3 lg:border-4 border-black p-3 sm:p-4 transform rotate-1 sm:col-span-2 lg:col-span-1"
                                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <p className="text-4xl sm:text-5xl lg:text-6xl mb-1 sm:mb-2">💪</p>
                                    <p className="text-base sm:text-lg lg:text-xl font-black text-white">COMMUNITY STRONG</p>
                                    <p className="text-xs sm:text-sm font-bold text-green-100">Backed by Google & millions</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 border-3 sm:border-4 lg:border-6 border-black p-4 sm:p-6"
                                style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 sm:mb-3"
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        textShadow: '4px 4px 0px #000'
                                    }}>
                                    START YOUR FLUTTER JOURNEY TODAY!
                                </p>
                                <p className="text-sm sm:text-base lg:text-xl font-bold text-black">
                                    📚 Visit flutter.dev • 💻 Try DartPad • 🎓 Learn with CodeLabs
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* END CREDITS - COMIC STYLE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-4 sm:border-6 lg:border-8 border-yellow-400 bg-black p-4 sm:p-6 lg:p-10 text-center relative"
                        style={{ boxShadow: '0 0 50px rgba(255, 215, 0, 0.8), 15px 15px 0px rgba(0,0,0,0.9)' }}>

                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-4 sm:border-t-6 lg:border-t-8 border-l-4 sm:border-l-6 lg:border-l-8 border-red-600"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-4 sm:border-t-6 lg:border-t-8 border-r-4 sm:border-r-6 lg:border-r-8 border-blue-600"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-4 sm:border-b-6 lg:border-b-8 border-l-4 sm:border-l-6 lg:border-l-8 border-blue-600"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-4 sm:border-b-6 lg:border-b-8 border-r-4 sm:border-r-6 lg:border-r-8 border-red-600"></div>

                        <motion.p
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(255,215,0,0.8)',
                                    '0 0 40px rgba(255,215,0,1)',
                                    '0 0 20px rgba(255,215,0,0.8)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-yellow-400 mb-4 sm:mb-6"
                            style={{ fontFamily: 'Impact, sans-serif' }}
                        >
                            THE END
                        </motion.p>

                        <div className="bg-red-600 border-2 sm:border-3 lg:border-4 border-yellow-400 p-3 sm:p-4 lg:p-6 inline-block mb-4 sm:mb-6 transform -rotate-1"
                            style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}>
                            <p className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                                📖 STORY BY: MOHD WASHID
                            </p>
                            <p className="text-sm sm:text-base lg:text-xl text-yellow-200">
                                ⚡ FEATURING: EARTH'S MIGHTIEST HEROES
                            </p>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white">
                                🎨 <span className="text-yellow-400">POWERED BY:</span> Flutter & Google
                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white">
                                🦸 <span className="text-yellow-400">HEROES:</span> Iron Man • Cap • Thor • Panther • Spidey • Loki
                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white">
                                💻 <span className="text-yellow-400">TECH:</span> React • Framer Motion • Tailwind CSS
                            </p>
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="mt-4 sm:mt-6 lg:mt-8"
                        >
                            <p className="text-3xl sm:text-4xl lg:text-5xl">🦸‍♂️</p>
                        </motion.div>

                        <motion.p
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mt-4 sm:mt-6"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                textShadow: '4px 4px 0px #000'
                            }}
                        >
                            EXCELSIOR! ⚡
                        </motion.p>

                        <div className="mt-4 sm:mt-6 border-2 sm:border-3 lg:border-4 border-yellow-400 p-3 sm:p-4 inline-block">
                            <p className="text-xs sm:text-sm font-bold text-gray-400">
                                © 2024 • Made with 💜 for Flutter Developers Everywhere
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">
                                Marvel characters used for educational/fan purposes
                            </p>
                        </div>

                        {/* "To Be Continued" tease */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            viewport={{ once: true }}
                            className="mt-4 sm:mt-6 lg:mt-8 bg-yellow-400 border-2 sm:border-3 lg:border-4 border-black p-3 sm:p-4 inline-block transform rotate-2"
                            style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                        >
                            <p className="text-base sm:text-lg lg:text-2xl font-black text-black"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                WILL OUR HEROES BUILD THE NEXT BIG APP?
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg font-bold text-red-600 mt-1 sm:mt-2">
                                FIND OUT IN THE NEXT ISSUE! 📖
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Post-Credits Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="border-3 sm:border-4 lg:border-6 border-red-600 bg-black p-3 sm:p-4 lg:p-6"
                        style={{ boxShadow: '10px 10px 0px rgba(255,0,0,0.5)' }}>
                        <div className="bg-gray-900 border-2 sm:border-3 lg:border-4 border-red-600 p-3 sm:p-4 lg:p-6">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-red-600 mb-2 sm:mb-3 text-center"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                🎬 POST-CREDITS SCENE 🎬
                            </p>
                            <p className="text-sm sm:text-base lg:text-xl font-bold text-white italic text-center mb-2">
                                *Nick Fury enters the room*
                            </p>
                            <div className="bg-white border-2 sm:border-3 lg:border-4 border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 mt-3 sm:mt-4">
                                <p className="text-sm sm:text-base lg:text-lg font-bold text-black">
                                    "I've been hearing about this Flutter initiative..."
                                </p>
                                <p className="text-base sm:text-lg lg:text-xl font-black text-black mt-2">
                                    "I'm here to talk to you about the <span className="bg-blue-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 text-sm sm:text-base">Avenger App Initiative</span>."
                                </p>
                            </div>
                            <p className="text-lg sm:text-xl lg:text-2xl font-black text-yellow-400 text-center mt-3 sm:mt-4"
                                style={{ fontFamily: 'Impact, sans-serif' }}>
                                TO BE CONTINUED... 🔜
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ComicBlog;