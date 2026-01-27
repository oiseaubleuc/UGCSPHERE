#!/bin/bash

# Script om SPHEREUGC V2 naar GitHub te pushen
# Gebruik: ./PUSH-TO-GITHUB.sh

cd "/Users/hamouchihoudaifa/Desktop/SPHEREUGC V2"

echo "🔄 Remote aanpassen naar UGCSPHERE repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/oiseaubleuc/UGCSPHERE.git

echo "📋 Remote configuratie:"
git remote -v

echo ""
echo "📥 Ophalen van remote changes..."
git fetch origin

echo ""
echo "🔀 Mergen met remote (allow unrelated histories)..."
git pull origin main --allow-unrelated-histories --no-edit

echo ""
echo "🚀 Pushen naar GitHub..."
git push -u origin main

echo ""
echo "✅ Klaar! Check https://github.com/oiseaubleuc/UGCSPHERE"
