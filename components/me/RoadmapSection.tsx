const roadmapItems = [
  "开发者账号系统",
  "作品真实提交和审核",
  "收藏和点赞",
  "搜索功能",
  "作品榜单",
  "开发者主页增强",
  "项目咨询入口",
  "定制合作撮合",
];

export function RoadmapSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-cyan-700">后续规划</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        根据真实反馈逐步升级
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {roadmapItems.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50 px-4 py-4 text-sm font-semibold text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
