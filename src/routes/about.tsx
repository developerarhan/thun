import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Gauge, Minimize2, ShieldCheck, TrendingUp } from "lucide-react";
import { Section, SectionLabel, Reveal, GlassCard, fadeUp, stagger } from "../components/ui-primitives";
import { motion } from "framer-motion";
import { CTASection } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ThunSpark" },
      { name: "description", content: "ThunSpark is an AI automation agency building systems that work while you sleep — improving efficiency, reducing cost, and scaling operations." },
      { property: "og:title", content: "About — ThunSpark" },
      { property: "og:description", content: "Systems that work while you sleep." },
    ],
  }),
  component: About,
});

const values = [
  { Icon: Lightbulb, title: "Innovation", desc: "Cutting-edge AI applied with engineering rigor." },
  { Icon: Gauge, title: "Efficiency", desc: "Every workflow optimized to remove friction." },
  { Icon: Minimize2, title: "Simplicity", desc: "Clean systems that humans can operate with confidence." },
  { Icon: ShieldCheck, title: "Reliability", desc: "Production-grade infrastructure that doesn't break." },
  { Icon: TrendingUp, title: "Scalability", desc: "Architected for growth from day one." },
];

const process = [
  { step: "01", title: "Discover", desc: "Deep audit of your operations, tools, and bottlenecks." },
  { step: "02", title: "Design", desc: "Blueprint custom workflows mapped to measurable outcomes." },
  { step: "03", title: "Build", desc: "Engineer production-ready automation systems." },
  { step: "04", title: "Optimize", desc: "Tune, monitor, and refine for sustained performance." },
  { step: "05", title: "Scale", desc: "Expand the system as your business grows." },
];

function About() {
  return (
    <>
      <section className="container-page pt-8 sm:pt-12 md:pt-20">
        <Reveal>
          <SectionLabel>About ThunSpark</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
            We Build Systems That <span className="text-gradient">Work While You Sleep</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We build AI systems that save time, reduce costs, and help businesses scale faster.<br /><br /><br />
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Custom automation designed to eliminate manual work and improve operational efficiency.
            </p>
          </div>
        </Reveal>
      </section>

      {/* VALUES */}
      <Section>
        <Reveal>
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Principles that shape every system we ship.
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map(({ Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard className="h-full">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-8 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PROCESS TIMELINE */}
      <Section>
        <Reveal>
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            A clear path from chaos to compounding leverage.
          </h2>
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {process.map((p, i) => (
              <motion.li
                key={p.step}
                variants={fadeUp}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="font-display text-xs text-accent">{p.step}</div>
                  <h3 className="mt-2 text-2xl font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border border-border bg-background font-display text-xs md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
