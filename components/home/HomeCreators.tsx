"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { RevealSection } from "@/components/ui/RevealSection";
import type { Developer } from "@/types/project";

type HomeCreatorsProps = {
  developers: Developer[];
};

export function HomeCreators({ developers }: HomeCreatorsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="w-full scroll-mt-6 space-y-6 md:space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-cyan-700">创作者</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
          普通人正在把想法做成作品
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {developers.map((developer) => (
          <motion.div
            key={developer.id}
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full"
          >
          <Link
            href={`/developers/${developer.id}`}
            className="group flex min-h-[260px] flex-col rounded-[2rem] border border-white/80 bg-white/72 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(14,165,233,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 lg:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-white to-violet-100 text-lg font-black text-slate-800 shadow-sm transition duration-200 group-hover:scale-110">
                {developer.name.slice(0, 1)}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-black text-slate-950">
                  {developer.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                  {developer.bio}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {developer.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-cyan-700">
              {developer.worksCount} 个作品
            </p>
            <span className="mt-auto inline-flex w-fit rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition group-hover:-translate-y-0.5 group-hover:bg-slate-800">
              进入开发者主页
              <span className="ml-2 transition group-hover:translate-x-1">→</span>
            </span>
          </Link>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}
