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
  // Centered modal popup for Voiceflow share link (responsive sizing)
  const openChatModal = () => {
    if (!document.getElementById("vfModalStyles")) {
      const style = document.createElement("style");
      style.id = "vfModalStyles";
      style.textContent = `
        @keyframes vfBackdropIn   { from { opacity: 0 } to { opacity: 1 } }
        @keyframes vfBackdropOut  { from { opacity: 1 } to { opacity: 0 } }
        @keyframes vfModalIn  { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.98) } 100% { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
        @keyframes vfModalOut { 0% { opacity: 1; transform: translate(-50%, -50%) scale(1) } 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.98) } }
      `;
      document.head.appendChild(style);
    }

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const modalW = isMobile ? Math.round(window.innerWidth * 0.92) : 400; // px
    const modalH = isMobile ? Math.round(window.innerHeight * 0.82) : 600; // px

    const backdrop = document.createElement("div");
    Object.assign(backdrop.style, {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,0.6)",
      zIndex: "9998",
      animation: "vfBackdropIn 200ms ease-out forwards",
    });

    const iframe = document.createElement("iframe");
    iframe.src = site.voiceflowURL;
    Object.assign(iframe.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: `${modalW}px`,
      height: `${modalH}px`,
      border: "none",
      borderRadius: isMobile ? "12px" : "16px",
      overflow: "hidden",
      background: "transparent",
      zIndex: "9999",
      boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      animation: "vfModalIn 220ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
    });

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    const closeTop = `calc(50% - ${Math.round(modalH / 2) + 10}px)`;
    const closeRight = `calc(50% - ${Math.round(modalW / 2) + 10}px)`;
    Object.assign(closeBtn.style, {
      position: "fixed",
      top: closeTop,
      right: closeRight,
      zIndex: "10000",
      background: "rgba(0,0,0,0.45)",
      color: "white",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "6px 10px",
      borderRadius: "8px",
      backdropFilter: "blur(2px)",
      lineHeight: "1",
    });

    const closeModal = () => {
      iframe.style.animation = "vfModalOut 180ms ease-out forwards";
      backdrop.style.animation = "vfBackdropOut 160ms ease-out forwards";
      setTimeout(() => {
        iframe.remove();
        closeBtn.remove();
        backdrop.remove();
      }, 190);
    };

    closeBtn.onclick = closeModal;
    backdrop.onclick = closeModal;

    document.body.appendChild(backdrop);
    document.body.appendChild(iframe);
    document.body.appendChild(closeBtn);
    setTimeout(() => iframe.focus?.(), 250);
  };

  return (
  <main className="relative pt-24 md:pt-0 overflow-visible min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center bg-[#0B1222] text-white px-4 **prevent-clip**">

<div className="md:hidden fixed inset-0 -z-10 bg-[#0B1222]" aria-hidden="true" />

      {/* ambient animated gradient (defined as .aurora-bg in index.css) */}
      <div className="aurora-bg" aria-hidden="true" />

      {/* HERO */}
      <div className="relative z-10 max-w-3xl mx-auto text-center
                overflow-visible md:overflow-hidden
                pt-[calc(env(safe-area-inset-top)+12px)] md:pt-0">


       {/* Logo — MOBILE */}
<div className="md:hidden relative mx-auto mb-4
                w-[50vw] max-w-[260px] aspect-square
                mt-[calc(env(safe-area-inset-top)+28px)]">
  <div className="echo-ring" />
  <div className="echo-ring echo-ring--2" />
  <div className="echo-ring echo-ring--3" />
  <img
    src="/echowave-mark-transparent.svg"
    alt="EchoWave logo"
    className="pointer-events-none select-none w-full h-full object-contain object-top brightness-125 mix-blend-screen"
  />
</div>

{/* Logo — DESKTOP (unchanged) */}
<div className="hidden md:block relative mx-auto mb-5 h-20 w-20 overflow-visible">
  <div className="echo-ring" />
  <div className="echo-ring echo-ring--2" />
  <div className="echo-ring echo-ring--3" />
  <img
    src="/echowave-mark-transparent.svg"
    alt="EchoWave logo"
    className="h-20 w-20 brightness-125 mix-blend-screen"
  />
</div>







        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] animate-shimmer-delayed">
          {site.brand}
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-100 tracking-wide">
          {site.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={openChatModal}
            className="shared-btn w-full sm:w-auto min-h-[44px]"
          >
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
        </div>
      </div>

      {/* FEATURE BUBBLES */}
      <section className="relative z-10 mt-10 sm:mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 px-0 sm:px-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] glow-hover"
          >
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-10 sm:mt-12 mb-8 text-[11px] sm:text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} {site.brand} · Where intelligence meets automation.
      </footer>

      {/* Soft radial background accent */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(59,130,246,0.15),rgba(99,102,241,0.05)_50%,transparent_70%)]"
        aria-hidden="true"
      />
    </main>
  );
}
