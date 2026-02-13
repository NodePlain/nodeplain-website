# NodePlain Website

A high-performance marketing website for NodePlain, built with Next.js 15, React 19, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ (Recommended: v20 or v24)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

Content is managed via MDX files in the `content/` directory.

- **Case Studies**: `content/case-studies/*.mdx`
- **Articles**: `content/articles/*.mdx`
- **ICP Pages**: `content/who-we-help/*.mdx`

To add new content, simply create a new MDX file in the appropriate directory using the existing files as templates.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Fonts**: Newsreader (Headlines), Plus Jakarta Sans (Bold Headlines), Outfit (Body), Space Mono (Labels)
- **Icons**: Lucide React
- **Animation**: CSS Animations (Orbs, Float)

## Deployment

The site is ready for deployment on Vercel.

1. Push to GitHub/GitLab/Bitbucket.
2. Import project in Vercel.
3. Deploy.

(Note: Ensure `next-sitemap` runs during the build process, which is configured in `package.json`).

## Brand Guidelines

The site strictly follows the NodePlain Brand Guidelines (Luminous Light system).

- **Colors**: Cream background (`#F6F3EB`), Ink text (`#2A2620`), Amber accents (`#C07840`).
- **Typography**: Newsreader (Serif) for headlines, Outfit for body.
- **Visuals**: Frosted glass panels, ambient glow orbs.

Do not introduce new colors or fonts without updating the design system variables in `global.css` and `tailwind.config.ts`.
