type PropertyHighlightsProps = {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
};

export default function PropertyHighlights({
  bedrooms,
  bathrooms,
  sqft,
}: PropertyHighlightsProps) {
  const highlights = [
    {
      label: "Bedrooms",
      value: bedrooms,
    },
    {
      label: "Bathrooms",
      value: bathrooms,
    },
    {
      label: "Interior",
      value: `${sqft.toLocaleString()} sqft`,
    },
    {
      label: "Property Type",
      value: "Luxury Residence",
    },
    {
      label: "Parking",
      value: "3 Cars",
    },
    {
      label: "Year Built",
      value: "2024",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
        >
          <p className="text-sm text-zinc-500">
            {item.label}
          </p>

          <p className="mt-2 text-lg font-semibold">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}