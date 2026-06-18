export type ProjectStatus =
  | "showcase"
  | "demo"
  | "paid"
  | "custom"
  | "opensource";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  coverImage: string;
  screenshots: string[];
  status: ProjectStatus;
  techStack: string[];
  targetUsers: string[];
  features: string[];
  demoUrl: string;
  developerId: string;
  views: number;
  likes: number;
  createdAt: string;
};

export type Developer = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  skills: string[];
  isAvailableForCustom: boolean;
  worksCount: number;
  totalViews: number;
  contact: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
};

