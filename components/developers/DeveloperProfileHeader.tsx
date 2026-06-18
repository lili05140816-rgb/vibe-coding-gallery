import Link from "next/link";

import type { Developer } from "@/types/project";

type DeveloperProfileHeaderProps = {
  developer: Developer;
  worksCount: number;
};

export function DeveloperProfileHeader({
  developer,
  worksCount,
}: DeveloperProfileHeaderProps) {
  return (
    <header className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-sm sm:p-7">
      <Link
        href="/"
        className="inline-flex text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
      >
        返回首页
      </Link>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-cyan-100 via-white to-violet-100 text-2xl font-bold text-cyan-800 shadow-sm">
          {developer.name.slice(0, 1)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {developer.name}
            </h1>
            <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              {developer.isAvailableForCustom ? "接定制" : "暂不接定制"}
            </span>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {developer.bio}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {developer.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-4 truncate text-xs text-slate-400">
            头像占位路径：{developer.avatar || "暂无头像"}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">作品数量</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {worksCount.toLocaleString("zh-CN")}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">资料作品数</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {developer.worksCount.toLocaleString("zh-CN")}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">总浏览量</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {developer.totalViews.toLocaleString("zh-CN")}
          </p>
        </div>
      </div>
    </header>
  );
}
