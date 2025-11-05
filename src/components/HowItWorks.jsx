import { Printer, Smartphone, Database, Bot } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Print as Usual",
      desc: "BillBox Virtual Printer captures every printed bill automatically — no POS changes needed.",
      icon: Printer,
    },
    {
      title: "Send Smart E‑Bill",
      desc: "Customers instantly receive a branded WhatsApp receipt they can search and save.",
      icon: Smartphone,
    },
    {
      title: "Capture Data",
      desc: "Each bill updates your analytics in real time with items, spend, and visit frequency.",
      icon: Database,
    },
    {
      title: "Automate Growth",
      desc: "AI triggers offers, loyalty rewards, and feedback requests to drive repeat business.",
      icon: Bot,
    },
  ];

  return (
    <section id="how" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How BillBox works
          </h2>
          <p className="mt-3 text-gray-600">
            From a printed bill to a personalized WhatsApp experience in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
