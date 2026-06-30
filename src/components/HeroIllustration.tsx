import { motion } from "framer-motion";
import type { ReactElement } from "react";

/**
 * Premium enterprise AI automation illustration.
 * Central glowing AI chip with 8 orbiting capability modules,
 * connected via thin gold lines. Subtle floating + pulse animations.
 */

const GOLD = "#DFCF6D";

type Module = {
  label: string;
  icon: (props: { className?: string }) => ReactElement;
};

const Icon = {
  Recruitment: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.2-3.4 4-5 7-5s5.8 1.6 7 5" />
    </svg>
  ),
  Sales: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 17l5-5 3 3 7-8" />
      <path d="M14 7h5v5" />
    </svg>
  ),
  Support: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12a8 8 0 1 1 16 0v4a3 3 0 0 1-3 3h-1v-6h4M4 13h4v6H7a3 3 0 0 1-3-3z" />
    </svg>
  ),
  Workflow: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
    </svg>
  ),
  CRM: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="2.6" />
      <path d="M7 19c.6-2.6 2.6-4 5-4s4.4 1.4 5 4" />
      <circle cx="5.5" cy="9.5" r="1.8" />
      <circle cx="18.5" cy="9.5" r="1.8" />
      <path d="M2.5 17c.4-1.7 1.5-2.7 3-2.7M21.5 17c-.4-1.7-1.5-2.7-3-2.7" />
    </svg>
  ),
  Data: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </svg>
  ),
  Email: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  Analytics: ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </svg>
  ),
};

const modules: Module[] = [
  { label: "Recruitment", icon: Icon.Recruitment },
  { label: "Sales", icon: Icon.Sales },
  { label: "Support", icon: Icon.Support },
  { label: "Workflow", icon: Icon.Workflow },
  { label: "CRM", icon: Icon.CRM },
  { label: "Data", icon: Icon.Data },
  { label: "Email", icon: Icon.Email },
  { label: "Analytics", icon: Icon.Analytics },
];

export function HeroIllustration() {
  const size = 600;
  const center = size / 2;
  const radius = 230;

  const positions = modules.map((m, i) => {
    const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...m,
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <div className="absolute inset-16 rounded-full bg-[#DFCF6D]/5 blur-[72px]" />

      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="relative h-full w-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="chipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.28" />
            <stop offset="60%" stopColor={GOLD} stopOpacity="0.05" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.03" />
            <stop offset="50%" stopColor={GOLD} stopOpacity="0.28" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0.03" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.18" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint orbit ring */}
        <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(223,207,109,0.05)" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx={center} cy={center} r={radius - 60} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Center chip glow */}
        <circle cx={center} cy={center} r="150" fill="url(#chipGlow)" />

        {/* Connection lines */}
        {positions.map((p, i) => (
          <motion.line
            key={`l-${i}`}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r = 90 + ((i * 37) % 110);
          const x = center + Math.cos(a) * r;
          const y = center + Math.sin(a) * r;
          return (
            <motion.circle
              key={`p-${i}`}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 1.6 : 1}
              fill={GOLD}
              animate={{ opacity: [0.08, 0.25, 0.08], y: [0, -3, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
            />
          );
        })}

        {/* Module nodes */}
        {positions.map((p, i) => {
          const IconCmp = p.icon;
          return (
            <g key={p.label}>
              <circle cx={p.x} cy={p.y} r="38" fill="url(#nodeGlow)" />
              <motion.g
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 5 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="26"
                  fill="#0f1115"
                  stroke="rgba(223,207,109,0.45)"
                  strokeWidth="1"
                />
                <foreignObject x={p.x - 12} y={p.y - 12} width="24" height="24">
                  <div style={{ color: GOLD }}>
                    <IconCmp className="h-6 w-6" />
                  </div>
                </foreignObject>
              </motion.g>
              <text
                x={p.x}
                y={p.y + 50}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(255,255,255,0.55)"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.04em" }}
              >
                {p.label}
              </text>
            </g>
          );
        })}

        {/* AI Chip */}
        <motion.g
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        >
          {/* Chip pins */}
          {[-30, -10, 10, 30].map((o) => (
            <g key={o}>
              <line x1={center + o} y1={center - 60} x2={center + o} y2={center - 72} stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
              <line x1={center + o} y1={center + 60} x2={center + o} y2={center + 72} stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
              <line x1={center - 60} y1={center + o} x2={center - 72} y2={center + o} stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
              <line x1={center + 60} y1={center + o} x2={center + 72} y2={center + o} stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
            </g>
          ))}
          {/* Outer chip */}
          <rect
            x={center - 60}
            y={center - 60}
            width="120"
            height="120"
            rx="18"
            fill="#0f1115"
            stroke={GOLD}
            strokeOpacity="0.7"
            strokeWidth="1.2"
          />
          {/* Inner core */}
          <rect
            x={center - 40}
            y={center - 40}
            width="80"
            height="80"
            rx="12"
            fill={GOLD}
            fillOpacity="0.08"
            stroke={GOLD}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <text
            x={center}
            y={center + 8}
            textAnchor="middle"
            fontSize="28"
            fontWeight="600"
            fill={GOLD}
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em" }}
          >
            AI
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}
