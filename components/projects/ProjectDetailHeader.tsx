import Link from "next/link";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Project } from "@/types/project";

type ProjectDetailHeaderProps = {
  project: Project;
};

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <header className="space-y-5 rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-sm sm:p-7">
      <Link
        href="/"
        className="inline-flex text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
      >
        返回首页
      </Link>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>{project.views.toLocaleString("zh-CN")} 浏览</span>
          <span>{project.likes.toLocaleString("zh-CN")} 收藏</span>
          <span>发布于 {project.createdAt}</span>
        </div>
      </div>
    </header>
  );
}
