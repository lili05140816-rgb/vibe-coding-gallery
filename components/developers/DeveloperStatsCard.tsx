import type { Developer } from "@/types/project";

type DeveloperStatsCardProps = {
  developer: Developer;
  worksCount: number;
  views: number;
};

export function DeveloperStatsCard({
  developer,
  worksCount,
  views,
}: DeveloperStatsCardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">开发者状态</h2>
      <div className="mt-4 grid gap-3">
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <span className="text-sm text-slate-500">已发布作品</span>
          <span className="font-semibold text-slate-950">{worksCount} 个</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <span className="text-sm text-slate-500">作品浏览量</span>
          <span className="font-semibold text-slate-950">
            {views.toLocaleString("zh-CN")}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <span className="text-sm text-slate-500">定制状态</span>
          <span className="font-semibold text-slate-950">
            {developer.isAvailableForCustom ? "接受咨询" : "暂不接单"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {developer.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
