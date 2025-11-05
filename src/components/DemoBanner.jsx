import { motion } from 'framer-motion';
import './DemoBanner.css';

const DemoBanner = () => {
  return (
    <motion.div 
      className="demo-banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="demo-content">
        <span className="demo-icon">ℹ️</span>
        <div className="demo-text">
          <strong>Demo Mode:</strong> You're viewing sample weather data. 
          <a 
            href="https://www.visualcrossing.com/weather-api" 
            target="_blank" 
            rel="noopener noreferrer"
            className="demo-link"
          >
            Get your free API key
          </a> 
          to see real weather data.
        </div>
      </div>
    </motion.div>
  );
};

export default DemoBanner;

