import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaExchangeAlt, FaMapMarkedAlt, FaVideo, FaBoxes, FaProjectDiagram, FaSeedling, FaRegSave, FaGlobe, FaVial, FaCloudUploadAlt, FaTachometerAlt, FaMobileAlt, FaMagic, FaShoppingCart, FaLink, FaPlug, FaSitemap, FaTools } from 'react-icons/fa';
import { 
    SiReact, SiFirebase, SiNodedotjs, SiTailwindcss, SiThreedotjs, SiFlutter, SiDart, SiGit, 
    SiStripe, SiRazorpay, SiSocketdotio, SiHiveBlockchain, SiSqlite, SiCircleci, SiGoogleads, SiGooglefonts 
} from 'react-icons/si';

export const getTechnologyIcon = (tech) => {
    switch (tech) {
        case 'React':
            return <SiReact className="mr-2 text-blue-400" />;
        case 'Tailwind CSS':
            return <SiTailwindcss className="mr-2 text-teal-500" />;
        case 'Three.js':
            return <SiThreedotjs className="mr-2 text-orange-500" />;
        case 'Flutter':
            return <SiFlutter className="mr-2 text-blue-400" />;
        case 'Dart':
            return <SiDart className="mr-2 text-blue-500" />;
        case 'Node.js':
            return <SiNodedotjs className="mr-2 text-green-500" />;
        case 'Firebase':
        case 'Cloud Firestore':
        case 'Firebase Authentication':
        case 'Firebase Storage':
        case 'Firebase Cloud Messaging (Push Notifications)':
        case 'Firebase Remote Config':
            return <SiFirebase className="mr-2 text-yellow-500" />;
        case 'RESTful APIs':
            return <FaExchangeAlt className="mr-2 text-green-400" />;
        case 'Google Maps API':
            return <FaMapMarkedAlt className="mr-2 text-red-600" />;
        case 'Stripe Payment Gateway':
            return <SiStripe className="mr-2 text-indigo-400" />;
        case 'Razorpay Payment Gateway':
            return <SiRazorpay className="mr-2 text-blue-600" />;
        case 'ZegoCloud SDK (for Live Streaming / Video Call)':
            return <FaVideo className="mr-2 text-purple-600" />;
        case 'Socket.IO (for Real-time Chat)':
            return <SiSocketdotio className="mr-2 text-black" />;
        case 'Provider (State Management)':
            return <FaBoxes className="mr-2 text-blue-400" />;
        case 'GetX (State Management)':
            return <FaProjectDiagram className="mr-2 text-green-500" />;
        case 'BLoC (Business Logic Component)':
            return <FaProjectDiagram className="mr-2 text-yellow-500" />;
        case 'Riverpod':
            return <FaSeedling className="mr-2 text-green-700" />;
        case 'Hive (Local Database)':
            return <SiHiveBlockchain className="mr-2 text-yellow-500" />;
        case 'Shared Preferences':
            return <FaRegSave className="mr-2 text-gray-400" />;
        case 'SQLite':
            return <SiSqlite className="mr-2 text-blue-400" />;
        case 'App Localization (Multi-language Support)':
            return <FaGlobe className="mr-2 text-blue-500" />;
        case 'App Testing (Unit & Widget Testing)':
            return <FaVial className="mr-2 text-green-700" />;
        case 'App Deployment (Play Store & App Store)':
            return <FaCloudUploadAlt className="mr-2 text-green-500" />;
        case 'CI/CD (Continuous Integration / Delivery)':
            return <SiCircleci className="mr-2 text-gray-500" />;
        case 'Version Control (Git & GitHub)':
            return <SiGit className="mr-2 text-orange-500" />;
        case 'App Optimization & Performance Tuning':
            return <FaTachometerAlt className="mr-2 text-lime-600" />;
        case 'Responsive UI Design':
            return <FaMobileAlt className="mr-2 text-cyan-500" />;
        case 'Animations (Lottie, Rive, Custom Animations)':
            return <FaMagic className="mr-2 text-pink-400" />;
        case 'Google Fonts Integration':
            return <SiGooglefonts className="mr-2 text-rose-700" />;
        case 'In-App Purchases':
            return <FaShoppingCart className="mr-2 text-green-700" />;
        case 'Deep Linking':
        case 'Dynamic Links':
            return <FaLink className="mr-2 text-blue-600" />;
        case 'AdMob (Monetization)':
            return <SiGoogleads className="mr-2 text-green-700" />;
        case 'Integration with Third-party APIs':
            return <FaPlug className="mr-2 text-indigo-500" />;
        case 'MVVM / Clean Architecture':
            return <FaSitemap className="mr-2 text-gray-600" />;
        default:
            return <FaTools className="mr-2 text-gray-500" />;
    }
};

// BLOG ICON UTIL REMAINED SAME
export const getBlogIcon = (skill) => {
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