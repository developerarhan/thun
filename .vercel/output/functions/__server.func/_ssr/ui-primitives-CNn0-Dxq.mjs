import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-primitives-CNn0-Dxq.js
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = {
	hidden: {},
	show: { transition: {
		staggerChildren: .08,
		delayChildren: .05
	} }
};
function Section({ children, className = "", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `container-page py-16 sm:py-20 md:py-28 lg:py-32 ${className}`,
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), children]
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: fadeUp,
		transition: { delay },
		className,
		children
	});
}
function GlassCard({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `group relative overflow-hidden rounded-2xl border border-border bg-glass p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07] ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-transparent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children
		})]
	});
}
//#endregion
export { fadeUp as a, SectionLabel as i, Reveal as n, stagger as o, Section as r, GlassCard as t };
