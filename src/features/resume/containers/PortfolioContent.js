import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaHeart, FaCode, FaRocket, FaStar, FaMoon, FaSun, FaChevronUp, FaChartLine, FaBullhorn, FaGoogle, FaFacebook, FaInstagram, FaTrophy, FaLightbulb, FaFire, FaAward, FaSearch, FaMagic } from 'react-icons/fa';
import { useTheme } from '../../../ThemeContext';
import SpaceScene from '../../../SpaceScene';
import FloatingText from '../../../FloatingText';
import NavBar from '../components/NavBar';
import TimeGreeting from '../components/TimeGreeting';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { fetchBlogPosts, fetchExperiences, fetchProjects } from '../../../services/contentService';

// Dynamic Quote Component with Typing Effect
const DynamicQuote = () => {
    const quotes = [
        "{ Building scalable mobile apps }",
        "[ Optimizing for performance ]",
        "< Driving growth through data />",
        "// SEO & Marketing enthusiast",
        "console.log('Creative solutions')",
        "=> Performance Marketing Expert",
        "{ Clean code, Clean results }",
        "[ Always learning, Always growing ]",
    ];

    const [currentQuote, setCurrentQuote] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        const quote = quotes[currentQuote];

        if (isTyping) {
            if (displayedText.length < quote.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(quote.slice(0, displayedText.length + 1));
                }, 50);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 15000); // Wait 15 seconds before deleting
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 30);
            } else {
                setCurrentQuote((prev) => (prev + 1) % quotes.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentQuote]);

    return (
        <div className="flex items-center gap-1 text-xs font-mono">
            <span className="text-gray-400">{displayedText}</span>
            <motion.span
                className="w-1.5 h-3 bg-blue-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </div>
    );
};

const PortfolioContent = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('about');
    const [projects, setProjects] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [p, b, e] = await Promise.all([
                    fetchProjects(),
                    fetchBlogPosts(),
                    fetchExperiences()
                ]);
                setProjects(p);
                setBlogPosts(b);
                setExperiences(e);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => setIsLoading(false), 800);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const tabVariants = {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1]
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className={`min-h-screen relative ${theme === 'dark' ? 'text-white' : 'text-white'} overflow-hidden`}>
            {/* Animated Cursor Follower */}
            <motion.div
                className="fixed w-6 h-6 rounded-full border-2 border-blue-400/50 pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />

            {/* Background Space Scene */}
            <div className="fixed inset-0 z-0">
                <SpaceScene theme={theme} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60"></div>
            </div>

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-blue-400/30 rounded-full pointer-events-none"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            {/* Fixed Navigation Bar - Always on Top */}
            {/* Animated Background Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1.5 h-1.5 rounded-full pointer-events-none"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, ${['rgba(59, 130, 246, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(236, 72, 153, 0.4)'][Math.floor(Math.random() * 3)]
                            }, transparent)`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.8, 1]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Fixed Navigation Bar - Always on Top */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50"
            >
                {/* Enhanced Navbar with Profile */}
                <div className="bg-gray-900/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between gap-6">
                            {/* Left: Profile Section */}
                            <motion.div
                                className="flex items-center gap-5"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <TimeGreeting className="text-sm text-gray-400 font-medium" />

                                {/* Profile Image with Status Indicator */}
                                <div className="relative group">
                                    <motion.div
                                        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2.5px] shadow-lg shadow-purple-500/20"
                                        whileHover={{ scale: 1.08, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden ring-2 ring-gray-800/50">
                                            <img
                                                src={process.env.PUBLIC_URL + "/images/Passport.jpg"}
                                                alt="Mohd Washid"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Active Status Dot with Pulse Effect */}
                                    <div className="absolute -bottom-0.5 -right-0.5">
                                        <motion.div
                                            className="relative w-4 h-4 bg-green-500 rounded-full border-[3px] border-gray-900 shadow-lg shadow-green-500/50"
                                            animate={{ scale: [1, 1.15, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Name & Dynamic Quote */}
                                <motion.div
                                    className="hidden md:flex flex-col justify-center min-w-0"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <h2 className="text-lg font-bold text-white tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                                            Mohd Washid
                                        </h2>
                                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                    </div>
                                    <div className="flex items-center">
                                        <DynamicQuote />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Center/Right: Navigation */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <NavBar
                                    theme={theme}
                                    toggleTheme={toggleTheme}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Subtle gradient line below navbar */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-10 min-h-screen flex flex-col pt-20">
                {/* Main Content Area */}
                <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
                    {isLoading ? (
                        <motion.div
                            className="flex flex-col items-center justify-center min-h-[60vh]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div className="relative w-24 h-24 mb-8">
                                <motion.div
                                    className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute inset-2 border-4 border-transparent border-b-pink-500 border-l-cyan-500 rounded-full"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                            <motion.p
                                className="text-xl text-gray-400 font-light"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Loading amazing content...
                            </motion.p>
                        </motion.div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                {activeTab === 'about' && <About theme={theme} />}
                                {activeTab === 'projects' && <Projects theme={theme} projects={projects} />}
                                {activeTab === 'Experience' && <Experience theme={theme} experiences={experiences} />}
                                {activeTab === 'skills' && <Skills theme={theme} />}
                                {activeTab === 'blog' && <Blog theme={theme} blogPosts={blogPosts} />}
                                {activeTab === 'contact' && <Contact theme={theme} handleSubmit={handleSubmit} />}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </main>

                {/* Footer */}
                <motion.footer
                    className="relative mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                    <div className="bg-gray-900/40 backdrop-blur-xl py-12">
                        <div className="container mx-auto px-6 text-center space-y-6 max-w-4xl">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center gap-3 text-gray-300"
                            >
                                <FaGlobe className="text-blue-400 text-xl" />
                                <p className="text-lg font-light">
                                    Building digital experiences & driving growth through data
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center justify-center gap-2 text-gray-400"
                            >
                                <span>Crafted with</span>
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    <FaHeart className="text-red-500" />
                                </motion.div>
                                <span>by Mohd Washid</span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-sm text-gray-500 pt-6 border-t border-gray-800"
                            >
                                © {new Date().getFullYear()} All rights reserved
                            </motion.div>
                        </div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                </motion.footer>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 group z-50"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                        <div className="relative bg-gray-800/80 backdrop-blur-md p-4 rounded-full border border-gray-700 group-hover:border-transparent transition-all duration-300">
                            <FaChevronUp className="text-2xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioContent;