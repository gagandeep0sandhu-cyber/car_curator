# Car Curator — Car Showcase Website

Car Curator is a dark, responsive automotive showcase website for browsing cars by brand, category, year and model. The existing multi-page project has been preserved while the homepage has been converted to React.

## Features
- React-powered responsive homepage with reusable components.
- Car showcase cards with specifications and detail links.
- Brand and category navigation.
- Search form routed to the existing `cars.html` catalogue.
- Sign In and Sign Up pages with required-field validation and useful error messages.
- Demo authentication using browser `localStorage` (no backend authentication).
- Existing Cars, Compare, Browse, Explore, News and Contact pages retained.
- Horizontal overflow controlled without disabling normal vertical page scrolling.

## Technologies
- HTML5 / CSS3
- JavaScript (ES6+)
- React
- React DOM
- React Router dependency included for future expansion
- Vite
- Browser localStorage for demo authentication

## Project structure
- `index.html` — React entry page
- `src/main.jsx` — React bootstrap
- `src/components/Home.jsx` — reusable homepage components
- `src/data/homeData.js` — homepage data
- `src/styles.css` — React-specific style additions
- `signin.html`, `signup.html` — authentication UI
- `auth.js` — validation and demo authentication logic
- Existing static pages — `cars.html`, `brands.html`, `categories.html`, `compare.html`, `news.html`, `contact.html`, `car-details.html`
- `style.css`, `script.js`, `images/` — existing project assets and functionality

## Installation and run
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

For a production build:

```bash
npm run build
npm run preview
```

## Authentication note
Sign In / Sign Up are intentionally implemented as a front-end demo. User records are stored in `localStorage` only. This is not real server-side authentication and should not be used for production credentials.
