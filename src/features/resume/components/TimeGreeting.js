import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaCloud } from 'react-icons/fa';

const TimeGreeting = () => {
    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState(null);
    const [gradientClass, setGradientClass] = useState('');

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                setGreeting('Good Morning');
                setIcon(<FaSun className="text-yellow-400" />);
                setGradientClass('from-yellow-200 to-orange-300');
            } else if (hour >= 12 && hour < 18) {
                setGreeting('Good Afternoon');
                setIcon(<FaCloud className="text-blue-400" />);
                setGradientClass('from-blue-200 to-blue-400');
            } else {
                setGreeting('Good Evening');
                setIcon(<FaMoon className="text-indigo-400" />);
                setGradientClass('from-indigo-300 to-purple-400');
            }
        };

        updateGreeting();
        const interval = setInterval(updateGreeting, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className={`top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${gradientClass} shadow-md`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-2 text-gray-800">
                {icon}
                <span className="font-semibold">{greeting}!</span>
            </div>
        </motion.div>
    );
};

export default TimeGreeting;


