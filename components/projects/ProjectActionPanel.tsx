import { getProjectStatusLabel } from "@/components/ui/StatusBadge";
import type { Project, ProjectStatus } from "@/types/project";

const actionLabels: Record<ProjectStatus, string> = {
  showcase: "查看作品说明",
  demo: "体验项目",
  paid: "咨询项目",
  custom: "联系定制",
  opensource: "查看开源地址",
};

type ProjectActionPanelProps = {
  project: Project;
};

export function ProjectActionPanel({ project }: ProjectActionPanelProps) {
  const label = actionLabels[project.status];
  const statusLabel = getProjectStatusLabel(project.status);

  return (
    <section className="rounded-[2rem] border border-cyan-100 bg-white/95 p-5 shadow-sm">
      <p className="text-sm font-semibold text-cyan-700">当前状态</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">{statusLabel}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        第一阶段只展示项目状态和外部体验入口，不开放履约闭环或即时聊天。
      </p>

      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
        >
          {label}
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500"
        >
          {label}暂不可用
        </button>
      )}
    </section>
  );
}
