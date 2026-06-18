"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Developer, Project } from "@/types/project";

type HomePhoneShowcaseProps = {
  developer?: Developer;
  project: Project;
};

const floatingTags = [
  { label: "自律", className: "left-1 top-8 bg-cyan-100 text-cyan-800" },
  { label: "学习", className: "right-4 top-4 bg-violet-100 text-violet-800" },
  { label: "宠物", className: "left-0 bottom-24 bg-emerald-100 text-emerald-800" },
  { label: "健身", className: "right-2 bottom-28 bg-yellow-100 text-yellow-800" },
  { label: "情绪", className: "left-1/2 bottom-4 bg-rose-100 text-rose-800" },
];

export function HomePhoneShowcase({
  developer,
  project,
}: HomePhoneShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden rounded-[2.75rem] border border-white/80 bg-[linear-gradient(135deg,#ffffff_0%,#ecfeff_42%,#f5f3ff_100%)] p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute -right-16 top-20 size-64 rounded-full bg-violet-200/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-60 rounded-full bg-yellow-200/35 blur-3xl" />

      <div className="relative z-10 grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-black text-cyan-700">手机里的小作品</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            从一个小需求开始
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            一个提醒、一个记录、一个打卡，也可以成为一个真正的小作品。
          </p>
          <Link
            href="/discover"
            className="group mt-7 inline-flex items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_42px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            看看作品
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="relative min-h-[430px] lg:min-h-[560px]">
          <div className="absolute right-5 top-16 hidden h-28 w-28 rotate-12 rounded-[2rem] bg-yellow-300/70 lg:block" />
          <div className="absolute left-16 bottom-16 hidden h-20 w-36 -rotate-6 rounded-full bg-cyan-300/45 lg:block" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-[250px] rotate-[-5deg] rounded-[2.4rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-[0_36px_90px_rgba(15,23,42,0.28)] sm:w-[300px] lg:w-[330px]"
          >
            <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-slate-700" />
            <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(180deg,#f8fafc_0%,#ecfeff_55%,#f5f3ff_100%)] p-4 pt-8">
              <div className="rounded-[1.5rem] border border-white/90 bg-white/75 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {project.subtitle}
                </p>
                <div className="mt-5 space-y-3">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="grid size-7 place-items-center rounded-full bg-slate-950 text-xs font-black text-white">
                        {index + 1}
                      </span>
                      <span className="line-clamp-1 text-xs font-bold text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
                  <p className="text-xs font-bold text-slate-300">今天的提醒</p>
                  <p className="mt-2 text-lg font-black">少刷 30 分钟</p>
                  <div className="mt-4 h-2 rounded-full bg-white/15">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-yellow-300" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-bold text-slate-500">
                  by {developer?.name ?? "匿名创作者"}
                </p>
              </div>
            </div>
          </motion.div>

          {floatingTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, index % 2 === 0 ? -8 : 8, 0] }
              }
              transition={{
                duration: 5.8 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
              className={`absolute hidden size-16 place-items-center rounded-full border border-white/85 text-sm font-black shadow-[0_18px_42px_rgba(15,23,42,0.12)] backdrop-blur sm:grid ${tag.className}`}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
