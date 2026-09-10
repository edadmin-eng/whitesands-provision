# White Sands Provision

Design prototype for a fine wine & rare spirits storefront.
A White Sands Hospitality project.

> **Preview only.** Bottles, prices, and rating scores on the site are
> sample data for design purposes — they are not real listings.
> The site is set to `noindex` and is excluded in `robots.txt`.

## Live

- **Storefront** — `/` (index.html)
- **Content editor** — `/admin.html`

## Files

| File | Purpose |
|---|---|
| `index.html` | The storefront. Reads all content from `products.js`. |
| `products.js` | All editable content — hero, favorites, 24 products. |
| `admin.html` | Visual editor. No code needed. Exports a new `products.js`. |
| `images/` | Optional folder for product photography. |

## How to edit content

1. Open `admin.html` in a browser.
2. Edit text and prices; click or drag photos into the image slots.
   Uploads are auto-resized and embedded, so no separate image files are needed.
3. Click **Download products.js**.
4. Replace the existing `products.js` with the downloaded file.
5. Commit and push — GitHub Pages redeploys automatically.

Work in progress is auto-saved to browser storage, so you can close the
editor and come back to it.

## Before going public

- Replace the sample bottles with the real catalogue.
- Remove the sample rating scores, or cite the actual critic and publication.
- Swap the stock photography for real product shots.
- Remove the `noindex` tag in `index.html` and `robots.txt`.
- Confirm the age gate meets local requirements for alcohol retail.
