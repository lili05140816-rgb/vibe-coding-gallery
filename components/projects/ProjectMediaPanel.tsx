import type { Project } from "@/types/project";

type ProjectMediaPanelProps = {
  project: Project;
};

export function ProjectMediaPanel({ project }: ProjectMediaPanelProps) {
  const screenshots = project.screenshots.slice(0, 2);

  return (
    <section className="space-y-3">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-100 via-white to-violet-100 p-6 shadow-sm">
        <div className="flex min-h-56 flex-col justify-between sm:min-h-72">
          <div>
            <p className="text-sm font-semibold text-cyan-800">项目封面</p>
            <h2 className="mt-3 max-w-xl text-2xl font-bold text-slate-950 sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              {project.subtitle}
            </p>
          </div>
          <p className="mt-8 truncate rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-slate-500">
            占位路径：{project.coverImage || "暂无封面"}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot}
            className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm"
          >
            <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-cyan-50 text-sm font-semibold text-slate-500">
              截图占位 {index + 1}
            </div>
            <p className="mt-3 truncate text-xs text-slate-400">{screenshot}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
