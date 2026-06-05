import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

const collections = [
  {
    title: "Waterfront Living",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  },
  {
    title: "Urban Luxury",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
  },
  {
    title: "Private Estates",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
];

export default function Lifestyle() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Lifestyle Collections"
            title="Find A Home That Matches Your Lifestyle"
            description="Explore curated collections designed around the way you live, invest, and experience luxury."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative h-[420px] overflow-hidden rounded-3xl"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">
                <h3 className="font-heading text-3xl text-white">
                  {collection.title}
                </h3>

                <button className="mt-3 text-yellow-400">
                  Explore Collection →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}