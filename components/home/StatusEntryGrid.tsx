import Link from "next/link";
import { getProjectStatusLabel } from "@/components/ui/StatusBadge";
import type { Project, ProjectStatus } from "@/types/project";

type StatusEntryGridProps = {
  projects: Project[];
};

const statusItems: Array<{
  status: ProjectStatus;
  title: string;
  description: string;
}> = [
  {
    status: "demo",
    title: "可体验项目",
    description: "先打开玩一玩，看看是不是刚好适合你。",
  },
  {
    status: "paid",
    title: "可咨询项目",
    description: "模板、成品或轻量工具，适合直接咨询。",
  },
  {
    status: "custom",
    title: "接定制项目",
    description: "有相似需求，可以找创作者聊聊改法。",
  },
];

export function StatusEntryGrid({ projects }: StatusEntryGridProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {statusItems.map((item) => {
        const matchingProjects = projects.filter((project) => project.status === item.status);

        return (
          <Link
            key={item.status}
            href="/discover"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-5 text-white shadow-sm shadow-slate-200 transition-opacity hover:opacity-95"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-cyan-200">
                  {getProjectStatusLabel(item.status)}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              </div>
              <span className="rounded-full bg-white/12 px-2.5 py-1 text-xs font-semibold text-cyan-50">
                {matchingProjects.length}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-200">{item.description}</p>
          </Link>
        );
      })}
    </section>
  );
}
