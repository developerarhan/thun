import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { f as Menu, p as Mail, t as X } from "../_libs/lucide-react.mjs";
import { a as jsonLd, c as websiteSchema, i as breadcrumbSchema, n as Route$6, o as organizationSchema, r as SITE_NAME, s as seo } from "./routes-BRQdkUFD.mjs";
import { n as LinkedInIcon, t as InstagramIcon } from "./BrandIcons-Ca815-R2.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C408rUrQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Df7XK2Ha.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/products",
		label: "Products"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-[#0f1115]/70 backdrop-blur-xl" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-page flex h-20 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/thunspark-logo.png",
						alt: "ThunSpark",
						className: "h-9 w-9 object-contain transition-transform group-hover:scale-110",
						loading: "eager",
						decoding: "async",
						fetchPriority: "high"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "ThunSpark"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "rounded-full px-4 py-2 text-sm text-foreground" },
						activeOptions: { exact: true },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_rgba(255,237,105,0.5)] md:inline-flex",
						children: "Contact Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						"aria-controls": "mobile-nav-menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-glass md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -8
			},
			className: "border-t border-border bg-[#0f1115]/95 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-1 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-glass hover:text-foreground",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground",
					children: "Contact Us"
				})]
			})
		}) })]
	});
}
var socials = [
	{
		href: "https://www.linkedin.com/company/thunspark",
		label: "LinkedIn",
		Icon: LinkedInIcon
	},
	{
		href: "https://www.instagram.com/thunspark",
		label: "Instagram",
		Icon: InstagramIcon
	},
	{
		href: "mailto:hello@thunspark.agency",
		label: "Email",
		Icon: Mail
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border mt-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/thunspark-logo.png",
							alt: "ThunSpark",
							className: "h-9 w-9 object-contain",
							loading: "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: "ThunSpark"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "ThunSpark helps businesses automate operations and scale efficiently through AI-powered workflows."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-medium text-foreground",
						children: "Navigation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm text-muted-foreground",
						children: [
							{
								to: "/",
								label: "Home"
							},
							{
								to: "/about",
								label: "About"
							},
							{
								to: "/services",
								label: "Services"
							},
							{
								to: "/products",
								label: "Products"
							},
							{
								to: "/contact",
								label: "Contact"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "transition-colors hover:text-foreground",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-medium text-foreground",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: socials.map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							"aria-label": label,
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						}, label))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 ThunSpark. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built to save time. Designed to scale." })]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Page not found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-105",
					"aria-label": "Go back to the ThunSpark homepage",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try refreshing the page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground",
						"aria-label": "Retry loading the page",
						children: "Try again"
					})
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => {
		const base = seo({
			title: "ThunSpark — AI Automation Agency",
			description: "ThunSpark builds intelligent automation systems for operations, lead generation, marketing, and customer communication.",
			path: "/"
		});
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					name: "author",
					content: "ThunSpark"
				},
				{
					name: "theme-color",
					content: "#0f1115"
				},
				...[],
				...base.meta
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				...[],
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/thunspark-logo.png"
				},
				{
					rel: "apple-touch-icon",
					href: "/thunspark-logo.png"
				},
				{
					rel: "manifest",
					href: "/manifest.webmanifest"
				}
			],
			scripts: [
				organizationSchema(),
				websiteSchema(),
				...[]
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-screen overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none fixed inset-0 -z-10",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#ffed69]/[0.06] blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ffed69]/[0.03] blur-[100px]" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./services-fYUZLdQi.mjs");
var serviceNames = [
	"AI Workflow Automation",
	"Lead Generation Automation",
	"CRM Automation",
	"Email Automation",
	"Recruitment Automation",
	"Business Process Automation"
];
var Route$4 = createFileRoute("/services")({
	head: () => {
		return {
			...seo({
				title: "Services",
				description: "AI workflow, lead gen, CRM, email, recruitment, and business process automation — engineered for scale.",
				path: "/services"
			}),
			scripts: [breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Services",
				path: "/services"
			}]), jsonLd({
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: serviceNames.map((name, index) => ({
					"@type": "Service",
					position: index + 1,
					name,
					provider: {
						"@type": "Organization",
						name: SITE_NAME
					}
				}))
			})]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-DZ3ueFCi.mjs");
var productSummaries = [
	{
		name: "Recruitment Automation Suite",
		description: "An end-to-end recruitment system that automates the high-volume work and lets your team focus on talent."
	},
	{
		name: "Lead Generation Engine",
		description: "A self-running prospecting machine that continuously discovers, qualifies, and engages your ideal customers."
	},
	{
		name: "Customer Communication Hub",
		description: "A unified AI-powered system for customer messaging across channels — fast, consistent, always on."
	}
];
var Route$3 = createFileRoute("/products")({
	head: () => {
		return {
			...seo({
				title: "Products",
				description: "Pre-built AI automation suites for recruitment, lead generation, and customer communication.",
				path: "/products"
			}),
			scripts: [breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Products",
				path: "/products"
			}]), jsonLd({
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: productSummaries.map((p, index) => ({
					"@type": "Product",
					position: index + 1,
					name: p.name,
					description: p.description,
					brand: {
						"@type": "Organization",
						name: SITE_NAME
					}
				}))
			})]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BHQKBFLE.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => {
		return {
			...seo({
				title: "Contact",
				description: "Book a free consultation with ThunSpark. Let's design the automation system that transforms your operations.",
				path: "/contact"
			}),
			scripts: [breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Contact",
				path: "/contact"
			}]), jsonLd({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact ThunSpark",
				url: "https://www.thunspark.agency/contact"
			})]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-cis54Xgo.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => {
		return {
			...seo({
				title: "About",
				description: "ThunSpark is an AI automation agency building systems that work while you sleep — improving efficiency, reducing cost, and scaling operations.",
				path: "/about"
			}),
			scripts: [breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "About",
				path: "/about"
			}])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_-Cp_afiKM.mjs");
var Route = createFileRoute("/$")({
	head: () => {
		return seo({
			title: "Page Not Found",
			description: "The page you're looking for doesn't exist or may have moved.",
			path: "/404",
			noIndex: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var SplatRoute = Route.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	SplatRoute,
	AboutRoute,
	ContactRoute,
	ProductsRoute,
	ServicesRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
