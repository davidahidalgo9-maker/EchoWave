import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const page = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

const featuresStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const card = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

import React from "react";

/* ---- Basic site config ---- */
const site = {
  brand: "EchoWave",
  headline: "We automate while you sleep.",
  subheadline: "Where intelligence meets automation.",
  calendly: "https://calendly.com/mammothcapital47/ai-intake-assistant",
  voiceflowURL:
    "https://creator.voiceflow.com/share/68b898af116f7170139c12f8/production",
};

/* ---- Feature bubbles ---- */
const features = [
  {
    title: "Instant Lead Capture",
    desc: "Never miss an inquiry — your AI assistant responds 24/7 and stores every lead automatically.",
  },
  {
    title: "Smart Qualification",
    desc: "Collect client intent, budget, and timing — all synced straight to your CRM or Airtable.",
  },
  {
    title: "Seamless Handoff",
    desc: "When a lead is ready, they’re instantly booked on your calendar with full context.",
  },
];

export default function Landing() {
  function openVoiceflowWidget() {
  // If the widget API is ready, open immediately. Otherwise wait briefly.
  if (window.voiceflow?.chat?.open) {
    window.voiceflow.chat.open();
    return;
  }
  const start = Date.now();
  const t = setInterval(() => {
    if (window.voiceflow?.chat?.open) {
      clearInterval(t);
      window.voiceflow.chat.open();
    } else if (Date.now() - start > 5000) {
      clearInterval(t); // give up after 5s to avoid polling forever
    }
  }, 100);
}


return (
  <main className="relative pt-24 md:pt-0 overflow-visible min-h-[100dvh] md:min-h-screen flex flex-col items-center justify-center bg-[#0B1222] text-white px-4">
    {/* mobile fixed backdrop */}
    <div className="md:hidden fixed inset-0 -z-10 bg-[#0B1222]" aria-hidden="true" />

    {/* ambient animated gradient */}
    <div className="aurora-bg" aria-hidden="true" />

    {/* PAGE SEQUENCE WRAPPER — full width so features keep their size */}
    <motion.div
      className="relative z-10 w-full text-center overflow-visible pt-[calc(env(safe-area-inset-top)+12px)] md:pt-0"
      variants={page}
      initial="hidden"
      animate="show"
    >
      {/* HERO (constrained to 3xl like before) */}
      <div className="max-w-3xl mx-auto">
        {/* Logo — MOBILE */}
        <motion.div
          variants={item}
          className="md:hidden relative mx-auto mb-4 w-[40vw] max-w-[200px] aspect-square mt-[calc(env(safe-area-inset-top)+28px)]"
        >
          <div className="echo-ring" />
          <div className="echo-ring echo-ring--2" />
          <div className="echo-ring echo-ring--3" />
          <img
            src="/echowave-mark-transparent.svg"
            alt="EchoWave logo"
            className="pointer-events-none select-none w-full h-full object-contain object-top brightness-125 mix-blend-screen"
          />
        </motion.div>

        {/* Logo — DESKTOP */}
        <motion.div variants={item} className="hidden md:block relative mx-auto mb-5 h-20 w-20 overflow-visible">
          <div className="echo-ring" />
          <div className="echo-ring echo-ring--2" />
          <div className="echo-ring echo-ring--3" />
          <img
            src="/echowave-mark-transparent.svg"
            alt="EchoWave logo"
            className="h-20 w-20 brightness-125 mix-blend-screen"
          />
        </motion.div>

        {/* Brand */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
        >
          {site.brand}
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={item} className="mt-2 text-lg sm:text-lg text-gray-100 tracking-wide">
          {site.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
        >
          <button onClick={openVoiceflowWidget} className="shared-btn w-full sm:w-auto min-h-[44px] cursor-pointer">
  Try the Live Demo
</button>

          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className="shared-btn w-full sm:w-auto min-h-[44px]"
          >
            Book a 10-Minute Call
          </a>
        </motion.div>
      </div>

      {/* FEATURE BUBBLES — same size as live site */}
      <motion.section
        variants={item}
        className="relative z-10 mt-10 sm:mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 px-0 sm:px-2"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] glow-hover"
          >
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* PERSUASION STRIP — centered */}
      <motion.section
        variants={item}
        className="relative z-10 mt-12 sm:mt-16 max-w-3xl mx-auto text-center px-4"
      >
        <h2 className="text-[22px] sm:text-[24px] font-semibold text-white">
          Always on. Always consistent. Always professional.
        </h2>
        <div className="mt-4 space-y-2 text-gray-300 text-[13px] sm:text-[15px] leading-relaxed">
          <p>Delay costs deals. Consistency wins them.</p>
          <p>Your competitor isn’t better — they’re faster.</p>
          <p>Speed wins — hesitation loses.</p>
        </div>
      </motion.section>
{/* CREDIBILITY STRIP */}
<motion.section
  variants={item}
  className="relative z-10 mt-10 sm:mt-12 max-w-3xl mx-auto text-center px-4 text-gray-300 text-sm sm:text-base leading-relaxed"
>
  <p className="font-medium text-white">
    Trusted automation framework used by operators nationwide.
  </p>
  <p className="mt-2 text-gray-300">
    Deployed in under 24 hours · Zero missed leads · 100% response consistency
  </p>
</motion.section>

      {/* FOOTER */}
      <motion.footer
        variants={item}
        className="relative z-10 mt-10 sm:mt-12 mb-8 text-[11px] sm:text-xs text-gray-400 text-center"
      >
        © {new Date().getFullYear()} {site.brand} · Where intelligence meets automation.
      </motion.footer>
    </motion.div>

    {/* Soft radial background accent */}
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(59,130,246,0.15),rgba(99,102,241,0.05)_50%,transparent_70%)]"
      aria-hidden="true"
    />
  </main>
);
}