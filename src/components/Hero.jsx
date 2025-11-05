import { Rocket, MessageCircle, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <Zap className="h-4 w-4" />
            From printed bills to smart digital growth
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">
            Turn every bill into a customer connection
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            BillBox is an AI-powered platform that transforms paper receipts into WhatsApp experiences. Send e-bills instantly, capture customer data, and automate campaigns — without changing your POS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700"
            >
              <Rocket className="h-5 w-5" />
              Get a live demo
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:border-gray-300"
            >
              <MessageCircle className="h-5 w-5" />
              See how it works
            </a>
          </div>

          <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "Pharmacies",
              "Supermarkets",
              "Restaurants",
              "Fashion Stores",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
