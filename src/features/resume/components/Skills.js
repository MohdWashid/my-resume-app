import React from 'react';
import { motion } from 'framer-motion';
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
                <div className="space-y-6 sm:space-y-8">
                    {skillCategories.map((category, index) => {
                        const colorClasses = getColorClasses(category.color, theme);
                        return (
                            <motion.div
                                key={index}
                                className={`glassmorphism group relative overflow-hidden rounded-2xl transition-all duration-500 shadow-2xl ${colorClasses.shadow}`}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.08, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.01 }}
                            >
                                {/* Decorative gradient top border - Animated */}
                                <motion.div 
                                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient}`}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: '200% 100%'
                                    }}
                                ></motion.div>
                                
                                <div className="p-6 sm:p-8">
                                    {/* Header Section */}
                                    <div className="flex items-center justify-between mb-6 gap-4">
                                        <motion.div 
                                            className="flex items-center min-w-0"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.08 + 0.2 }}
                                        >
                                            <motion.div 
                                                className={`${colorClasses.text} mr-3 sm:mr-4`}
                                                whileHover={{ rotate: 360, scale: 1.2 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {category.icon}
                                            </motion.div>
                                            <h3 className="text-lg sm:text-2xl font-bold text-white">{category.category}</h3>
                                        </motion.div>
                                        <motion.div 
                                            className={`glassmorphism-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold ${colorClasses.text} border ${colorClasses.border} shrink-0`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {category.skills.length} Skills
                                        </motion.div>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                className={`glassmorphism-light flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium text-gray-200 border border-gray-600/50 hover:scale-105 cursor-default`}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ 
                                                    delay: index * 0.08 + 0.4 + skillIndex * 0.03,
                                                    type: "spring"
                                                }}
                                                whileHover={{ 
                                                    y: -3,
                                                    borderColor: `rgba(${colorClasses.color === 'blue' ? '59, 130, 246' : '168, 85, 247'}, 0.5)`
                                                }}
                                            >
                                                {getTechnologyIcon(skill)}
                                                <span className="ml-2">{skill}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <motion.div 
                                    className={`absolute inset-0 rounded-2xl pointer-events-none ring-2 ring-transparent group-hover:${colorClasses.border}`}
                                    transition={{ duration: 0.3 }}
                                ></motion.div>
                            </motion.div>
                        );
                    })}

                    {/* Summary Card */}
                    <motion.div 
                        className="glassmorphism mt-8 p-6 sm:p-8 rounded-2xl text-center border-2 border-blue-700/30 shadow-2xl glow-blue"
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: skillCategories.length * 0.08 + 0.5, duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <motion.h4 
                            className="text-lg sm:text-xl font-bold text-white mb-2"
                            animate={{ 
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            🚀 Complete Mobile App Development Stack
                        </motion.h4>
                        <p className="text-sm sm:text-base text-gray-300">
                            From UI/UX to deployment, payment integration to real-time features - 
                            I build production-ready mobile applications end-to-end
                        </p>
                    </motion.div>
                </div>
            }
        />
    );
};

export default Skills;