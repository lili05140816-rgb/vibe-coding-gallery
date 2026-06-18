import { HomeCollectedWorks } from "@/components/home/HomeCollectedWorks";
import { HomeBottomCta } from "@/components/home/HomeBottomCta";
import { HomeCreators } from "@/components/home/HomeCreators";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePhoneShowcase } from "@/components/home/HomePhoneShowcase";
import { HomeSceneUniverse } from "@/components/home/HomeSceneUniverse";
import { HomeSnapContainer } from "@/components/home/HomeSnapContainer";
import { categories, developers, projects } from "@/data/mock";
import type { Project } from "@/types/project";

export default function Home() {
  const featuredCreators = ["dev-aqi", "dev-nana", "dev-mori"]
    .map((id) => developers.find((developer) => developer.id === id))
    .filter((developer) => developer !== undefined);
  const developersById = new Map(
    developers.map((developer) => [developer.id, developer]),
  );
  const collectedWorks = [
    "phone-time-guard",
    "short-video-break-reminder",
    "english-word-checkin",
    "pet-vaccine-reminder",
    "gym-log-board",
    "mood-diary-lite",
    "daily-expense-note",
    "student-timetable-helper",
  ]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);
  const phoneProject =
    projects.find((project) => project.id === "phone-time-guard") ?? projects[0];

  return (
    <HomeSnapContainer>
      <section
        id="home-hero"
        data-snap-section
        className="px-4 pb-8 sm:px-6 md:flex md:h-[calc(100vh-5rem)] md:snap-start md:snap-always md:items-center md:pb-0 lg:px-8"
      >
        <HomeHero />
      </section>
      <section
        id="home-collected"
        data-snap-section
        className="px-4 py-8 sm:px-6 md:flex md:h-[calc(100vh-5rem)] md:snap-start md:snap-always md:items-center md:py-0 lg:px-8"
      >
        <HomeCollectedWorks
          developers={developers}
          projects={collectedWorks.length >= 6 ? collectedWorks : projects.slice(0, 8)}
        />
      </section>
      <section
        id="home-phone"
        data-snap-section
        className="px-4 py-8 sm:px-6 md:flex md:h-[calc(100vh-5rem)] md:snap-start md:snap-always md:items-center md:py-0 lg:px-8"
      >
        <HomePhoneShowcase
          developer={developersById.get(phoneProject.developerId)}
          project={phoneProject}
        />
      </section>
      <section
        id="home-scenes"
        data-snap-section
        className="px-4 py-8 sm:px-6 md:flex md:h-[calc(100vh-5rem)] md:snap-start md:snap-always md:items-center md:py-0 lg:px-8"
      >
        <HomeSceneUniverse categories={categories} />
      </section>
      <section
        id="home-creators"
        data-snap-section
        className="space-y-6 px-4 py-8 pb-24 sm:px-6 md:flex md:h-[calc(100vh-5rem)] md:snap-start md:snap-always md:flex-col md:justify-center md:py-0 md:pb-0 lg:px-8"
      >
        <HomeCreators developers={featuredCreators} />
        <HomeBottomCta />
      </section>
    </HomeSnapContainer>
  );
}
