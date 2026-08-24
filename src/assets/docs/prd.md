# Product Requirements Document (PRD)

## 1. Project Overview

This repository is a personal portfolio website for Sagar Pariyar, a full-stack web developer and UI designer based in Saitama, Japan. The site presents the developer's background, skills, work experience, selected projects, and contact information in a polished single-page experience.

The site is intentionally static and marketing-focused rather than application-driven. It is structured as a lightweight React + Vite front-end that can be run locally and published to GitHub Pages with minimal setup.

Project purpose:
- Showcase developer profile and professional credibility
- Present experience and project work in a clean portfolio format
- Provide a simple contact path via email and social links
- Maintain a strong visual identity with custom branding and motion details

Live site:
- https://vtksgr.github.io/portfolio

Repository owner:
- Sagar Pariyar
- GitHub: https://github.com/vtksgr

---

## 2. Product Goals

### Primary goals
- Present the portfolio owner as a capable web developer and UI designer
- Emphasize work quality, specialization, and professional experience
- Make the portfolio easy to scan on both desktop and mobile devices
- Keep the site fast, responsive, and lightweight
- Publish the portfolio as a static site with zero backend dependency

### Secondary goals
- Highlight the owner's technical stack and service specialization
- Showcase freelance and employment work through project cards
- Give recruiters or clients a clear contact path
- Maintain a premium visual design without requiring a CMS or database

---

## 3. Target Audience

The site is designed for:
- Recruiters and hiring managers
- Clients seeking freelance work or collaborations
- Potential employers evaluating front-end and full-stack capabilities
- Design and development peers who want to review portfolio work

The message is direct: this portfolio is meant to communicate professionalism, technical capability, and visual design taste.

---

## 4. Core User Experience

The experience is a vertically scrolling single-page portfolio with anchored sections.

### User journey
1. Landing on the hero section and immediately seeing the personal brand
2. Reading the profile and capabilities in the About section
3. Reviewing skills and technology specialization
4. Reading work history and project highlights
5. Contacting the owner via email or social channels

### Interaction behaviors
- Animated rotating text in the hero section
- Smooth scrolling between section anchors
- Custom cursor effect on desktop pointer devices
- Scroll-to-top action button
- Reduced-motion support for accessibility
- Links open to external sites in new tabs where relevant

---

## 5. Functional Scope

At the product level, this project includes:
- Hero section with branding and CTAs
- About section with personal summary and key stats
- Skills section grouped by domain
- Experience timeline
- Projects showcase cards
- Contact section with location and email
- Footer with identity branding and copyright
- Scroll-based UI enhancements and animations

This project does not include:
- Authentication
- Database integration
- User-generated content
- CMS admin panel
- Contact form submission backend
- Multi-page routing
- Server-side rendering

---

## 6. Business and Content Model

This portfolio is a personal brand site. Its main content assets are textual and visual profile elements, not dynamic data.

### Portfolio owner data model
- Name: Sagar Pariyar
- Role: Full-Stack Web Developer and UI Designer
- Base location: Saitama, Japan
- Current employer: Comworks Co., Ltd.
- Experience level: 5+ years
- Languages: English, Japanese, Nepali
- Primary specializations: WordPress, Shopify, React, Node.js, UI/UX, graphic design
- Contact email: vtksgr@gmail.com

### Content groups
- Personal introduction
- Skills taxonomy
- Professional experience entries
- Project card list
- Contact links and social presence

This is content-first architecture, where updates are done by editing React component data and JSX markup rather than through a CMS or API layer.

---

## 7. Technical Architecture

### High-level architecture
This is a classic client-rendered React SPA built with Vite.

Runtime flow:
- Vite dev server serves the app locally
- React renders the root component tree into the DOM
- App.jsx assembles the sections in a defined order
- Each section is implemented as a reusable JSX component
- CSS is driven by Tailwind utilities and custom CSS variables in src/index.css
- The site is statically bundled into dist/ for deployment

### Architectural characteristics
- Single-page application
- Component-based UI structure
- No backend or API layer
- Static assets served from public/ and src/assets
- Portfolio content embedded directly in component files
- Build step converts source into deployable static output

---

## 8. Stack and Implementation Details

### Front-end framework
- React 19
- React DOM 19

### Build tooling
- Vite 7
- @vitejs/plugin-react

### Styling
- Tailwind CSS 4
- Custom CSS variables for brand palette and spacing values
- Additional global styling in src/index.css

### Supporting libraries
- react-icons for social and icon UI elements
- Google Fonts via CSS import for the Jost typeface

### Tooling and validation
- ESLint for linting
- Node test runner for a production smoke test after build
- gh-pages for deployment to GitHub Pages

---

## 9. File and Directory Structure

```text
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
├── overview.md
├── public/
│   └── sp-logo.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│       ├── components/
│       │   ├── AboutSection.jsx
│       │   ├── ContactSection.jsx
│       │   ├── CustomCursor.jsx
│       │   ├── Experience.jsx
│       │   ├── Footer.jsx
│       │   ├── HeroSection.jsx
│       │   ├── ProjectSection.jsx
│       │   ├── ScrollToTopButton.jsx
│       │   └── SkillSection.jsx
│       ├── docs/
│       │   └── prd.md
│       └── images/
│           └── sgr-portfolio.png
├── tests/
│   └── build.test.js
└── dist/ (generated after build)
```

---

## 10. Entry Points and Runtime Behavior

### index.html
- Contains the root mount element
- Adds SEO metadata and favicon
- Sets document title and description for the portfolio
- Provides the browser shell for the React app

### src/main.jsx
- Imports the app and global stylesheet
- Mounts the application using React StrictMode
- Establishes the root DOM entry point

### src/App.jsx
- Composes the main page sections in this sequence:
  1. CustomCursor
  2. HeroSection
  3. AboutSection
  4. SkillSection
  5. Experience
  6. ProjectSection
  7. ContactSection
  8. Footer
  9. ScrollToTopButton

This file acts as the page assembly root for the portfolio.

---

## 11. Component Architecture

### HeroSection.jsx
Purpose:
- Brand introduction
- Main landing section
- Navigation and call-to-action setup
- Rotating audience message animation

Key features:
- Fixed top navigation with anchor links
- Headline and subtitle messaging
- CTA buttons for projects and contact
- Social links
- Portrait image display
- Floating stat cards with experience information
- Responsive split layout on larger screens

Important logic:
- Uses useState and useEffect to rotate "FOR STARTUPS", "FOR BUSINESSES", and "FOR BRANDS"
- Respects prefers-reduced-motion behavior
- Uses imported portrait asset from src/assets/images

### AboutSection.jsx
Purpose:
- Introduce the portfolio owner
- Communicate values and professional personality

Contains:
- Biography and profile summary
- Personal and professional details
- Four stat cards with professional highlights

### SkillSection.jsx
Purpose:
- Display skill domains and technical proficiency

Contains:
- Skills grouped into categories such as web development, frameworks, CMS, design tools, infrastructure, and general design disciplines
- Clean card-based layout with hover effects and responsive grid behavior

### Experience.jsx
Purpose:
- Present employment and education timeline

Contains:
- Current role at Comworks Co., Ltd.
- Education background at Nippon International IT College
- Associated tags for technologies and subjects

### ProjectSection.jsx
Purpose:
- Showcase selected work items and projects

Contains:
- Project cards with title, description, technology tags, and external links
- A mix of employed and freelance projects
- Six project entries that reflect the owner’s experience with WordPress, Shopify, React, Node.js, and UI/UX work

### ContactSection.jsx
Purpose:
- Present contact information and availability

Contains:
- Email and location
- Personal availability statement
- Professional summary details
- Languages represented as chips

### Footer.jsx
Purpose:
- Reinforce brand identity and copyright information

Contains:
- Name branding
- Dynamic year rendering
- Geo-location line

### CustomCursor.jsx
Purpose:
- Add a custom cursor effect for fine-pointer devices

Behavior:
- Tracks mouse movement with a small dot and a larger ring
- Applies hover expansion to links or hover-enabled elements
- Hides cursor on touch devices and reduced-motion scenarios

### ScrollToTopButton.jsx
Purpose:
- Provide quick navigation to the top of the page

Behavior:
- Hidden until user scrolls downward beyond a threshold
- Smooth scroll to the top
- Uses icon UI and accessibility labels

---

## 12. Styling System

The design system is tailored around a minimal high-contrast identity.

### Brand palette
- Accent: #ff3b34
- Text: #222222
- Muted: #777777
- Left background: #ffffff
- Right background: #f1f1f1
- Card background: rgba(246, 246, 246, 0.93)

### Typography
- Font family: Jost
- Primary usage: modern sans-serif with strong headings and clean spacing

### Design patterns
- Section titles use numbering like 01, 02, 03 for consistency
- Accent red is used for callouts, highlights, borders, and interaction cues
- Soft gray backgrounds establish structure between sections
- Hover states are subtle and design-led rather than heavy or animated

### CSS details
The global stylesheet defines:
- Smooth scrolling
- Mobile-safe overflow handling
- Typography scale for h2-h5 and small text elements
- Cursor styling for fine pointer devices
- Reduced-motion overrides
- Intro animation classes for hero text rotation

---

## 13. Data and Content Handling

The project is content-driven but static.

### Content is currently embedded in:
- HeroSection.jsx
- AboutSection.jsx
- SkillSection.jsx
- Experience.jsx
- ProjectSection.jsx
- ContactSection.jsx
- Footer.jsx

### There is no external content source
- No CMS
- No backend API
- No content database
- No admin tooling

This makes the project easy to manage for a single-person portfolio but means every content update requires editing component source directly.

---

## 14. Deployment Strategy

### Local development
```bash
npm install
npm run dev
```

Default dev URL:
- http://localhost:5173

### Production build
```bash
npm run build
```

### Deployment target
- GitHub Pages

### Script behavior
- predeploy runs build automatically before deploy
- deploy pushes the dist output to the gh-pages branch
- Vite config uses a base path of /portfolio/ to make static asset URLs work correctly on GitHub Pages

### Deployment notes
- This is a static site, so deployment is straightforward and low-risk
- There is no server-side workflow to manage

---

## 15. Testing and Quality Checks

The repository includes a smoke test after build.

### Script
```bash
npm test
```

### What it verifies
- The production build succeeds
- Generated HTML includes expected metadata and asset URLs
- The largest bundled asset remains under the defined size budget

### Why testing matters here
- This project is static and simple, but asset paths and build integrity are critical for GitHub Pages compatibility
- The smoke test catches broken production output before deployment

---

## 16. Current Project Constraints and Observations

### 1. No backend presence
The portfolio is intentionally static. There is no form handling, no API integration, and no persistence layer.

### 2. Content is hardcoded
Most personal and project information is embedded directly in component files. Updating content requires a direct code edit.

### 3. Some legacy or unrelated files may exist
There is a CandidateContact.jsx file in the project root that appears unrelated to the portfolio and may have been copied accidentally. It is not part of the current app flow.

### 4. Portrait asset must exist
HeroSection imports a portrait image and relies on the file existing under src/assets/images. If the image is missing, the hero layout may appear incomplete.

### 5. Single-page only
Because the site is anchor-driven, there is no client-side routing or nested navigation.

### 6. Accessiblity is partially implemented
The app includes reduced-motion handling and a custom cursor hidden on coarse-pointer devices, which is helpful for mobile and accessibility scenarios.

---

## 17. Future Agent Guidance

When working on this project, agents should assume the following:

- This is a front-end portfolio, not a business application.
- The project favors static, declarative, and visually polished markup over logic-heavy architecture.
- Content is stored in JSX rather than a database, so updates are code changes.
- The site should remain lightweight and deployable as a static bundle.
- Design continuity matters; keep visual consistency with the existing accent-red brand and responsive layouts.
- GitHub Pages deployment must keep asset paths correct; do not break the base path configuration.
- Changes should preserve the single-page navigation and the reduced-motion accessibility pattern.

### Recommended editing principles
- Prefer edits in the existing section components rather than introducing new app structure.
- Match the existing design language before introducing new patterns.
- Keep static content updates easy to locate in each component.
- Avoid introducing routing, state libraries, or backend systems unless explicitly required.
- Preserve accessibility and performance when adding animations or interactive behavior.

---

## 18. Summary

This project is a polished personal portfolio website built with React and Vite, styled with Tailwind and custom CSS. It is designed as a static single-page experience to present Sagar Pariyar's work, skills, professional background, and contact details.

The architecture is intentionally simple:
- React components for sections
- Tailwind + custom CSS for layout and styling
- Vite for build and local serving
- GitHub Pages for deployment
- Static content embedded in source files

This makes the project easy to maintain, fast to load, and straightforward to deploy while still delivering a strong visual identity for a personal brand.

---

## 19. Quick Start

```bash
npm install
npm run dev
npm run build
npm test
npm run deploy
```

Requirements:
- Node.js
- npm

---

## 20. Final Interpretation for Agents

Treat this repository as a static personal brand website, not a general web application. The goal is to present the portfolio owner professionally, preserve a clean single-page experience, and keep the codebase lightweight and deployment-friendly. Future modifications should prioritize maintainability, visual consistency, and simplicity over feature complexity.
