"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { RevealSection } from "@/components/ui/RevealSection";
import type { Category } from "@/types/project";

type HomeSceneUniverseProps = {
  categories: Category[];
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

const bentoLayout: Record<string, string> = {
  自律戒瘾: "lg:col-span-4",
  学习成长: "lg:col-span-2",
  健身健康: "lg:col-span-2",
  情绪记录: "lg:col-span-4",
  记账消费: "lg:col-span-2",
  校园生活: "lg:col-span-2",
  宠物助手: "lg:col-span-4",
  兴趣娱乐: "lg:col-span-2",
  人际关系: "lg:col-span-2",
  求职发展: "md:col-span-2 lg:col-span-12",
};

const cardTones = [
  "bg-[linear-gradient(135deg,rgba(236,254,255,0.92),rgba(255,255,255,0.76))]",
  "bg-[linear-gradient(135deg,rgba(245,243,255,0.92),rgba(255,255,255,0.76))]",
  "bg-[linear-gradient(135deg,rgba(240,253,250,0.92),rgba(255,255,255,0.76))]",
  "bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.76))]",
];

export function HomeSceneUniverse({ categories }: HomeSceneUniverseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/45 p-5 shadow-[0_26px_90px_rgba(15,23,42,0.1)] backdrop-blur sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute -left-24 top-10 size-56 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 size-64 rounded-full bg-violet-200/35 blur-3xl" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-black text-cyan-700">场景宇宙</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            从生活场景开始探索
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">
          首页只给你一张地图。真正的作品浏览，交给发现页慢慢逛。
        </p>
      </div>

      <div className="relative z-10 mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`h-full ${bentoLayout[category.name] ?? "lg:col-span-3"}`}
          >
            <Link
              href={`/discover?category=${encodeURIComponent(category.name)}`}
              className={`group relative flex min-h-36 overflow-hidden rounded-[1.75rem] border border-white/80 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(14,165,233,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 sm:min-h-40 lg:min-h-[132px] ${cardTones[index % cardTones.length]}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-white/55 blur-xl transition duration-200 group-hover:bg-cyan-100/70" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white/42 to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative flex h-full w-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/85 text-base font-black text-slate-950 shadow-sm">
                    {categoryMarks[category.name] ?? category.name.slice(0, 1)}
                  </span>
                  <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-black text-white">
                    {category.count}
                  </span>
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="whitespace-nowrap text-lg font-black text-slate-950 lg:text-xl">
                    {category.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
                    {category.description}
                  </p>
                  <span className="mt-auto pt-3 text-xs font-black text-cyan-700 transition group-hover:translate-x-1">
                    进入场景
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}
