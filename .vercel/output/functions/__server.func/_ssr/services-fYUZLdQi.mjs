import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SectionLabel, n as Reveal, r as Section } from "./ui-primitives-CNn0-Dxq.mjs";
import { a as Target, c as Settings2, g as Database, n as Workflow, p as Mail, r as Users, v as Check } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./routes-BRQdkUFD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-fYUZLdQi.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		Icon: Workflow,
		title: "AI Workflow Automation",
		description: "Replace fragmented manual processes with intelligent, end-to-end workflows that connect every tool in your stack.",
		benefits: [
			"Eliminates repetitive tasks",
			"Cross-platform orchestration",
			"Real-time monitoring"
		],
		useCases: [
			"Operations handoffs",
			"Approval routing",
			"Data syncing across SaaS tools"
		]
	},
	{
		Icon: Target,
		title: "Lead Generation Automation",
		description: "Continuously discover, qualify, and engage prospects through AI-powered enrichment and outreach systems.",
		benefits: [
			"Higher-quality pipeline",
			"Reduced manual research",
			"Faster response times"
		],
		useCases: [
			"Outbound prospecting",
			"ICP enrichment",
			"Multi-channel sequences"
		]
	},
	{
		Icon: Database,
		title: "CRM Automation",
		description: "Keep your CRM accurate, up-to-date, and actionable with automated data hygiene and pipeline management.",
		benefits: [
			"Clean data 24/7",
			"Automated follow-ups",
			"Better forecasting"
		],
		useCases: [
			"HubSpot / Salesforce sync",
			"Deal stage automation",
			"Activity logging"
		]
	},
	{
		Icon: Mail,
		title: "Email Automation",
		description: "Send the right message at the right moment with behavior-driven, personalized email sequences that convert.",
		benefits: [
			"Higher open & reply rates",
			"Personalized at scale",
			"Lifecycle coverage"
		],
		useCases: [
			"Nurture campaigns",
			"Trigger-based sequences",
			"Re-engagement"
		]
	},
	{
		Icon: Users,
		title: "Recruitment Automation",
		description: "Streamline hiring from candidate intake to interview scheduling — without losing the human touch.",
		benefits: [
			"Faster time-to-hire",
			"Less recruiter admin",
			"Better candidate experience"
		],
		useCases: [
			"Resume screening",
			"Interview scheduling",
			"Talent pool nurture"
		]
	},
	{
		Icon: Settings2,
		title: "Business Process Automation",
		description: "Audit, redesign, and automate the operational backbone of your business with custom internal systems.",
		benefits: [
			"Reduced operational cost",
			"Faster cycle times",
			"Audit-ready workflows"
		],
		useCases: [
			"Finance & ops",
			"Internal reporting",
			"Vendor management"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pt-8 sm:pt-12 md:pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Services" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl",
					children: ["Automation services engineered for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "measurable outcomes."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg",
					children: "We design, build, and operate AI-powered automation systems across the workflows that matter most to your business."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "!pt-16 sm:!pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-20 sm:space-y-28 lg:space-y-32",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid items-center gap-8 lg:gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-sm text-accent",
							children: [
								"0",
								i + 1,
								" — Service"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-glass text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: s.description
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-glass p-6 backdrop-blur-xl sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: "Benefits"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3 w-3",
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: b
									})]
								}, b))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-glass p-6 backdrop-blur-xl sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: "Use Cases"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3 text-sm text-muted-foreground",
								children: s.useCases.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" }), u]
								}, u))
							})]
						})]
					})]
				}) }, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Services as component };
