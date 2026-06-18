"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useRef } from "react";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Developer, Project } from "@/types/project";

type HomeCollectedWorksProps = {
  developers: Developer[];
  projects: Project[];
};

export function HomeCollectedWorks({
  developers,
  projects,
}: HomeCollectedWorksProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const developersById = useMemo(
    () => new Map(developers.map((developer) => [developer.id, developer])),
    [developers],
  );

  function scrollWorks(direction: "prev" | "next") {
    scrollerRef.current?.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative w-full overflow-hidden rounded-[2.75rem] bg-slate-950 px-5 py-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-12 size-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-950">
              正在被看见
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              正在被收藏的小作品
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              这些不是大公司的产品，而是普通人用 AI Agent 做出来的小工具。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollWorks("prev")}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
              aria-label="向左滚动作品"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollWorks("next")}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
              aria-label="向右滚动作品"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
        >
          {projects.map((project, index) => {
            const developer = developersById.get(project.developerId);

            return (
              <motion.div
                key={project.id}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="min-w-[17.5rem] snap-start sm:min-w-[19rem]"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group flex min-h-[250px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur transition duration-200 hover:border-cyan-300/45 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-cyan-100">
                      {project.category}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200/80">
                    Vibe #{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">
                    {project.subtitle}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs font-bold text-slate-300">
                    <span className="truncate">
                      {developer?.name ?? "匿名创作者"}
                    </span>
                    <span className="shrink-0 text-slate-400">
                      {project.views} 浏览 / {project.likes} 收藏
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="relative flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10 sm:w-72">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-yellow-300 via-cyan-300 to-violet-300" />
          </div>
          <Link
            href="/discover"
            className="group inline-flex w-fit items-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-[0_18px_42px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
          >
            查看全部作品
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
