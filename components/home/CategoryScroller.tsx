"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Category, Developer, Project } from "@/types/project";

type CategoryScrollerProps = {
  categories: Category[];
  developers: Developer[];
  projects: Project[];
};

const categoryMarks: Record<string, string> = {
  自律戒瘾: "戒",
  学习成长: "学",
  健身健康: "动",
  情绪记录: "心",
  记账消费: "账",
  校园生活: "校",
  宠物助手: "宠",
  兴趣娱乐: "玩",
  人际关系: "友",
  求职发展: "职",
};

export function CategoryScroller({
  categories,
  developers,
  projects,
}: CategoryScrollerProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories[0]?.id ?? "",
  );

  const developersById = useMemo(
    () => new Map(developers.map((developer) => [developer.id, developer])),
    [developers],
  );

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ??
    categories[0];

  const previewProjects = useMemo(() => {
    if (!activeCategory) {
      return [];
    }

    return projects
      .filter((project) => project.category === activeCategory.name)
      .slice(0, 3);
  }, [activeCategory, projects]);

  if (!activeCategory) {
    return null;
  }

  return (
    <section id="category-preview" className="space-y-5 scroll-mt-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-700">分类探索</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
            从一个生活场景开始逛
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-slate-600">
          点一下分类，先在首页看 3 个代表作品；想继续逛，再进入发现页。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => {
          const isActive = category.id === activeCategory.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategoryId(category.id)}
              className={`group min-w-0 rounded-[1.4rem] border p-3.5 text-left shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 sm:p-4 ${
                isActive
                  ? "border-cyan-300 bg-cyan-50/90 text-cyan-950 shadow-[0_18px_45px_rgba(14,165,233,0.14)]"
                  : "border-white/80 bg-white/70 text-slate-700 hover:border-cyan-200 hover:bg-white/90 hover:shadow-[0_18px_42px_rgba(14,165,233,0.1)]"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                    isActive
                      ? "bg-white text-cyan-700 shadow-sm"
                      : "bg-gradient-to-br from-cyan-100 via-white to-violet-100 text-slate-800"
                  }`}
                >
                  {categoryMarks[category.name] ?? category.name.slice(0, 1)}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">
                    {category.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-semibold ${
                      isActive ? "text-cyan-700" : "text-slate-500"
                    }`}
                  >
                    {category.count} 个作品
                  </p>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-500">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/76 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-cyan-700">当前预览</p>
            <h3 className="mt-1 text-2xl font-black text-slate-950">
              {activeCategory.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {activeCategory.description}
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-slate-950 px-3 py-1.5 text-sm font-bold text-white shadow-sm">
            {activeCategory.count} 个作品
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {previewProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              developer={developersById.get(project.developerId)}
            />
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href={`/discover?category=${encodeURIComponent(activeCategory.name)}`}
            className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-800 transition-colors hover:border-cyan-300 hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            查看更多「{activeCategory.name}」作品
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
