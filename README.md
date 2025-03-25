# Gulmarg Destinations - Travel Website

A modern, responsive travel website for Gulmarg Destinations built with React, TypeScript, and Material UI.

## Features

- Responsive design with mobile-first approach
- Modern UI with custom Material UI theme
- Interactive components with hover effects and animations
- Consistent layout with navbar and footer
- Multiple page types: Home, Gallery, Packages, Contact

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone this repository
2. Navigate to the project directory:
   ```
   cd gulmarg-destinations
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open http://localhost:3000 to view the app in your browser

## Adding Local Images

The website is configured to use local images. You'll need to add your own images to the `src/assets/images` directory.

### Image Placeholders

Throughout the code, there are placeholder paths like `/path/to/your/local/image.jpg`. You'll need to replace these with the actual paths to your images.

For example:
1. Add your hero image to `src/assets/images/hero.jpg`
2. Update the path in `src/pages/HomePage.tsx`:
   ```typescript
   // Replace this line:
   const heroImagePath = '/path/to/your/local/image.jpg';
   
   // With:
   const heroImagePath = require('../assets/images/hero.jpg');
   ```

### Image Categories

The gallery page requires different sets of images organized by category. Follow the same pattern to add your images to the assets directory and update the paths in the corresponding components.

## Font Configuration

The website uses Google Fonts for typography:

- "Montserrat" for headers
- "Dancing Script" for paragraph text (cursive font)
- "Roboto" as a fallback

To ensure these fonts are loaded, you can add the following to the `<head>` section of `public/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## Customization

- Color scheme: You can adjust the color theme in `src/themes/theme.ts`
- Layout components: Navbar and Footer components can be modified in `src/components/layout/`
- Page content: Each page component is located in `src/pages/`

## Production Build

To create a production build:

```
npm run build
```

This will create an optimized build in the `build` folder that can be deployed to any static hosting service.
