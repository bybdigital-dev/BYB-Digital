# Overview

BYB Digital is a modern, professional one-page business website built for a digital marketing company that helps small businesses grow their online presence. The application features a clean React frontend with a comprehensive suite of pages including hero, about, services, why choose us, and contact sections. The backend provides API endpoints for handling contact form submissions with data persistence capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: TailwindCSS with custom CSS variables for theming (blue, white, grey color palette)
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission and retrieval
- **Development**: Hot reload with Vite integration for seamless development experience
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Infrastructure prepared with connect-pg-simple for PostgreSQL session storage
- **User Schema**: Basic user table structure defined but not actively used

## External Dependencies
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Images**: Unsplash for stock photography
- **Development**: Replit-specific plugins for development environment integration
- **Build Tools**: ESBuild for production server bundling
- **Form Validation**: Zod for runtime type validation and schema definition