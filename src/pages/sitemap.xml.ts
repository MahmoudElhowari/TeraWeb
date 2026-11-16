import type { APIRoute } from 'astro';

// Hand-kept list of public pages (no plugin needed). Add new pages here.
const paths = ['/', '/packaging/', '/how-it-works/', '/about/', '/quote/', '/privacy/'];

export const GET: APIRoute = ({ site }) => {
  const urls = paths
    .map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
