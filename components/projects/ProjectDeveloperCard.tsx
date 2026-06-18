import Link from "next/link";

import type { Developer } from "@/types/project";

type ProjectDeveloperCardProps = {
  developer?: Developer;
};

export function ProjectDeveloperCard({ developer }: ProjectDeveloperCardProps) {
  if (!developer) {
    return (
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-950">开发者信息</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          开发者信息暂不可用。
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">开发者信息</h2>
      <div className="mt-4 flex items-start gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-violet-100 text-base font-bold text-cyan-800">
          {developer.name.slice(0, 1)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-slate-950">{developer.name}</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {developer.bio}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {developer.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {developer.isAvailableForCustom ? "目前接受轻量定制咨询" : "暂不接定制"}
      </p>

      <Link
        href={`/developers/${developer.id}`}
        className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:text-cyan-700"
      >
        查看开发者主页
      </Link>
    </section>
  );
}
