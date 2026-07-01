import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionLabel, Reveal, fadeUp, stagger } from "../components/ui-primitives";
import { CTASection } from "./index";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ThunSpark" },
      { name: "description", content: "Pre-built AI automation suites for recruitment, lead generation, and customer communication." },
      { property: "og:title", content: "Products — ThunSpark" },
      { property: "og:description", content: "Production-ready automation suites." },
    ],
  }),
  component: Products,
});

const products = [
  {
    Icon: Users,
    name: "Recruitment Automation Suite",
    tagline: "Hire faster. Hire smarter.",
    description: "An end-to-end recruitment system that automates the high-volume work and lets your team focus on talent.",
    features: ["Candidate Intake", "Resume Screening", "Interview Scheduling", "Automated Follow-Ups"],
  },
  {
    Icon: Target,
    name: "Lead Generation Engine",
    tagline: "Predictable pipeline, on autopilot.",
    description: "A self-running prospecting machine that continuously discovers, qualifies, and engages your ideal customers.",
    features: ["Prospect Discovery", "Lead Qualification", "CRM Integration", "Automated Outreach"],
  },
  {
    Icon: MessageSquare,
    name: "Customer Communication Hub",
    tagline: "Every conversation, handled.",
    description: "A unified AI-powered system for customer messaging across channels\u00a0 fast, consistent, always on.",
    features: ["AI Chat Workflows", "Email Automation", "Ticket Routing", "Customer Follow-Ups"],
  },
];

function Products() {
  return (
    <>
      <section className="container-page pt-12 md:pt-20">
        <Reveal>
          <SectionLabel>Products</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Automation suites <span className="text-gradient">ready to deploy.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three AI automation systems that save time, reduce costs, and help your business scale faster.
          </p>
        </Reveal>
      </section>

      <Section className="!pt-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-glass p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-accent/[0.12]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs text-muted-foreground">PRODUCT 0{i + 1}</span>
                </div>

                <h2 className="mt-10 text-2xl font-semibold leading-tight">{p.name}</h2>
                <p className="mt-2 text-sm text-accent">{p.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">Features</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
}
