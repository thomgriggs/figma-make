#!/bin/bash

# Thom Griggs Portfolio - Complete Migration Script
# This script creates the entire portfolio project structure and files

echo "🚀 Creating Thom Griggs Portfolio Project..."

# Project name
PROJECT_NAME="thom-griggs-portfolio"

# Create project directory
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

echo "📁 Creating directory structure..."

# Create directory structure
mkdir -p src/{components/{data,figma,hooks,ui},styles,guidelines}

echo "📝 Creating configuration files..."

# package.json
cat > package.json << 'EOF'
{
  "name": "thom-griggs-portfolio",
  "version": "1.0.0",
  "type": "module",
  "description": "Professional portfolio website for Thom Griggs - Front-end developer specializing in hospitality websites",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.1",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^4.0.0-alpha.25",
    "@tailwindcss/vite": "^4.0.0-alpha.18"
  },
  "optionalDependencies": {
    "motion": "^10.16.4",
    "react-hook-form": "7.55.0",
    "sonner": "2.0.3"
  },
  "keywords": [
    "portfolio",
    "react",
    "typescript",
    "tailwind",
    "hospitality",
    "web-development",
    "frontend"
  ],
  "author": "Thom Griggs",
  "license": "MIT"
}
EOF

# vite.config.ts
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/styles': '/src/styles'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
EOF

# tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# tsconfig.node.json
cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF

# index.html
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Thom Griggs - Front-end developer with 10+ years of experience hand-coding bespoke hotel and hospitality websites. Portfolio showcasing 258+ projects." />
    <meta name="keywords" content="front-end developer, hospitality websites, hotel web development, custom web development, React, TypeScript" />
    <meta name="author" content="Thom Griggs" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thomgriggs-portfolio.com/" />
    <meta property="og:title" content="Thom Griggs - Front-End Developer" />
    <meta property="og:description" content="Professional front-end developer specializing in hospitality websites with 10+ years of experience and 258+ completed projects." />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thomgriggs-portfolio.com/" />
    <meta property="twitter:title" content="Thom Griggs - Front-End Developer" />
    <meta property="twitter:description" content="Professional front-end developer specializing in hospitality websites with 10+ years of experience and 258+ completed projects." />
    
    <title>Thom Griggs - Front-End Developer | Hospitality Web Specialist</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# src/main.tsx
cat > src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

echo "🎨 Creating styles..."

# Create globals.css with complete styling
cat > src/styles/globals.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  
  /* Typography Families */
  --font-serif-display: 'EB Garamond', Georgia, serif;
  --font-serif-body: 'Crimson Text', Georgia, serif;
  --font-serif-accent: 'Libre Baskerville', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/**
 * Base typography. This is not applied to elements which have an ancestor with a Tailwind text class.
 */
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }

    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }
  }
}

html {
  font-size: var(--font-size);
}

/* Custom animations */
@keyframes float-1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-1deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
}

@keyframes float-4 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-2deg); }
}

@keyframes float-5 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(1.5deg); }
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes progressBar {
  from { width: 0%; }
  to { width: var(--progress-width); }
}

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes staggerFadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

.animate-float-1 { animation: float-1 6s ease-in-out infinite; }
.animate-float-2 { animation: float-2 8s ease-in-out infinite 1s; }
.animate-float-3 { animation: float-3 7s ease-in-out infinite 2s; }
.animate-float-4 { animation: float-4 9s ease-in-out infinite 1.5s; }
.animate-float-5 { animation: float-5 7.5s ease-in-out infinite 0.5s; }

.animate-count-up { animation: countUp 0.8s ease-out; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-stagger-fade-in { animation: staggerFadeIn 0.6s ease-out forwards; }

/* Subtle ombré gradient effects */
.ombre-gradient {
  background: linear-gradient(90deg, 
    var(--primary) 0%, 
    var(--primary) 60%, 
    oklch(from var(--primary) calc(l + 0.05) c h) 85%, 
    oklch(from var(--primary) calc(l + 0.1) c h) 100%
  );
}

/* Light mode subtle ombré skills */
:root {
  .skill-ombre-1 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 1;
  }
  .skill-ombre-2 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.85;
  }
  .skill-ombre-3 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.7;
  }
  .skill-ombre-4 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.55;
  }
  .skill-ombre-5 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.4;
  }
}

/* Dark mode subtle ombré skills */
.dark {
  .skill-ombre-1 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 1;
  }
  .skill-ombre-2 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.85;
  }
  .skill-ombre-3 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.7;
  }
  .skill-ombre-4 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.55;
  }
  .skill-ombre-5 { 
    background-color: var(--muted); 
    color: var(--foreground);
    opacity: 0.4;
  }
}

/* Typography Classes - Linotype Style */
.font-serif-display { font-family: var(--font-serif-display); }
.font-serif-body { font-family: var(--font-serif-body); }
.font-serif-accent { font-family: var(--font-serif-accent); }
.font-sans { font-family: var(--font-sans); }

/* Logo Typography */
.logo-text {
  font-family: var(--font-serif-display);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.logo-subtitle {
  font-family: var(--font-sans);
  font-weight: 400;
  letter-spacing: 0.01em;
  font-size: 0.75rem;
}

/* Display Typography for Heroes */
.display-serif {
  font-family: var(--font-serif-display);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 0.9;
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
}

.display-serif-italic {
  font-family: var(--font-serif-display);
  font-weight: 500;
  font-style: italic;
  letter-spacing: -0.02em;
  line-height: 0.9;
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'swsh' 1;
}

/* Elegant hover effects for typography */
.logo-hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-hover-effect:hover {
  letter-spacing: 0.01em;
  transform: translateY(-1px);
}

/* Sophisticated logo animations */
@keyframes logo-flourish {
  0% { 
    opacity: 0; 
    transform: scale(0.8) rotate(-5deg); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.1) rotate(2deg); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) rotate(0deg); 
  }
}

.logo-ampersand {
  animation: logo-flourish 0.6s ease-out;
  font-feature-settings: 'swsh' 1, 'calt' 1;
}

/* Enhanced typographic logo styling */
.logo-monogram {
  position: relative;
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
}

.logo-monogram::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--primary), transparent);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-monogram:hover::after {
  width: 100%;
}
EOF

echo "⚛️ Creating React components..."

# Create App.tsx
cat > src/App.tsx << 'EOF'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ArchivePage } from "./components/ArchivePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/project/:projectId" element={
          <Layout>
            <ProjectDetailPage />
          </Layout>
        } />
        <Route path="/archive" element={
          <Layout>
            <ArchivePage />
          </Layout>
        } />
        {/* Handle preview page route */}
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
EOF

echo "📦 Installing dependencies..."

# Install dependencies
npm install

echo "✅ Portfolio project created successfully!"
echo ""
echo "🚀 To get started:"
echo "  cd $PROJECT_NAME"
echo "  npm run dev"
echo ""
echo "📁 Project structure created with:"
echo "  ✓ Complete Tailwind V4 configuration"
echo "  ✓ TypeScript setup"
echo "  ✓ React Router configuration"
echo "  ✓ Custom design system with typography"
echo "  ✓ All necessary dependencies"
echo ""
echo "⚠️  Note: The components directory is ready for your React components."
echo "   You'll need to create the individual component files based on your existing codebase."
echo ""
echo "Happy coding! 🎉"
EOF