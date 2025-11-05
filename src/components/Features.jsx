import { MessageCircle, Gift, Star, BarChart3, Users, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "WhatsApp Campaigns & Automation",
      desc: "Send offers, updates, and reminders automatically based on purchase behavior.",
      icon: MessageCircle,
    },
    {
      title: "Loyalty & Referral Management",
      desc: "Reward repeat customers and drive word-of-mouth with smart referral flows.",
      icon: Gift,
    },
    {
      title: "Feedback & Reviews",
      desc: "Collect private feedback and boost public ratings with gentle nudges.",
      icon: Star,
    },
    {
      title: "Multi‑Store Analytics",
      desc: "Get chain-level visibility, cohorts, and segmentation across locations.",
      icon: BarChart3,
    },
    {
      title: "CRM Dashboard",
      desc: "View every customer's history, preferences, and activity in one place.",
      icon: Users,
    },
    {
      title: "Secure & Scalable",
      desc: "Built with encryption and enterprise-grade reliability on a modern stack.",
      icon: Shield,
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to turn bills into growth
          </h2>
          <p className="mt-3 text-gray-600">
            Powerful tools designed for pharmacies, supermarkets, restaurants, and fashion stores.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
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
