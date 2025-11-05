@echo off
setlocal enabledelayedexpansion

REM Weather App - API Key Setup Script (Windows)
REM This script helps you set up your Visual Crossing Weather API key

echo ================================================================
echo          Weather App - API Key Setup
echo ================================================================
echo.

REM Check if .env file exists
if exist ".env" (
    echo Found existing .env file
    echo.
    echo Current content:
    type .env
    echo.
    set /p update_choice="Do you want to update it? (y/n): "
    if /i not "!update_choice!"=="y" (
        echo Setup cancelled.
        exit /b 0
    )
) else (
    echo Creating new .env file...
)

echo.
echo ================================================================
echo Instructions:
echo ================================================================
echo.
echo 1. Visit: https://www.visualcrossing.com/weather-api
echo 2. Sign up for FREE (no credit card needed)
echo 3. Copy your API key from the dashboard
echo 4. Paste it below
echo.
echo ================================================================
echo.

set /p api_key="Enter your Visual Crossing API key: "

if "!api_key!"=="" (
    echo.
    echo No API key provided. Setup cancelled.
    exit /b 1
)

REM Create .env file
echo # Get your free API key from https://www.visualcrossing.com/weather-api > .env
echo VITE_WEATHER_API_KEY=!api_key! >> .env

echo.
echo API key saved successfully!
echo.
echo ================================================================
echo Next Steps:
echo ================================================================
echo.
echo 1. Restart the development server:
echo    - Press Ctrl+C to stop the current server
echo    - Run: npm run dev
echo.
echo 2. Refresh your browser (F5)
echo.
echo 3. The yellow demo banner should disappear
echo.
echo 4. Search for any city to see REAL weather data!
echo.
echo ================================================================
echo.
echo Setup complete! Enjoy your weather app!
echo.

pause

