import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as fadeUp, i as SectionLabel, n as Reveal, o as stagger, r as Section } from "./ui-primitives-CNn0-Dxq.mjs";
import { a as Target, d as MessageSquare, r as Users, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./routes-BRQdkUFD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DZ3ueFCi.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		Icon: Users,
		name: "Recruitment Automation Suite",
		tagline: "Hire faster. Hire smarter.",
		description: "An end-to-end recruitment system that automates the high-volume work and lets your team focus on talent.",
		features: [
			"Candidate Intake",
			"Resume Screening",
			"Interview Scheduling",
			"Automated Follow-Ups"
		]
	},
	{
		Icon: Target,
		name: "Lead Generation Engine",
		tagline: "Predictable pipeline, on autopilot.",
		description: "A self-running prospecting machine that continuously discovers, qualifies, and engages your ideal customers.",
		features: [
			"Prospect Discovery",
			"Lead Qualification",
			"CRM Integration",
			"Automated Outreach"
		]
	},
	{
		Icon: MessageSquare,
		name: "Customer Communication Hub",
		tagline: "Every conversation, handled.",
		description: "A unified AI-powered system for customer messaging across channels\xA0 fast, consistent, always on.",
		features: [
			"AI Chat Workflows",
			"Email Automation",
			"Ticket Routing",
			"Customer Follow-Ups"
		]
	}
];
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pt-8 sm:pt-12 md:pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Products" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl",
					children: ["Automation suites ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "ready to deploy."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg",
					children: "Three AI automation systems that save time, reduce costs, and help your business scale faster."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "!pt-16 sm:!pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "grid gap-6 lg:grid-cols-3",
				children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: fadeUp,
					className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-glass p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-accent/[0.12]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs text-muted-foreground",
									children: ["PRODUCT 0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 text-2xl font-semibold leading-tight sm:mt-10",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-accent",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 border-t border-border pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
									children: "Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2.5",
									children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-accent" }), f]
									}, f))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent",
								children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})]
				}, p.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Products as component };
