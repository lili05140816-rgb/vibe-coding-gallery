"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const focusDuration = 25 * 60;

function formatHours(value: number) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

export function PhoneTimeGuardTool() {
  const [targetHours, setTargetHours] = useState("2");
  const [usedHours, setUsedHours] = useState("0");
  const [remainingSeconds, setRemainingSeconds] = useState(focusDuration);
  const [isRunning, setIsRunning] = useState(false);

  const target = Math.max(Number(targetHours) || 0, 0);
  const used = Math.max(Number(usedHours) || 0, 0);
  const difference = target - used;
  const progress = target > 0 ? Math.min((used / target) * 100, 100) : 0;

  const usageState = useMemo(() => {
    if (Math.abs(difference) < 0.001) {
      return {
        tone: "border-amber-200 bg-amber-50 text-amber-800",
        label: "已达目标",
        message: "已经达到今日目标，建议放下手机休息一下。",
        advice: "建议切换到阅读、运动或学习。",
      };
    }

    if (difference > 0) {
      return {
        tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
        label: "状态不错",
        message: `今天还剩 ${formatHours(difference)} 小时可用，继续保持。`,
        advice: "今天状态不错，可以继续保持。",
      };
    }

    return {
      tone: "border-rose-200 bg-rose-50 text-rose-800",
      label: "已经超时",
      message: `已经超出 ${formatHours(Math.abs(difference))} 小时，建议进入专注模式。`,
      advice: "建议开启 25 分钟专注倒计时。",
    };
  }, [difference]);

  useEffect(() => {
    if (!isRunning || remainingSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  useEffect(() => {
    if (remainingSeconds === 0) {
      setIsRunning(false);
    }
  }, [remainingSeconds]);

  function handleStart() {
    if (remainingSeconds > 0) {
      setIsRunning(true);
    }
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setRemainingSeconds(focusDuration);
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-5 flex flex-wrap gap-3">
        <Link
          href="/projects/phone-time-guard"
          className="rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-200 hover:text-cyan-700"
        >
          返回项目详情
        </Link>
        <Link
          href="/discover"
          className="rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-200 hover:text-cyan-700"
        >
          返回作品广场
        </Link>
      </div>

      <section className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-[radial-gradient(circle_at_20%_10%,rgba(125,211,252,0.28),transparent_22rem),radial-gradient(circle_at_90%_0%,rgba(196,181,253,0.28),transparent_24rem),linear-gradient(135deg,#ffffff_0%,#ecfeff_52%,#f5f3ff_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] sm:p-8">
        <p className="text-sm font-black text-cyan-700">前端体验工具</p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              手机使用时长守门员
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              一个帮助你记录今日手机使用时间、判断是否超时，并提供 25
              分钟专注倒计时的小工具。
            </p>
          </div>
          <div className={`w-fit rounded-full border px-4 py-2 text-sm font-black ${usageState.tone}`}>
            {usageState.label}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-black text-slate-950">今日使用记录</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                今日目标时长（小时）
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={targetHours}
                  onChange={(event) => setTargetHours(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                  placeholder="例如：2"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                今日已使用时长（小时）
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={usedHours}
                  onChange={(event) => setUsedHours(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                  placeholder="例如：1.5"
                />
              </label>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-300">今日进度</p>
                <p className="text-sm font-black text-cyan-200">
                  {formatHours(used)} / {formatHours(target)} 小时
                </p>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-lg font-black">{usageState.message}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-black text-slate-950">简单建议</h2>
            <p className="mt-3 rounded-3xl bg-gradient-to-br from-cyan-50 to-violet-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700">
              {usageState.advice}
            </p>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-cyan-100 bg-white/95 p-5 shadow-sm sm:p-6">
          <p className="text-sm font-black text-cyan-700">25 分钟专注倒计时</p>
          <div className="mt-5 rounded-[2rem] bg-slate-950 p-6 text-center text-white">
            <p className="text-6xl font-black tabular-nums tracking-tight">
              {formatTimer(remainingSeconds)}
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-300">
              {remainingSeconds === 0
                ? "这次专注完成了，休息一下吧。"
                : isRunning
                  ? "专注进行中，先把手机放远一点。"
                  : "准备好后开始一轮轻量专注。"}
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            <button
              type="button"
              onClick={handleStart}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isRunning || remainingSeconds === 0}
            >
              开始专注
            </button>
            <button
              type="button"
              onClick={handlePause}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-700"
            >
              暂停
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
            >
              重置
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
