import { motion } from 'framer-motion';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  return (
    <motion.div 
      className="welcome-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="welcome-icon">🌍</div>
      <h2 className="welcome-title">Welcome to Weather App!</h2>
      <p className="welcome-text">
        Search for any city or use your current location to get started.
      </p>
      <div className="welcome-features">
        <div className="feature">
          <span className="feature-icon">🔍</span>
          <span>Search any location</span>
        </div>
        <div className="feature">
          <span className="feature-icon">📍</span>
          <span>Use your location</span>
        </div>
        <div className="feature">
          <span className="feature-icon">⏰</span>
          <span>48-hour forecast</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeMessage;

