import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaBlog, FaEnvelope } from 'react-icons/fa';

const NavBar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'about', label: 'About', icon: <FaUser /> },
        { id: 'Experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { id: 'skills', label: 'Skills', icon: <FaTools /> },
        { id: 'blog', label: 'Blog', icon: <FaBlog /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
    ];
    
    const [gradientClass, setGradientClass] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateGradient = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                setGradientClass('from-yellow-500 via-orange-500 to-red-500');
            } else if (hour >= 12 && hour < 18) {
                setGradientClass('from-blue-500 via-cyan-500 to-teal-500');
            } else {
                setGradientClass('from-indigo-500 via-purple-500 to-pink-500');
            }
        };

        updateGradient();
        const interval = setInterval(updateGradient, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Header */}
                <div className="flex justify-between items-center py-4 md:hidden">
                    <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${gradientClass} flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-lg">MW</span>
                        </div>
                        <span className="text-white font-bold text-xl">Portfolio</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center justify-center space-x-2 py-4">
                    {tabs.map(tab => (
                        <li key={tab.id}>
                            <button
                                className={`
                                    group relative px-6 py-3 rounded-xl font-semibold
                                    transition-all duration-300 transform hover:scale-105
                                    flex items-center space-x-2
                                    ${activeTab === tab.id
                                        ? `bg-gradient-to-r ${gradientClass} text-white shadow-lg`
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
                                `}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span className={`text-lg ${activeTab === tab.id ? 'animate-pulse' : ''}`}>
                                    {tab.icon}
                                </span>
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full"></div>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Menu */}
                <div className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}>
                    <ul className="py-4 space-y-2">
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <button
                                    className={`
                                        w-full px-6 py-4 rounded-xl font-semibold
                                        transition-all duration-300 transform hover:scale-105
                                        flex items-center space-x-3
                                        ${activeTab === tab.id
                                            ? `bg-gradient-to-r ${gradientClass} text-white shadow-lg`
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
                                    `}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    <span className={`text-xl ${activeTab === tab.id ? 'animate-pulse' : ''}`}>
                                        {tab.icon}
                                    </span>
                                    <span>{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <div className="ml-auto">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Gradient Progress Bar */}
            <div className={`h-1 bg-gradient-to-r ${gradientClass} opacity-50`}></div>
        </nav>
    );
};

export default NavBar;