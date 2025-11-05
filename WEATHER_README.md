# Weather Application

A modern, responsive weather application built with React and Framer Motion. Get real-time weather updates, view 48-hour forecasts, and explore detailed weather metrics for any location worldwide.

## 🌟 Features

### Core Features
- **Location Search**: Enter any city name or location to get weather data
- **Current Weather Display**: View comprehensive current weather conditions including:
  - Temperature and "feels like" temperature
  - Wind speed and direction
  - Rain probability and precipitation amount
  - Humidity levels
  - Visibility
  - Atmospheric pressure
  - Cloud cover percentage
- **48-Hour Timeline**: View weather data for the previous 24 hours and upcoming 24 hours
- **Refresh Functionality**: Manually refresh weather data with a single click
- **Geolocation Support**: Automatically detect and display weather for your current location
- **Smooth Animations**: Beautiful loading animations powered by Framer Motion

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded weather cards and intuitive icons
- **Error Handling**: Clear error messages with retry options
- **Loading States**: Engaging animated loading indicators

## 🚀 Technologies Used

- **React 18**: Modern UI library with hooks
- **Framer Motion**: Smooth animations and transitions
- **Axios**: HTTP client for API requests
- **Visual Crossing Weather API**: Comprehensive weather data provider
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with gradients and animations

## 📋 Requirements Met

✅ Location input field for user searches  
✅ Display temperature, wind speed, rain likelihood, and weather conditions  
✅ Show previous and future 24-hour periods (48-hour timeline)  
✅ Refresh functionality for updating weather data  
✅ Framer Motion animations for loading states  
✅ Default weather view using user's current location  

## 🔧 Setup Instructions

### 1. Get Your API Key

1. Visit [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
2. Sign up for a free account
3. Copy your API key from the dashboard
4. The free tier includes 1,000 requests per day

### 2. Install Dependencies

```bash
cd weather-app
npm install
```

### 3. Configure API Key

Open the `.env` file in the root directory and add your API key:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

**Important**: Replace `your_actual_api_key_here` with your actual Visual Crossing API key.

### 4. Start the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## 🎮 How to Use

### Search for a Location
1. Type a city name or location in the search bar
2. Click the "Search" button or press Enter
3. View the weather data for that location

### Use Current Location
1. Click the "Use My Location" button
2. Allow location access when prompted by your browser
3. The app will automatically fetch weather for your current coordinates

### Refresh Weather Data
1. Click the refresh button (🔄) in the current weather card
2. The app will fetch the latest weather data for the current location

### View Hourly Forecast
1. Scroll through the 48-hour timeline
2. The current hour is highlighted in blue
3. Past hours are slightly dimmed
4. Each hour shows temperature, rain probability, and wind speed

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx          # Location search component
│   │   ├── SearchBar.css          # Search bar styles
│   │   ├── CurrentWeather.jsx     # Current weather display
│   │   ├── CurrentWeather.css     # Current weather styles
│   │   ├── HourlyForecast.jsx     # 48-hour timeline
│   │   ├── HourlyForecast.css     # Hourly forecast styles
│   │   ├── LoadingSpinner.jsx     # Animated loading component
│   │   ├── LoadingSpinner.css     # Loading spinner styles
│   │   ├── ErrorMessage.jsx       # Error display component
│   │   └── ErrorMessage.css       # Error message styles
│   ├── services/
│   │   └── weatherService.js      # API integration and utilities
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # App styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── .env                           # Environment variables (API key)
├── .env.example                   # Example environment file
├── package.json                   # Dependencies and scripts
└── WEATHER_README.md              # This file
```

## 🎨 Features Breakdown

### Weather Data Displayed

**Current Conditions:**
- Temperature (°C)
- Feels like temperature
- Weather condition (Sunny, Cloudy, Rainy, etc.)
- Weather description

**Detailed Metrics:**
- Wind Speed (km/h) with direction
- Rain Chance (%) with precipitation amount
- Humidity (%) with level indicator
- Visibility (km) with quality rating
- Atmospheric Pressure (mb)
- Cloud Cover (%) with description

**Hourly Timeline:**
- Temperature for each hour
- Weather icon and condition
- Rain probability
- Wind speed
- Day labels (Yesterday, Today, Tomorrow)

### Animations

- **Page Load**: Smooth fade-in and slide animations
- **Loading State**: Animated weather icons (sun, cloud, rain)
- **Weather Cards**: Hover effects with scale and shadow
- **Transitions**: Smooth transitions between loading, error, and data states
- **Refresh Button**: Rotating animation during data fetch

## 🌐 API Information

This app uses the **Visual Crossing Weather API** which provides:
- Current weather conditions
- Hourly forecasts
- Historical weather data
- Global coverage
- High accuracy

**API Endpoint Used:**
```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
```

**Data Requested:**
- Temperature and feels-like temperature
- Humidity and precipitation
- Wind speed and direction
- Pressure and visibility
- Cloud cover
- Weather conditions and descriptions

## 🔒 Privacy & Permissions

### Geolocation
- The app requests location access to provide weather for your current location
- Location data is only used for weather API requests
- No location data is stored or shared
- You can deny location access and use the search feature instead

## 🐛 Troubleshooting

### API Key Issues
- **Error**: "Failed to fetch weather data"
- **Solution**: Verify your API key is correctly set in the `.env` file
- **Check**: Make sure the key starts with `VITE_` prefix

### Location Access Denied
- **Error**: "Location permission denied"
- **Solution**: Enable location access in your browser settings
- **Alternative**: Use the search bar to manually enter a location

### No Data Displayed
- **Check**: Internet connection
- **Check**: API key is valid and has remaining quota
- **Check**: Location name is spelled correctly

### Build Errors
- **Solution**: Delete `node_modules` and `package-lock.json`
- **Run**: `npm install` again
- **Restart**: Development server with `npm run dev`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-width layout with grid-based weather details
- **Tablet**: Adjusted grid layout for medium screens
- **Mobile**: Single-column layout with touch-friendly buttons

## 🎯 Performance

- **Fast Loading**: Vite provides instant hot module replacement
- **Optimized Animations**: Hardware-accelerated CSS and Framer Motion
- **Efficient API Calls**: Single request fetches all required data
- **Lazy Loading**: Components render only when data is available

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

The built files can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

**Remember**: Set your `VITE_WEATHER_API_KEY` environment variable in your hosting platform's settings.

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

For issues with:
- **Visual Crossing API**: Visit their [support page](https://www.visualcrossing.com/weather-api)
- **Application bugs**: Check the browser console for error messages

---

**Enjoy exploring the weather! 🌤️**

