"use client";

import { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Category, Developer, Project } from "@/types/project";

type DiscoverCategoryBrowserProps = {
  categories: Category[];
  developers: Developer[];
  initialCategoryName?: string;
  projects: Project[];
};

export function DiscoverCategoryBrowser({
  categories,
  developers,
  initialCategoryName,
  projects,
}: DiscoverCategoryBrowserProps) {
  const initialCategoryId = useMemo(
    () =>
      categories.find((category) => category.name === initialCategoryName)?.id ??
      categories[0]?.id ??
      "",
    [categories, initialCategoryName],
  );
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId);

  useEffect(() => {
    setActiveCategoryId(initialCategoryId);
  }, [initialCategoryId]);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  const developersById = useMemo(
    () => new Map(developers.map((developer) => [developer.id, developer])),
    [developers],
  );

  const filteredProjects = useMemo(() => {
    if (!activeCategory) {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory.name);
  }, [activeCategory, projects]);

  return (
    <section className="grid min-w-0 gap-5 lg:grid-cols-[13.75rem_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
        <div className="-mx-4 flex max-w-full gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:max-h-[calc(100vh-7rem)] lg:gap-2 lg:overflow-y-auto lg:pb-0">
          {categories.map((category) => {
            const isActive = category.id === activeCategory?.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`min-w-fit rounded-full border px-4 py-2.5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 lg:flex lg:min-w-0 lg:items-center lg:justify-between lg:rounded-2xl lg:px-3.5 lg:py-3 ${
                  isActive
                    ? "border-cyan-300 bg-cyan-50 text-cyan-950 shadow-sm"
                    : "border-slate-200 bg-white/78 text-slate-600 hover:border-cyan-200 hover:bg-white"
                }`}
              >
                <span className="whitespace-nowrap text-sm font-semibold">
                  {category.name}
                </span>
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold lg:ml-0 ${
                    isActive ? "bg-white text-cyan-700" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="min-w-0 space-y-5">
        {activeCategory ? (
          <div className="rounded-3xl border border-slate-200 bg-white/88 p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-700">当前分类</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                  {activeCategory.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {activeCategory.description}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white">
                {filteredProjects.length} 个作品
              </span>
            </div>
          </div>
        ) : null}

        {filteredProjects.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                developer={developersById.get(project.developerId)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-500">
            这个分类暂时还没有作品，稍后再来看看。
          </div>
        )}
      </div>
    </section>
  );
}
