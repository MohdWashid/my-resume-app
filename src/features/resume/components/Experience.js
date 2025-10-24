import React from 'react';
import AnimatedSection from '../../../AnimatedSection';
import { FaCertificate, FaExternalLinkAlt, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { getTechnologyIcon } from '../../../utils/iconUtils';

const Experience = ({ theme, experiences }) => (
    <AnimatedSection
        title="Professional Experience"
        content={
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 
                        transform hover:scale-[1.02] hover:-translate-y-2 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800 hover:to-blue-900/40'
                                : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800 hover:to-blue-800/40'
                        } shadow-xl hover:shadow-2xl ${
                            theme === 'dark' ? 'hover:shadow-blue-500/20' : 'hover:shadow-blue-400/20'
                        }`}
                    >
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        
                        <div className="p-8">
                            {/* Header Section */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <FaBriefcase className="text-blue-400 mr-3 text-xl" />
                                        <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                                    </div>
                                    <p className="text-blue-300 text-lg font-semibold mb-2">{exp.company}</p>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-full text-xs font-bold ${
                                    theme === 'dark' 
                                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50' 
                                        : 'bg-blue-800/50 text-blue-200 border border-blue-600/50'
                                }`}>
                                    #{index + 1}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 pl-8 border-l-2 border-blue-500/50">
                                {exp.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium
                                            transition-all duration-300 ${
                                                theme === 'dark'
                                                    ? 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                                    : 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                            } border border-gray-600/50 hover:border-blue-500/50`}
                                        >
                                            {getTechnologyIcon(tech)}
                                            <span className="ml-1">{tech}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700/50">
                                {exp.certificateUrl && (
                                    <a
                                        href={exp.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold
                                        transition-all duration-300 transform hover:scale-105 ${
                                            theme === 'dark'
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-blue-500/50'
                                                : 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-400/50'
                                        }`}
                                    >
                                        <FaCertificate className="mr-2" /> 
                                        View Certificate
                                    </a>
                                )}

                                {exp.detailsUrl && (
                                    <a
                                        href={exp.detailsUrl}
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
                                        More Details
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 pointer-events-none ${
                            theme === 'dark'
                                ? 'ring-2 ring-blue-500/30'
                                : 'ring-2 ring-blue-400/30'
                        }`}></div>
                    </div>
                ))}
            </div>
        }
    />
);

export default Experience;