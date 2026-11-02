# Tera Food & Supply website

## What this is
Marketing website for Tera Food & Supply, a Calgary company that designs and delivers
premium custom-branded food packaging (boxes and containers, bags, cups and sleeves,
labels and wraps) for restaurants, cafés, bakeries and specialty food stores.
Core promise: "We handle everything": design, factory, freight, customs, storage, delivery.
Signature: packaging made to the customer's menu, not off the shelf.

The site's one job: get food businesses to **request a quote**.

## Audience
Owners of independent Calgary restaurants (takeout and delivery), cafés, bakeries and
specialty food stores. Busy, mobile-first, skeptical of salespeople. Show, don't tell.

## Pages (v1)
1. Home: hero, who we work with, takeout and retail packaging, how it works, why Tera, closing call to action, footer
2. Packaging: takeout and food service; bakery, café and retail
3. How it works: the order process from first contact to delivery and reorders
4. About: short and general (two founders with restaurant-industry experience; **no personal names**)
5. Request a quote: form (name, business, email, phone, business type, packaging needed,
   quantity, needed-by date, logo upload, message)
6. Privacy policy (simple, because the form collects personal information)

## Tech
- Astro (static site), plain CSS with custom properties for the brand tokens. No heavy UI frameworks.
- Quote form: Netlify Forms. No custom backend.
- Hosting: Netlify. Domain: already bought on GoDaddy [domain name to be confirmed]; point DNS to Netlify.
- Images optimised (WebP/AVIF, width/height set, lazy-loaded below the fold).

## Content rules
- Anything not yet known stays as a visible placeholder in [square brackets]:
  minimum order, lead times, service area, phone, email, address, photos.
- **Never invent** facts, numbers, customer names, testimonials, certifications or eco claims.
- Photo placeholders are labelled boxes describing the intended photo.
- Canadian spelling (colour, centre).
- Follow the Tera Company Identity doc (claude.ai artifact JazrrR9Rq9tPeY7NxHxSVK) for every visual and copy decision.

## Quality bar
- Mobile first; test at 375 px, 768 px and 1280 px+.
- Accessible: WCAG 2.1 AA contrast, real buttons, links and labels, visible focus states, alt text.
- Lighthouse 90+ on performance, accessibility, best practices and SEO.
- Each page has a title, meta description and Open Graph image.
- After building or changing a page, take screenshots at mobile and desktop widths, review them
  against the brand skill, and fix what looks off before reporting back.

## Working style
- Plan first, then build one page at a time; wait for my feedback between pages.
- Commit to git after each approved step with a clear message.
- Keep it simple. Ask before adding dependencies.
