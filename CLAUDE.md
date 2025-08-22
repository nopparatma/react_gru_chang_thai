# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 14 application for GruChangThai, a Thai antique/craft business website with internationalization support.

### Key Architecture Components

**Internationalization (i18n)**
- Uses `next-intl` for internationalization with English (`en`) and Thai (`th`) locales
- Route structure: `[locale]/(page)/` where locale is always prefixed in URLs
- Translation files in `/public/locales/` (en.json, th.json)
- Middleware handles locale routing and detection
- Shared navigation utilities in `src/navigation.ts`

**App Router Structure**
- Next.js App Router with nested layouts
- Locale-based routing: `/[locale]/` contains all pages
- Main pages: home, antique, about-us, contact-us
- Root layout handles font loading, analytics, and global providers

**Styling & UI**
- Tailwind CSS for styling
- Material-UI (MUI) components and icons
- Custom local fonts (Cloud-Light.otf, Cloud-Bold.otf)
- Swiper.js for carousels/sliders

**Components Organization**
- Reusable components in `/src/components/`
- Key components: Navbar, Footer, LocalSwitcher, ProductItem, Pagination, BannerHome
- Mock data in `/src/mocks/mock.ts` for development

**Constants & Configuration**
- Constants defined in `/src/constants/constants.ts` 
- Translation keys mapped to page identifiers
- Analytics integration with Vercel Analytics and Speed Insights

## Key Files to Understand

- `src/i18n.ts` - i18n configuration and message loading
- `src/middleware.ts` - Route matching and locale handling  
- `src/navigation.ts` - Internationalized navigation utilities
- `src/app/[locale]/layout.tsx` - Root layout with providers and global setup