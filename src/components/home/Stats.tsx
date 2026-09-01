export default function Stats() {
  const stats = [
    {
      value: "80+",
      label: "Luxury Properties",
    },
    {
      value: "₦400M+",
      label: "Transactions Closed",
    },
    {
      value: "92%",
      label: "Client Satisfaction",
    },
    {
      value: "7+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="font-heading text-3xl text-yellow-400 md:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm tracking-wide text-zinc-400 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}