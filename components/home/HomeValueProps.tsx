"use client";

import { motion, useReducedMotion } from "motion/react";

import { RevealSection } from "@/components/ui/RevealSection";

const valueProps = [
  {
    label: "01",
    icon: "✦",
    title: "想法",
    text: "每个人都有自己的小麻烦",
  },
  {
    label: "02",
    icon: "⌁",
    title: "Agent",
    text: "AI Agent 可以帮你把想法做成产品",
  },
  {
    label: "03",
    icon: "◌",
    title: "广场",
    text: "作品可以被展示、发现和交流",
  },
];

export function HomeValueProps() {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="w-full space-y-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-black text-cyan-700">为什么是现在</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
          为什么普通人也能做小工具？
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {valueProps.map((item) => (
          <motion.article
            key={item.title}
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(14,165,233,0.13)]"
          >
            <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-cyan-200/25 blur-2xl transition duration-200 group-hover:bg-violet-200/35" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-700">
                  {item.label}
                </span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-white to-violet-100 text-2xl font-black text-slate-950 shadow-sm">
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-auto text-4xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </RevealSection>
  );
}
