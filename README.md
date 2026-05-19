# My Agency

![App Preview](https://imgix.cosmicjs.com/7a203250-539c-11f1-8cae-3ba0530d6aa4-autopilot-photo-1472099645785-5658abf4ff4e-1779206695405.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern creative agency website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 Modern, responsive design
- 💼 Services showcase
- 👥 Team member profiles
- 🎯 Case studies portfolio
- 💬 Client testimonials
- ⚡ Server-side rendering with Next.js 16
- 🔧 Type-safe with TypeScript

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0c89a3c9307e7d2c5bacab&clone_repository=6a0c8b03c9307e7d2c5bb03d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a creative agency website with portfolio work, services, team members, and client testimonials. User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Agency". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Bun](https://bun.sh) - Package manager

## Getting Started

### Prerequisites

- Bun installed
- A Cosmic account and bucket with the required content

### Installation

```bash
bun install
bun dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 content types from Cosmic: services, team-members, case-studies, and testimonials. Read the [Cosmic docs](https://www.cosmicjs.com/docs) for more.

## Deployment Options

Deploy to Vercel or Netlify. Set these environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->