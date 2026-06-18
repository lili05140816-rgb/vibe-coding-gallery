import { DiscoverCategoryBrowser } from "@/components/discover/DiscoverCategoryBrowser";
import { DiscoverHeader } from "@/components/discover/DiscoverHeader";
import { PageContainer } from "@/components/layout/PageContainer";
import { categories, developers, projects } from "@/data/mock";

type DiscoverPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
  }>;
};

export default async function DiscoverPage({ searchParams }: DiscoverPageProps) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params?.category)
    ? params?.category[0]
    : params?.category;

  return (
    <PageContainer className="space-y-8 pt-8 md:pt-14">
      <DiscoverHeader />
      <DiscoverCategoryBrowser
        categories={categories}
        developers={developers}
        initialCategoryName={categoryParam}
        projects={projects}
      />
    </PageContainer>
  );
}
