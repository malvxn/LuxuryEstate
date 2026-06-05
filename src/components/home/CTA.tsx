import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-10 text-center md:p-16">
          <SectionHeading
            eyebrow="Let's Talk"
            title="Ready To Find Your Dream Property?"
            description="Schedule a private consultation with our team and gain access to exclusive luxury listings, investment opportunities, and personalized guidance."
          />

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Schedule Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white"
            >
              Browse Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}