# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Context

This is a Vue.js 3 Progressive Web App (PWA) for displaying a Google My Maps project focused on Prairie Creek Redwoods State Park. The app showcases camping spots, swimming locations, and hiking trails with a mobile-first design approach.

## Technical Stack

- Vue.js 3 with Composition API
- Vite for build tooling and development
- Progressive Web App features (service worker, manifest)
- Mobile-first responsive design
- Google Maps integration for embedded maps

## Key Requirements

- Mobile-optimized experience with touch-friendly interfaces
- Offline capabilities through PWA features
- Fast loading and performance on mobile devices
- Clean, intuitive navigation for outdoor enthusiasts
- Satellite view support and custom markers
- Family-friendly sharing capabilities

## Code Style Guidelines

- Use Vue 3 Composition API with `<script setup>` syntax
- Implement responsive design with CSS Grid/Flexbox
- Follow mobile-first design principles
- Use semantic HTML for accessibility
- Implement proper error handling for map loading
- Consider offline scenarios and progressive enhancement

## Map Integration Notes

- Embed Google My Maps using iframe for best compatibility
- Ensure maps work well on mobile devices
- Provide fallback options if maps fail to load
- Include clear markers for camping, swimming, and hiking spots
