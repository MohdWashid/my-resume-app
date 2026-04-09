import React from 'react';
import { motion } from 'framer-motion';
import PowerBadge from './PowerBadge';

const ComicSkills = ({ theme }) => {
    const skillCategories = [
        {
            category: 'FRONTEND POWER',
            color: 'from-blue-600 to-cyan-600',
            icon: '🎨',
            skills: ['React', 'Flutter', 'JavaScript', 'Dart', 'HTML/CSS', 'Tailwind']
        },
        {
            category: 'BACKEND FORCE',
            color: 'from-green-600 to-emerald-600',
            icon: '⚙️',
            skills: ['Node.js', 'Firebase', 'REST API', 'MongoDB', 'SQL']
        },
        {
            category: 'MOBILE MASTERY',
            color: 'from-purple-600 to-pink-600',
            icon: '📱',
            skills: ['Flutter', 'Android', 'iOS', 'Cross-Platform', 'App Store']
        },
        {
            category: 'DEV WEAPONS',
            color: 'from-orange-600 to-red-600',
            icon: '🛠️',
            skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'Debugging']
        }
    ];

    return (
        <div className="min-h-screen py-32 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-400 border-8 border-black px-12 py-6 transform -rotate-2"
                         style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}>
                        <h2 className="text-7xl md:text-9xl font-black text-white"
                            style={{ 
                                fontFamily: 'Impact, sans-serif',
                                textShadow: '5px 5px 0px #000',
                                WebkitTextStroke: '2px black'
                            }}>
                            POWER ARSENAL
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-black text-yellow-400 mt-6"
                        style={{ 
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '2px 2px 0px #000'
                        }}>
                        MY SUPER ABILITIES!
                    </motion.p>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.2 }}
                            className={`border-8 border-black bg-gradient-to-br ${category.color} p-8 transform ${
                                catIndex % 2 === 0 ? 'rotate-1' : '-rotate-1'
                            }`}
                            style={{ boxShadow: '10px 10px 0px rgba(0,0,0,0.8)' }}
                        >
                            {/* Category Title */}
                            <div className="bg-yellow-400 border-4 border-black px-6 py-3 inline-block mb-6 transform -rotate-2"
                                 style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.8)' }}>
                                <h3 className="text-3xl font-black text-black flex items-center gap-3"
                                    style={{ fontFamily: 'Impact, sans-serif' }}>
                                    <span className="text-4xl">{category.icon}</span>
                                    {category.category}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <PowerBadge key={skill} skill={skill} index={skillIndex} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Code Block - Developer Touch */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gray-900 border-6 border-green-500 p-8 font-mono"
                    style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.8)' }}
                >
                    <div className="text-green-400 text-sm md:text-base">
                        <div className="mb-2 text-gray-500">{'//'} Developer Super Power Status</div>
                        <div><span className="text-purple-400">const</span> hero = {'{'}</div>
                        <div className="pl-4"><span className="text-blue-400">name:</span> <span className="text-yellow-400">"Mohd Washid"</span>,</div>
                        <div className="pl-4"><span className="text-blue-400">role:</span> <span className="text-yellow-400">"Full Stack Developer"</span>,</div>
                        <div className="pl-4"><span className="text-blue-400">powerLevel:</span> <span className="text-red-400">9000</span>,</div>
                        <div className="pl-4"><span className="text-blue-400">mission:</span> <span className="text-yellow-400">"Build Amazing Apps"</span>,</div>
                        <div className="pl-4"><span className="text-blue-400">status:</span> <span className="text-green-400">"READY TO CODE!"</span></div>
                        <div>{'};'}</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ComicSkills;

