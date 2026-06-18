import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Developer, Project } from "@/types/project";

type ProjectSectionProps = {
  title: string;
  description: string;
  projects: Project[];
  developersById: Map<string, Developer>;
};

export function ProjectSection({
  title,
  description,
  projects,
  developersById,
}: ProjectSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            developer={developersById.get(project.developerId)}
            variant="compact"
          />
        ))}
      </div>
    </section>
  );
}
