import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Workflow, Target, Database, Mail, Users, Settings2,
  Sparkles, Gauge, TrendingUp,
} from "lucide-react";
import { HeroIllustration } from "../components/HeroIllustration";
import { Section, SectionLabel, Reveal, GlassCard, fadeUp, stagger } from "../components/ui-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThunSpark — AI Automation Agency" },
      { name: "description", content: "AI automation that eliminates repetitive work. ThunSpark builds intelligent systems for operations, lead gen, marketing, and customer communication." },
      { property: "og:title", content: "ThunSpark — AI Automation Agency" },
      { property: "og:description", content: "AI automation that eliminates repetitive work." },
    ],
  }),
  component: Home,
});

const services = [
  { Icon: Workflow, title: "AI Workflow Automation", desc: "Connect tools and orchestrate complex multi-step processes end-to-end." },
  { Icon: Target, title: "Lead Generation Automation", desc: "Discover, qualify, and engage prospects without lifting a finger." },
  { Icon: Database, title: "CRM Automation", desc: "Keep records, pipelines, and follow-ups perfectly synced automatically." },
  { Icon: Mail, title: "Email Automation", desc: "Personalized, behavior-driven email sequences that actually convert." },
  { Icon: Users, title: "Recruitment Automation", desc: "From intake to interview scheduling — fully streamlined hiring." },
  { Icon: Settings2, title: "Business Process Automation", desc: "Replace repetitive operational work with intelligent systems." },
];

const pillars = [
  { Icon: Sparkles, title: "AI Automation", desc: "Production-grade AI workflows tailored to your operational reality." },
  { Icon: Gauge, title: "Process Optimization", desc: "We audit, redesign, and rebuild your processes for compounding efficiency." },
  { Icon: TrendingUp, title: "Business Growth", desc: "Systems that scale revenue and operations without scaling headcount." },
];

const industries = [
  "Recruitment Agencies", "Marketing Agencies", "Consulting Firms",
  "Service Businesses", "E-commerce Brands", "B2B Companies",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-page relative pt-8 sm:pt-12 md:pt-20">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.1fr_1fr]">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>AI Automation Agency</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">Replace Manual</span>
              <br />Operations With
              <br />AI Powered Systems
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
              We automate your business processes so your team can focus on growing the business instead of repetitive work.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_-12px_rgba(255,237,105,0.6)]"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-xl transition-all hover:border-accent/40 hover:bg-white/[0.07]"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end lg:-mt-12 xl:-mt-16"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Six automation capabilities. <span className="text-muted-foreground">One unified system.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent">
              View all services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* WHY THUNSPARK */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Why ThunSpark</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Built To Save Time. <br className="hidden md:block" />
              <span className="text-muted-foreground">Designed To Scale.</span>
            </h2>
          </div>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pillars.map(({ Icon, title, desc }, i) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard className="h-full">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Reveal>
          <SectionLabel>Industries</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Trusted across teams that move fast.
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              variants={fadeUp}
              className="group relative bg-background p-8 transition-colors hover:bg-glass"
            >
              <div className="font-display text-xs text-muted-foreground">0{i + 1}</div>
              <div className="mt-3 text-xl font-medium">{ind}</div>
              <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent" />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
}

export function CTASection() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-glass p-12 backdrop-blur-xl md:p-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Ready to put your business on autopilot?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                We'll identify repetitive tasks in your business and show you how AI can automate them to save time and increase productivity.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_-12px_rgba(255,237,105,0.6)]"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
