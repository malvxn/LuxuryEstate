import { Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Property Investor",
    quote:
      "Their team helped us secure an exclusive waterfront residence that exceeded every expectation. The entire process felt effortless from start to finish.",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner",
    quote:
      "The professionalism, market knowledge, and attention to detail were exceptional. We found our dream home and closed with complete confidence.",
  },
  {
    name: "James Carter",
    role: "Entrepreneur",
    quote:
      "From private viewings to negotiations, every step reflected a truly premium experience. I wouldn't trust anyone else with luxury real estate.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Client Success Stories"
            title="Trusted By Buyers, Sellers & Investors"
            description="Our clients rely on us for exceptional service, market expertise, and results that exceed expectations."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-yellow-500/30"
            >
              <Quote className="mb-6 h-10 w-10 text-yellow-400" />

              <p className="mb-8 flex-1 leading-relaxed text-zinc-300">
                "{testimonial.quote}"
              </p>

              <div>
                <h3 className="font-medium text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}