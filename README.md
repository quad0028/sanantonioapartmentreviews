# form.sanantonioapartmentreviews.com

One-page apartment shortlist site served by GitHub Pages, matching the design
of [SanAntonioApartmentReviews.com](https://sanantonioapartmentreviews.com).

## What's here

- `index.html` — landing page: dark editorial theme mirroring the main site,
  3-step accordion form in a white card, San Antonio-specific copy
- `thank-you/index.html` — post-submit page the form redirects to
- `css/` — the main site's compiled stylesheets, self-hosted, plus a small
  inline supplement for form utilities
- `images/` — self-hosted logo and favicon
- `CNAME`, `404.html`, `robots.txt`

## How the form works

The 3-step form posts URL-encoded lead data to the n8n webhook and mirrors a
JSON copy to FormSubmit's AJAX endpoint (email backup), then redirects to
`/thank-you/`. Step logic, conditional fields, field names, and validation
are carried over unchanged from the original implementation.

## Deploying changes

GitHub Pages serves the `main` branch root. Merge to `main` and the site
updates in about a minute.
