# RowsToCRM Landing

RowsToCRM is an independent guided setup that helps Brevo users turn Google Sheets, Google Forms or Jotform lead rows into structured Brevo leads.

This repository contains the publication-ready React + Vite landing page for RowsToCRM. The page is optimized for qualified demo bookings and preserves the visual direction from the original Figma export.

## Local Setup

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Build the production bundle:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Netlify Deployment

Recommended path: connect this repository to Netlify from GitHub.

Use these build settings:

```text
Build command: pnpm build
Publish directory: dist
```

The same settings are included in `netlify.toml`.

## Required Placeholders

Replace these before publishing:

- `CALENDLY_URL_PLACEHOLDER`: demo booking URL.
- `CONTACT_EMAIL_PLACEHOLDER`: public contact email address.
- `SITE_URL_PLACEHOLDER`: final production site URL, used in canonical and sitemap.
- `TERMS_URL_PLACEHOLDER`: terms page URL, or replace with `/terms.html` after adding a page.
- `PRIVACY_URL_PLACEHOLDER`: privacy page URL, or replace with `/privacy.html` after adding a page.

## Notes

- The site is an independent setup and is not affiliated with, endorsed by, or sponsored by Google or Brevo.
- No analytics, checkout, backend logic, or customer data is included.
