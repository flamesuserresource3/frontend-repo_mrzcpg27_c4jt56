import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">B</div>
            <span className="text-lg font-semibold tracking-tight">BillBox</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#impact" className="hover:text-gray-900">Impact</a>
          </nav>
          <a
            href="#demo"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Book a demo
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <HowItWorks />
        <div id="impact">
          <Stats />
        </div>

        {/* Call to action */}
        <section id="demo" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-sm md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold leading-tight">Stop printing. Start growing.</h3>
                <p className="mt-2 text-indigo-100">
                  Go live in days with zero changes to your POS. See why 500+ stores trust BillBox.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-indigo-700 shadow-sm transition hover:bg-indigo-50"
                >
                  Get a live demo
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-500/20 px-5 py-3 text-white ring-1 ring-inset ring-white/40 transition hover:bg-indigo-500/30"
                >
                  Explore features
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-bold">B</div>
              <span className="text-sm font-semibold">BillBox</span>
            </div>
            <p className="text-center text-sm text-gray-500 sm:text-right">
              © {new Date().getFullYear()} BillBox — Turn every bill into a customer connection.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
