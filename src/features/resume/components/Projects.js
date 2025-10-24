import React from 'react';
import AnimatedSection from '../../../AnimatedSection';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import { SiTeepublic } from 'react-icons/si';
import { getTechnologyIcon } from '../../../utils/iconUtils';

const Projects = ({ theme, projects }) => (
    <AnimatedSection
        title="Projects"
        content={
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 
                        transform hover:scale-[1.02] hover:-translate-y-2 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800 hover:to-purple-900/40'
                                : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800 hover:to-purple-800/40'
                        } shadow-xl hover:shadow-2xl ${
                            theme === 'dark' ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-400/20'
                        }`}
                    >
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                        
                        <div className="p-8">
                            {/* Header Section */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <FaCode className="text-purple-400 mr-3 text-xl" />
                                        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-full text-xs font-bold ${
                                    theme === 'dark' 
                                        ? 'bg-purple-900/50 text-purple-300 border border-purple-700/50' 
                                        : 'bg-purple-800/50 text-purple-200 border border-purple-600/50'
                                }`}>
                                    #{index + 1}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 pl-8 border-l-2 border-purple-500/50">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                                    <FaRocket className="mr-2" />
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium
                                            transition-all duration-300 ${
                                                theme === 'dark'
                                                    ? 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                                    : 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                            } border border-gray-600/50 hover:border-purple-500/50`}
                                        >
                                            {getTechnologyIcon(tech)}
                                            <span className="ml-1">{tech}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700/50">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold
                                        transition-all duration-300 transform hover:scale-105 ${
                                            theme === 'dark'
                                                ? 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-lg hover:shadow-gray-500/50'
                                                : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white shadow-lg hover:shadow-gray-400/50'
                                        }`}
                                    >
                                        <FaGithub className="mr-2" /> 
                                        GitHub
                                    </a>
                                )}

                                {project.status && (
                                    <a
                                        href={project.status}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold
                                        transition-all duration-300 transform hover:scale-105 ${
                                            theme === 'dark'
                                                ? 'bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white shadow-lg hover:shadow-orange-500/50'
                                                : 'bg-gradient-to-r from-orange-700 to-red-600 hover:from-orange-600 hover:to-red-500 text-white shadow-lg hover:shadow-orange-400/50'
                                        }`}
                                    >
                                        <SiTeepublic className="mr-2" />
                                        {project.status}
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold
                                        transition-all duration-300 transform hover:scale-105 ${
                                            theme === 'dark'
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg hover:shadow-purple-500/50'
                                                : 'bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-400/50'
                                        }`}
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> 
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 pointer-events-none ${
                            theme === 'dark'
                                ? 'ring-2 ring-purple-500/30'
                                : 'ring-2 ring-purple-400/30'
                        }`}></div>
                    </div>
                ))}
            </div>
        }
    />
);

export default Projects;