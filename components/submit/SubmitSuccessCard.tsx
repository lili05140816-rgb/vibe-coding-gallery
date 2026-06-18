import Link from "next/link";

type SubmitSuccessCardProps = {
  onContinue: () => void;
};

export function SubmitSuccessCard({ onContinue }: SubmitSuccessCardProps) {
  return (
    <section className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 text-center shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-emerald-700">提交成功</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        你的作品信息已进入人工审核队列
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
        审核通过后会展示在作品广场。当前只是前端模拟提交，没有写入数据库。
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:text-cyan-700"
        >
          继续提交
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}
