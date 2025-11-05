# 🔑 API Setup Guide

## Quick Start - Get Your Weather API Key

### Step 1: Sign Up for Visual Crossing Weather API

1. **Visit the Website**
   - Go to: https://www.visualcrossing.com/weather-api
   - Click on "Sign Up" or "Get Started Free"

2. **Create Your Account**
   - Enter your email address
   - Create a password
   - Verify your email

3. **Get Your API Key**
   - After logging in, go to your Account page
   - Copy your API Key (it will look something like: `ABCDEFGH123456789IJKLMNOP`)

### Step 2: Add API Key to Your Project

1. **Open the `.env` file** in the `weather-app` folder

2. **Replace the placeholder** with your actual API key:
   ```env
   VITE_WEATHER_API_KEY=YOUR_ACTUAL_API_KEY_HERE
   ```

3. **Save the file**

### Step 3: Restart the Development Server

1. **Stop the current server** (if running):
   - Press `Ctrl + C` in the terminal

2. **Start the server again**:
   ```bash
   npm run dev
   ```

3. **Open the app** in your browser:
   - The app will automatically open at `http://localhost:5173/` or `http://localhost:5174/`

## ✅ Testing Your Setup

Once the app is running with your API key:

1. **Test Geolocation**:
   - Click "Use My Location" button
   - Allow location access when prompted
   - You should see weather data for your current location

2. **Test Search**:
   - Type a city name (e.g., "London", "New York", "Tokyo")
   - Click "Search" or press Enter
   - Weather data should appear

3. **Test Refresh**:
   - Click the refresh button (🔄) in the weather card
   - Data should reload

## 🆓 Free Tier Limits

Visual Crossing Weather API Free Tier includes:
- **1,000 requests per day**
- **Historical and forecast data**
- **Hourly data**
- **No credit card required**

This is more than enough for development and personal use!

## ❌ Troubleshooting

### "Failed to fetch weather data"
- **Check**: Your API key is correctly copied in the `.env` file
- **Check**: No extra spaces before or after the API key
- **Check**: The file is named exactly `.env` (not `.env.txt`)
- **Solution**: Restart the development server after changing the `.env` file

### "Location permission denied"
- **Solution**: Enable location access in your browser settings
- **Alternative**: Use the search bar to manually enter a location

### API Key Not Working
- **Check**: You're using the correct API key from Visual Crossing (not another weather service)
- **Check**: Your account is active and verified
- **Check**: You haven't exceeded the daily request limit (1,000 requests)

## 📝 Example `.env` File

```env
# Get your free API key from https://www.visualcrossing.com/weather-api
VITE_WEATHER_API_KEY=ABCDEFGH123456789IJKLMNOP
```

**Important Notes:**
- The key must start with `VITE_` to be accessible in the React app
- No quotes needed around the API key
- Restart the dev server after changing this file

## 🔗 Useful Links

- **Visual Crossing Dashboard**: https://www.visualcrossing.com/account
- **API Documentation**: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
- **Support**: https://www.visualcrossing.com/weather-api-support

---

**Ready to explore the weather! 🌤️**

