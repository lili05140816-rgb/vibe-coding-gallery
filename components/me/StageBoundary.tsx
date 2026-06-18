const boundaries = [
  "暂不支持真实登录",
  "暂不开放履约闭环",
  "暂不支持自动上架",
  "暂不支持私信聊天",
  "暂不支持履约系统",
  "作品提交后暂时是模拟提交",
  "后续会根据真实反馈逐步升级",
];

export function StageBoundary() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-cyan-700">当前阶段说明</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        现在是 MVP 阶段，先把展示体验做好
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {boundaries.map((boundary) => (
          <div
            key={boundary}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
          >
            {boundary}
          </div>
        ))}
      </div>
    </section>
  );
}
