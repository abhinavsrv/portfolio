# Abhinav Srivastava - Portfolio Website

This is a modern, interactive portfolio website built with React and TypeScript, featuring advanced animations and a multi-page structure.

## Features

- **Multi-page Structure**: Home, About, Teenance, Risk Simulator, NaviDhan, and a hidden Easter egg page
- **Advanced Animations**: Scroll-triggered animations, transitions, and interactive elements
- **Responsive Design**: Fully responsive for all device sizes
- **Hidden Easter Egg**: Access a secret photo gallery by long-pressing the profile photo for 3 seconds
- **Hidden Contact Emails**: Additional email addresses revealed when clicking the contact section

## Project Structure

- `src/`: Source code
  - `components/`: React components including dedicated pages
  - `assets/`: Images and other static assets
  - `App.tsx`: Main application component
  - `App.css`: Main stylesheet
- `public/`: Public assets
- Configuration files: `package.json`, `tsconfig.json`, `tailwind.config.js`, `vite.config.ts`

## Deployment Instructions for GitHub Pages

1. **Create a GitHub Repository**:
   - Sign in to your GitHub account
   - Create a new repository (e.g., `portfolio-website`)

2. **Initialize Git and Push to GitHub**:
   ```bash
   cd portfolio-final
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/abhinavsrv/portfolio-website.git
   git push -u origin main
   ```

3. **Install Dependencies and Build**:
   ```bash
   npm install
   npm run build
   ```

4. **Configure for GitHub Pages**:
   - Add the following to your `package.json`:
   ```json
   "homepage": "https://abhinavsrv.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   - Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Configure GitHub Repository Settings**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source to the `gh-pages` branch
   - Your site will be published at `https://abhinavsrv.github.io/portfolio-website`

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

- Update content in the component files under `src/components/`
- Modify styles in `src/App.css`
- Add or replace images in `src/assets/`

## Credits

- Created for Abhinav Srivastava
- Built with React, TypeScript, and Tailwind CSS
