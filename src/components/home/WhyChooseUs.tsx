import {
  Globe,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    icon: Building2,
    title: "Exclusive Listings",
    description:
      "Access a curated portfolio of luxury residences and off-market opportunities.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Reach an international audience of qualified buyers and investors.",
  },
  {
    icon: ShieldCheck,
    title: "White-Glove Service",
    description:
      "A tailored experience designed around discretion, trust, and results.",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description:
      "Strategic insights backed by years of experience in luxury real estate.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Elevating Every Real Estate Experience"
            description="We combine local expertise, global reach, and personalized service to help clients achieve exceptional results."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-yellow-500/30"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>

                <h3 className="mb-3 font-heading text-2xl text-white">
                  {feature.title}
                </h3>

                <p className="text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}