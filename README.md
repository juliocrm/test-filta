# Filta Technical Test

## Overview
This project is a frontend application built with Vue 3 and Tailwind CSS as part of a technical test for a frontend developer position. The application features a landing page with a hero image, an image gallery with a modal view, and smooth animations. Most of the data is fetched from a JSON file to simulate a real-world scenario in a CMS application.

## Preview
https://filta-tech-test-jcrm.netlify.app

## Technologies
- Vue 3
- Tailwind CSS
- Fetch API
- Mirage JS

## Features
- Responsive design for various screen sizes
- Hero image with animated entrance
- Image gallery with modal display for enlarged images

## Setup and Installation
1. **Clone the repository:**
```bash
git clone https://github.com/juliocrm/test-filta.git
cd <repository_folder>
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

## API Endpoints

GET /api/landing-page: Returns the data for the landing page including the hero image and title.
GET /api/section-images: Returns the list of images for the gallery.
GET /api/background-colors: Returns configuration for background colors.

## Author

Julio César Rodríguez Mosquera
Frontend Developer