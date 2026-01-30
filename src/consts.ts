import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Shane Sarin",
  EMAIL: "shanesarin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Shane Sarin",
  DESCRIPTION: "Shane Sarin — builder, collector, explorer. Building at the intersection of crypto, AI, and culture. Former Consensys and RECUR. UNC Chapel Hill alum.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/BlockShane_",
  }
];
