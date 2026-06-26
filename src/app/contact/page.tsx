import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import PropertyInquiryForm from "@/components/forms/property-inquiry-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Get In Touch
          </p>

          <h1 className="font-heading text-5xl md:text-7xl">
            Let's Discuss Your
            <br />
            Dream Property
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-zinc-400">
            Whether you're searching for an exceptional
            residence, an investment opportunity, or
            professional real estate guidance, our team
            is here to assist.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT */}
          <div>
            <h2 className="font-heading text-4xl">
              Contact Information
            </h2>

            <p className="mt-6 leading-relaxed text-zinc-400">
              Connect with our luxury property specialists
              to schedule a private consultation or learn
              more about our exclusive listings.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <Phone className="mt-1 text-yellow-400" />

                <div>
                  <p className="font-medium">
                    Phone
                  </p>

                  <p className="mt-1 text-zinc-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <Mail className="mt-1 text-yellow-400" />

                <div>
                  <p className="font-medium">
                    Email
                  </p>

                  <p className="mt-1 text-zinc-400">
                    hello@luxeestates.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <MapPin className="mt-1 text-yellow-400" />

                <div>
                  <p className="font-medium">
                    Office
                  </p>

                  <p className="mt-1 text-zinc-400">
                    1000 Ocean Drive
                    <br />
                    Miami Beach, FL 33139
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
            <div className="mb-8">
              <h2 className="font-heading text-4xl">
                Schedule a Consultation
              </h2>

              <p className="mt-3 text-zinc-400">
                Tell us about your goals and one of our
                specialists will reach out shortly.
              </p>
            </div>

            <PropertyInquiryForm />
          </div>
        </div>
      </section>

      {/* OFFICE SHOWCASE */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Private Consultations
                </p>

                <h2 className="mt-4 font-heading text-4xl">
                  Experience
                  <br />
                  White-Glove Service
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-400">
                  Our advisors provide a discreet,
                  personalized experience tailored to
                  buyers, sellers, and investors seeking
                  exceptional real estate opportunities.
                </p>
              </div>

              <div className="min-h-80 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}