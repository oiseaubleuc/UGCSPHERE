#!/bin/bash

# Script om SPHEREUGC V2 naar GitHub te pushen (force - overschrijft remote)
# WAARSCHUWING: Dit overschrijft alles op de remote repository!
# Gebruik alleen als je zeker weet dat je de remote wilt overschrijven
# Gebruik: ./PUSH-FORCE.sh

cd "/Users/hamouchihoudaifa/Desktop/SPHEREUGC V2"

echo "⚠️  WAARSCHUWING: Dit zal de remote repository overschrijven!"
echo "Druk op Ctrl+C om te annuleren, of wacht 5 seconden..."
sleep 5

echo ""
echo "🔄 Remote aanpassen naar UGCSPHERE repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/oiseaubleuc/UGCSPHERE.git

echo "📋 Remote configuratie:"
git remote -v

echo ""
echo "🚀 Force pushen naar GitHub (overschrijft remote)..."
git push -u origin main --force

echo ""
echo "✅ Klaar! Check https://github.com/oiseaubleuc/UGCSPHERE"
