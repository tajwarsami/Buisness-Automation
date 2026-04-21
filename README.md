# Automate IT Limited — Website

A production website for **Automate IT Limited** (formerly Dynamic Technosoft), built with **Next.js App Router**. All visible text, data, and content on the site is centralised in a small set of JavaScript files — no database, no CMS. This README explains exactly where every piece of content lives and how to change it.

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Project Structure at a Glance](#2-project-structure-at-a-glance)
3. [Getting Started (Dev Server)](#3-getting-started-dev-server)
4. [How Content Works — The Golden Rule](#4-how-content-works--the-golden-rule)
5. [Main Content File: `siteContent.js`](#5-main-content-file-sitecontentjs)
   - [Navigation Menu](#51-navigation-menu-nav_items)
   - [Top-Level Route Pages](#52-top-level-route-pages-top_level_pages)
   - [About Sub-Pages](#53-about-sub-pages-about_subpages)
   - [About Detail Pages](#54-about-detail-pages-about_detail_pages)
   - [Product Pages](#55-product-pages-product_pages)
   - [Service Sub-Pages](#56-service-sub-pages-service_subpages)
   - [Resource Sub-Pages](#57-resource-sub-pages-resource_subpages)
   - [Our Client Page](#58-our-client-page-client_page)
6. [Specialist Data Files](#6-specialist-data-files)
   - [Service Page Detail Data](#61-service-page-detail-data)
   - [Product Page Detail Data](#62-product-page-detail-data)
   - [About / Team / Company / Group](#63-about--team--company--group)
   - [Resources (Blogs, Tutorials, Testimonials, etc.)](#64-resources-blogs-tutorials-testimonials-etc)
7. [Home Page Sections](#7-home-page-sections)
8. [Legal Pages (Privacy Policy & Terms)](#8-legal-pages-privacy-policy--terms)
9. [Adding a Brand-New Page](#9-adding-a-brand-new-page)
10. [Adding a Brand-New Product or Service](#10-adding-a-brand-new-product-or-service)
11. [Styling & CSS](#11-styling--css)
12. [Deployment](#12-deployment)

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | JavaScript (JSX) |
| Styling | Vanilla CSS (`globals.css`) |
| Font | Poppins via Google Fonts |
| Package manager | npm |

---

## 2. Project Structure at a Glance

```
dynamic-technosoft/
│
├── public/                        # Static files served as-is (favicon, images)
│
└── src/
    ├── app/                       # Next.js App Router — every folder = a URL route
    │   ├── layout.js              # Root layout: wraps every page with Navbar + Footer
    │   ├── page.js                # Home page  "/"
    │   ├── globals.css            # ALL styles for the entire site (single CSS file)
    │   ├── not-found.js           # Custom 404 page
    │   │
    │   ├── about/                 # /about
    │   │   ├── [slug]/page.js     # /about/our-team, /about/our-company, etc. (dynamic)
    │   │   └── our-team/page.js   # Legacy alias — DO NOT delete
    │   ├── aboutus/our-company/   # Legacy alias → redirects to /about/our-company
    │   ├── products/[slug]/       # /products/<slug>  (dynamic)
    │   ├── products/<name>/       # Legacy aliases → redirect to correct slug
    │   ├── services/[slug]/       # /services/<slug>  (dynamic)
    │   ├── services/<name>/       # Legacy aliases for old direct URLs
    │   ├── resources/[slug]/      # /resources/<slug>  (dynamic)
    │   ├── resources/blogs/       # /resources/blogs (blog listing)
    │   ├── our-client/            # /our-client
    │   ├── contact/               # /contact
    │   ├── account/               # /account
    │   ├── careers/               # /careers
    │   ├── portfolio/             # /portfolio
    │   ├── delete-account/        # /delete-account (mobile app legal page)
    │   ├── testimonials/          # Legacy alias → /resources/testimonials
    │   ├── privacy-policy/        # /privacy-policy  (inline content in page.js)
    │   └── terms/                 # /terms           (inline content in page.js)
    │
    ├── components/                # Reusable UI components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx               # Home page hero section
    │   ├── About.jsx              # Home page "About" section
    │   ├── Products.jsx           # Home page Products section
    │   ├── Services.jsx           # Home page Services section
    │   ├── StatsBar.jsx           # Home page stats numbers
    │   ├── ImpactAndBlog.jsx      # Home page Blog / Impact section
    │   ├── Clients.jsx            # Home page client logos
    │   ├── ChatWidget.jsx         # Floating AI chat bubble
    │   ├── RoutePageTemplate.jsx  # Generic template used by most inner pages
    │   ├── PageHero.jsx           # Reusable hero banner for inner pages
    │   ├── StaticInfoPage.jsx     # Thin wrapper around RoutePageTemplate
    │   ├── ClientShell.jsx        # Client-side wrapper (Navbar + Footer + Chat)
    │   │
    │   ├── about/                 # About-specific components
    │   │   ├── OurTeam.jsx
    │   │   ├── OurCompany.jsx
    │   │   ├── DynamicGroup.jsx
    │   │   ├── AboutDetailPage.jsx
    │   │   ├── ourTeamData.js     ← EDIT team members here
    │   │   ├── ourCompanyData.js  ← EDIT company content here
    │   │   └── dynamicGroupData.js← EDIT group content here
    │   │
    │   ├── services/              # Service-specific components
    │   │   ├── ServicePage.jsx    # Shared service page layout
    │   │   ├── servicesData.js    # Master list mapping slugs → data files
    │   │   ├── data/              # One data file per service
    │   │   │   ├── softwareDevelopmentData.js
    │   │   │   ├── mobileAppDevelopmentData.js
    │   │   │   ├── webAppDevelopmentData.js
    │   │   │   ├── bulkSmsServiceData.js
    │   │   │   ├── domainHostingData.js
    │   │   │   └── index.js
    │   │   └── pages/             # Thin wrapper per service (imports data → ServicePage)
    │   │
    │   ├── products/              # Product-specific components
    │   │   ├── ProductPage.jsx    # Shared product page layout
    │   │   ├── productsData.js    # Master list mapping slugs → data files
    │   │   ├── data/              # One data file per product
    │   │   │   ├── dynamicAcademicErpData.js
    │   │   │   ├── dynamicAmsData.js
    │   │   │   ├── hospitalErpData.js
    │   │   │   ├── accountingSolutionData.js
    │   │   │   ├── hrPayrollData.js
    │   │   │   ├── smsSystemData.js
    │   │   │   └── index.js
    │   │   └── pages/             # Thin wrapper per product
    │   │
    │   └── resources/             # Resource section components
    │       ├── Blogs.jsx
    │       ├── Tutorials.jsx
    │       ├── Testimonials.jsx
    │       ├── Dealership.jsx
    │       ├── MediaCoverage.jsx
    │       └── resourcesData.js   ← EDIT blogs, tutorials, testimonials, media here
    │
    ├── data/
    │   └── siteContent.js         ← MASTER CONTENT FILE — edit most text here
    │
    └── lib/
        └── routeData.js           # Wires slugs → components (only touch when adding new routes)
```

---

## 3. Getting Started (Dev Server)

```bash
# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. How Content Works — The Golden Rule

> **All site text lives in JavaScript data files — not in JSX components.**

The components are just templates. They receive data as props and render it. This means:

- To change a **heading**, **paragraph**, or **list item** on any inner page → edit `src/data/siteContent.js`
- To change **team member names**, **product feature cards**, **testimonials**, or **blog posts** → edit the relevant file inside `src/components/*/`
- **Never** hard-code new text directly inside `.jsx` files — always put it in the data layer first.

---

## 5. Main Content File: `siteContent.js`

**File:** `src/data/siteContent.js`

This is the single most important file. It exports the following named constants:

---

### 5.1 Navigation Menu — `NAV_ITEMS`

Controls the links in the top navigation bar.

```js
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about/our-team', description: '...' },
      // add more children here
    ],
  },
  // ...
];
```

**To add a top-level link:** Add a new object `{ label: '...', href: '/...' }` to the array.  
**To add a dropdown item:** Add an object with `label`, `href`, and `description` to the relevant `children` array.

---

### 5.2 Top-Level Route Pages — `TOP_LEVEL_PAGES`

Controls the content of the "landing" page for `/about`, `/products`, `/services`, `/resources`, `/our-client`, `/contact`, `/account`.

Each entry has the same shape:

```js
about: {
  title: 'About Us',               // Page <h1>
  eyebrow: 'About Automate IT',    // Small label above the title
  summary: '...',                  // One-sentence description shown in the hero
  introTitle: '...',               // Heading for the intro block
  introText: ['...', '...'],       // Array of paragraphs in the intro block
  highlights: ['...', '...'],      // 3 badge/pill items shown at the top
  detailCards: [
    { title: '...', text: '...' }, // 3 cards in the info section
  ],
  pillars: ['...', '...'],         // 4 bullet-style items at the bottom
  ctaTitle: '...',                 // Heading for the bottom CTA strip
  ctaText: '...',                  // Paragraph under the CTA heading
},
```

**To update any inner page text:** Find the matching key (`about`, `products`, `services`, etc.) and edit its fields.

---

### 5.3 About Sub-Pages — `ABOUT_SUBPAGES`

Controls text for `/about/our-team`, `/about/our-company`, `/about/dynamic-group`.

Each entry uses the same shape as `TOP_LEVEL_PAGES` (see above).

---

### 5.4 About Detail Pages — `ABOUT_DETAIL_PAGES`

Controls the **richer** custom layout used by the Our Team, Our Company, and Dynamic Group pages (these have extra sections beyond the generic template).

```js
'our-team': {
  teamSectionTitle: 'Our Best Expertise',
  teamSectionDescription: '...',
  teamMembers: [
    {
      id: 'deepak-sah',       // Must be unique, used as a key
      name: 'Deepak Sah',
      position: 'Chief Executive Officer',
      photo: '',              // Leave '' for initials avatar, or put '/your-image.jpg'
      speech: '...',          // Short quote shown on the card
      fullSpeech: '...',      // Full quote shown on expand/hover
      summary: '...',         // Role summary line
    },
    // Add more team members here
  ],
},
'our-company': {
  heroTitle: '...',
  heroSubtitle: '...',
  introTitle: '...',
  introText: ['...'],
  narrativeLayout: true,
  sections: [
    { title: '...', text: '...' }, // Content blocks/sections for the company page
  ],
},
'dynamic-group': {
  heroTitle: '...',
  heroSubtitle: '...',
  introTitle: '...',
  introText: ['...'],
  narrativeLayout: true,
  sections: [
    { title: '...', text: '...' },
  ],
  logos: [
    { name: '...', short: 'DT', tagline: '...' }, // Group company logos/tiles
  ],
},
```

**To add a team member:** Add a new object to `teamMembers`.  
**To upload a photo:** Put the image in `public/` and set `photo: '/your-photo.jpg'`.

---

### 5.5 Product Pages — `PRODUCT_PAGES`

Controls the hero, intro, and overview text on each product page (`/products/<slug>`).

Current slugs: `dynamic-academic-erp`, `hospital-erp`, `accounting-solution`, `hr-payroll`, `sms-system`, `dynamic-ams`.

Each entry uses the same shape as `TOP_LEVEL_PAGES`. Edit the matching key to update text on that product's page.

---

### 5.6 Service Sub-Pages — `SERVICE_SUBPAGES`

Controls the hero, intro, and overview text on each service page (`/services/<slug>`).

Current slugs: `software-development`, `mobile-app-development`, `web-application-development`, `bulk-sms-service`, `domain-registration-web-hosting`.

Each entry uses the same shape as `TOP_LEVEL_PAGES`.

---

### 5.7 Resource Sub-Pages — `RESOURCE_SUBPAGES`

Controls the text for `/resources/tutorials`, `/resources/blogs`, `/resources/testimonials`, `/resources/media-coverage`, `/resources/dealership`.

Each entry uses the same shape as `TOP_LEVEL_PAGES`.

---

### 5.8 Our Client Page — `CLIENT_PAGE`

Controls the spotlight cards and quotes on the `/our-client` page.

```js
export const CLIENT_PAGE = {
  spotlight: [
    { title: 'Education Organizations', text: '...' },
    { title: 'Healthcare Providers', text: '...' },
    { title: 'Businesses And Enterprises', text: '...' },
  ],
  quotes: [
    { name: 'Operations Manager', company: 'A Leading School Group', text: '...' },
    // Add more client quotes here
  ],
};
```

---

## 6. Specialist Data Files

### 6.1 Service Page Detail Data

Each service has its own rich data file in `src/components/services/data/`. These control the **detailed content sections** (story blocks, feature cards, visuals) on each service's individual page.

| Service | Data file |
|---|---|
| Software Development | `softwareDevelopmentData.js` |
| Mobile App Development | `mobileAppDevelopmentData.js` |
| Web Application Development | `webAppDevelopmentData.js` |
| Bulk SMS Service | `bulkSmsServiceData.js` |
| Domain Registration & Web Hosting | `domainHostingData.js` |

**Shape of a service data file:**

```js
export const softwareDevelopmentData = {
  submenuName: 'Software Development',   // Used as the page hero title
  shortDescription: '...',               // Subtitle in the page hero
  theme: 'software',                     // Visual theme: 'software' | 'mobile' | 'webapp' | 'sms' | 'hosting'

  introSection: {
    label: '...',      // Small kicker label
    heading: '...',    // Section heading
    paragraphs: ['...', '...'],
  },

  featureSectionLabel: '...',
  featureSectionTitle: '...',
  featureStyle: 'tree-cards',  // Layout style for features (see below)
  features: [
    { title: '...', description: '...' },
    // ...
  ],

  supportSection: {
    label: '...',
    heading: '...',
    paragraphs: ['...', '...'],
  },
};
```

**Available `featureStyle` values:**
- `tree-cards` — 2-column card grid (used by Software Development)
- `mobile-nodes` — Hexagonal node layout (used by Mobile App)
- `web-flow` — Numbered flow cards (used by Web App)
- `sms-cards` — Icon cards (used by Bulk SMS)
- `hosting-checklist` — Numbered checklist (used by Domain Hosting)

---

### 6.2 Product Page Detail Data

Each product has its own rich data file in `src/components/products/data/`.

| Product | Data file |
|---|---|
| Dynamic Academic ERP | `dynamicAcademicErpData.js` |
| Dynamic AMS | `dynamicAmsData.js` |
| Hospital ERP | `hospitalErpData.js` |
| Accounting Solution | `accountingSolutionData.js` |
| HR & Payroll | `hrPayrollData.js` |
| SMS System | `smsSystemData.js` |

Open any of these files and edit the text fields. The shape is similar to the service data files above.

---

### 6.3 About / Team / Company / Group

These live directly inside `src/data/siteContent.js` under `ABOUT_DETAIL_PAGES` (see [Section 5.4](#54-about-detail-pages-about_detail_pages)).

---

### 6.4 Resources (Blogs, Tutorials, Testimonials, etc.)

**File:** `src/components/resources/resourcesData.js`

This file contains all the actual list content for the Resources section:

- `blogsData` — Array of blog post objects
- `tutorialsData` — Array of tutorial objects
- `testimonialsData` — Array of testimonial quotes
- `mediaCoverageData` — Array of press/media items
- `dealershipData` — Dealership program information

**Blog post shape:**
```js
{
  id: 'unique-slug',
  title: 'Post Title',
  category: 'ERP',
  date: 'April 2025',
  excerpt: 'Short description shown in the listing...',
  content: 'Full content or longer excerpt...',
}
```

**Testimonial shape:**
```js
{
  name: 'Client Name',
  role: 'Position',
  company: 'Organization Name',
  text: 'Their testimonial quote...',
  rating: 5,
}
```

**Tutorial shape:**
```js
{
  id: 'unique-id',
  title: 'Tutorial Title',
  category: 'Getting Started',
  description: 'Short description...',
  steps: ['Step 1...', 'Step 2...'],
}
```

---

## 7. Home Page Sections

The home page (`src/app/page.js`) renders these components in order:

| Component | File | What to edit |
|---|---|---|
| Hero | `src/components/Hero.jsx` | Slides, headlines, sub-text, CTA buttons — edit directly in the JSX or extract to data |
| About | `src/components/About.jsx` | Mission/intro text — edit in JSX |
| Products | `src/components/Products.jsx` | Pulls product names/descriptions from `siteContent.js` → `PRODUCT_PAGES` |
| Services | `src/components/Services.jsx` | Pulls service names/descriptions from `siteContent.js` → `SERVICE_SUBPAGES` |
| StatsBar | `src/components/StatsBar.jsx` | Numbers and labels — edit directly in JSX |
| ImpactAndBlog | `src/components/ImpactAndBlog.jsx` | Pulls blog posts from `resourcesData.js` |
| Clients | `src/components/Clients.jsx` | Client logos/names — edit directly in JSX |

---

## 8. Legal Pages (Privacy Policy & Terms)

The Privacy Policy (`/privacy-policy`) and Terms (`/terms`) pages have their full text written directly inside their `page.js` files:

- `src/app/privacy-policy/page.js`
- `src/app/terms/page.js`

To update legal content, open the relevant `page.js` and edit the text inline. No external data file is used for these.

---

## 9. Adding a Brand-New Page

To add a completely new standalone page (e.g., `/faq`):

1. Create the folder and file: `src/app/faq/page.js`
2. Export a default React component from it
3. Link to it in `NAV_ITEMS` in `siteContent.js` if it should appear in the navigation

**Example `page.js`:**
```js
export const metadata = {
  title: 'FAQ — Automate IT Limited',
  description: 'Frequently asked questions about our products and services.',
};

export default function FaqPage() {
  return (
    <div>
      <h1>FAQ</h1>
      {/* your content */}
    </div>
  );
}
```

---

## 10. Adding a Brand-New Product or Service

### Adding a Product

1. **Add the slug entry** to `PRODUCT_PAGES` in `src/data/siteContent.js` (copy an existing entry and change the text)
2. **Create a data file** at `src/components/products/data/yourProductData.js` (copy an existing one)
3. **Export it** from `src/components/products/data/index.js`
4. **Create a page wrapper** at `src/components/products/pages/YourProductPage.jsx` (copy an existing one, change the import)
5. **Export it** from `src/components/products/pages/index.js`
6. **Register it** in `src/lib/routeData.js`:
   - Add to `productComponentData`
   - Add to `productPageComponents`
7. **Add it to the navbar** in `siteContent.js` → `NAV_ITEMS` → Products children

### Adding a Service

Follow the same 7 steps above but for the `services/` directory and `SERVICE_SUBPAGES` in `siteContent.js`.

---

## 11. Styling & CSS

All CSS for the entire site lives in **one file:**

```
src/app/globals.css
```

This file is imported once in `src/app/layout.js` and applies globally. It uses plain CSS class names — no CSS modules, no Tailwind.

- **CSS variables** are defined in `:root` at the top of the file
- **Primary colors:** `--primary: #0057A8`, `--secondary: #0096D6`, `--accent: #E8431A`
- **Component styles** are grouped with comments like `/* === Navbar === */`

To change a color across the whole site, update the relevant variable in `:root`.

---

## 12. Deployment

The project is a standard Next.js app. It can be deployed to:

- **Vercel** (recommended) — connect the repo and deploy with zero config
- **Any Node.js server** — run `npm run build` then `npm start`
- **Static export** — add `output: 'export'` to `next.config.mjs` then run `npm run build`

Environment variables (if added later) should be placed in `.env.local` at the project root and prefixed with `NEXT_PUBLIC_` for client-side access.
