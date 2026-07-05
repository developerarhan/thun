import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Reveal, r as Section } from "./ui-primitives-CNn0-Dxq.mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRQdkUFD.js
var import_jsx_runtime = require_jsx_runtime();
var SITE_URL = "https://www.thunspark.agency";
var SITE_NAME = "ThunSpark";
var DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
var TWITTER_HANDLE = "@thunspark";
function absoluteUrl(path) {
	return `${SITE_URL}${path === "/" ? "" : path.replace(/\/+$/, "")}`;
}
/**
* Builds a complete { meta, links } fragment for a route's `head()`.
* Spread the result directly into the object returned by `head()`.
*/
function seo({ title, description, path, noIndex = false, image = DEFAULT_OG_IMAGE, ogType = "website" }) {
	const fullTitle = title === "ThunSpark" ? title : `${title} — ${SITE_NAME}`;
	const canonical = absoluteUrl(path);
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: noIndex ? "noindex, nofollow" : "index, follow"
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: ogType
			},
			{
				property: "og:url",
				content: canonical
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:image",
				content: image
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: TWITTER_HANDLE
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: image
			}
		],
		links: [{
			rel: "canonical",
			href: canonical
		}]
	};
}
/** Wraps a JSON-LD object into a head() `scripts` entry. */
function jsonLd(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
/** Organization schema — include once, at the root route. */
function organizationSchema() {
	return jsonLd({
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/thunspark-logo.png`,
		sameAs: ["https://www.linkedin.com/company/thunspark", "https://www.instagram.com/thunspark"],
		contactPoint: [{
			"@type": "ContactPoint",
			email: "hello@thunspark.agency",
			contactType: "customer service"
		}]
	});
}
/** WebSite schema — include once, at the root route. */
function websiteSchema() {
	return jsonLd({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL
	});
}
/** BreadcrumbList schema for a given page. */
function breadcrumbSchema(items) {
	return jsonLd({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	});
}
var $$splitComponentImporter = () => import("./routes-BJzeKeg3.mjs");
var Route = createFileRoute("/")({
	head: () => {
		return seo({
			title: "ThunSpark — AI Automation Agency",
			description: "AI automation that eliminates repetitive work. ThunSpark builds intelligent systems for operations, lead gen, marketing, and customer communication.",
			path: "/"
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-border bg-glass p-8 backdrop-blur-xl sm:p-12 md:p-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl",
				children: "Ready to put your business on autopilot?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
				children: "We'll identify repetitive tasks in your business and show you how AI can automate them to save time and increase productivity."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex md:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_-12px_rgba(255,237,105,0.6)]",
					children: ["Book Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
				})
			})]
		})]
	}) }) });
}
//#endregion
export { jsonLd as a, websiteSchema as c, breadcrumbSchema as i, Route as n, organizationSchema as o, SITE_NAME as r, seo as s, CTASection as t };
