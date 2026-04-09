import React from 'react';
import { motion } from 'framer-motion';
import { getTechnologyIcon } from '../utils/iconUtils';

const ComicProjects = ({ projects, theme }) => {
    return (
        <div className="min-h-screen py-32 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 border-8 border-black px-12 py-6 transform rotate-2"
                         style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}>
                        <h2 className="text-6xl md:text-8xl font-black text-white"
                            style={{ 
                                fontFamily: 'Impact, sans-serif',
                                textShadow: '4px 4px 0px #000'
                            }}>
                            EPIC MISSIONS
                        </h2>
                    </div>
                    <p className="text-2xl font-black text-yellow-400 mt-6"
                       style={{ 
                           fontFamily: 'Impact, sans-serif',
                           textShadow: '2px 2px 0px #000'
                       }}>
                        PROJECTS THAT SAVED THE DAY!
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            className={`border-8 border-black bg-gradient-to-br ${
                                index % 3 === 0 ? 'from-red-600 to-orange-600' :
                                index % 3 === 1 ? 'from-blue-600 to-purple-600' :
                                'from-green-600 to-teal-600'
                            } p-8 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                            style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
                        >
                            {/* Mission Number Badge */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center transform rotate-12"
                                 style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}>
                                <span className="text-3xl font-black text-black">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Halftone pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)',
                                backgroundSize: '12px 12px'
                            }} />

                            <div className="relative z-10">
                                {/* Project Name */}
                                <div className="bg-yellow-400 border-4 border-black inline-block px-6 py-3 mb-6 transform -rotate-1"
                                     style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}>
                                    <h3 className="text-3xl md:text-5xl font-black text-black uppercase"
                                        style={{ fontFamily: 'Impact, sans-serif' }}>
                                        {project.name}
                                    </h3>
                                </div>

                                {/* Description in Terminal */}
                                <div className="bg-black border-4 border-white p-6 mb-6 font-mono">
                                    <div className="text-green-400">
                                        <span className="text-yellow-400">$ </span>
                                        <span className="text-blue-400">cat description.txt</span>
                                    </div>
                                    <p className="text-white mt-2">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-4">
                                    <div className="bg-white border-4 border-black inline-block px-4 py-2 mb-4"
                                         style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                                        <span className="text-xl font-black text-black"
                                              style={{ fontFamily: 'Impact, sans-serif' }}>
                                            TECH STACK:
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies?.map((tech) => (
                                            <motion.div
                                                key={tech}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="bg-black border-3 border-yellow-400 px-4 py-2 flex items-center gap-2"
                                                style={{ boxShadow: '3px 3px 0px rgba(255, 215, 0, 0.5)' }}
                                            >
                                                <span className="text-yellow-400">{getTechnologyIcon(tech)}</span>
                                                <span className="text-white font-bold text-sm">{tech}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-black border-4 border-white px-8 py-3 font-black text-yellow-400 text-xl mr-4"
                                        style={{ 
                                            boxShadow: '6px 6px 0px rgba(255, 255, 255, 0.3)',
                                            fontFamily: 'Impact, sans-serif'
                                        }}
                                    >
                                        {'</> VIEW CODE'}
                                    </motion.a>
                                )}
                            </div>

                            {/* Action lines decoration */}
                            <div className="absolute bottom-4 right-4 opacity-30">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} 
                                         className="bg-yellow-400 h-1 mb-1"
                                         style={{
                                             width: `${80 - i * 12}px`,
                                             transform: `translateX(${i * 4}px)`
                                         }} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComicProjects;

