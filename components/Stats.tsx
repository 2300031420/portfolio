const stats = [
  {
    number: "300+",
    label: "DSA Problems",
  },
  {
    number: "1000+",
    label: "Users Served",
  },
  {
    number: "40+",
    label: "Repositories",
  },
  {
    number: "8.98",
    label: "CGPA",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-slate-900 p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {item.number}
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}