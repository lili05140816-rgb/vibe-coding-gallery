export function SubmitGuidelines() {
  const guidelines = [
    "作品必须是你有权展示的项目。",
    "不要提交侵权、灰产、刷量、自动私信、批量注册、攻击测试等高风险工具。",
    "如果项目可咨询或接定制，请确保你能提供基本说明和后续沟通。",
    "第一阶段所有作品会人工审核后上架。",
  ];

  return (
    <section className="rounded-[2rem] border border-cyan-100 bg-white/90 p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-cyan-700">提交前请确认</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        让作品安全、真实地被看见
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        这里欢迎学习工具、生活工具、宠物助手、健身记录、校园工具和求职工具等轻量项目。
      </p>
      <div className="mt-5 grid gap-3">
        {guidelines.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
