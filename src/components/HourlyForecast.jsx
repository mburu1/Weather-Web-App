import { motion } from 'framer-motion';
import { getWeatherEmoji } from '../services/weatherService';
import './HourlyForecast.css';

const HourlyForecast = ({ weatherData }) => {
  if (!weatherData || !weatherData.days) return null;

  // Get all hourly data from all days
  const allHours = weatherData.days.flatMap(day => 
    day.hours.map(hour => ({
      ...hour,
      date: day.datetime
    }))
  );

  // Get current hour
  const now = new Date();
  const currentHour = now.getHours();
  
  // Find the index of the current hour
  const currentDate = now.toISOString().split('T')[0];
  const currentHourIndex = allHours.findIndex(hour => {
    const hourDate = hour.date;
    const hourTime = parseInt(hour.datetime.split(':')[0]);
    return hourDate === currentDate && hourTime === currentHour;
  });

  // Get 24 hours before and 24 hours after current time (total 49 hours)
  const startIndex = Math.max(0, currentHourIndex - 24);
  const endIndex = Math.min(allHours.length, currentHourIndex + 25);
  const displayHours = allHours.slice(startIndex, endIndex);

  const formatHour = (datetime, date) => {
    const hour = parseInt(datetime.split(':')[0]);
    const hourDate = new Date(date + 'T' + datetime);
    
    // Check if it's today, yesterday, or tomorrow
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const itemDate = new Date(date);
    itemDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.round((itemDate - today) / (1000 * 60 * 60 * 24));
    
    let dayLabel = '';
    if (diffDays === -1) dayLabel = 'Yesterday ';
    else if (diffDays === 0) dayLabel = 'Today ';
    else if (diffDays === 1) dayLabel = 'Tomorrow ';
    
    if (hour === 0) return dayLabel + '12 AM';
    if (hour === 12) return dayLabel + '12 PM';
    if (hour < 12) return dayLabel + hour + ' AM';
    return dayLabel + (hour - 12) + ' PM';
  };

  const isCurrentHour = (datetime, date) => {
    const hourTime = parseInt(datetime.split(':')[0]);
    const hourDate = date;
    return hourDate === currentDate && hourTime === currentHour;
  };

  const isPastHour = (datetime, date) => {
    const hourTime = parseInt(datetime.split(':')[0]);
    const hourDate = new Date(date + 'T' + datetime);
    return hourDate < now;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="hourly-forecast"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="forecast-header">
        <h3>48-Hour Timeline</h3>
        <p>Previous and upcoming 24 hours</p>
      </div>

      <motion.div 
        className="hourly-scroll"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {displayHours.map((hour, index) => {
          const isCurrent = isCurrentHour(hour.datetime, hour.date);
          const isPast = isPastHour(hour.datetime, hour.date);
          
          return (
            <motion.div
              key={`${hour.date}-${hour.datetime}`}
              className={`hour-card ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}`}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isCurrent && <div className="current-badge">Now</div>}
              
              <div className="hour-time">
                {formatHour(hour.datetime, hour.date)}
              </div>
              
              <div className="hour-icon">
                {getWeatherEmoji(hour.icon)}
              </div>
              
              <div className="hour-temp">
                {Math.round(hour.temp)}°
              </div>
              
              <div className="hour-details">
                <div className="hour-detail">
                  <span className="detail-icon-small">💧</span>
                  <span>{Math.round(hour.precipprob)}%</span>
                </div>
                <div className="hour-detail">
                  <span className="detail-icon-small">💨</span>
                  <span>{Math.round(hour.windspeed)} km/h</span>
                </div>
              </div>
              
              <div className="hour-condition">
                {hour.conditions}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HourlyForecast;

