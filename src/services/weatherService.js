import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

// Check if API key is configured
const isApiKeyConfigured = API_KEY && API_KEY !== 'YOUR_API_KEY_HERE' && API_KEY.length > 10;

/**
 * Generate mock weather data for demo purposes
 */
const generateMockWeatherData = (location) => {
  const now = new Date();
  const hours = [];

  // Generate 48 hours of mock data
  for (let i = -24; i < 24; i++) {
    const hourDate = new Date(now.getTime() + i * 60 * 60 * 1000);
    hours.push({
      datetime: hourDate.toTimeString().slice(0, 5),
      temp: Math.round(20 + Math.random() * 10),
      feelslike: Math.round(19 + Math.random() * 10),
      humidity: Math.round(50 + Math.random() * 30),
      precip: Math.random() * 2,
      precipprob: Math.round(Math.random() * 60),
      windspeed: Math.round(10 + Math.random() * 20),
      winddir: Math.round(Math.random() * 360),
      pressure: Math.round(1010 + Math.random() * 20),
      cloudcover: Math.round(Math.random() * 100),
      visibility: Math.round(8 + Math.random() * 7),
      conditions: ['Clear', 'Partly cloudy', 'Cloudy', 'Rain'][Math.floor(Math.random() * 4)],
      icon: ['clear-day', 'partly-cloudy-day', 'cloudy', 'rain'][Math.floor(Math.random() * 4)]
    });
  }

  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const today = now;
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  return {
    resolvedAddress: location.includes(',') ? location : `${location}, Demo Location`,
    address: location,
    timezone: 'Africa/Nairobi',
    days: [
      {
        datetime: yesterday.toISOString().split('T')[0],
        hours: hours.slice(0, 24)
      },
      {
        datetime: today.toISOString().split('T')[0],
        hours: hours.slice(24, 48)
      }
    ],
    currentConditions: {
      datetime: now.toTimeString().slice(0, 5),
      temp: 24,
      feelslike: 23,
      humidity: 65,
      precip: 0,
      precipprob: 20,
      windspeed: 15,
      winddir: 180,
      pressure: 1013,
      cloudcover: 40,
      visibility: 10,
      conditions: 'Partly cloudy',
      description: 'Demo weather data - Get your free API key to see real weather!',
      icon: 'partly-cloudy-day'
    }
  };
};

/**
 * Fetch weather data for a specific location
 * @param {string} location - City name or coordinates
 * @returns {Promise} Weather data
 */
export const getWeatherData = async (location) => {
  // If API key is not configured, return mock data with a warning
  if (!isApiKeyConfigured) {
    console.warn('⚠️ API key not configured. Using demo data. Get your free API key at https://www.visualcrossing.com/weather-api');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      data: generateMockWeatherData(location),
      isDemo: true
    };
  }

  try {
    // Get current time
    const now = new Date();
    
    // Calculate 24 hours ago
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // Calculate 24 hours ahead
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Format dates as YYYY-MM-DD
    const startDate = yesterday.toISOString().split('T')[0];
    const endDate = tomorrow.toISOString().split('T')[0];
    
    const url = `${BASE_URL}/${encodeURIComponent(location)}/${startDate}/${endDate}`;
    
    const params = {
      key: API_KEY,
      unitGroup: 'metric', // Use metric units (Celsius, km/h, etc.)
      include: 'hours,current', // Include hourly data and current conditions
      elements: 'datetime,temp,feelslike,humidity,precip,precipprob,snow,windspeed,winddir,pressure,cloudcover,visibility,conditions,description,icon',
      contentType: 'json'
    };
    
    const response = await axios.get(url, { params });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        success: false,
        error: error.response.data.message || 'Failed to fetch weather data',
        status: error.response.status
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        success: false,
        error: 'No response from weather service. Please check your internet connection.'
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return {
        success: false,
        error: 'Failed to fetch weather data. Please try again.'
      };
    }
  }
};

/**
 * Get user's current location coordinates
 * @returns {Promise} Coordinates {latitude, longitude}
 */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location permission denied. Please enable location access.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
          default:
            errorMessage = 'An unknown error occurred.';
        }
        
        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: false, // Changed to false for faster response
        timeout: 30000, // Increased to 30 seconds
        maximumAge: 300000 // Cache location for 5 minutes
      }
    );
  });
};

/**
 * Format coordinates for API request
 * @param {number} latitude 
 * @param {number} longitude 
 * @returns {string} Formatted coordinates
 */
export const formatCoordinates = (latitude, longitude) => {
  return `${latitude.toFixed(4)},${longitude.toFixed(4)}`;
};

/**
 * Get weather icon emoji based on condition
 * @param {string} icon - Weather icon code from API
 * @returns {string} Emoji representation
 */
export const getWeatherEmoji = (icon) => {
  const iconMap = {
    'clear-day': '☀️',
    'clear-night': '🌙',
    'partly-cloudy-day': '⛅',
    'partly-cloudy-night': '☁️',
    'cloudy': '☁️',
    'rain': '🌧️',
    'snow': '❄️',
    'wind': '💨',
    'fog': '🌫️',
    'sleet': '🌨️',
    'hail': '🌨️',
    'thunderstorm': '⛈️'
  };
  
  return iconMap[icon] || '🌤️';
};

/**
 * Get wind direction from degrees
 * @param {number} degrees - Wind direction in degrees
 * @returns {string} Cardinal direction
 */
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

