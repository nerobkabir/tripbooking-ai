# TripBooking AI — Frontend Take-Home Assessment

A pixel-faithful implementation of the TripBooking AI landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.

---

## Setup Instructions

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Installation & Development

```bash
# Clone the repo
git clone https://github.com/nerobkabir/tripbooking-ai.git
cd tripbooking-ai

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Features Implemented

| Section | Details |
|---|---|
| **Announcement Bar** | Full-width blue bar at the top |
| **Navbar** | Sticky navigation with logo, nav links, search, sign-in; hamburger for mobile |
| **Hero Section** | Full-bleed background image, headline, subtitle, search widget (Tours/Hotels tabs, Location, Date, Guests) |
| **Trusted By** | Partner logos row |
| **Popular Destinations** | 7-destination image grid with hover effects + Browse All CTA card |
| **Featured Tours** | 3-card grid with badge variants (Top Rated, Best Sale, 25% Off), promo banner slider |
| **Top Rated Hotels** | Horizontally scrollable hotel cards with star ratings and arrow navigation |
| **App Download CTA** | Blue gradient section with Apple Store & Google Play buttons |
| **Payment Partners** | Payment brand logos row |
| **Footer** | 4-column layout — company links, services, newsletter, social icons, copyright |
| **Mobile Responsive** | Fully responsive across mobile, tablet, and desktop |

---

## Assumptions

1. **Images**: Used Unsplash images matching the design aesthetics (Figma assets require auth).
2. **Font**: Plus Jakarta Sans loaded via system font fallback in build; Google Fonts resolves correctly on Vercel.
3. **Interactions**: Booking/nav buttons are visual-only — no backend required per task scope.
4. **Data**: Static mock data matching Figma content.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── AnnouncementBar.tsx
    ├── Navbar.tsx
    ├── HeroSection.tsx
    ├── TrustedBy.tsx
    ├── PopularDestinations.tsx
    ├── FeaturedTours.tsx
    ├── TourCard.tsx
    ├── TopRatedHotels.tsx
    ├── HotelCard.tsx
    ├── AppDownload.tsx
    ├── PaymentPartners.tsx
    └── Footer.tsx
```

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Images**: Next.js Image with Unsplash CDN

---

*Submitted by: Kabir Hossain*
