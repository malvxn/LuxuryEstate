"use client";

import { useMemo, useState } from "react";

import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/types/property";

type PropertyListingsProps = {
  properties: Property[];
};

export default function PropertyListings({
  properties,
}: PropertyListingsProps) {
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesBedrooms =
        bedrooms === "all" ||
        property.bedrooms >= Number(bedrooms);

      return matchesSearch && matchesBedrooms;
    });

    switch (sortBy) {
      case "low":
        return [...filtered].sort(
          (a, b) => a.price - b.price
        );

      case "high":
        return [...filtered].sort(
          (a, b) => b.price - a.price
        );

      default:
        return [...filtered].sort(
          (a, b) =>
            Number(b.featured) -
            Number(a.featured)
        );
    }
  }, [properties, search, bedrooms, sortBy]);

  return (
    <div>
      <div className="mb-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Search by property or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500"
          />

          <select
            value={bedrooms}
            onChange={(e) =>
              setBedrooms(e.target.value)
            }
            className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500"
          >
            <option value="all">
              All Bedrooms
            </option>

            <option value="2">
              2+ Bedrooms
            </option>

            <option value="3">
              3+ Bedrooms
            </option>

            <option value="4">
              4+ Bedrooms
            </option>

            <option value="5">
              5+ Bedrooms
            </option>
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500"
          >
            <option value="featured">
              Featured First
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>
          </select>
        </div>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-16 text-center">
          <h3 className="text-2xl font-semibold">
            No Properties Found
          </h3>

          <p className="mt-3 text-zinc-400">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      )}
    </div>
  );
}