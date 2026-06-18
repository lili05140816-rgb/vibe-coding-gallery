import type { Developer } from "@/types/project";

type DeveloperContactCardProps = {
  developer: Developer;
};

export function DeveloperContactCard({ developer }: DeveloperContactCardProps) {
  const contact = developer.contact || "暂未公开联系方式";

  return (
    <section className="rounded-[2rem] border border-cyan-100 bg-white/95 p-5 shadow-sm">
      <p className="text-sm font-semibold text-cyan-700">联系方式</p>
      <h2 className="mt-2 text-xl font-bold text-slate-950">联系开发者</h2>
      <p className="mt-3 break-all rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        {contact}
      </p>
      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-sm"
      >
        联系开发者
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-400">
        当前仅展示联系方式，不提供真实私信或履约闭环。
      </p>
    </section>
  );
}
