import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperComicNav = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tabs = [
        { id: 'home', label: 'HOME', icon: '🏠' },
        { id: 'about', label: 'ABOUT', icon: '👨‍💻' },
        { id: 'projects', label: 'PROJECTS', icon: '⚡' },
        { id: 'skills', label: 'SKILLS', icon: '💪' },
        { id: 'experience', label: 'EXPERIENCE', icon: '🎯' },
        { id: 'blog', label: 'BLOG', icon: '📰' },
        { id: 'contact', label: 'CONTACT', icon: '📧' },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all ${
                scrolled ? 'bg-black border-b-4 border-yellow-400' : 'bg-black/80 backdrop-blur-md'
            }`}
            style={{ boxShadow: '0 4px 0px rgba(255, 215, 0, 0.3)' }}
        >
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo - Developer Style */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3"
                    >
                        <div className="bg-gradient-to-br from-red-600 to-yellow-400 border-4 border-black px-4 py-2 transform -rotate-1"
                             style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-2xl font-black text-white"
                                  style={{ 
                                      fontFamily: 'Impact, sans-serif',
                                      textShadow: '2px 2px 0px #000'
                                  }}>
                                &lt;WASHID/&gt;
                            </span>
                        </div>
                    </motion.div>

                    {/* Navigation Tabs - Comic Style */}
                    <div className="hidden md:flex items-center gap-2">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                data-tab={tab.id}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-4 py-2 font-black text-sm border-4 border-black transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-yellow-400 text-black transform -rotate-1'
                                        : 'bg-white/10 text-white hover:bg-white/20 transform rotate-1'
                                }`}
                                style={{
                                    boxShadow: activeTab === tab.id ? '3px 3px 0px rgba(0,0,0,0.8)' : '2px 2px 0px rgba(0,0,0,0.5)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                <span className="mr-1">{tab.icon}</span>
                                {tab.label}
                            </motion.button>
                        ))}
                        
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center ml-2"
                            style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}
                        >
                            <span className="text-xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            onClick={toggleTheme}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-yellow-400 border-3 border-black rounded-full flex items-center justify-center"
                            style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}
                        >
                            <span className="text-lg">{theme === 'dark' ? '🌙' : '☀️'}</span>
                        </motion.button>

                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-400 border-3 border-black px-4 py-2 font-black text-black"
                            style={{ 
                                boxShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                                fontFamily: 'Impact, sans-serif'
                            }}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 space-y-2 overflow-hidden"
                        >
                            {tabs.map((tab, index) => (
                                <motion.button
                                    key={tab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`w-full text-left px-4 py-3 font-black border-4 border-black ${
                                        activeTab === tab.id
                                            ? 'bg-yellow-400 text-black'
                                            : 'bg-white/10 text-white'
                                    }`}
                                    style={{
                                        boxShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                                        fontFamily: 'Impact, sans-serif'
                                    }}
                                >
                                    <span className="mr-2 text-xl">{tab.icon}</span>
                                    {tab.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default DeveloperComicNav;

