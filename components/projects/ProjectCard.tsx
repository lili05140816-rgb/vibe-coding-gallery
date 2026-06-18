import Link from "next/link";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Developer, Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  developer?: Developer;
  variant?: "compact" | "rich";
};

export function ProjectCard({
  project,
  developer,
  variant = "compact",
}: ProjectCardProps) {
  const targetUsers = project.targetUsers.slice(0, 2);
  const features = project.features.slice(0, 2);
  const isCompact = variant === "compact";
  const tags = project.tags.slice(0, isCompact ? 2 : 3);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
    >
      <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-colors group-hover:border-cyan-200 group-hover:shadow-md">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-cyan-700">
              {project.category}
            </p>
            <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-slate-950">
              {project.title}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-slate-700">
          {project.subtitle}
        </p>

        {!isCompact ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {project.description}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {!isCompact ? (
          <div className="mt-5 grid gap-3 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-400">适合人群</p>
              <p className="mt-1 text-slate-700">{targetUsers.join(" / ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">功能亮点</p>
              <p className="mt-1 text-slate-700">{features.join("、")}</p>
            </div>
          </div>
        ) : null}

        <div className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="min-w-0 truncate font-medium text-slate-700">
            {developer?.name ?? "匿名创作者"}
          </span>
          <span className="shrink-0">
            {project.views.toLocaleString("zh-CN")} 浏览 ·{" "}
            {project.likes.toLocaleString("zh-CN")} 收藏
          </span>
        </div>
      </article>
    </Link>
  );
}
