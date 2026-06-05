type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
        {eyebrow}
      </p>

      <h2 className="font-heading text-4xl leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}