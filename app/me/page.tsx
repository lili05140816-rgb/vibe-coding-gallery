import { PageContainer } from "@/components/layout/PageContainer";
import { AboutHero } from "@/components/me/AboutHero";
import { AboutPlatformSection } from "@/components/me/AboutPlatformSection";
import { ReviewRules } from "@/components/me/ReviewRules";
import { RoadmapSection } from "@/components/me/RoadmapSection";
import { StageBoundary } from "@/components/me/StageBoundary";
import { SubmitSteps } from "@/components/me/SubmitSteps";
import { UserRoleCards } from "@/components/me/UserRoleCards";
import { categories, developers, projects } from "@/data/mock";

export default function MePage() {
  return (
    <PageContainer className="space-y-6">
      <AboutHero
        worksCount={projects.length}
        categoriesCount={categories.length}
        developersCount={developers.length}
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-6">
          <AboutPlatformSection />
          <UserRoleCards />
          <ReviewRules />
          <StageBoundary />
          <RoadmapSection />
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <SubmitSteps />
        </aside>
      </div>
    </PageContainer>
  );
}
