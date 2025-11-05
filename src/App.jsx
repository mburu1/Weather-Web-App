import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import WelcomeMessage from './components/WelcomeMessage';
import DemoBanner from './components/DemoBanner';
import { getWeatherData, getCurrentLocation, formatCoordinates } from './services/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Fetch weather data for a location
  const fetchWeather = async (location) => {
    setIsLoading(true);
    setError(null);

    const result = await getWeatherData(location);

    if (result.success) {
      setWeatherData(result.data);
      setIsDemoMode(result.isDemo || false);
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  };

  // Handle search
  const handleSearch = (location) => {
    fetchWeather(location);
  };

  // Handle current location
  const handleUseCurrentLocation = async (showError = true) => {
    setIsLoading(true);
    setError(null);

    try {
      const coords = await getCurrentLocation();
      const locationString = formatCoordinates(coords.latitude, coords.longitude);
      setCurrentLocation(locationString);
      await fetchWeather(locationString);
    } catch (err) {
      // Only show error if explicitly requested (e.g., when user clicks button)
      if (showError) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    if (currentLocation) {
      fetchWeather(currentLocation);
    } else if (weatherData) {
      fetchWeather(weatherData.resolvedAddress);
    }
  };

  // Load user's location on mount (don't show error if it fails)
  useEffect(() => {
    handleUseCurrentLocation(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <motion.header
          className="app-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="app-title">
            <span className="title-icon">🌤️</span>
            Weather App
          </h1>
          <p className="app-subtitle">Get real-time weather updates for any location</p>
        </motion.header>

        <SearchBar
          onSearch={handleSearch}
          onUseCurrentLocation={() => handleUseCurrentLocation(true)}
          isLoading={isLoading}
        />

        {isDemoMode && <DemoBanner />}

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSpinner />
            </motion.div>
          )}

          {error && !isLoading && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ErrorMessage message={error} onRetry={handleRefresh} />
            </motion.div>
          )}

          {weatherData && !isLoading && !error && (
            <motion.div
              key="weather"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CurrentWeather
                weatherData={weatherData}
                onRefresh={handleRefresh}
                isLoading={isLoading}
              />
              <HourlyForecast weatherData={weatherData} />
            </motion.div>
          )}

          {!weatherData && !isLoading && !error && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WelcomeMessage />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer
          className="app-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Powered by Visual Crossing Weather API</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
