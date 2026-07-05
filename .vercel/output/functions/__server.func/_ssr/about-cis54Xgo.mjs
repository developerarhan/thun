import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as fadeUp, i as SectionLabel, n as Reveal, o as stagger, r as Section, t as GlassCard } from "./ui-primitives-CNn0-Dxq.mjs";
import { h as Gauge, i as TrendingUp, m as Lightbulb, s as ShieldCheck, u as Minimize2 } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./routes-BRQdkUFD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-cis54Xgo.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		Icon: Lightbulb,
		title: "Innovation",
		desc: "Cutting-edge AI applied with engineering rigor."
	},
	{
		Icon: Gauge,
		title: "Efficiency",
		desc: "Every workflow optimized to remove friction."
	},
	{
		Icon: Minimize2,
		title: "Simplicity",
		desc: "Clean systems that humans can operate with confidence."
	},
	{
		Icon: ShieldCheck,
		title: "Reliability",
		desc: "Production-grade infrastructure that doesn't break."
	},
	{
		Icon: TrendingUp,
		title: "Scalability",
		desc: "Architected for growth from day one."
	}
];
var process = [
	{
		step: "01",
		title: "Discover",
		desc: "Deep audit of your operations, tools, and bottlenecks."
	},
	{
		step: "02",
		title: "Design",
		desc: "Blueprint custom workflows mapped to measurable outcomes."
	},
	{
		step: "03",
		title: "Build",
		desc: "Engineer production-ready automation systems."
	},
	{
		step: "04",
		title: "Optimize",
		desc: "Tune, monitor, and refine for sustained performance."
	},
	{
		step: "05",
		title: "Scale",
		desc: "Expand the system as your business grows."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pt-8 sm:pt-12 md:pt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "About ThunSpark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl",
				children: ["We Build Systems That ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Work While You Sleep"
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 border-t border-border pt-10 sm:mt-12 sm:gap-10 sm:pt-12 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "We build AI systems that save time, reduce costs, and help businesses scale faster."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Custom automation designed to eliminate manual work and improve operational efficiency."
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Our Values" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
			children: "Principles that shape every system we ship."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger,
			initial: "hidden",
			whileInView: "show",
			viewport: { once: true },
			className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: values.map(({ Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: fadeUp,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-lg font-medium",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: desc
						})
					]
				})
			}, title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Our Process" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
			children: "A clear path from chaos to compounding leverage."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ol, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "space-y-12",
				children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: fadeUp,
					className: `relative grid items-center gap-6 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xs text-accent",
									children: p.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl font-medium sm:text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.desc
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border border-border bg-background font-display text-xs md:left-1/2 md:-translate-x-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent" })
						})
					]
				}, p.step))
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { About as component };
