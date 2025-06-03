# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an OsteoStrong website project with:
- A React frontend client (Vite + TypeScript + Tailwind CSS)
- An Express backend server
- Sanity CMS for content management
- PostgreSQL database with Drizzle ORM
- Netlify deployment configuration

## Key Commands

### Development
```bash
# Start full stack development (frontend + backend)
npm run dev

# Start only frontend development
cd client && npm run dev

# Start Sanity Studio
cd Studio && npm run dev
```

### Build & Production
```bash
# Build the entire project
npm run build

# Start production server
npm start

# Database migrations
npm run db:push
```

### Sanity Content Management
```bash
cd Studio

# Create blog posts
npm run create-blog-posts

# Create services
npm run create-services

# Create testimonials
npm run create-testimonial

# Create page images
npm run create-page-images

# Deploy Sanity
npm run deploy
```

### Client-specific Commands
```bash
cd client

# Lint the code
npm run lint

# Type checking
npm run build
```

## Architecture

### Directory Structure
- `/client` - React frontend application
  - `/src/components` - UI components (sections, layout, ui)
  - `/src/pages` - Route pages (Home, About, Blog, etc.)
  - `/src/lib` - Utilities and Sanity client configuration
  - `/src/types` - TypeScript type definitions

- `/Studio` - Sanity CMS Studio
  - `/schemaTypes` - Content schemas (post, author, testimonial, etc.)
  - `/scripts` - Utility scripts for content creation

- `/server` - Express backend
  - `index.ts` - Main server entry point
  - `routes.ts` - API routes registration
  - `db.ts` - Database connection

- `/shared` - Shared code between client and server
  - `schema.ts` - Database schema definitions

### Key Technical Details

1. **Sanity Integration**
   - Project ID: `6ff7gi0z` (IMPORTANT: Use this project ID)
   - Dataset: `production`
   - Studio location: `/Studio` directory (this is the correct Sanity setup)
   - Client configured in `/client/src/lib/sanity.ts`
   - Content types:
     - **Blog/Content**: posts, authors, categories
     - **Health/Medical**: healthCondition, faq
     - **Team/Social**: teamMember, testimonial
     - **Services**: service
     - **Media**: siteImage, siteLogo, facilityGallery, imageGallery, pageImage

2. **Routing**
   - Client uses Wouter for routing
   - Server runs on port 5000 (127.0.0.1 in development)
   - API routes prefixed with `/api`

3. **Styling**
   - Tailwind CSS with custom theme configuration
   - Shadcn UI components in `/client/src/components/ui`
   - Mobile-optimized styles in separate CSS files

4. **Deployment**
   - Netlify configuration in `netlify.toml`
   - Build output to `dist/public`
   - Serverless functions in `netlify/functions`

5. **Environment Variables**
   - `DATABASE_URL` - PostgreSQL connection string
   - `VITE_SANITY_PROJECT_ID` - Sanity project ID
   - `VITE_SANITY_DATASET` - Sanity dataset name
   - `VITE_SANITY_API_VERSION` - Sanity API version

## Important Notes

- The project uses a monorepo structure with separate package.json files
- Sanity Studio is located in `/Studio` directory (NOT `/osteo` - that has been removed)
- Sanity Studio and the main application are deployed separately
- The client build process includes TypeScript compilation
- Images and assets are managed through Sanity CMS
- Enhanced schemas now include SEO fields and medical/health-specific content types