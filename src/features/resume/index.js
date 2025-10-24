import React from 'react';
import { ThemeProvider } from '../../ThemeContext';
import PortfolioContent from './containers/PortfolioContent';

const Portfolio = () => (
    <ThemeProvider>
        <PortfolioContent />
    </ThemeProvider>
);

export default Portfolio;


