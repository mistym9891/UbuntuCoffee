# Ubuntu Coffee - E-commerce Platform

## Overview

Ubuntu Coffee is a premium coffee e-commerce and marketing platform showcasing Ethiopian-origin Ugandan coffee beans to international markets. The application focuses on storytelling, ethical sourcing, and connecting Ugandan farmers with global buyers across Europe, Middle East, Asia, and Americas. Built as a modern React single-page application with an Express backend foundation, it emphasizes rich visual narratives, cultural authenticity, and premium brand positioning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling with custom design system

**Component Structure:**
- Page-based routing with dedicated pages: Home, Coffee, Sustainability, Contact, and NotFound
- Modular component library featuring reusable sections (Hero, ProductShowcase, CoffeeJourney, etc.)
- Comprehensive shadcn/ui component system with Radix UI primitives for accessible UI elements
- Custom theming with light/dark mode support and CSS variables for color management

**Design System:**
- Typography: Fraunces (headings), DM Sans (body), Noto Sans Arabic (Arabic fallback) - loaded from Google Fonts
- Custom color palette using HSL color space with CSS variable system
- Spacing based on Tailwind's 4px grid system
- Premium aesthetic with hover elevations and smooth transitions

**State Management:**
- Query client configured for API communication with credential support
- Form state managed through React Hook Form with Zod validation
- Component-level state using React hooks

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Development and production build pipelines using tsx and esbuild
- Middleware for JSON parsing, URL encoding, and request logging
- HTTP server creation for potential WebSocket support

**Development Environment:**
- Vite middleware integration for HMR in development
- Custom logging system with timestamp formatting
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)

**API Structure:**
- RESTful API design with `/api` prefix convention
- Response logging with JSON capture and truncation
- Credential-based session handling preparation

### Data Storage Solutions

**Database Setup:**
- Drizzle ORM configured for PostgreSQL dialect
- Neon Database serverless driver for PostgreSQL connections
- Schema-first approach with TypeScript type inference
- Migration system with dedicated migrations directory

**Current Schema:**
- Users table with UUID primary keys, username/password fields
- Zod schema validation for insert operations
- Type-safe queries using Drizzle's type system

**Storage Abstraction:**
- IStorage interface defining CRUD operations
- MemStorage class providing in-memory implementation for development
- Design allows easy swap to database-backed storage

### Authentication & Authorization

**Planned Authentication:**
- User schema includes username/password fields
- Session management prepared with connect-pg-simple for PostgreSQL session store
- Credential-based fetch requests configured in query client
- No active authentication currently implemented - foundation only

### Design Philosophy

**Visual Identity:**
- Premium coffee brand aesthetic inspired by Sera Wild Coffee, Blue Bottle, Onyx Coffee Lab
- African cultural elements balanced with global appeal
- Ubuntu philosophy (community, togetherness) as central theme
- Warm, inviting atmosphere evoking Ugandan highlands

**Content Strategy:**
- Storytelling through rich imagery and farmer profiles
- Journey-based narrative from farm to cup
- International market focus with multi-language support preparation
- Emphasis on sustainability, fair trade, and ethical sourcing

**User Experience:**
- Responsive design with mobile-first approach
- Smooth scroll behaviors and interactive navigation
- Progressive disclosure of information
- Accessibility through Radix UI primitives

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives:**
- Comprehensive set of unstyled, accessible UI components (accordion, dialog, dropdown, tooltip, etc.)
- Foundation for custom shadcn/ui component system
- Ensures WCAG compliance and keyboard navigation

**shadcn/ui:**
- Pre-built component library following New York style variant
- Configured with Tailwind CSS integration
- Component aliases for clean imports (@/components, @/ui, @/lib)

### Styling & Design

**Tailwind CSS:**
- Custom configuration with neutral base color
- CSS variables for dynamic theming
- PostCSS pipeline with autoprefixer
- Extended color system with semantic naming

**Google Fonts:**
- Oswald: Display font for headlines (400-700 weights)
- Roboto: Body text font (400-700 weights)
- Merriweather: Accent font for quotes (italic variants)

### Form & Validation

**React Hook Form:**
- Form state management with minimal re-renders
- Integration with Zod through @hookform/resolvers
- Type-safe form handling

**Zod:**
- Runtime type validation
- Schema generation from Drizzle tables (drizzle-zod)
- Client-side validation before API calls

### Database & ORM

**Neon Database:**
- Serverless PostgreSQL provider
- Connection via @neondatabase/serverless driver
- Environment-based configuration (DATABASE_URL)

**Drizzle ORM:**
- Type-safe SQL query builder
- Schema definitions with TypeScript inference
- Migration management via drizzle-kit
- Push command for schema synchronization

### Utilities & Tooling

**Class Utilities:**
- clsx for conditional class names
- tailwind-merge for intelligent class merging
- class-variance-authority for variant-based styling

**Date Handling:**
- date-fns for date formatting and manipulation
- Lightweight alternative to moment.js

**UI Enhancements:**
- cmdk for command palette interfaces
- embla-carousel-react for image carousels
- lucide-react for consistent icon system

### Development Tools

**Replit Integration:**
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development indicators
- @replit/vite-plugin-runtime-error-modal for error handling

**Build Pipeline:**
- esbuild for fast backend bundling
- Vite for optimized frontend builds
- TypeScript for type checking without emission

### Asset Management

**Images:**
- Static asset directory structure under attached_assets
- Generated images for coffee journey, farmers, global markets
- Logo and branding assets
- Optimized for web delivery

### Session Management

**connect-pg-simple:**
- PostgreSQL session store for Express
- Prepared for session-based authentication
- Not currently active but infrastructure ready