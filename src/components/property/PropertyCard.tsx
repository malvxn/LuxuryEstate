import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, MoveRight } from "lucide-react";

import { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`}>
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-black">
            ₦{property.price.toLocaleString()}
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <h3 className="font-heading text-2xl text-white">
              {property.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-zinc-400">
              <MapPin size={16} />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 border-y border-zinc-800 py-4 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <BedDouble size={16} />
              <span>{property.bedrooms} Beds</span>
            </div>

            <div className="flex items-center gap-2">
              <Bath size={16} />
              <span>{property.bathrooms} Baths</span>
            </div>

            <div>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-medium text-yellow-400 transition group-hover:gap-3">
            View Details
            <MoveRight size={18} />
          </div>
        </div>
      </article>
    </Link>
  );
}