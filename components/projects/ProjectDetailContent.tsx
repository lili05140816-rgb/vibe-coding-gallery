import type { Project } from "@/types/project";

type ProjectDetailContentProps = {
  project: Project;
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div className="space-y-5">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-950">项目介绍</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-950">适合谁使用</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.targetUsers.map((user) => (
            <span
              key={user}
              className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-800"
            >
              {user}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-950">核心功能</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold text-cyan-700">
                功能 {index + 1}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
