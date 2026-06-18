const roles = [
  {
    title: "想展示作品的 vibe coding 开发者",
    description: "把自己用 AI Agent 做出来的小项目整理成清晰作品页。",
  },
  {
    title: "想找生活小工具的普通用户",
    description: "从自律、学习、健身、记账、宠物、校园和求职场景里找灵感。",
  },
  {
    title: "想获得灵感的新手开发者",
    description: "看看普通人如何从自己的生活痛点出发做出可用工具。",
  },
  {
    title: "想找可定制项目的需求方",
    description: "先了解项目能力和开发者方向，再判断是否适合进一步沟通。",
  },
];

export function UserRoleCards() {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-cyan-700">适合谁</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          浏览者和创作者都能在这里找到位置
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map((role) => (
          <article
            key={role.title}
            className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm"
          >
            <h3 className="text-base font-bold text-slate-950">{role.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {role.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
