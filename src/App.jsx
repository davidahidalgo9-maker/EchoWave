function App() {
  return (
  <>
    {/* Mobile fixed backdrop to guarantee no white shows */}
    <div className="md:hidden fixed inset-0 bg-[#0B1222]" style={{ zIndex: -1 }} />

    {/* your existing root wrapper STARTS here */}
    <div className="min-h-[100svh] md:min-h-screen bg-gradient-to-b from-[#0B1220] to-[#0B172a] flex flex-col items-center justify-center text-white text-center px-6">
      {/* ...rest of your content... */}
    </div>
  </>
);

      {/* Logo / Brand Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
        EchoWave
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-400">
        We automate while you sleep.
      </p>

      {/* Feature cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all">
          <h2 className="text-blue-400 font-semibold mb-2">Instant Lead Capture</h2>
          <p className="text-gray-400 text-sm">
            Never miss an inquiry again — your AI assistant responds 24/7.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all">
          <h2 className="text-blue-400 font-semibold mb-2">Smart Qualification</h2>
          <p className="text-gray-400 text-sm">
            Screen leads, pre-qualify clients, and sync results to your CRM automatically.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all">
          <h2 className="text-blue-400 font-semibold mb-2">Seamless Handoff</h2>
          <p className="text-gray-400 text-sm">
            When a lead is ready, they’re booked on your calendar with full context.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <a
          href="#demo"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
        >
          Try the Live Demo
        </a>
        <a
          href="#book"
          className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
        >
          Book a 10-Minute Call
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-600">
        © 2025 EchoWave. Where intelligence meets automation.
      </footer>
    </div>
  );
}

export default App;
