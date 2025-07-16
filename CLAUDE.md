# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PeopleSpace is a React-based office management application built with TypeScript, Vite, and shadcn/ui components. It's designed to help employees manage their office presence, book desks, find colleagues, and view office maps. The application was created through Lovable.dev and integrates with their platform.

## Development Commands

```bash
# Development
npm run dev          # Start development server with hot reloading
npm run build        # Build for production
npm run build:dev    # Build for development environment
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality

# Package management
npm i                # Install dependencies
```

## Architecture

### Core Structure
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Components**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **Routing**: React Router v6 for client-side navigation
- **State Management**: React hooks with TanStack Query for server state
- **Styling**: Tailwind CSS with custom theme configuration

### Key Directories
- `src/pages/`: Main application pages (Dashboard, Colleagues, BookDesk, OfficeMap, TeamPresence)
- `src/components/ui/`: shadcn/ui component library
- `src/components/`: Custom components (BottomNav)
- `src/data/`: Static data and type definitions (teamData.ts)
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions and configurations

### Application Flow
The app uses a mobile-first design with bottom navigation. Main flow:
1. **Dashboard** (`/`) - User status management and quick actions
2. **Colleagues** (`/colleagues`) - Team directory and search
3. **Book Desk** (`/book`) - Desk booking interface
4. **Office Map** (`/map`) - Visual office layout
5. **Team Presence** (`/teams`) - Team-based presence view

### Data Structure
Team and colleague data is centralized in `src/data/teamData.ts` with:
- `TeamMember` interface for individual employees
- `TeamData` interface for team organization
- Static data for 5 teams: UX Design, Engineering, Quality Assurance, Sales, Product
- Helper functions like `getAllColleagues()` for data transformation

### UI Components
Uses shadcn/ui components configured in `components.json`:
- Consistent design system with Tailwind utilities
- Accessible components built on Radix UI primitives
- Custom toast notifications via Sonner
- Form handling with react-hook-form and Zod validation

### Key Technologies
- **React Query**: Data fetching and caching (configured in App.tsx)
- **React Router**: Client-side routing with programmatic navigation
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants
- **date-fns**: Date manipulation utilities
- **Tailwind Merge**: Utility for merging Tailwind classes

## Development Notes

### Component Patterns
- Functional components with hooks
- TypeScript interfaces for all data structures
- Consistent use of shadcn/ui components
- Mobile-first responsive design

### Styling Approach
- Tailwind CSS utility classes
- Custom CSS variables for theme colors
- Consistent spacing and typography scale
- Dark mode support via next-themes

### State Management
- Local state with useState for UI interactions
- TanStack Query for any future API integration
- Context providers for global state (tooltips, toasts)

### Code Organization
- Barrel exports from ui components
- Centralized data in dedicated files
- Consistent naming conventions
- TypeScript strict mode enabled