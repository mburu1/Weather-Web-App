import { useState } from 'react';
import { motion } from 'framer-motion';
import './SearchBar.css';

const SearchBar = ({ onSearch, onUseCurrentLocation, isLoading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  const handleCurrentLocation = () => {
    onUseCurrentLocation();
  };

  return (
    <motion.div 
      className="search-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city name or location..."
            className="search-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={isLoading || !location.trim()}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
      
      <button 
        onClick={handleCurrentLocation}
        className="location-button"
        disabled={isLoading}
        title="Use my current location"
      >
        <span className="location-icon">📍</span>
        <span>Use My Location</span>
      </button>
    </motion.div>
  );
};

export default SearchBar;

