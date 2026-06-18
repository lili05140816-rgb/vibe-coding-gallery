import Link from "next/link";

type AboutHeroProps = {
  worksCount: number;
  categoriesCount: number;
  developersCount: number;
};

export function AboutHero({
  worksCount,
  categoriesCount,
  developersCount,
}: AboutHeroProps) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-sm sm:p-8">
      <p className="text-sm font-semibold text-cyan-700">About</p>
      <div className="mt-3 max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          关于 Vibe Coding 作品广场
        </h1>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          这是一个展示普通人用 AI Agent 做出来的小工具、小项目和生活应用的作品广场。
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">当前作品</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {worksCount}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">生活分类</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {categoriesCount}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">创作者</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {developersCount}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/submit"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
        >
          提交我的作品
        </Link>
        <Link
          href="/discover"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:text-cyan-700"
        >
          浏览分类
        </Link>
      </div>
    </section>
  );
}
