import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Developer, Project } from "@/types/project";

type DeveloperWorksSectionProps = {
  developer: Developer;
  projects: Project[];
};

export function DeveloperWorksSection({
  developer,
  projects,
}: DeveloperWorksSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-cyan-700">作品列表</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          {developer.name} 的作品
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          共 {projects.length} 个作品，点击卡片可以查看项目详情。
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              developer={developer}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">
            这个开发者还没有发布作品
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            后续上架作品后，会在这里展示。
          </p>
        </div>
      )}
    </section>
  );
}
