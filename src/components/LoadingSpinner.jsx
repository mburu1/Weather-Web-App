import { motion } from 'framer-motion';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = 'Loading weather data...' }) => {
  const cloudVariants = {
    animate: {
      x: [0, 20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sunVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const rainVariants = {
    animate: {
      y: [0, 20],
      opacity: [1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="loading-spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-animation">
        <motion.div 
          className="sun"
          variants={sunVariants}
          animate="animate"
        >
          ☀️
        </motion.div>
        
        <motion.div 
          className="cloud"
          variants={cloudVariants}
          animate="animate"
        >
          ☁️
        </motion.div>
        
        <div className="rain-drops">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="rain-drop"
              variants={rainVariants}
              animate="animate"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              💧
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.p 
        className="loading-message"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

export default LoadingSpinner;

