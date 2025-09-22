# Thom Griggs Portfolio - Development Guidelines

## Project Overview
Professional portfolio website for Thom Griggs, a front-end developer with 10+ years of experience in hospitality web development. Features 258+ real projects from Sanity CMS with sophisticated typography and animations.

## Design System

### Typography Hierarchy
- **Display/Logo**: EB Garamond (serif) - for headers and logo
- **Body Text**: Crimson Text (serif) - for readable content  
- **UI Elements**: Inter (sans-serif) - for buttons, labels, navigation
- **Accent**: Libre Baskerville (serif) - for special emphasis

**CRITICAL**: Never override base typography with Tailwind text classes (text-lg, text-2xl, etc.) unless specifically needed for design. The globals.css handles all typography automatically.

### Color System
- **Light Mode Primary**: #030213 (deep navy)
- **Dark Mode Primary**: oklch(0.985 0 0) (near white)
- **Professional, muted palette** with subtle contrasts
- **Custom CSS variables** for consistent theming

### Layout Principles
- **Max-width**: 7xl (1280px) for main content
- **Consistent spacing**: Use Tailwind spacing scale
- **Responsive-first**: Mobile → Desktop progression
- **Subtle animations**: Professional, not flashy

## Component Architecture

### Data Layer
- **Shared data source**: `/components/data/projects.ts`
- **Real Sanity CMS data**: 258+ actual hospitality projects
- **Standardized interfaces**: `SanityProject` → `ArchiveProject`
- **Helper functions**: `getFeaturedProjects()`, `getClientProjects()`

### Component Standards
- **Import order**: React → External libraries → Internal components → Data
- **File naming**: PascalCase for components, camelCase for utilities
- **Props interfaces**: Define explicitly with TypeScript
- **Error boundaries**: Handle loading and error states gracefully

### Image Handling
- **Always use**: `ImageWithFallback` component for project images
- **Optimize**: Sanity CDN transformations for performance
- **Lazy loading**: Implement for Archive page performance

## Animation Guidelines

### Scroll Animations
- **useScrollAnimation hook**: Consistent scroll-triggered reveals
- **Stagger delays**: 100ms increments for list items
- **Easing**: `ease-out` for natural feeling
- **Duration**: 0.6-0.8s for most transitions

### Custom Animations
- **Float animations**: 5 variants for visual interest
- **Fade sequences**: `fadeInUp`, `staggerFadeIn`
- **Typography effects**: Subtle hover animations on logo
- **Performance**: Use `transform` and `opacity` only

## Typography Rules

### Font Applications
```css
/* Display headers and logo */
.font-serif-display { font-family: 'EB Garamond' }

/* Body content and descriptions */  
.font-serif-body { font-family: 'Crimson Text' }

/* UI elements, buttons, navigation */
.font-sans { font-family: 'Inter' }
```

### Logo System
- **Clean TG monogram**: Simple box with initials
- **Professional hover**: Subtle color transition
- **No fancy effects**: Understated and timeless
- **Responsive sizing**: Scales appropriately

## Content Guidelines

### Tone & Voice
- **Professional but approachable**: Not boastful, confident
- **Technical accuracy**: Specific about technologies used
- **Industry focus**: Emphasize hospitality expertise
- **Experience showcase**: Highlight 10+ years, 258+ projects

### Project Descriptions
- **Concise and specific**: Focus on technical implementation
- **Avoid marketing speak**: Stick to what was actually built
- **Highlight challenges**: Custom functionality, pixel-perfect design
- **Technology emphasis**: Hand-coded, performance-tuned

## Performance Standards

### Loading Optimization
- **Image lazy loading**: Especially on Archive page
- **Code splitting**: Route-based splitting implemented
- **Component memoization**: Use React.memo for heavy components
- **Bundle optimization**: Tree-shake unused code

### Responsive Design
- **Mobile-first**: Design for 320px → 1280px+
- **Breakpoint strategy**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch targets**: Minimum 44px for mobile interactions
- **Performance**: Optimize images for different screen densities

## Routing Architecture

### Current Routes
```typescript
/ - HomePage (Hero, About, Projects, Skills, Contact)
/archive - ArchivePage (258+ projects with filtering)
/project/:projectId - ProjectDetailPage (Individual showcases)
/chat - ChatPage (AI assistant interface - "Let's talk")
```

### Recent Updates (Latest)
- **Header Navigation**: Changed "Portfolio" link to "Let's talk" (→ `/chat`)
- **About Section**: Replaced profile image with map icon in journey section
- **Chat Interface**: New AI-powered Q&A page for inquiries about experience/availability
- **Contact Form**: Added demo notice with clear email direction
- **Portfolio Access**: Maintained external portfolio link in footer section

### Future Considerations
- `/blog` - Development insights and articles
- `/resume` - Downloadable CV/resume page
- `/testimonials` - Client feedback and case studies

## Data Management

### Project Data Structure
```typescript
interface ArchiveProject {
  id: string;
  title: string;
  year: string;
  type: 'featured' | 'client' | 'personal';
  category: string;
  technologies: string[];
  description: string;
  image?: string;
  status: 'live' | 'archived' | 'private';
  urlPath: string;
}
```

### Featured vs Client Projects
- **Featured**: 3-4 showcase pieces with detailed case studies
- **Client**: Main archive of 258+ hospitality websites  
- **Personal**: Side projects and experiments

## Technology Stack

### Core Dependencies
```json
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0", 
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0-alpha",
  "lucide-react": "latest"
}
```

### Optional Enhancements
- `motion/react` - Advanced animations
- `react-hook-form@7.55.0` - Contact form handling
- `sonner@2.0.3` - Toast notifications

## Development Workflow

### Code Style
- **Prettier**: 2-space indentation, single quotes
- **ESLint**: React and TypeScript recommended rules
- **Import organization**: External → Internal → Relative
- **Component structure**: Props → Hooks → Functions → JSX

### Git Strategy
- **Feature branches**: `feature/contact-form`, `feature/blog-section`
- **Conventional commits**: `feat:`, `fix:`, `style:`, `refactor:`
- **Clean history**: Squash feature commits before merge

## Deployment Considerations

### Build Optimization
- **Bundle analysis**: Check for unnecessary dependencies
- **Image optimization**: WebP format where supported
- **CSS purging**: Remove unused Tailwind classes
- **Compression**: Gzip/Brotli for static assets

### SEO Requirements
- **Meta tags**: Title, description, OG tags for each page
- **Structured data**: JSON-LD for portfolio projects
- **Sitemap**: XML sitemap generation
- **Accessibility**: ARIA labels, alt tags, keyboard navigation

## Future Enhancements

### Immediate Priorities
1. **Contact form functionality** - Email integration
2. **Project search** - Filter by title/technology on Archive
3. **Loading states** - Skeleton loaders for better UX
4. **Error handling** - Graceful failure states

### Long-term Goals
1. **Blog section** - Share development insights
2. **CMS integration** - Live Sanity data fetching
3. **Performance analytics** - Core Web Vitals monitoring
4. **A11y improvements** - Screen reader optimization

## Brand Guidelines

### Visual Identity
- **Professional minimalism**: Clean, uncluttered layouts
- **Sophisticated typography**: Serif fonts for elegance
- **Subtle interactions**: Hover effects and micro-animations
- **Industry credibility**: Emphasize hospitality specialization

### Content Strategy
- **Authentic showcase**: Real projects with live links
- **Technical depth**: Show hand-coding expertise
- **Client focus**: Hospitality industry specialization  
- **Experience narrative**: 10+ years of growth and expertise

---

## Quick Reference

### Common Patterns
```typescript
// Scroll animation hook
const { elementRef, isVisible } = useScrollAnimation();

// Project data access
const featuredProjects = getFeaturedProjects();
const clientProjects = getClientProjects();

// Image component
<ImageWithFallback src={project.image} alt={project.title} />
```

### CSS Classes
```css
/* Typography */
.font-serif-display, .font-serif-body, .font-sans

/* Animations */  
.animate-float-1 through .animate-float-5
.animate-fade-in-up, .animate-stagger-fade-in

/* Ombré effects */
.skill-ombre-1 through .skill-ombre-5
```

This portfolio represents a decade of hospitality web development expertise with authentic project data, sophisticated design, and professional execution.