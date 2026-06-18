const reviewRules = [
  "作品必须是你有权展示的项目。",
  "项目需要有明确使用场景。",
  "项目介绍不能虚假夸大。",
  "可咨询或接定制项目需要说明服务边界。",
  "第一阶段所有作品人工审核后上架。",
];

const forbiddenItems = [
  "侵权项目",
  "灰产项目",
  "刷量工具",
  "养号工具",
  "批量注册工具",
  "自动私信引流工具",
  "爬虫攻击工具",
  "绕过平台规则的工具",
  "违法违规或可能伤害他人的工具",
];

export function ReviewRules() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-cyan-700">审核规则</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          先保证真实、清楚、可理解
        </h2>
        <div className="mt-5 grid gap-3">
          {reviewRules.map((rule) => (
            <p
              key={rule}
              className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
            >
              {rule}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-rose-100 bg-white/90 p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-rose-700">禁止提交的内容</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          不收高风险和伤害性项目
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {forbiddenItems.map((item) => (
            <span
              key={item}
              className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
