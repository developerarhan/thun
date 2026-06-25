import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Outer glow */}
      <div className="absolute inset-10 rounded-full bg-accent/10 blur-3xl" />

      <svg viewBox="0 0 600 600" className="relative h-full w-full">
        <defs>
          <radialGradient id="ring" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,237,105,0.25)" />
          </radialGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,237,105,0.6)" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        {[260, 200, 140, 90].map((r, i) => (
          <motion.circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        ))}

        {/* Rotating dashed ring */}
        <motion.circle
          cx="300" cy="300" r="260"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          strokeDasharray="2 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        />

        {/* Connection lines */}
        {[
          [300, 40, 300, 560],
          [40, 300, 560, 300],
          [88, 88, 512, 512],
          [512, 88, 88, 512],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#line)"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
          />
        ))}

        {/* Nodes on outer ring */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = 300 + Math.cos(angle) * 260;
          const y = 300 + Math.sin(angle) * 260;
          return (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.05 }}>
              <circle cx={x} cy={y} r="6" fill="#0f1115" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <motion.circle
                cx={x} cy={y} r="3"
                fill="#ffed69"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              />
            </motion.g>
          );
        })}

        {/* Inner hex/diamond */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <polygon
            points="300,230 370,300 300,370 230,300"
            fill="none"
            stroke="rgba(255,237,105,0.5)"
            strokeWidth="1"
          />
          <polygon
            points="300,250 350,300 300,350 250,300"
            fill="rgba(255,237,105,0.08)"
            stroke="rgba(255,237,105,0.7)"
            strokeWidth="1"
          />
        </motion.g>

        {/* Center node */}
        <motion.circle
          cx="300" cy="300" r="10"
          fill="#ffed69"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: "300px 300px" }}
        />
        <circle cx="300" cy="300" r="20" fill="none" stroke="rgba(255,237,105,0.3)" strokeWidth="1" />

        {/* Floating small squares */}
        {[
          { x: 150, y: 150 },
          { x: 450, y: 180 },
          { x: 170, y: 450 },
          { x: 440, y: 440 },
        ].map((p, i) => (
          <motion.rect
            key={i}
            x={p.x - 6} y={p.y - 6}
            width="12" height="12"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            animate={{ y: [p.y - 6, p.y - 14, p.y - 6] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
