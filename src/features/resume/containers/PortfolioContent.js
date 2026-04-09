import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../ThemeContext';
import DeveloperComicNav from '../../../components/DeveloperComicNav';
import MarvelHeroStory from '../../../components/MarvelHeroStory';
import ComicAbout from '../../../components/ComicAbout';
import ComicProjects from '../../../components/ComicProjects';
import ComicSkills from '../../../components/ComicSkills';
import ComicBlog from '../../../components/ComicBlog';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import LoadingScreen from '../../../components/LoadingScreen';
import { fetchProjects, fetchExperiences } from '../../../services/contentService';

const PortfolioContent = () => {
    const { theme, toggleTheme } = useTheme();
    const [projects, setProjects] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [p, e] = await Promise.all([
                    fetchProjects(),
                    fetchExperiences()
                ]);
                setProjects(p);
                setExperiences(e);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => setIsLoading(false), 1200);
            }
        };
        fetchData();
    }, []);

    const tabContent = {
        home: <MarvelHeroStory theme={theme} />,
        about: <ComicAbout theme={theme} />,
        projects: <ComicProjects projects={projects} theme={theme} />,
        skills: <ComicSkills theme={theme} />,
        experience: (
            <div className="min-h-screen py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 border-8 border-black inline-block px-12 py-6 transform rotate-2"
                             style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                            <h2 className="text-7xl font-black text-white"
                                style={{ 
                                    fontFamily: 'Impact, sans-serif',
                                    textShadow: '4px 4px 0px #000'
                                }}>
                                HERO JOURNEY
                            </h2>
                        </div>
                    </motion.div>
                    <Experience theme={theme} experiences={experiences} />
                </div>
            </div>
        ),
        blog: <ComicBlog theme={theme} />,
        contact: (
            <div className="min-h-screen py-32 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 border-8 border-black inline-block px-12 py-6 transform -rotate-2"
                             style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}>
                            <h2 className="text-7xl font-black text-white"
                                style={{ 
                                    fontFamily: 'Impact, sans-serif',
                                    textShadow: '5px 5px 0px #000'
                                }}>
                                TEAM UP!
                            </h2>
                        </div>
                        <p className="text-3xl font-black text-yellow-400 mt-8"
                           style={{ 
                               fontFamily: 'Impact, sans-serif',
                               textShadow: '2px 2px 0px #000'
                           }}>
                            LET'S BUILD SOMETHING LEGENDARY!
                        </p>
                    </motion.div>
                    <Contact theme={theme} />
                </div>
            </div>
        ),
    };

    return (
        <>
            <LoadingScreen isLoading={isLoading} />
            
            <div className="bg-black text-white overflow-x-hidden min-h-screen">
                {/* Developer Comic Navigation */}
                <DeveloperComicNav 
                    theme={theme} 
                    toggleTheme={toggleTheme}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                
                {/* Gradient Background Orbs */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
                </div>
                
                {!isLoading && (
                    <div className="relative z-10 pt-20">
                        {/* Animated Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {tabContent[activeTab]}
                            </motion.div>
                        </AnimatePresence>

                        {/* Footer */}
                        <footer className="bg-black border-t-8 border-yellow-400 py-8 mt-20">
                            <div className="text-center">
                                <p className="text-2xl font-black text-yellow-400"
                                   style={{ 
                                       fontFamily: 'Impact, sans-serif',
                                       textShadow: '2px 2px 0px #000'
                                   }}>
                                    © {new Date().getFullYear()} &lt;WASHID STUDIOS/&gt; - ALL RIGHTS RESERVED!
                                </p>
                            </div>
                        </footer>
                    </div>
                )}
            </div>
        </>
    );
};

export default PortfolioContent;
