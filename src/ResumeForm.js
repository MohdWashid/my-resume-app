import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { SiReact, SiFirebase, SiTeepublic, SiNodedotjs, SiGit, SiTailwindcss, SiThreedotjs, SiFlutter, SiDart } from 'react-icons/si'; // Technology icons

import { FaSun, FaCertificate,FaWhatsapp, FaMoon, FaFileDownload, FaRocket, FaExternalLinkAlt, FaBars, FaTimes, FaEnvelope, FaLinkedin, FaGithub, FaStar, FaGlobe, FaUserAstronaut, FaInstagram, FaCloud } from 'react-icons/fa';
import SpaceScene from './SpaceScene';
import FloatingText from './FloatingText';
import AnimatedSection from './AnimatedSection';
import { ThemeProvider, useTheme } from './ThemeContext';
import { domAnimation, motion } from 'framer-motion';

const NavBar = ({ activeTab, setActiveTab }) => {
    const tabs = ['about', 'Experience', 'projects', 'skills', 'blog', 'contact'];
    const [gradientClass, setGradientClass] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateGradient = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                setGradientClass('from-yellow-200 to-orange-300');
            } else if (hour >= 12 && hour < 18) {
                setGradientClass('from-blue-200 to-blue-400');
            } else {
                setGradientClass('from-indigo-300 to-purple-400');
            }
        };

        updateGradient();
        const interval = setInterval(updateGradient, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsMenuOpen(false);
    };

    return (
        <nav className="py-4 px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    <span className="text-white font-semibold">Menu</span>
                </div>
                <ul className={`
                    ${isMenuOpen ? 'flex' : 'hidden'} 
                    md:flex flex-col md:flex-row 
                    justify-center md:space-x-4 space-y-2 md:space-y-0 
                    mt-4 md:mt-0
                `}>
                    {tabs.map(tab => (
                        <li key={tab}>
                            <button
                                className={`
                                    w-full md:w-auto py-2 px-4 rounded-md transition-all duration-300
                                    ${activeTab === tab
                                        ? `bg-gradient-to-r ${gradientClass} text-gray-800`
                                        : 'bg-gray-700 text-gray-300'}
                                    hover:bg-gray-600
                                `}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const TypewriterEffect = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <h2 className="text-2xl font-bold mb-4">
            I'm {' '}
            <span className="text-blue-500">
                {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
            </span>
            {' '}developer
        </h2>
    );
};

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
        const interval = setInterval(updateGreeting, 60000); // Update every minute

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

const About = ({ theme }) => {
    const skills = ["Flutter", "Android", "iOS", "WEB", "C++", "SQL", "React", "JavaScript"];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated background shapes */}
            <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-around min-h-screen p-8 bg-transparent">
                {/* Profile Section */}
                <AnimatedSection
                    title="Profile"
                    content={
                        <div className="w-full lg:w-1/10 mb-8 lg:mb-0 text-center lg:text-left">
                            <div className="relative w-48 h-48 mx-auto lg:mx-0 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                                <img
                                   src={process.env.PUBLIC_URL +  "/images/Passport.jpg"}
                                    alt="Mohd Washid"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Mohd Washid</h2>
                            <TypewriterEffect words={skills} />
                            <div className="text-gray-300">
                                <h3 className="text-2xl font-semibold mb-2 text-blue-300">Education</h3>
                                <div className='py-5'>
                                    <div className="mb-4 flex justify-between">
                                        <h4 className="text-xl font-semibold text-gray-100">MCA</h4><span className="text-blue-300">(2022-2024)</span>
                                    </div>  <span className="text-lg text-gray-400">Graphic Era Hill University,</span>
                                    <p className="text-lg text-gray-400">Dehradun </p>
                                </div>

                                <div className='py-5'>
                                    <div className="mb-4 flex justify-between">
                                        <h4 className="text-xl font-semibold text-gray-100">BCA</h4><span className="text-blue-300">(2019-2022)</span>
                                    </div>  <p className="text-lg text-gray-400">Teerthanker Mahaveer University,</p>
                                    <p className="text-lg text-gray-400">Moradabad </p>
                                </div>
                            </div>
                            <div className="text-gray-300">
                                <h3 className="text-2xl font-semibold mb-2 text-blue-300">Contact</h3>
                                <div className='py-5'>
                                    <div className="mb-4">
                                        <div className="flex items-center mb-2">
                                            <a href="tel:+918958618665" className="flex items-center text-x2 font-semibold text-gray-100 hover:text-blue-300">
                                                <FaWhatsapp className="mr-2" />
                                                +91 8958618665
                                            </a>
                                        </div>

                                        <div className="flex items-center mb-2">
                                            <a href="mailto:mwashid914@gmail.com" className="flex items-center text-x2 font-semibold text-gray-100 hover:text-blue-300">
                                                <FaEnvelope className="mr-2" />
                                                mwashid914@gmail.com
                                            </a>
                                        </div>
</div>
                                </div>
                            </div>

                        </div>
                    }
                />

                {/* Text Content */}
                <div className="w-full lg:w-2/3 lg:pl-12">
                    <AnimatedSection
                        content={
                            <>
                                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                    <span className="text-blue-300">Hello,</span>
                                </h1>
                                <TypewriterEffect words={skills} />
                                <p className="text-lg leading-relaxed mb-6 text-white"> Driven by a passion for crafting dynamic and intuitive applications, I bring one year of experience in Flutter development to the table. My expertise lies in creating solutions that seamlessly blend creativity with performance, resulting in interactive and engaging digital experiences. I thrive on combining sleek design with robust functionality to deliver applications that not only look great but also perform flawlessly. </p>
                            </>
                        }
                    />
                    <AnimatedSection
                        title="Get My Resume"
                        content={
                            <motion.a
                                href="/path-to-your-resume.pdf"
                                download
                                className={`inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                    : 'bg-white hover:bg-blue-100 text-blue-600'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFileDownload className="mr-2" /> Download Resume
                            </motion.a>
                        }
                    />
                    <AnimatedSection
                        title="My Philosophy"
                        content={
                            <div>
                                <div className="flex items-start space-x-4 mb-8">
                                    <FaUserAstronaut className="text-3xl text-blue-300" />
                                    <p className="italic text-blue-100">
                                        "Efficiency and performance are at the core of my development philosophy."<br />"As a Flutter developer, I focus on creating fast, responsive, and reliable mobile applications that provide users with a smooth and enjoyable experience."
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4 mb-8">
                                    <FaUserAstronaut className="text-3xl text-blue-300" />
                                    <p className="italic text-blue-100">
                                        "Navigating the ever-evolving digital cosmos, I blend creativity and code to craft experiences that inspire and innovate."
                                    </p>
                                </div>
                            </div>


                        }
                    />


                </div>
            </div>
        </div>
    );
};



// Helper function to render the correct icons based on technology names
const getTechnologyIcon = (tech) => {
    switch (tech) {
        case 'React':
            return <SiReact className="mr-2 text-blue-400" />;
        case 'Tailwind CSS':
            return <SiTailwindcss className="mr-2 text-teal-500" />;
        case 'Three.js':
            return <SiThreedotjs className="mr-2 text-orange-500" />;
        case 'Flutter':
            return <SiFlutter className="mr-2 text-blue-400" />;
        case 'Node.js':
            return <SiNodedotjs className="mr-2 text-blue-400" />;
        case 'Firebase':
            return <SiFirebase className="mr-2 text-blue-400" />;

        case 'Dart':
            return <SiDart className="mr-2 text-blue-500" />;
        default:
            return null;
    }
};

const Projects = ({ theme, projects }) => (
    <AnimatedSection
        title="Projects"
        content={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark'
                            ? 'bg-gray-800 hover:bg-gray-700'
                            : 'bg-gray-800 hover:bg-gray-600'
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="mb-4">{project.description}</p>

                        {/* Technologies used */}
                        <div className="mb-4 flex items-center flex-wrap">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="flex items-center mr-4">
                                    {getTechnologyIcon(tech)}
                                    <span>{tech}</span>
                                </span>
                            ))}
                        </div>

                        {/* GitHub and Live Links */}
                        <div className="flex justify-between mt-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-black'
                                        }`}
                                >
                                    <FaGithub className="mr-2" /> GitHub
                                </a>

                            )}
                            {project.status && (
                                <a
                                    href={project.status}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white'
                                        : 'bg-gradient-to-r from-blue-400  hover:from-blue-500 hover:to-blue-600 text-white'
                                        }`}
                                >
                                    <SiTeepublic className="mr-2" />
                                    {project.status}
                                </a>
                            )}




                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                            >
                                <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        }
    />
);


const getBlogIcon = (skill) => {
    switch (skill) {
        case 'Flutter':
            return <SiFlutter className="mr-2 text-blue-400" />;
        case 'Dart':
            return <SiDart className="mr-2 text-blue-400" />;
        case 'Firebase':
            return <SiFirebase className="mr-2 text-yellow-500" />;
        case 'Git':
            return <SiGit className="mr-2 text-orange-400" />;
        case 'React':
            return <SiReact className="mr-2 text-blue-400" />;
        default:
            return null;
    }
};

const Skills = ({ theme }) => (
    <AnimatedSection
        title="Skills"
        content={
            <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                    {[
                        'Flutter',
                        'Dart',
                        'Firebase',
                        'UI & UX',
                        'Git',
                        'Agile',
                        'DSA'
                    ].map((skill) => (
                        <span
                            key={skill}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${theme === 'dark'
                                ? 'bg-blue-900 hover:bg-blue-600 text-white'
                                : 'bg-blue-900 hover:bg-blue-700 text-white'
                                } flex items-center`}
                        >
                            {getBlogIcon(skill)}
                            {skill}
                        </span>
                    ))}
                </div>
                {/* <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Skill Levels</h3>
                    <div className="space-y-4">
                        {[
                            { skill: 'Flutter', level: 90 },
                            { skill: 'DevOps', level: 85 },
                            { skill: 'React', level: 80 },
                        ].map((item) => (
                            <div key={item.skill}>
                                <div className="flex justify-between mb-1">
                                    <span>{item.skill}</span>
                                    <span>{item.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${item.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        }
    />
);

const Blog = ({ theme, blogPosts }) => (
    <AnimatedSection
        title="Blog"
        content={
            blogPosts && blogPosts.length > 0 ? (
                <div className="space-y-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark'
                                ? 'bg-gray-800 hover:bg-gray-700'
                                : 'bg-gray-800 hover:bg-gray-600'
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="mb-4">{post.excerpt}</p>

                            {/* Display dynamic icon */}
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center text-blue-400 hover:underline transition-all duration-300 ${theme === 'dark'
                                    ? 'text-blue-400 hover:text-blue-300'
                                    : 'text-blue-600 hover:text-blue-500'
                                    }`}
                            >
                                {getBlogIcon(post.icon)} Read More
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-6 rounded-lg shadow-lg text-center bg-gray-200 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2">No Blog Posts Available</h3>
                    <p className="mb-4">It looks like there are no blog posts at the moment. Check back later for updates!</p>
                </div>
            )
        }
    />
);


const Contact = ({ theme, handleSubmit }) => (

    <AnimatedSection
        title="Contact"
        content={
            <div>
                <p className="mb-4">Feel free to reach out to me for any inquiries or opportunities:</p>
                <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={`w-full p-2 rounded transition-all duration-300 ${theme === 'light'
                                ? 'bg-gray-700 focus:bg-gray-600 text-white'
                                : 'bg-white border border-gray-300 focus:border-blue-500 text-gray-900'
                                }`}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={`w-full p-2 rounded transition-all duration-300 ${theme === 'light'
                                ? 'bg-gray-700 focus:bg-gray-600 text-white'
                                : 'bg-white border border-gray-300 focus:border-blue-500 text-gray-900'
                                }`}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className={`w-full p-2 rounded transition-all duration-300 ${theme === 'light'
                                ? 'bg-gray-700 focus:bg-gray-600 text-white'
                                : 'bg-white border border-gray-300 focus:border-blue-500 text-gray-900'
                                }`}
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`px-6 py-3 rounded-full transition-all duration-300 ${theme === 'light'
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        <FaRocket className="inline-block mr-2" /> Send Message
                    </button>
                </form>
                <div className="flex space-x-6 justify-center">
                    <a
                        href="mailto:mwashid914@gmail.com"
                        className={`text-4xl transition-all duration-300 ${theme === 'dark'
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-500'
                            }`}
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mohd-washid-111a9922b"
                        className={`text-4xl transition-all duration-300 ${theme === 'dark'
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-500'
                            }`}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/DEVILGHAZI"
                        className={`text-4xl transition-all duration-300 ${theme === 'dark'
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-500'
                            }`}
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/ghaziwashid08/"
                        className={`text-4xl transition-all duration-300 ${theme === 'dark'
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-500'
                            }`}
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        }
    />
);

const Experience = ({ theme, experiences }) => (
    <AnimatedSection
        title="Experience"
        content={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark'
                            ? 'bg-gray-800 hover:bg-gray-700'
                            : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                        <p className="text-blue-300 mb-2">{exp.company}</p>
                        <p className="mb-4">{exp.description}</p>
                        <p className="mb-4 text-sm text-gray-400">{exp.duration}</p>

                        {/* Technologies used */}
                        <div className="mb-4 flex items-center flex-wrap">
                            {exp.technologies.map((tech) => (
                                <span key={tech} className="flex items-center mr-4">
                                    {getTechnologyIcon(tech)}
                                    <span className="ml-2">{tech}</span>
                                </span>
                            ))}
                        </div>

                        {/* Certificate Link */}
                        {exp.certificateUrl && (
                            <a
                                href={exp.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                            >
                                <FaCertificate className="mr-2" /> Certificate
                            </a>
                        )}

                        {/* More Details Link */}
                        {exp.detailsUrl && (
                            <a
                                href={exp.detailsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                            >
                                <FaExternalLinkAlt className="mr-2" /> More Details
                            </a>
                        )}
                    </div>
                ))}
            </div>
        }
    />
);


const PortfolioContent = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('about');
    const [projects, setProjects] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await axios.get(`${process.env.PUBLIC_URL}/project.json`);
                setProjects(projectsResponse.data);

                const blogResponse = await axios.get(`${process.env.PUBLIC_URL}/blog.json`);
                setBlogPosts(blogResponse.data);

                const experiencesResponse = await axios.get(`${process.env.PUBLIC_URL}/experince.json`);
                setExperiences(experiencesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
    }, []);
    // const handleSubmit = useCallback(async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const data = {
    //         name: formData.get('name'),
    //         email: formData.get('email'),
    //         message: formData.get('message')
    //     };

    //     try {
    //         const response = await axios.post('http://localhost:3000/send-whatsapp', data);
    //         if (response.data.success) {
    //             alert('WhatsApp message sent successfully!');
    //         } else {
    //             throw new Error(response.data.message);
    //         }
    //     } catch (error) {
    //         console.error('Error sending message:', error);
    //         alert(`Failed to send WhatsApp message: ${error.message}`);
    //     }
    // }, []);

    return (
        <div className={`min-h-screen relative ${theme === 'dark' ? 'text-white' : 'text-white'
            }`}>
            <div className="absolute inset-0 z-0">
                <SpaceScene theme={theme} />
            </div>  <div className="relative z-10 backdrop-blur-sm bg-opacity-30 bg-gray-800 min-h-screen flex flex-col">
                <header className="flex-grow flex items-center justify-between px-4 py-3">
                    <TimeGreeting className="text-lg md:text-xl" />

                    <div className="text-center">
                        <FloatingText>
                            <h1 className="text-5xl md:text-4xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Mohd Washid
                            </h1>
                        </FloatingText>
                        <h2 className={`text-lg md:text-xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                            Flutter Developer
                        </h2>
                    </div>

                    <div className="w-24 h-24">
                        <div className="relative w-full h-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                            <motion.img
                                src={process.env.PUBLIC_URL + "/images/Passport.jpg"} // Replace with your actual image path
                                alt="Mohd Washid"
                                className="absolute inset-0 rounded-full w-full h-full object-cover"
                                initial={{ opacity: 0, rotateY: 180 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>
                    </div>
                </header><NavBar theme={theme} toggleTheme={toggleTheme} activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="container mx-auto px-0">
                    {activeTab === 'about' && <About theme={theme} />}
                    {activeTab === 'projects' && <Projects theme={theme} projects={projects} />}
                    {activeTab === 'Experience' && <Experience theme={theme} experiences={experiences} />}
                    {activeTab === 'skills' && <Skills theme={theme} />}
                    {activeTab === 'blog' && <Blog theme={theme} blogPosts={blogPosts} />}
                    {activeTab === 'contact' && <Contact theme={theme} handleSubmit={handleSubmit} />}
                </main>
                <footer className="mt-12 py-6 text-center backdrop-blur-sm bg-opacity-30 bg-gray-800 rounded-lg">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                    <p className="mt-2 flex items-center justify-center">
                        <FaGlobe className="mr-2 text-blue-400" />
                        Exploring the digital universe, one line of code at a time.
                    </p>
                </footer>
            </div>
        </div>
    );
};

const Portfolio = () => (
    <ThemeProvider>
        <PortfolioContent />
    </ThemeProvider>
);

export default Portfolio;
