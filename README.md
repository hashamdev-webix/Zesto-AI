# Zesto AI - Restaurant Order Management System

AI-powered restaurant order management software built with React and React Router DOM.

## Features

- 🎯 Unified Order Inbox
- 🤖 AI Exception Detection
- 🔄 Workflow Automation
- 🔔 Real-time Alerts
- 📊 Analytics Dashboard
- 🔌 Seamless Integrations

## Tech Stack

- **React 19** - UI Framework
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **TypeScript** - Type safety

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Zesto_AI/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   ├── site/        # Site-specific components
│   │   └── ui/          # UI components (buttons, cards, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Product.tsx
│   │   ├── Solutions.tsx
│   │   ├── Industries.tsx
│   │   ├── Integrations.tsx
│   │   ├── GetInTouch.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Routes

- `/` - Home page
- `/about` - About us
- `/product` - Product features
- `/solutions` - Solutions overview
- `/industries` - Industry-specific solutions
- `/integrations` - Integration options
- `/get-in-touch` - Contact form

## Adding Images

Place your images in the `public/` folder and reference them using absolute paths:

```tsx
<img src="/logo.png" alt="Logo" />
```

## License

Private - All rights reserved
