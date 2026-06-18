import Link from "next/link";

import { DeveloperContactCard } from "@/components/developers/DeveloperContactCard";
import { DeveloperProfileHeader } from "@/components/developers/DeveloperProfileHeader";
import { DeveloperStatsCard } from "@/components/developers/DeveloperStatsCard";
import { DeveloperWorksSection } from "@/components/developers/DeveloperWorksSection";
import { PageContainer } from "@/components/layout/PageContainer";
import { developers, getDeveloperById, projects } from "@/data/mock";

type DeveloperPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return developers.map((developer) => ({
    id: developer.id,
  }));
}

export default async function DeveloperPage({ params }: DeveloperPageProps) {
  const { id } = await params;
  const developer = getDeveloperById(id);

  if (!developer) {
    return (
      <PageContainer className="flex min-h-[70vh] items-center justify-center">
        <section className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold text-cyan-700">开发者不存在</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            没有找到这个开发者
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            这个开发者资料可能还没有上架，或者链接已经失效。
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

  const developerProjects = projects.filter(
    (project) => project.developerId === developer.id,
  );
  const actualViews = developerProjects.reduce(
    (sum, project) => sum + project.views,
    0,
  );

  return (
    <PageContainer className="space-y-6">
      <DeveloperProfileHeader
        developer={developer}
        worksCount={developerProjects.length}
      />

      <div className="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <DeveloperContactCard developer={developer} />
          <DeveloperStatsCard
            developer={developer}
            worksCount={developerProjects.length}
            views={actualViews}
          />
        </aside>

        <DeveloperWorksSection
          developer={developer}
          projects={developerProjects}
        />
      </div>
    </PageContainer>
  );
}
