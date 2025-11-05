# 🔑 How to Get Your Free Weather API Key

## Current Status
Your app is running in **DEMO MODE** with sample weather data.

To see **REAL WEATHER DATA**, follow these simple steps:

---

## Step-by-Step Guide (5 minutes)

### 1️⃣ Visit Visual Crossing Weather API
Open this link in your browser:
👉 **https://www.visualcrossing.com/weather-api**

### 2️⃣ Sign Up for Free
- Click **"Sign Up"** or **"Get Started Free"**
- Enter your email address
- Create a password
- Click **"Create Account"**

**Note**: No credit card required! ✅

### 3️⃣ Verify Your Email
- Check your email inbox
- Click the verification link
- This activates your account

### 4️⃣ Get Your API Key
After logging in:
- You'll see your **Dashboard**
- Look for **"Your API Key"** section
- Click **"Copy"** or select and copy the key
- It looks like: `ABCDEFGH123456789IJKLMNOP`

### 5️⃣ Add API Key to Your App

**Option A: Edit the .env file**
1. Open the file: `weather-app/.env`
2. Find this line:
   ```
   VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual key:
   ```
   VITE_WEATHER_API_KEY=ABCDEFGH123456789IJKLMNOP
   ```
4. Save the file

**Option B: Use the command line**
```bash
# In the weather-app folder, run:
echo "VITE_WEATHER_API_KEY=YOUR_ACTUAL_KEY_HERE" > .env
```

### 6️⃣ Restart the Development Server

**In your terminal:**
1. Press `Ctrl + C` to stop the server
2. Run `npm run dev` to start it again
3. The app will reload with real weather data!

---

## ✅ What You Get (Free Tier)

- ✅ **1,000 API requests per day**
- ✅ **Current weather conditions**
- ✅ **48-hour forecast** (24 hours past + 24 hours future)
- ✅ **Hourly weather data**
- ✅ **Global coverage** (any location worldwide)
- ✅ **High accuracy**
- ✅ **No credit card required**
- ✅ **No expiration**

---

## 🎯 Quick Test

After adding your API key and restarting:

1. **Refresh your browser** (F5)
2. The **yellow demo banner should disappear**
3. **Search for "Nairobi"** or any city
4. You should see **real weather data**!

---

## ❓ Troubleshooting

### "Failed to fetch weather data" after adding key

**Check these:**
- [ ] API key is copied correctly (no extra spaces)
- [ ] File is named exactly `.env` (not `.env.txt`)
- [ ] You restarted the development server
- [ ] Your internet connection is working

### Still seeing demo mode?

**Try this:**
1. Stop the server (`Ctrl + C`)
2. Delete the `.env` file
3. Create a new `.env` file
4. Add this line (with your actual key):
   ```
   VITE_WEATHER_API_KEY=your_actual_key_here
   ```
5. Save and restart: `npm run dev`

### API key not working?

**Verify:**
1. Log in to Visual Crossing dashboard
2. Check if your key is active
3. Check your usage (should be under 1,000 requests/day)
4. Try generating a new key if needed

---

## 🚀 Alternative: Test with Demo Mode

If you want to test the app immediately without an API key:

**Demo mode is already active!** You can:
- ✅ Search for any city name
- ✅ Click "Use My Location"
- ✅ See the app interface and features
- ✅ View sample weather data

The only difference is the data is randomly generated, not real weather.

---

## 📧 Need Help?

### Visual Crossing Support
- Website: https://www.visualcrossing.com/weather-api-support
- Email: support@visualcrossing.com

### Common Questions

**Q: Is it really free?**
A: Yes! 1,000 requests/day forever, no credit card needed.

**Q: How long does it take?**
A: 5 minutes total - signup, verify email, copy key, add to app.

**Q: What if I exceed 1,000 requests?**
A: The free tier resets daily. For this app, you'd need to refresh weather 1,000 times in one day to hit the limit!

**Q: Can I use a different weather API?**
A: Yes, but you'd need to modify the code. Visual Crossing is recommended for this app.

---

## 🎉 You're All Set!

Once you add your API key:
- Real weather data for any location
- Accurate forecasts
- Live updates
- No more demo banner

**Enjoy your weather app! 🌤️**

---

## Quick Reference

| Item | Value |
|------|-------|
| **API Website** | https://www.visualcrossing.com/weather-api |
| **File to Edit** | `weather-app/.env` |
| **Line to Change** | `VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE` |
| **After Editing** | Restart server with `npm run dev` |
| **Free Requests** | 1,000 per day |
| **Cost** | $0 (Free forever) |

