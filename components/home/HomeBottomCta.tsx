"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { RevealSection } from "@/components/ui/RevealSection";

export function HomeBottomCta() {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,#ffffff_0%,#ecfeff_48%,#f5f3ff_100%)] p-7 shadow-[0_28px_90px_rgba(15,23,42,0.1)] sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-violet-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 size-48 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-35" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            你的一个小想法，也可以成为作品
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            不需要做成大产品，先把一个真实的小需求做出来。
          </p>
        </div>
        <motion.div
          whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          <Link
            href="/submit"
            className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_42px_rgba(15,23,42,0.24)] transition duration-200 hover:bg-slate-800 hover:shadow-[0_22px_52px_rgba(15,23,42,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            提交我的作品
            <span className="ml-2 transition duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </RevealSection>
  );
}
