import PropertyListings from "@/components/property/property-listings";
import SectionHeading from "@/components/shared/SectionHeading";

import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <main className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Our Collection"
            title="Luxury Properties"
            description="Explore our curated portfolio of exceptional residences and investment opportunities."
          />
        </div>

        <PropertyListings properties={properties} />
      </div>
    </main>
  );
}