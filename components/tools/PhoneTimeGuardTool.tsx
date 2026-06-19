"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const focusDuration = 25 * 60;

function parseHours(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
}

function formatHours(value: number) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const rounded = Math.round(safeValue * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function formatTimer(seconds: number) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(seconds, 0) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const restSeconds = safeSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

const scenarioCards = [
  {
    title: "睡前 30 分钟",
    text: "放下手机，让大脑慢慢降速。",
  },
  {
    title: "学习前 25 分钟",
    text: "先完成一轮专注，再决定要不要看手机。",
  },
  {
    title: "起床后 15 分钟",
    text: "不急着刷信息流，先把今天的节奏拿回来。",
  },
];

export function PhoneTimeGuardTool() {
  const [targetHours, setTargetHours] = useState("2");
  const [usedHours, setUsedHours] = useState("0");
  const [remainingSeconds, setRemainingSeconds] = useState(focusDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const target = parseHours(targetHours);
  const used = parseHours(usedHours);
  const difference = target - used;
  const progress = target > 0 ? Math.min((used / target) * 100, 100) : 0;

  const usageState = useMemo(() => {
    if (Math.abs(difference) < 0.001) {
      return {
        tone: "border-amber-200 bg-amber-50 text-amber-800",
        progressTone: "from-amber-300 to-yellow-300",
        label: "已达目标",
        message: "已经达到今日目标，建议放下手机休息一下。",
        advice: "已经达到今日目标。建议现在切换到阅读、运动或学习。",
        challenge: "需要调整",
      };
    }

    if (difference > 0) {
      return {
        tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
        progressTone: "from-cyan-300 to-emerald-300",
        label: "状态不错",
        message: `今天还剩 ${formatHours(difference)} 小时可用，继续保持。`,
        advice:
          "今天状态不错，可以继续保持。建议把剩余时间留给真正重要的事情。",
        challenge: "进行中",
      };
    }

    return {
      tone: "border-rose-200 bg-rose-50 text-rose-800",
      progressTone: "from-rose-300 to-orange-300",
      label: "已经超时",
      message: `已经超出 ${formatHours(Math.abs(difference))} 小时，建议进入专注模式。`,
      advice:
        "已经超出目标。建议立即开始一轮 25 分钟专注，把注意力拉回来。",
      challenge: "需要调整",
    };
  }, [difference]);

  const timerStatus = useMemo(() => {
    if (remainingSeconds === 0) {
      return "这次专注完成了";
    }

    if (isRunning) {
      return "正在专注中，先别碰手机";
    }

    if (hasStarted) {
      return "已经暂停，可以继续";
    }

    return "准备好后开始一轮轻量专注";
  }, [hasStarted, isRunning, remainingSeconds]);

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
      setHasStarted(true);
      setIsRunning(true);
    }
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setHasStarted(false);
    setRemainingSeconds(focusDuration);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_0%,rgba(125,211,252,0.24),transparent_26rem),radial-gradient(circle_at_90%_4%,rgba(196,181,253,0.22),transparent_28rem),linear-gradient(180deg,#f8fafc_0%,#ecfeff_46%,#f8fafc_100%)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="flex flex-col gap-3 rounded-[1.75rem] border border-white/80 bg-white/78 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
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
          <span className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-black text-cyan-700">
            前端体验工具
          </span>
        </nav>

        <section className="mt-6 grid gap-6 rounded-[2.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_24px_90px_rgba(15,23,42,0.1)] backdrop-blur sm:p-8 lg:grid-cols-[1fr_25rem] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-cyan-700">
              手机使用时长守门员
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              今天，少刷一点手机。
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              输入你今天的手机使用目标和已使用时间，系统会帮你判断是否超时，并给出下一步行动建议。
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-300">今日摘要</p>
              <span className={`rounded-full border px-3 py-1 text-xs font-black ${usageState.tone}`}>
                {usageState.label}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <p className="text-xs text-slate-400">今日目标</p>
                <p className="mt-2 text-xl font-black">{formatHours(target)}h</p>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <p className="text-xs text-slate-400">已使用</p>
                <p className="mt-2 text-xl font-black">{formatHours(used)}h</p>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <p className="text-xs text-slate-400">剩余</p>
                <p className="mt-2 text-xl font-black">
                  {difference > 0 ? `${formatHours(difference)}h` : "0h"}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              {usageState.message}
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black text-cyan-700">核心工具</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    今日使用记录
                  </h2>
                </div>
                <span className={`w-fit rounded-full border px-3 py-1.5 text-xs font-black ${usageState.tone}`}>
                  {usageState.label}
                </span>
              </div>

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
                    className={`h-full rounded-full bg-gradient-to-r ${usageState.progressTone} transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-4 text-lg font-black">{usageState.message}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
              <p className="text-sm font-black text-cyan-700">今日行动建议</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                下一步怎么做？
              </h2>
              <p className="mt-4 rounded-3xl bg-gradient-to-br from-cyan-50 to-violet-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700">
                {usageState.advice}
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-cyan-100 bg-white/95 p-5 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-black text-cyan-700">25 分钟专注区</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              把注意力拉回来
            </h2>
            <div className="mt-5 rounded-[2rem] bg-slate-950 p-6 text-center text-white">
              <p className="text-6xl font-black tabular-nums tracking-tight">
                {formatTimer(remainingSeconds)}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-300">
                {remainingSeconds === 0
                  ? "这次专注完成了，休息一下吧。"
                  : timerStatus}
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

        <section className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black text-cyan-700">7 天挑战展示</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              7 天少刷手机挑战
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {Array.from({ length: 7 }, (_, index) => {
                const isFirstDay = index === 0;

                return (
                  <div
                    key={index}
                    className={`rounded-3xl border px-3 py-4 text-center ${
                      isFirstDay
                        ? usageState.tone
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    <p className="text-xs font-black">Day {index + 1}</p>
                    <p className="mt-2 text-xs font-semibold">
                      {isFirstDay ? usageState.challenge : "待开始"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black text-cyan-700">使用场景</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              什么时候打开它？
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {scenarioCards.map((scenario) => (
                <div
                  key={scenario.title}
                  className="rounded-3xl bg-gradient-to-br from-slate-50 to-cyan-50 p-4"
                >
                  <h3 className="font-black text-slate-950">{scenario.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {scenario.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 mb-10 rounded-[2rem] border border-white/80 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-cyan-200">回到作品广场</p>
              <h2 className="mt-2 text-3xl font-black">先完成一小步就好</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/phone-time-guard"
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-cyan-50"
              >
                返回项目详情
              </Link>
              <Link
                href="/discover"
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-white/10"
              >
                发现更多作品
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
