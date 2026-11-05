# form.sanantonioapartmentreviews.com

One-page apartment search form served by GitHub Pages, styled to match
[SanAntonioApartmentReviews.com](https://sanantonioapartmentreviews.com).

## What's here

- `index.html`: the form page. The header, footer and theme are the main
  site's (taken from its `/find-your-apartment/` page); every menu and footer
  link goes back to sanantonioapartmentreviews.com, and "Check Availability"
  points to this form.
- The form is the secondchanceapartmentssanantonio.com form
  (`quad0028/sca-sanantonio`, `/start-apartment-search/`): three steps,
  San Antonio areas and neighborhoods. The consent names the San Antonio
  Apartment Locators Group.
- `thank-you/index.html`: where the form lands after a send, with what
  happens next.
- `css/form.css`: the form's own styles, scoped under `.bca` so they never
  touch the main site's header and footer.
- `_astro/`, `fonts/`, `images/brand/`: the main site's stylesheets, fonts,
  logo and favicon, self-hosted.
- `sca-dropdown-validation.js`, `guest-card-copy-v1.js`,
  `_astro/form-area-context.js`: copied from sca-sanantonio unchanged.
  `?area=` picks an area, as on sca-sanantonio.
- `docs/`: the TREC Information About Brokerage Services and Consumer
  Protection Notice PDFs, linked at the bottom of the footer on every page.
- `banners/`: ad banners in the main site's colors and fonts.
- `CNAME`, `404.html` (sends to `/`), `robots.txt`.

## How the form sends a lead

1. It posts the lead (URL encoded) to the n8n webhook `NewWeb4` (the one
   sca-sanantonio uses), with `formId` `sar-secure-form` and `formTitle`
   "San Antonio Apartment Reviews - Get Started".
2. It sends an email copy to FormSubmit with sca-sanantonio's FormSubmit key
   and the subject "Guest Card - San Antonio Apartment Reviews Referred By:
   the San Antonio Apartment Locators Group - Apartment Locators with Spirit
   Real Estate".
3. It goes to `/thank-you/`.

`guest-card-copy-v1.js` only acts on the sca domains it lists, so on this
domain the email copy goes straight to FormSubmit.

The form and thank-you pages are `noindex, nofollow`. `robots.txt` allows
everything so the noindex is read.

## Rebuilding

The pages are built by a script that wraps the sca form in the main site's
shell; rerun it after the sca form changes rather than editing the form by
hand.

## Deploying changes

GitHub Pages serves the `main` branch root. Merge to `main` and the site
updates in about a minute.
