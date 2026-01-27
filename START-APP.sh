#!/bin/bash

# Stop alle lopende vite/npm processen
echo "🛑 Stoppen van alle lopende processen..."
lsof -ti:5173 | xargs kill -9 2>/dev/null
pkill -f "vite" 2>/dev/null
pkill -f "npm.*dev" 2>/dev/null
sleep 2

# Ga naar project directory
cd "/Users/hamouchihoudaifa/Desktop/SPHEREUGC V2"

# Check of node_modules bestaat
if [ ! -d "node_modules" ]; then
    echo "📦 Installeren van dependencies..."
    npm install
fi

# Start de development server
echo "🚀 Starten van development server..."
echo "📍 De app zal beschikbaar zijn op: http://localhost:5173"
echo ""
npm run dev
