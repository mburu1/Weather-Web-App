# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. "Location request timed out" Error

**Problem**: The geolocation request is taking too long or timing out.

**Solutions**:

#### Option A: Allow Location Access
1. **Check Browser Permissions**:
   - Click the lock icon (🔒) in the address bar
   - Look for "Location" permission
   - Set it to "Allow"
   - Refresh the page

2. **Browser-Specific Instructions**:
   
   **Chrome/Edge**:
   - Settings → Privacy and security → Site settings → Location
   - Find `localhost:5174` and set to "Allow"
   
   **Firefox**:
   - Click the (i) icon in address bar
   - Permissions → Location → Allow
   
   **Safari**:
   - Safari → Settings → Websites → Location
   - Find localhost and set to "Allow"

#### Option B: Use Manual Search Instead
- Simply type a city name in the search bar
- Examples: "London", "New York", "Tokyo", "Paris"
- Press Enter or click Search
- This bypasses the need for location access

#### Option C: Wait Longer
- The timeout has been increased to 30 seconds
- If you're on a slow connection, wait a bit longer
- The app will retry automatically

### 2. "Failed to fetch weather data" Error

**Problem**: Cannot retrieve weather data from the API.

**Solutions**:

1. **Check API Key**:
   - Open `weather-app/.env` file
   - Verify your API key is correctly entered
   - No spaces before or after the key
   - Format: `VITE_WEATHER_API_KEY=your_key_here`

2. **Get a Valid API Key**:
   - Visit: https://www.visualcrossing.com/weather-api
   - Sign up for free (no credit card needed)
   - Copy your API key from the dashboard
   - Paste it in the `.env` file

3. **Restart the Server**:
   - Press `Ctrl + C` in the terminal
   - Run `npm run dev` again
   - Changes to `.env` require a restart

4. **Check Internet Connection**:
   - Make sure you're connected to the internet
   - Try opening other websites
   - Check if your firewall is blocking the request

5. **Check API Quota**:
   - Free tier: 1,000 requests per day
   - Log in to Visual Crossing dashboard
   - Check your usage statistics
   - Wait until tomorrow if quota exceeded

### 3. No Weather Data Displayed

**Problem**: The app loads but shows no weather information.

**Solutions**:

1. **Initial State**:
   - The app shows a welcome message when first loaded
   - This is normal - just search for a location or use your location

2. **After Search**:
   - Make sure you entered a valid location name
   - Try different formats: "London", "London, UK", "London, England"
   - Check for typos in the city name

3. **Check Console**:
   - Press `F12` to open browser developer tools
   - Click "Console" tab
   - Look for error messages
   - Share these errors if asking for help

### 4. Slow Loading

**Problem**: Weather data takes a long time to load.

**Solutions**:

1. **Network Speed**:
   - The app fetches 48 hours of data (24 past + 24 future)
   - This can take a few seconds on slow connections
   - Be patient and wait for the loading animation

2. **API Response Time**:
   - Visual Crossing API can sometimes be slow
   - This is normal and not an app issue
   - Try refreshing if it takes more than 10 seconds

3. **Browser Cache**:
   - Clear browser cache: `Ctrl + Shift + Delete`
   - Select "Cached images and files"
   - Clear and reload the page

### 5. Geolocation Not Working on Initial Load

**Problem**: App doesn't automatically show weather for your location.

**This is Expected Behavior**:
- The app tries to get your location silently on load
- If it fails (timeout, permission denied, etc.), it shows the welcome screen
- This prevents annoying error messages on first visit
- Simply click "Use My Location" button to try again with error feedback

**Why This Happens**:
- Browser security requires user interaction for location access
- Some browsers block automatic location requests
- Network delays can cause timeouts
- This is a privacy feature, not a bug

**Solution**:
- Click the "Use My Location" button manually
- Or search for your city name instead

### 6. "Geolocation is not supported by your browser"

**Problem**: Your browser doesn't support geolocation.

**Solutions**:

1. **Update Browser**:
   - Make sure you're using a modern browser
   - Update to the latest version
   - Supported: Chrome, Firefox, Safari, Edge

2. **Use HTTPS**:
   - Geolocation requires HTTPS in production
   - On localhost, HTTP is fine
   - If deployed, make sure your site uses HTTPS

3. **Use Search Instead**:
   - Type your city name in the search bar
   - This works on all browsers

### 7. Incorrect Weather Data

**Problem**: Weather data seems wrong or outdated.

**Solutions**:

1. **Click Refresh**:
   - Use the refresh button (🔄) in the weather card
   - This fetches the latest data

2. **Check Location**:
   - Make sure the displayed location is correct
   - Some city names exist in multiple countries
   - Try being more specific: "Paris, France" vs "Paris, Texas"

3. **API Data**:
   - Visual Crossing updates data regularly
   - Some delays are normal
   - Historical data (past 24 hours) won't change

### 8. Mobile Issues

**Problem**: App doesn't work well on mobile.

**Solutions**:

1. **Responsive Design**:
   - The app is fully responsive
   - Try rotating your device
   - Scroll horizontally on the timeline

2. **Touch Issues**:
   - Make sure you're tapping buttons directly
   - Buttons have large touch targets
   - Try zooming out if buttons seem small

3. **Mobile Browser**:
   - Use Chrome, Safari, or Firefox on mobile
   - Update to the latest version
   - Clear mobile browser cache

### 9. Timeline Not Scrolling

**Problem**: Can't scroll through the 48-hour timeline.

**Solutions**:

1. **Desktop**:
   - Click and drag horizontally
   - Use mouse wheel while hovering
   - Use scrollbar at the bottom

2. **Mobile**:
   - Swipe left/right on the timeline
   - Make sure you're swiping on the timeline, not the page

3. **Browser Issue**:
   - Try a different browser
   - Update your current browser
   - Check if JavaScript is enabled

### 10. Development Server Issues

**Problem**: `npm run dev` doesn't work.

**Solutions**:

1. **Port Already in Use**:
   - Vite will automatically try another port
   - Check the terminal for the actual port number
   - Usually switches from 5173 to 5174

2. **Dependencies Not Installed**:
   ```bash
   npm install
   ```

3. **Node Version**:
   - Make sure you have Node.js 16+ installed
   - Check version: `node --version`
   - Update if needed

4. **Clean Install**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## Still Having Issues?

### Check These:

1. **Browser Console** (`F12` → Console tab)
   - Look for red error messages
   - Note the exact error text

2. **Network Tab** (`F12` → Network tab)
   - Check if API requests are failing
   - Look for 400/500 status codes

3. **Environment Variables**:
   - File must be named exactly `.env` (not `.env.txt`)
   - Must be in the `weather-app` root directory
   - Must start with `VITE_` prefix
   - Requires server restart after changes

### Getting Help:

When asking for help, provide:
- Browser name and version
- Operating system
- Exact error message
- Console errors (F12 → Console)
- Steps to reproduce the issue

## Quick Fixes Checklist

- [ ] API key is correctly set in `.env` file
- [ ] Development server is running (`npm run dev`)
- [ ] Browser is updated to latest version
- [ ] Location permission is allowed (if using geolocation)
- [ ] Internet connection is working
- [ ] No firewall blocking the API requests
- [ ] Tried clearing browser cache
- [ ] Tried a different browser
- [ ] Checked browser console for errors

---

**Most issues can be solved by:**
1. Checking the API key
2. Allowing location access
3. Using manual search instead of geolocation
4. Restarting the development server
5. Clearing browser cache

**Remember**: The welcome screen on first load is normal! Just search for a location or click "Use My Location" to get started.

