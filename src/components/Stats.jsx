export default function Stats() {
  const stats = [
    { label: "Revenue Uplift", value: "Up to 35%" },
    { label: "Repeat Customers", value: "+45%" },
    { label: "Trusted Stores", value: "500+" },
    { label: "Digital Bills Sent", value: "2M+" },
  ];

  const logos = ["AWS", "99.9% Uptime", "Encryption"];

  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proven impact retailers can measure
            </h2>
            <p className="mt-3 text-gray-600">
              BillBox helps you grow revenue, retain customers, and manage loyalty — without technical setup.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-sm">
            <div className="text-sm font-medium text-indigo-700">Why businesses choose BillBox</div>
            <ul className="mt-4 space-y-3 text-gray-700">
              {[
                "Works with any POS system — no integration needed",
                "AI-driven campaigns on WhatsApp",
                "Loyalty & referrals that actually convert",
                "Analytics and CRM in one dashboard",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
              {logos.map((l) => (
                <div key={l} className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
