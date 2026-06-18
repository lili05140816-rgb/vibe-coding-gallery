import Link from "next/link";

const steps = [
  "准备项目名称和一句话介绍",
  "说明适合谁使用",
  "写清楚核心功能",
  "提供演示链接或截图说明",
  "填写联系方式",
  "平台人工审核后展示",
];

export function SubmitSteps() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-cyan-700">如何提交作品</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        用一份清楚的说明帮助别人理解你的项目
      </h2>
      <div className="mt-5 grid gap-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-slate-700">{step}</p>
          </div>
        ))}
      </div>
      <Link
        href="/submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
      >
        提交我的作品
      </Link>
    </section>
  );
}
