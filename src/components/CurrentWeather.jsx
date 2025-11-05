import { motion } from 'framer-motion';
import { getWeatherEmoji, getWindDirection } from '../services/weatherService';
import './CurrentWeather.css';

const CurrentWeather = ({ weatherData, onRefresh, isLoading }) => {
  if (!weatherData) return null;

  const current = weatherData.currentConditions;
  const location = weatherData.resolvedAddress;

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = () => {
    const date = new Date();
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <motion.div 
      className="current-weather"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="weather-header">
        <div className="location-info">
          <h2 className="location-name">{location}</h2>
          <p className="date-time">
            {formatDate()} • {formatTime()}
          </p>
        </div>
        <button 
          onClick={onRefresh} 
          className="refresh-button"
          disabled={isLoading}
          title="Refresh weather data"
        >
          <motion.span
            animate={{ rotate: isLoading ? 360 : 0 }}
            transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
          >
            🔄
          </motion.span>
        </button>
      </div>

      <div className="weather-main">
        <div className="weather-icon-large">
          {getWeatherEmoji(current.icon)}
        </div>
        <div className="temperature-section">
          <div className="temperature">
            {Math.round(current.temp)}°
          </div>
          <div className="feels-like">
            Feels like {Math.round(current.feelslike)}°
          </div>
        </div>
        <div className="weather-description">
          <h3>{current.conditions}</h3>
          <p>{weatherData.description}</p>
        </div>
      </div>

      <div className="weather-details">
        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">💨</div>
          <div className="detail-content">
            <div className="detail-label">Wind Speed</div>
            <div className="detail-value">
              {Math.round(current.windspeed)} km/h
            </div>
            <div className="detail-extra">
              {getWindDirection(current.winddir)}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">💧</div>
          <div className="detail-content">
            <div className="detail-label">Rain Chance</div>
            <div className="detail-value">
              {Math.round(current.precipprob)}%
            </div>
            <div className="detail-extra">
              {current.precip > 0 ? `${current.precip}mm` : 'No rain'}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">💦</div>
          <div className="detail-content">
            <div className="detail-label">Humidity</div>
            <div className="detail-value">
              {Math.round(current.humidity)}%
            </div>
            <div className="detail-extra">
              {current.humidity > 70 ? 'High' : current.humidity > 40 ? 'Moderate' : 'Low'}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">👁️</div>
          <div className="detail-content">
            <div className="detail-label">Visibility</div>
            <div className="detail-value">
              {Math.round(current.visibility)} km
            </div>
            <div className="detail-extra">
              {current.visibility > 10 ? 'Excellent' : current.visibility > 5 ? 'Good' : 'Poor'}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">🌡️</div>
          <div className="detail-content">
            <div className="detail-label">Pressure</div>
            <div className="detail-value">
              {Math.round(current.pressure)} mb
            </div>
            <div className="detail-extra">
              {current.pressure > 1013 ? 'High' : 'Low'}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="detail-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="detail-icon">☁️</div>
          <div className="detail-content">
            <div className="detail-label">Cloud Cover</div>
            <div className="detail-value">
              {Math.round(current.cloudcover)}%
            </div>
            <div className="detail-extra">
              {current.cloudcover > 75 ? 'Overcast' : current.cloudcover > 50 ? 'Cloudy' : current.cloudcover > 25 ? 'Partly Cloudy' : 'Clear'}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;

