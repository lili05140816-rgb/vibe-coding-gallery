type StatsBarProps = {
  stats: Array<{
    label: string;
    value: number;
  }>;
};

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-100 hover:shadow-[0_18px_50px_rgba(14,165,233,0.12)]"
        >
          <p className="text-3xl font-black text-slate-950">{stat.value}</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
