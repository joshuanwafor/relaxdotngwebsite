# Relax.ng Website

🌿 **More time for you, less stress from life.**

The official website for Relax.ng - connecting Northern Nigerians to trusted lifestyle and home services.

## About Relax.ng

Relax.ng is a lifestyle services platform designed specifically for Northern Nigeria, offering:

- **Laundry Services** - Professional pickup, cleaning, and delivery
- **Home Cleaning** - Professional cleaning services for homes and offices
- **Home Essentials** - Household items and daily necessities

Our platform emphasizes cultural sensitivity with Hausa language support, Halal options, prayer time considerations, and vetted local providers.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS 4
- **Typography:** Lato (Google Fonts) + Comfortaa (headline placeholder)
- **Language:** TypeScript
- **Deployment:** Ready for Vercel

## Brand Guidelines

### Colors
- **Primary:** Deep Green (`#13532E`)
- **Secondary:** Warm Beige (`#EEE6D6`)  
- **Accent:** Vibrant Orange (`#FC7301`)
- **Neutrals:** White (`#FFFFFF`), Black (`#000000`)

### Typography
- **Headlines:** Comfortaa (placeholder for Cirqua)
- **Body Text:** Lato
- **Hierarchy:** Clear distinction between headlines and body content

### Voice & Tone
- Calm, friendly, supportive
- Conversational yet professional
- Culturally respectful and inclusive

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── Navigation.tsx   # Main navigation header
│   └── Footer.tsx       # Site footer
├── about/              # About page
├── providers/          # Provider signup page  
├── faq/               # FAQ page
├── contact/           # Contact page
├── globals.css        # Global styles & brand colors
├── layout.tsx         # Root layout with metadata
└── page.tsx           # Homepage with waitlist

public/                # Static assets
```

## Key Features

### Homepage
- Hero section with waitlist signup
- Service benefits overview
- How it works (3-step process)
- Services preview
- Multiple CTA sections

### About Page
- Mission & vision statements
- Northern Nigeria focus explanation
- Cultural sensitivity highlights
- Company values

### Providers Page
- Benefits for service providers
- Service categories overview
- Application form
- Fair pay & flexibility emphasis

### FAQ Page
- Comprehensive Q&A
- Expandable/collapsible interface
- Cultural sensitivity explanations
- Safety & vetting information

### Contact Page
- Multiple contact methods
- Contact form with subject categories
- Business hours
- Support information

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Follow the existing pattern for consistent styling
4. Update navigation in `Navigation.tsx` if needed

### Brand Consistency

- Use `font-headline` class for headlines (Comfortaa)
- Use Tailwind's font-sans for body text (Lato)
- Stick to brand color utilities: `text-primary`, `bg-secondary`, `text-accent`
- Maintain consistent spacing with Tailwind's spacing scale

## Deployment

This site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Environment variables can be added in the Vercel dashboard
4. Automatic deployments on push to main branch

## Future Enhancements

- [ ] Implement actual waitlist/form submissions
- [ ] Add proper Cirqua font files
- [ ] Integrate with backend API
- [ ] Add analytics tracking
- [ ] Implement proper SEO optimization
- [ ] Add mobile app download links
- [ ] Multi-language support (Hausa)

## Contributing

1. Follow the existing code style and structure
2. Test all changes locally before submitting
3. Ensure brand guidelines are followed
4. Update this README for any significant changes

## License

This project is proprietary to Relax.ng. All rights reserved.