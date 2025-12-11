# Dump Haul Go – Waste Solutions

A modern, responsive one-page marketing website for a roll-off dumpster rental company serving El Paso, TX.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- Mobile-first responsive design

## Features

- ✨ Modern, high-contrast design with black background and yellow accents
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast page loads with Vite
- 💳 Payment integration ready (Stripe placeholder)
- 🎯 Smooth scroll navigation
- 📋 Contact form with validation
- 🎨 Custom Tailwind configuration

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Haul
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:3000`

## Project Structure

```
Haul/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   └── sections/    # Page sections (Hero, DumpsterSizes, etc.)
│   ├── lib/
│   │   └── payments/    # Payment integration (Stripe placeholder)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Design System

### Colors
- **Background**: Black (#000000)
- **Primary Accent**: Yellow (#FFD800)
- **Text**: White with gray variations

### Typography
- Clean, bold headings
- High contrast for readability
- Mobile-first sizing

## Payment Integration

The project includes placeholder files for Stripe integration:

- `/src/lib/payments/stripeClient.ts` - Payment logic placeholder
- `.env.example` - Environment variables template

To implement actual payments:

1. Sign up for a Stripe account
2. Add your Stripe public key to `.env`
3. Implement the `startCheckout()` function in `stripeClient.ts`
4. Set up a backend API to create Stripe sessions

## Customization

### Update Contact Information

Edit the `.env` file or update directly in components:
- Phone: (915) 255-DUMP
- Email: info@dumphaulgo.com
- Address: 123 Industrial Blvd, El Paso, TX 79912

### Modify Dumpster Pricing

Edit prices in `/src/lib/payments/stripeClient.ts`:

```typescript
const prices: Record<DumpsterSize, number> = {
  '20-yard': 350,
  '30-yard': 450,
  '40-yard': 550,
};
```

### Add Logo

Replace the placeholder logo in the Header component:
1. Add your logo to `/public/` or `/src/assets/`
2. Update the logo section in `/src/components/layout/Header.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Dump Haul Go Waste Solutions

## Support

For questions or support, contact info@dumphaulgo.com or call (915) 255-DUMP.
