import LuxurySearch from "@/components/home/LuxurySearch";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-black"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center text-white">
        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Luxury Real Estate
        </p>

        <h1 className="font-heading mb-6 text-4xl leading-tight md:text-7xl">
          Extraordinary Properties For Extraordinary Living
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-200 md:text-lg">
          Discover premium residences, waterfront estates, and investment
          opportunities designed for modern luxury living.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-yellow-500 px-8 py-4 font-medium text-black">
            View Properties
          </button>

          <button className="rounded-full border border-white px-8 py-4">
            Schedule Consultation
          </button>
        </div>
        <LuxurySearch />
      </div>
    </section>
  );
}