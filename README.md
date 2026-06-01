# Len Johnson Campaign Website

A modern, beautifully designed website for the Len Johnson Campaign celebrating Manchester's boxing legend and civil rights pioneer.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Image Files

Create a folder `public/images/` and add these 9 image files:

- `hero.webp` — Getty photo with Len and friends
- `portrait.webp` — Young Len portrait
- `boxing.webp` — Len in fighting stance
- `crowd.webp` — Len with supporters
- `breaking-barz.webp` — Breaking Barz event poster
- `charity-match.webp` — Charity Match photo
- `knockout.webp` — Knockout Blow collage
- `sculptor.webp` — Taslim Martin sculpting
- `statue.webp` — Finished statue maquette

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import this GitHub repository
4. Vercel will auto-deploy

## Project Structure

```
lenjohnsoncampaign/
├── app/
│   ├── layout.jsx      # React layout wrapper
│   ├── page.jsx        # Main page component
│   └── globals.css     # Global styles
├── public/
│   └── images/         # Place image files here
├── package.json        # Project dependencies
└── next.config.js      # Next.js configuration
```

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Fonts:** Google Fonts (Anton, Archivo Black, Instrument Sans)

## Features

- ✨ Responsive design (mobile-first)
- 🎨 Custom TribeStays-inspired design language
- 🖼️ Full-bleed hero image with gradient overlay
- ⚡ Fast performance optimized for Vercel
- 🔍 SEO-friendly with metadata
- 📱 Mobile-friendly navigation

## Editing Content

To edit text/images without touching code, set up a CMS like Sanity or Contentful and connect it to this project. See [DEPLOYMENT-CHECKLIST.md](../DEPLOYMENT-CHECKLIST.md) for full instructions.

## License

© 2024 Len Johnson Campaign. Community Interest Company.

---

**Questions?** Check the deployment guide or contact the development team.
