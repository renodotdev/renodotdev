# Reno.dev Portfolio (Astro 5 + Tailwind CSS v4)

A high-performance remake of the Reno.dev personal portfolio website built with the **Astro 5** framework and **Tailwind CSS v4**.

## ✨ Features

- ⚡ **Zero-JS by Default**: Blazing fast initial page loads and 100/100 Lighthouse performance using Astro islands & SSG.
- 🎨 **Modern Dark Aesthetics**: Frosted glassmorphism design, glowing accents, and sleek typography faithfully remade from the reference design.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile views (including horizontal snap scroll for mobile portfolio showcase).
- 🧭 **Interactive Navigation**: Fixed frosted-glass header with active section tracking via IntersectionObserver and animated mobile menu.
- 💼 **Interactive Experience Section**: Collapsible accordion with smooth expand/collapse transition.
- 📬 **Contact Form with Resend Integration**: Serverless API route (`/api/contact`) supporting Resend email delivery with local console fallback.
- 🚀 **Vercel Adapter**: Configured for static prerendering with serverless on-demand endpoints for forms.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Email**: [Resend](https://resend.com/)
- **Deployment**: [Vercel](https://vercel.com/) via `@astrojs/vercel`

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

### 3. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📧 Email Setup

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for full instructions on configuring Resend for the contact form.

## 📁 Project Structure

```
├── public/                 # Static assets (logos, profile photos, icons)
├── src/
│   ├── components/         # Astro components (Header, Footer, ExperienceSection, etc.)
│   ├── data/               # Structured data (projects, experience, skills, tutorials)
│   ├── layouts/            # Page layouts (Layout.astro with SEO & metadata)
│   ├── pages/              # Routes & API endpoints
│   │   ├── api/contact.ts  # Contact form POST endpoint
│   │   └── index.astro     # Main homepage
│   └── styles/             # Global CSS and Tailwind definitions
├── astro.config.mjs        # Astro configuration
└── tsconfig.json           # TypeScript configuration
```
