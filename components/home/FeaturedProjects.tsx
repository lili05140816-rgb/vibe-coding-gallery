"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { RevealSection } from "@/components/ui/RevealSection";
import type { Developer, Project } from "@/types/project";

type FeaturedProjectsProps = {
  developersById: Map<string, Developer>;
  projects: Project[];
};

export function FeaturedProjects({
  developersById,
  projects,
}: FeaturedProjectsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection
      id="today-inspiration"
      className="w-full scroll-mt-6 space-y-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-700">今日灵感</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            今天先看这 3 个小作品
          </h2>
        </div>
        <Link
          href="/discover"
          className="text-sm font-bold text-slate-500 transition-colors hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
        >
          去发现页看全部
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => {
          const developer = developersById.get(project.developerId);

          return (
          <motion.div
            key={project.id}
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.012 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`h-full ${index === 1 ? "md:mt-10" : ""}`}
          >
          <Link
            href={`/projects/${project.id}`}
            className="group relative flex min-h-[360px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/76 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.09)] backdrop-blur transition duration-200 hover:border-cyan-200 hover:shadow-[0_30px_80px_rgba(14,165,233,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-cyan-200/30 blur-3xl transition group-hover:bg-violet-200/40" />
            <div className="relative flex w-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black text-cyan-700">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full transition duration-200 group-hover:ring-4 group-hover:ring-cyan-100">
                  <StatusBadge status={project.status} />
                </span>
              </div>

              <p className="mt-4 line-clamp-3 text-sm font-semibold leading-7 text-slate-600">
                {project.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-5">
                <p className="text-sm font-bold text-slate-950">
                  {developer?.name ?? "匿名创作者"}
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  {project.views.toLocaleString("zh-CN")} 浏览 ·{" "}
                  {project.likes.toLocaleString("zh-CN")} 收藏
                </p>
                <span className="mt-5 inline-flex text-sm font-black text-cyan-700 transition group-hover:translate-x-1">
                  查看作品
                </span>
              </div>
            </div>
          </Link>
          </motion.div>
          );
        })}
      </div>
    </RevealSection>
  );
}
