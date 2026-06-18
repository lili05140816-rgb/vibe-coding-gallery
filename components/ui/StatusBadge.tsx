import type { ProjectStatus } from "@/types/project";

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    className: string;
  }
> = {
  showcase: {
    label: "仅展示",
    className: "border-slate-200 bg-slate-50 text-slate-700",
  },
  demo: {
    label: "可体验",
    className: "border-cyan-200 bg-cyan-50 text-cyan-700",
  },
  paid: {
    label: "可咨询",
    className: "border-amber-200 bg-amber-50 text-amber-700",
  },
  custom: {
    label: "接定制",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  opensource: {
    label: "开源",
    className: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
};

type StatusBadgeProps = {
  status: ProjectStatus;
};

export function getProjectStatusLabel(status: ProjectStatus) {
  return statusConfig[status].label;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}
