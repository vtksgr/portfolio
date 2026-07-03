# Portfolio Website

This is a personal portfolio website built with React and Vite. It highlights professional experience, skills, projects, and contact information in a single-page layout with a custom hero section, animated text, custom cursor, and scroll-to-top button.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- ESLint

## Project Features

- Responsive single-page portfolio layout
- Hero section with rotating audience text
- About, skills, experience, projects, and contact sections
- Custom cursor effect for pointer devices
- Fixed scroll-to-top button
- SVG favicon support

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
    components/
      AboutSection.jsx
      ContactSection.jsx
      CustomCursor.jsx
      Experience.jsx
      Footer.jsx
      HeroSection.jsx
      ProjectSection.jsx
      ScrollToTopButton.jsx
      SkillSection.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

After running the command, Vite will provide a local development URL, usually:

```bash
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm test` builds the site and runs production smoke tests
- `npm run preview` previews the built app locally
- `npm run lint` runs ESLint checks

## Setup Notes

- Node.js and npm must be installed before running the project
- Static assets placed inside the `public/` folder are served directly
- Global styles are defined in `src/index.css`
- The main app layout is assembled in `src/App.jsx`

## Main Components

- `HeroSection.jsx` contains the landing section, navigation, and rotating audience text
- `AboutSection.jsx` introduces the developer profile
- `SkillSection.jsx` displays technical skills
- `Experience.jsx` highlights work experience
- `ProjectSection.jsx` showcases selected projects
- `ContactSection.jsx` provides contact details or a contact area
- `CustomCursor.jsx` adds a custom pointer effect
- `ScrollToTopButton.jsx` adds a fixed button for smooth return to the top of the page

## Customization

You can personalize this portfolio by updating:

- Text content in the section components inside `src/assets/components/`
- Colors and shared styles in `src/index.css`
- Favicon and other static assets in `public/`
- Project details in `ProjectSection.jsx`

## License

This project is for personal portfolio use. Update the license section if you want to publish it with a specific license.
