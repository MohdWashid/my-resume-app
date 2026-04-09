import React from 'react';
import { motion } from 'framer-motion';

const PowerBadge = ({ skill, index }) => {
    const colors = ['#FF0000', '#FFD700', '#00BFFF', '#FF1493', '#32CD32'];
    const color = colors[index % colors.length];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring" }}
            whileHover={{ 
                scale: 1.2, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
            }}
            className="relative group"
        >
            {/* Star burst background */}
            <div className="absolute inset-0 animate-pulse">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon 
                        points="50,5 61,35 92,35 67,54 78,85 50,66 22,85 33,54 8,35 39,35"
                        fill={color}
                        stroke="#000"
                        strokeWidth="3"
                        opacity="0.3"
                    />
                </svg>
            </div>

            {/* Main badge */}
            <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-black px-4 py-2 transform group-hover:rotate-12 transition-transform"
                 style={{
                     boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                     clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                 }}>
                <span className="text-lg md:text-xl font-black uppercase text-black"
                      style={{ fontFamily: 'Impact, sans-serif' }}>
                    {skill}
                </span>
            </div>

            {/* POW effect on hover */}
            <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute -top-8 -right-8 bg-yellow-300 border-4 border-black rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
                <span className="text-2xl font-black">💥</span>
            </motion.div>
        </motion.div>
    );
};

export default PowerBadge;

