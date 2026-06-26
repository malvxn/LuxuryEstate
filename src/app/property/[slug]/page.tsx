import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  MapPin,
} from "lucide-react";

import { properties } from "@/data/properties";
import PropertyGallery from "@/components/property/property-gallery";
import PropertyHighlights from "@/components/property/property-highlights";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyInquiryForm from "@/components/forms/property-inquiry-form";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropertyPage({
  params,
}: Props) {
  const { slug } = await params;

  const property = properties.find(
    (property) => property.id === slug
  );

  if (!property) {
    notFound();
  }

  const similarProperties = properties
    .filter((item) => item.id !== property.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          {/* LEFT COLUMN */}
          <div>
            <PropertyGallery
              images={property.images}
              title={property.title}
            />

            <div className="mt-12">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
                Luxury Property
              </p>

              <h1 className="font-heading text-4xl md:text-6xl">
                {property.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-zinc-400">
                <MapPin size={18} />
                <span>{property.location}</span>
              </div>

              <p className="mt-8 text-4xl font-semibold text-yellow-400">
                ${property.price.toLocaleString()}
              </p>

              <div className="mt-10 flex flex-wrap gap-8 border-y border-zinc-800 py-6">
                <div className="flex items-center gap-2">
                  <BedDouble size={20} />
                  <span>
                    {property.bedrooms} Bedrooms
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Bath size={20} />
                  <span>
                    {property.bathrooms} Bathrooms
                  </span>
                </div>

                <div>
                  <span>
                    {property.sqft.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </div>

            {/* OVERVIEW */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl">
                Property Overview
              </h2>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {property.description}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-12">
              <h2 className="mb-6 font-heading text-3xl">
                Property Highlights
              </h2>

              <PropertyHighlights
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                sqft={property.sqft}
              />
            </div>

            {/* AMENITIES */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl">
                Amenities
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {property.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside>
            <div className="sticky top-28 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="font-heading text-2xl">
                Schedule a Viewing
              </h3>

              <p className="mt-3 mb-3 text-sm text-zinc-400">
                Interested in this property? Contact us to
                arrange a private tour.
              </p>

              <PropertyInquiryForm />
            </div>
          </aside>
        </div>
      </section>

      {/* SIMILAR PROPERTIES */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-heading text-4xl">
              Similar Properties
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore other luxury residences from our
              collection.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {similarProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}