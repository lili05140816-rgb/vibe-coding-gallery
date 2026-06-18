"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const floatingWorks = [
  {
    title: "戒短视频",
    text: "把冲动变成一次提醒",
    tone: "from-cyan-100 to-white",
    rotate: "-7deg",
    float: 7,
    duration: 5.8,
  },
  {
    title: "背单词",
    text: "每天 20 个词",
    tone: "from-violet-100 to-fuchsia-50",
    rotate: "6deg",
    float: 5,
    duration: 6.4,
  },
  {
    title: "宠物提醒",
    text: "疫苗、喂食不再忘",
    tone: "from-emerald-100 to-cyan-50",
    rotate: "-4deg",
    float: 6,
    duration: 7,
  },
  {
    title: "健身记录",
    text: "把变化留在今天",
    tone: "from-yellow-100 to-orange-50",
    rotate: "4deg",
    float: 4,
    duration: 6.1,
  },
  {
    title: "情绪日记",
    text: "给心情一个出口",
    tone: "from-rose-100 to-violet-50",
    rotate: "-3deg",
    float: 6,
    duration: 6.8,
  },
  {
    title: "记账消费",
    text: "让生活费有去处",
    tone: "from-blue-100 to-cyan-50",
    rotate: "5deg",
    float: 5,
    duration: 7.2,
  },
  {
    title: "校园生活",
    text: "课程、作业和考试",
    tone: "from-lime-100 to-yellow-50",
    rotate: "-5deg",
    float: 4,
    duration: 6.7,
  },
];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[72vh] w-full overflow-hidden rounded-[2.75rem] border border-white/80 bg-[radial-gradient(circle_at_15%_16%,rgba(250,204,21,0.22),transparent_16rem),radial-gradient(circle_at_85%_12%,rgba(196,181,253,0.48),transparent_26rem),radial-gradient(circle_at_74%_80%,rgba(103,232,249,0.34),transparent_30rem),linear-gradient(135deg,#ffffff_0%,#f8fafc_48%,#f5f3ff_100%)] p-5 shadow-[0_32px_110px_rgba(15,23,42,0.15)] sm:p-8 lg:h-full lg:p-10">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[7rem] font-black leading-none text-slate-950/[0.035] lg:block">
        AI TOOLS / VIBE CODING / LIFE IDEAS
      </div>
      <div className="pointer-events-none absolute left-10 top-24 hidden h-24 w-44 -rotate-6 rounded-[2rem] bg-yellow-200/70 lg:block" />
      <div className="pointer-events-none absolute right-16 bottom-20 hidden h-28 w-28 rotate-12 rounded-[2rem] bg-cyan-200/55 lg:block" />
      <motion.div
        className="pointer-events-none absolute -left-28 top-20 size-80 rounded-full bg-cyan-200/45 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-violet-300/35 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 size-72 rounded-full bg-emerald-200/28 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 10, 0], y: [0, 8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 grid w-full gap-8 self-center lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="animate-fade-up max-w-3xl space-y-6">
          <p className="inline-flex rounded-full border border-white/80 bg-white/70 px-3.5 py-1.5 text-sm font-bold text-cyan-700 shadow-sm backdrop-blur">
            Vibe Coding 作品广场
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight tracking-normal text-slate-950 text-pretty sm:text-6xl lg:text-7xl">
              把生活里的小想法
              <span className="block">做成 AI 小工具</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              从戒短视频、背单词、健身记录，到宠物提醒和校园生活，这里展示普通人用 AI Agent 做出来的小作品。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/discover"
                className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_42px_rgba(15,23,42,0.24)] transition duration-200 hover:bg-slate-800 hover:shadow-[0_22px_52px_rgba(15,23,42,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                进入作品广场
                <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/submit"
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/78 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition duration-200 hover:border-cyan-200 hover:bg-cyan-50/70 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                提交我的作品
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative min-h-[420px] rounded-[2.25rem] border border-white/65 bg-white/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur lg:min-h-[560px] lg:p-6">
          <div className="absolute left-1/2 top-1/2 hidden size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/20 lg:block" />
          <div className="absolute bottom-10 right-8 hidden size-28 rounded-full border border-cyan-100/80 bg-cyan-50/40 lg:block" />
          <div className="grid gap-3 sm:grid-cols-2 lg:block">
            {floatingWorks.map((item, index) => (
              <motion.div
                key={item.title}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -item.float, 0],
                        rotate: [
                          item.rotate,
                          `${Number.parseFloat(item.rotate) + 0.6}deg`,
                          item.rotate,
                        ],
                      }
                }
                whileHover={reduceMotion ? undefined : { scale: 1.035, y: -8 }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
                className={`rounded-[1.75rem] border border-white/75 bg-gradient-to-br ${item.tone} p-4 shadow-[0_22px_54px_rgba(15,23,42,0.13)] backdrop-blur lg:absolute lg:w-52 ${
                  index === 0
                    ? "lg:left-2 lg:top-8"
                    : index === 1
                      ? "lg:right-4 lg:top-8"
                      : index === 2
                        ? "lg:left-24 lg:top-48"
                        : index === 3
                          ? "lg:right-12 lg:top-56"
                          : index === 4
                            ? "lg:left-8 lg:bottom-10"
                            : index === 5
                              ? "lg:left-1/2 lg:top-20 lg:-translate-x-1/2"
                              : "lg:right-24 lg:bottom-8"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="size-2.5 rounded-full bg-slate-900/70" />
                  <span className="rounded-full bg-white/70 px-2 py-1 text-[11px] font-black text-slate-500">
                    AI 小作品
                  </span>
                </div>
                <p className="text-lg font-black text-slate-950">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
