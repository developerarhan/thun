import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { i as SectionLabel, n as Reveal, r as Section } from "./ui-primitives-CNn0-Dxq.mjs";
import { _ as CircleAlert, l as Send, p as Mail, v as Check } from "../_libs/lucide-react.mjs";
import { n as LinkedInIcon, t as InstagramIcon } from "./BrandIcons-Ca815-R2.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BHQKBFLE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [state, setState] = (0, import_react.useState)("idle");
	function validate() {
		const e = {};
		if (!form.name.trim()) e.name = "Please enter your name.";
		else if (form.name.length > 100) e.name = "Name is too long.";
		if (!form.email.trim()) e.email = "Email is required.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
		if (!form.message.trim()) e.message = "Tell us a bit about your project.";
		else if (form.message.length > 1e3) e.message = "Message must be under 1000 characters.";
		setErrors(e);
		return Object.keys(e).length === 0;
	}
	async function onSubmit(e) {
		e.preventDefault();
		if (!validate()) return;
		setState("submitting");
		try {
			await es_default.send(void 0, void 0, {
				from_name: form.name,
				from_email: form.email,
				message: form.message
			}, void 0);
			setState("success");
			setForm({
				name: "",
				email: "",
				message: ""
			});
		} catch (error) {
			console.error(error);
			setState("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page pt-8 sm:pt-12 md:pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl",
				children: ["Let's design your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "automation system."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg",
				children: "Fill out the contact form, and our team will reach out to understand your business, identify your biggest operational challenges, and design a custom AI automation solution that saves time, reduces costs, and helps your business scale faster."
			})
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "!pt-16 sm:!pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:gap-12 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-glass text-accent",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@thunspark.agency",
						className: "mt-1 block text-base text-foreground hover:text-accent",
						children: "hello@thunspark.agency"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: "CONNECT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-3",
						children: [
							{
								href: "https://www.linkedin.com/company/thunspark",
								Icon: LinkedInIcon,
								label: "LinkedIn"
							},
							{
								href: "https://www.instagram.com/thunspark",
								Icon: InstagramIcon,
								label: "Instagram"
							},
							{
								href: "mailto:hello@thunspark.agency",
								Icon: Mail,
								label: "Email"
							}
						].map(({ href, Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
					})]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit,
					className: "relative rounded-3xl border border-border bg-glass p-6 backdrop-blur-xl sm:p-8 md:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								id: "name",
								error: errors.name,
								input: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									type: "text",
									value: form.name,
									maxLength: 100,
									onChange: (e) => setForm((f) => ({
										...f,
										name: e.target.value
									})),
									placeholder: "Your full name",
									className: inputCls,
									autoComplete: "name",
									"aria-invalid": Boolean(errors.name),
									"aria-describedby": errors.name ? "name-error" : void 0
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email Address",
								id: "email",
								error: errors.email,
								input: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									type: "email",
									value: form.email,
									maxLength: 255,
									onChange: (e) => setForm((f) => ({
										...f,
										email: e.target.value
									})),
									placeholder: "you@company.com",
									className: inputCls,
									autoComplete: "email",
									"aria-invalid": Boolean(errors.email),
									"aria-describedby": errors.email ? "email-error" : void 0
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								id: "message",
								error: errors.message,
								input: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									rows: 5,
									maxLength: 1e3,
									value: form.message,
									onChange: (e) => setForm((f) => ({
										...f,
										message: e.target.value
									})),
									placeholder: "Tell us about your operations and what you'd like to automate…",
									className: `${inputCls} resize-none`,
									"aria-invalid": Boolean(errors.message),
									"aria-describedby": errors.message ? "message-error" : void 0
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: state === "submitting",
								className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.01] hover:shadow-[0_12px_40px_-12px_rgba(255,237,105,0.6)] disabled:cursor-not-allowed disabled:opacity-60",
								children: [state === "submitting" ? "Sending…" : "Submit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [state === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: { opacity: 0 },
								role: "status",
								"aria-live": "polite",
								className: "flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-4 w-4 text-accent",
									"aria-hidden": "true"
								}), "Message sent. We'll be in touch within 24 hours."]
							}), state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: { opacity: 0 },
								role: "alert",
								"aria-live": "assertive",
								className: "flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-red-400" }), "Something went wrong. Please try again."]
							})] })
						]
					})
				})
			})]
		})
	})] });
}
var inputCls = "w-full rounded-xl border border-border bg-background/40 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-accent/50 focus:bg-background/60 focus:ring-2 focus:ring-accent/20";
function Field({ label, id, input, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "font-display text-xs uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2.5",
			children: input
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-red-400",
			children: error
		})
	] });
}
//#endregion
export { Contact as component };
