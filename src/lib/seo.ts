export const SITE_URL = "https://www.thunspark.agency";
export const SITE_NAME = "ThunSpark";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/thunspark-logo.png`;
export const TWITTER_HANDLE = "@thunspark";
 
export type SeoInput = {
  /** Page title WITHOUT the site suffix — suffix is appended automatically. */
  title: string;
  description: string;
  /** Path only, e.g. "/about". Root "/" is allowed. */
  path: string;
  /** Set true only for pages that must not be indexed (e.g. internal/test pages). */
  noIndex?: boolean;
  /** Override the default OG/Twitter image (absolute URL). */
  image?: string;
  /** "website" | "article" | "profile" etc. */
  ogType?: string;
};
 
export type HeadMeta = { title?: string; name?: string; property?: string; content?: string }[];
export type HeadLinks = { rel: string; href: string; [key: string]: string | boolean | undefined }[];
export type HeadScripts = { type?: string; src?: string; children?: string }[];
 
function absoluteUrl(path: string): string {
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${SITE_URL}${normalized}`;
}
 
/**
 * Builds a complete { meta, links } fragment for a route's `head()`.
 * Spread the result directly into the object returned by `head()`.
 */
export function seo({
  title,
  description,
  path,
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SeoInput): { meta: HeadMeta; links: HeadLinks } {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
  const canonical = absoluteUrl(path);
 
  const meta: HeadMeta = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
 
    // Open Graph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_US" },
 
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
 
  const links: HeadLinks = [{ rel: "canonical", href: canonical }];
 
  return { meta, links };
}
 
/** Wraps a JSON-LD object into a head() `scripts` entry. */
export function jsonLd(data: Record<string, unknown>): HeadScripts[number] {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
 
/** Organization schema — include once, at the root route. */
export function organizationSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/thunspark-logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/thunspark",
      "https://www.instagram.com/thunspark",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@thunspark.agency",
        contactType: "customer service",
      },
    ],
  });
}
 
/** WebSite schema — include once, at the root route. */
export function websiteSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  });
}
 
/** BreadcrumbList schema for a given page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  });
}