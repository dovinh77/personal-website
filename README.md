# Personal Website

A modern, responsive personal website built with React, TypeScript, and Vite. 

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🚀 Fast loading with Vite
- 🔍 SEO optimized
- 💅 Styled with styled-components
- 🌙 Smooth animations
- 📊 Professional experience timeline
- 🔗 Social media integration

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Styled Components
- Font Awesome Icons
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/vincyf1/personal-website.git
cd personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## Project Structure

```
├── public/              # Static files
│   └── images/          # Image assets
├── src/
│   ├── components/      # React components
│   │   ├── Experience/  # Experience section
│   │   ├── Footer/      # Footer component
│   │   ├── Header/      # Navigation header
│   │   ├── Hero/        # Hero section
│   │   └── Skills/      # Skills section
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Builds the project using Vite
2. Pushes the built files to the gh-pages branch
3. GitHub Pages serves the content from the gh-pages branch

## Customization

1. Update content in respective components under `src/components/`
2. Modify styles in `src/styles/global.css`
3. Replace images in `public/images/`
4. Update metadata in `index.html`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

