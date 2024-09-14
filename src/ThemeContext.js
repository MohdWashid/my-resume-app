// import React, { createContext, useContext, useState } from 'react';

// // Create a context for theme
// const ThemeContext = createContext();

// // Create a provider component
// const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');

//     const toggleTheme = () => {
//         setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// // Custom hook to use the theme context
// const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (context === undefined) {
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
// };

// export { ThemeProvider, useTheme };
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};