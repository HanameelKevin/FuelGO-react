FuelGo React App

FuelGo is a responsive React application built with JSX and Tailwind CSS. It showcases reusable components, state management with hooks, API integration, and light/dark mode theming.

Features

Reusable components: Button, Card, Navbar, Footer, Layout

Task Manager: Add, complete, delete, and filter tasks (persisted in localStorage)

API Integration: Fetch and display posts with loading/error handling

Light/Dark mode toggle using Tailwind CSS

Responsive design for mobile, tablet, and desktop

Setup

Clone the repository

Install dependencies:

npm install


Start development server:

npm run dev

Project Structure
src/
├─ components/    # Reusable UI components
├─ pages/         # Page components (Home, Tasks, Fuel Orders)
├─ hooks/         # Custom hooks (useLocalStorage)
├─ context/       # Theme context
├─ api/           # API utility functions
├─ App.jsx        # Main app with routing
├─ main.jsx       # Entry point
├─ index.css      # Tailwind CSS

Deployment

Can be deployed on Vercel, Netlify, or GitHub Pages.
