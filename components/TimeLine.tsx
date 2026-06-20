const timeline = [
  {
    year: "2023",
    title: "Started B.Tech at KL University",
  },
  {
    year: "2024",
    title: "Built KL-Eats",
  },
  {
    year: "2025",
    title: "Developed Tastoria POS",
  },
  {
    year: "2026",
    title: "Preparing for SDE Roles",
  },
];

export default function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Journey
      </h2>

      <div className="space-y-8">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="rounded-xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-bold text-blue-400">
              {item.year}
            </h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}