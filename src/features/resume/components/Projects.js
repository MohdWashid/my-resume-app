import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../AnimatedSection';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import { SiTeepublic } from 'react-icons/si';
import { getTechnologyIcon } from '../../../utils/iconUtils';

const Projects = ({ theme, projects }) => (
    <AnimatedSection
        title="Projects"
        content={
            <div className="space-y-6 sm:space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="glassmorphism group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:glow-purple"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                    >
                        {/* Decorative gradient overlay - Animated */}
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        ></motion.div>
                        
                        <div className="p-6 sm:p-8">
                            {/* Header Section */}
                            <div className="flex items-start justify-between mb-4 gap-4">
                                <div className="flex-1 min-w-0">
                                    <motion.div 
                                        className="flex items-center mb-2 gap-3"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <FaCode className="text-purple-400 text-xl sm:text-2xl" />
                                        </motion.div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{project.name}</h3>
                                    </motion.div>
                                </div>
                                <motion.div 
                                    className="glassmorphism-light px-3 sm:px-4 py-2 rounded-full text-xs font-bold text-purple-300 border border-purple-700/50 shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                                >
                                    #{index + 1}
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.p 
                                className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 pl-4 sm:pl-8 border-l-2 border-purple-500/50"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Technologies */}
                            <motion.div 
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                            >
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <FaRocket className="mr-2" />
                                    </motion.div>
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            className="glassmorphism-light flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-200 border border-gray-600/50 hover:border-purple-500/50 hover:glow-purple cursor-default"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                        >
                                            {getTechnologyIcon(tech)}
                                            <span className="ml-1">{tech}</span>
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div 
                                className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-gray-700/50"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.6 }}
                            >
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-lg"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="mr-2" /> 
                                        GitHub
                                    </motion.a>
                                )}

                                {project.status && (
                                    <motion.a
                                        href={project.status}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white shadow-lg"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <SiTeepublic className="mr-2" />
                                        {project.status}
                                    </motion.a>
                                )}

                                {project.liveUrl && (
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg glow-purple"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> 
                                        Live Demo
                                    </motion.a>
                                )}
                            </motion.div>
                        </div>

                        {/* Hover Effect Border */}
                        <motion.div 
                            className="absolute inset-0 rounded-2xl pointer-events-none ring-2 ring-purple-500/0 group-hover:ring-purple-500/50"
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </div>
        }
    />
);

export default Projects;