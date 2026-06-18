const workTypes = [
  "自律戒瘾工具",
  "背单词工具",
  "健身记录工具",
  "宠物提醒工具",
  "校园生活工具",
  "情绪日记工具",
  "记账消费工具",
  "求职规划工具",
  "其他生活小工具",
];

export function AboutPlatformSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-cyan-700">平台是什么</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        给普通创作者一个展示小项目的地方
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Vibe Coding 作品广场用于展示普通人、大学生、独立开发者、AI 小工具创作者用
        Codex、Claude Code、Cursor、Trae、Lovable 等工具做出来的作品。
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {workTypes.map((type) => (
          <span
            key={type}
            className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700"
          >
            {type}
          </span>
        ))}
      </div>
    </section>
  );
}
