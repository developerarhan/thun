import { createFileRoute } from "@tanstack/react-router";
import {
  Workflow, Target, Database, Mail, Users, Settings2, Check,
} from "lucide-react";
import { Section, SectionLabel, Reveal } from "../components/ui-primitives";
import { CTASection } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ThunSpark" },
      { name: "description", content: "AI workflow, lead gen, CRM, email, recruitment, and business process automation — engineered for scale." },
      { property: "og:title", content: "Services — ThunSpark" },
      { property: "og:description", content: "Six automation capabilities, one unified system." },
    ],
  }),
  component: Services,
});

const services = [
  {
    Icon: Workflow, title: "AI Workflow Automation",
    description: "Replace fragmented manual processes with intelligent, end-to-end workflows that connect every tool in your stack.",
    benefits: ["Eliminates repetitive tasks", "Cross-platform orchestration", "Real-time monitoring"],
    useCases: ["Operations handoffs", "Approval routing", "Data syncing across SaaS tools"],
  },
  {
    Icon: Target, title: "Lead Generation Automation",
    description: "Continuously discover, qualify, and engage prospects through AI-powered enrichment and outreach systems.",
    benefits: ["Higher-quality pipeline", "Reduced manual research", "Faster response times"],
    useCases: ["Outbound prospecting", "ICP enrichment", "Multi-channel sequences"],
  },
  {
    Icon: Database, title: "CRM Automation",
    description: "Keep your CRM accurate, up-to-date, and actionable with automated data hygiene and pipeline management.",
    benefits: ["Clean data 24/7", "Automated follow-ups", "Better forecasting"],
    useCases: ["HubSpot / Salesforce sync", "Deal stage automation", "Activity logging"],
  },
  {
    Icon: Mail, title: "Email Automation",
    description: "Send the right message at the right moment with behavior-driven, personalized email sequences that convert.",
    benefits: ["Higher open & reply rates", "Personalized at scale", "Lifecycle coverage"],
    useCases: ["Nurture campaigns", "Trigger-based sequences", "Re-engagement"],
  },
  {
    Icon: Users, title: "Recruitment Automation",
    description: "Streamline hiring from candidate intake to interview scheduling — without losing the human touch.",
    benefits: ["Faster time-to-hire", "Less recruiter admin", "Better candidate experience"],
    useCases: ["Resume screening", "Interview scheduling", "Talent pool nurture"],
  },
  {
    Icon: Settings2, title: "Business Process Automation",
    description: "Audit, redesign, and automate the operational backbone of your business with custom internal systems.",
    benefits: ["Reduced operational cost", "Faster cycle times", "Audit-ready workflows"],
    useCases: ["Finance & ops", "Internal reporting", "Vendor management"],
  },
];

function Services() {
  return (
    <>
      <section className="container-page pt-12 md:pt-20">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Automation services engineered for <span className="text-gradient">measurable outcomes.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We design, build, and operate AI-powered automation systems across the workflows that matter most to your business.
          </p>
        </Reveal>
      </section>

      <Section className="!pt-24">
        <div className="space-y-32">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="font-display text-sm text-accent">0{i + 1} — Service</div>
                  <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-glass text-accent">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{s.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.description}</p>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-2xl border border-border bg-glass p-7 backdrop-blur-xl">
                    <h3 className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">Benefits</h3>
                    <ul className="mt-5 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-glass p-7 backdrop-blur-xl">
                    <h3 className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">Use Cases</h3>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {s.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
