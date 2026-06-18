import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectActionPanel } from "@/components/projects/ProjectActionPanel";
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent";
import { ProjectDetailHeader } from "@/components/projects/ProjectDetailHeader";
import { ProjectDeveloperCard } from "@/components/projects/ProjectDeveloperCard";
import { ProjectMediaPanel } from "@/components/projects/ProjectMediaPanel";
import { getDeveloperById, getProjectById, projects } from "@/data/mock";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return (
      <PageContainer className="flex min-h-[70vh] items-center justify-center">
        <section className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold text-cyan-700">作品不存在</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            没有找到这个作品
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            这个作品可能还没有上架，或者链接已经失效。
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm"
          >
            返回首页
          </Link>
        </section>
      </PageContainer>
    );
  }

  const developer = getDeveloperById(project.developerId);

  return (
    <PageContainer className="space-y-6">
      <ProjectDetailHeader project={project} />
      <ProjectMediaPanel project={project} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ProjectDetailContent project={project} />

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <ProjectActionPanel project={project} />
          <ProjectDeveloperCard developer={developer} />

          <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">技术栈</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </PageContainer>
  );
}
