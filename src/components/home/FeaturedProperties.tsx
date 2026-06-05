import PropertyCard from "@/components/property/PropertyCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  const featuredProperties = properties.filter(
    (property) => property.featured
  );

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Featured Listings"
            title="Exceptional Properties"
            description="Explore our curated collection of luxury residences, waterfront villas, and prestigious estates."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}