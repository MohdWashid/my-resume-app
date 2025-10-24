import React from 'react';
import AnimatedSection from '../../../AnimatedSection';
import { getTechnologyIcon } from '../../../utils/iconUtils';
import { FaCode, FaMobileAlt, FaServer, FaTools, FaPalette, FaRocket } from 'react-icons/fa';

const Skills = ({ theme }) => {
    const skillCategories = [
        {
            category: 'Mobile Development',
            icon: <FaMobileAlt className="text-2xl" />,
            color: 'blue',
            skills: [
                'Flutter',
                'Dart',
                'Responsive UI Design',
                'Animations (Lottie, Rive, Custom Animations)',
                'App Localization (Multi-language Support)',
                'App Testing (Unit & Widget Testing)'
            ]
        },
        {
            category: 'Backend & APIs',
            icon: <FaServer className="text-2xl" />,
            color: 'green',
            skills: [
                'Node.js',
                'Firebase',
                'Cloud Firestore',
                'Firebase Authentication',
                'Firebase Storage',
                'RESTful APIs',
                'Integration with Third-party APIs'
            ]
        },
        {
            category: 'State Management',
            icon: <FaCode className="text-2xl" />,
            color: 'purple',
            skills: [
                'Provider (State Management)',
                'GetX (State Management)',
                'BLoC (Business Logic Component)',
                'Riverpod',
                'MVVM / Clean Architecture'
            ]
        },
        {
            category: 'Payment & Monetization',
            icon: <FaRocket className="text-2xl" />,
            color: 'pink',
            skills: [
                'Stripe Payment Gateway',
                'Razorpay Payment Gateway',
                'In-App Purchases',
                'AdMob (Monetization)'
            ]
        },
        {
            category: 'Real-time & Communication',
            icon: <FaTools className="text-2xl" />,
            color: 'yellow',
            skills: [
                'Socket.IO (for Real-time Chat)',
                'ZegoCloud SDK (for Live Streaming / Video Call)',
                'Firebase Cloud Messaging (Push Notifications)',
                'Firebase Remote Config'
            ]
        },
        {
            category: 'Maps & Location',
            icon: <FaPalette className="text-2xl" />,
            color: 'red',
            skills: [
                'Google Maps API',
                'Deep Linking',
                'Dynamic Links'
            ]
        },
        {
            category: 'Database & Storage',
            icon: <FaServer className="text-2xl" />,
            color: 'indigo',
            skills: [
                'Hive (Local Database)',
                'SQLite',
                'Shared Preferences'
            ]
        },
        {
            category: 'DevOps & Deployment',
            icon: <FaRocket className="text-2xl" />,
            color: 'teal',
            skills: [
                'Version Control (Git & GitHub)',
                'CI/CD (Continuous Integration / Delivery)',
                'App Deployment (Play Store & App Store)',
                'App Optimization & Performance Tuning'
            ]
        }
    ];

    const getColorClasses = (color, theme) => {
        const colors = {
            blue: {
                gradient: 'from-blue-600 to-blue-500',
                hoverGradient: 'hover:from-blue-500 hover:to-blue-400',
                shadow: 'hover:shadow-blue-500/50',
                border: 'border-blue-500/30',
                bg: 'bg-blue-900/30',
                text: 'text-blue-400'
            },
            green: {
                gradient: 'from-green-600 to-emerald-500',
                hoverGradient: 'hover:from-green-500 hover:to-emerald-400',
                shadow: 'hover:shadow-green-500/50',
                border: 'border-green-500/30',
                bg: 'bg-green-900/30',
                text: 'text-green-400'
            },
            purple: {
                gradient: 'from-purple-600 to-violet-500',
                hoverGradient: 'hover:from-purple-500 hover:to-violet-400',
                shadow: 'hover:shadow-purple-500/50',
                border: 'border-purple-500/30',
                bg: 'bg-purple-900/30',
                text: 'text-purple-400'
            },
            pink: {
                gradient: 'from-pink-600 to-rose-500',
                hoverGradient: 'hover:from-pink-500 hover:to-rose-400',
                shadow: 'hover:shadow-pink-500/50',
                border: 'border-pink-500/30',
                bg: 'bg-pink-900/30',
                text: 'text-pink-400'
            },
            yellow: {
                gradient: 'from-yellow-600 to-amber-500',
                hoverGradient: 'hover:from-yellow-500 hover:to-amber-400',
                shadow: 'hover:shadow-yellow-500/50',
                border: 'border-yellow-500/30',
                bg: 'bg-yellow-900/30',
                text: 'text-yellow-400'
            },
            red: {
                gradient: 'from-red-600 to-orange-500',
                hoverGradient: 'hover:from-red-500 hover:to-orange-400',
                shadow: 'hover:shadow-red-500/50',
                border: 'border-red-500/30',
                bg: 'bg-red-900/30',
                text: 'text-red-400'
            },
            indigo: {
                gradient: 'from-indigo-600 to-blue-500',
                hoverGradient: 'hover:from-indigo-500 hover:to-blue-400',
                shadow: 'hover:shadow-indigo-500/50',
                border: 'border-indigo-500/30',
                bg: 'bg-indigo-900/30',
                text: 'text-indigo-400'
            },
            teal: {
                gradient: 'from-teal-600 to-cyan-500',
                hoverGradient: 'hover:from-teal-500 hover:to-cyan-400',
                shadow: 'hover:shadow-teal-500/50',
                border: 'border-teal-500/30',
                bg: 'bg-teal-900/30',
                text: 'text-teal-400'
            }
        };
        return colors[color];
    };

    return (
        <AnimatedSection
            title="Skills & Expertise"
            content={
                <div className="space-y-6">
                    {skillCategories.map((category, index) => {
                        const colorClasses = getColorClasses(category.color, theme);
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 
                                transform hover:scale-[1.02] hover:-translate-y-2 ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800'
                                        : 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:from-gray-700 hover:via-gray-800'
                                } shadow-xl hover:shadow-2xl ${colorClasses.shadow}`}
                            >
                                {/* Decorative gradient top border */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient}`}></div>
                                
                                <div className="p-8">
                                    {/* Header Section */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <div className={`${colorClasses.text} mr-4`}>
                                                {category.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-xs font-bold ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}>
                                            {category.skills.length} Skills
                                        </div>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill}
                                                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium
                                                transition-all duration-300 ${
                                                    theme === 'dark'
                                                        ? 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                                        : 'bg-gray-700/80 hover:bg-gray-600 text-gray-200'
                                                } border border-gray-600/50 hover:border-${category.color}-500/50 hover:scale-105`}
                                            >
                                                {getTechnologyIcon(skill)}
                                                <span className="ml-2">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 pointer-events-none ring-2 ${colorClasses.border}`}></div>
                            </div>
                        );
                    })}

                    {/* Summary Card */}
                    <div className={`mt-8 p-8 rounded-2xl text-center ${
                        theme === 'dark' 
                            ? 'bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-2 border-blue-700/30' 
                            : 'bg-gradient-to-r from-blue-800/40 via-purple-800/40 to-pink-800/40 border-2 border-blue-600/30'
                    } shadow-xl`}>
                        <h4 className="text-xl font-bold text-white mb-2">
                            🚀 Complete Mobile App Development Stack
                        </h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
                            From UI/UX to deployment, payment integration to real-time features - 
                            I build production-ready mobile applications end-to-end
                        </p>
                    </div>
                </div>
            }
        />
    );
};

export default Skills;