import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { getTechnologyIcon } from '../../../utils/iconUtils';

const Experience = ({ theme, experiences }) => (
    <div className="space-y-8">
        {experiences.map((exp, index) => (
            <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`border-8 border-black bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-orange-600 to-yellow-600' : 'from-blue-600 to-cyan-600'
                } p-8 transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
            >
                {/* Mission Badge */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center transform -rotate-12"
                     style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}>
                    <span className="text-4xl font-black text-black">
                        #{index + 1}
                    </span>
                </div>

                {/* Halftone pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)',
                    backgroundSize: '12px 12px'
                }} />

                <div className="relative z-10">
                    {/* Company & Position */}
                    <div className="bg-white border-4 border-black inline-block px-6 py-3 mb-4 transform -rotate-2"
                         style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}>
                        <h3 className="text-3xl md:text-4xl font-black text-black uppercase"
                            style={{ fontFamily: 'Impact, sans-serif' }}>
                            {exp.position}
                        </h3>
                    </div>

                    <div className="bg-black border-4 border-white inline-block px-4 py-2 mb-6"
                         style={{ boxShadow: '4px 4px 0px rgba(255,255,255,0.3)' }}>
                        <p className="text-xl font-black text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                            📍 {exp.company}
                        </p>
                    </div>

                    {/* Duration - Terminal Style */}
                    <div className="bg-gray-900 border-4 border-green-500 p-4 mb-6 font-mono">
                        <div className="text-green-400">
                            <span className="text-yellow-400">$ </span>
                            <span className="text-blue-400">cat duration.txt</span>
                            <p className="text-white mt-1">→ {exp.duration}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white/90 border-4 border-black p-6 mb-6"
                         style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.5)' }}>
                        <p className="text-black text-lg font-bold leading-relaxed">
                            {exp.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                        <div className="bg-yellow-400 border-4 border-black inline-block px-4 py-2 mb-4"
                             style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                            <span className="text-xl font-black text-black"
                                  style={{ fontFamily: 'Impact, sans-serif' }}>
                                TECH USED:
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech) => (
                                <motion.div
                                    key={tech}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="bg-black border-3 border-white px-4 py-2 flex items-center gap-2"
                                    style={{ boxShadow: '3px 3px 0px rgba(255, 255, 255, 0.4)' }}
                                >
                                    <span className="text-yellow-400">{getTechnologyIcon(tech)}</span>
                                    <span className="text-white font-bold text-sm">{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {exp.certificateUrl && (
                            <motion.a
                                href={exp.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-500 border-4 border-black px-6 py-3 font-black text-black text-lg"
                                style={{ 
                                    boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                <FaCertificate className="inline mr-2" />
                                CERTIFICATE
                            </motion.a>
                        )}

                        {exp.detailsUrl && (
                            <motion.a
                                href={exp.detailsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-500 border-4 border-black px-6 py-3 font-black text-white text-lg"
                                style={{ 
                                    boxShadow: '5px 5px 0px rgba(0,0,0,0.8)',
                                    fontFamily: 'Impact, sans-serif'
                                }}
                            >
                                <FaExternalLinkAlt className="inline mr-2" />
                                DETAILS
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Action lines decoration */}
                <div className="absolute bottom-4 left-4 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} 
                             className="bg-black h-1 mb-1"
                             style={{
                                 width: `${60 - i * 10}px`
                             }} />
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
);

export default Experience;