# 🌲 Prairie Creek Redwoods Guide

A modern, mobile-first Progressive Web App (PWA) for exploring Prairie Creek Redwoods State Park. Features custom markers for camping spots, swimming holes, and hiking trails with satellite imagery and local business information.

## ✨ Features

- 📱 **Mobile-First Design** - Optimized for phones and tablets
- 🛰️ **Satellite Maps** - Clear views with custom markers
- 🏕️ **Camping Spots** - Curated camping locations
- 🏊 **Swimming Holes** - Refreshing natural pools
- 🥾 **Hiking Trails** - Marked trails through old-growth forest
- 🍽️ **Local Services** - Restaurants, gas stations, and amenities
- 📤 **Easy Sharing** - One-tap sharing with family and friends
- ⚡ **PWA Support** - Install on your phone, works offline

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 PWA Features

- **Installable** - Add to home screen on mobile devices
- **Offline Capable** - Cached maps work without internet
- **Fast Loading** - Optimized for mobile networks
- **Native Feel** - Full-screen experience when installed

## 🗺️ Map Integration

The app embeds your Google My Maps project with ID: `1qtuAAYN6KZN2R0icCPuKFGhFIDZVol8`

- **Embedded View** - Reliable loading across all devices
- **Fallback Options** - Direct Google Maps links if embedding fails
- **Touch Optimized** - Mobile-friendly map controls

## 🛠️ Tech Stack

- **Vue.js 3** - Composition API with `<script setup>`
- **Vite** - Fast build tool and development server
- **PWA Plugin** - Service worker and manifest generation
- **CSS Grid/Flexbox** - Modern responsive layouts
- **Web APIs** - Native sharing, clipboard, and more

## 📦 Building & Deployment

```bash
# Build for production
npm run build

# Deploy the dist/ folder to any static hosting service:
# - GitHub Pages
# - Netlify
# - Vercel
# - Firebase Hosting
```

## 🎨 Customization

- Update map ID in `src/App.vue`
- Modify colors in CSS custom properties
- Add new features in the features array
- Customize PWA manifest in `vite.config.js`

## 📄 License

This project uses Google My Maps. All mapping data belongs to Google and the map creator.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
