import { PageContainer } from "@/components/layout/PageContainer";
import { SubmitGuidelines } from "@/components/submit/SubmitGuidelines";
import { SubmitProjectForm } from "@/components/submit/SubmitProjectForm";
import { categories } from "@/data/mock";

export default function SubmitPage() {
  return (
    <PageContainer className="space-y-6">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-cyan-700">Submit</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          提交你的 Vibe Coding 作品
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          学习工具、生活工具、宠物助手、健身记录、校园工具、求职工具都可以提交。
          第一阶段采用人工审核上架，不接真实数据库。
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <SubmitGuidelines />
        </aside>
        <SubmitProjectForm categories={categories} />
      </div>
    </PageContainer>
  );
}
