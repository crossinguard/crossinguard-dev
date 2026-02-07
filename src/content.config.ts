// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    navOrder: z.number().optional(),
    showInNav: z.boolean().default(true),
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      isDraft: z.boolean().default(false),
      isFeatured: z.boolean().default(false),
      relatedPosts: z.array(reference("posts")).optional(),
    }),
});

// Common to all projects
const baseProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  status: z.string(),
});

const projectsAssessment = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects/assessment",
  }),
  schema: baseProjectSchema.extend({
    relatedProjects: z.array(reference("projectsAssessment")).optional(),
  }),
});

const projectsCreativeClub = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects/creative-club",
  }),
  schema: baseProjectSchema.extend({
    relatedProjects: z.array(reference("projectsCreativeClub")).optional(),
    theme: z.string().optional(),
    medium: z.string().optional(),
  }),
});

const projectsData = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects/math-ed",
  }),
  schema: baseProjectSchema.extend({
    relatedProjects: z.array(reference("projectsData")).optional(),
  }),
});

const projectsMathEd = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects/math-ed",
  }),
  schema: baseProjectSchema.extend({
    relatedProjects: z.array(reference("projectsMathEd")).optional(),
  }),
});

const projectsWebDev = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects/web-dev",
  }),
  schema: baseProjectSchema.extend({
    relatedProjects: z.array(reference("projectsWebDev")).optional(),
    technologies: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  pages,
  posts,
  projectsAssessment,
  projectsCreativeClub,
  projectsData,
  projectsMathEd,
  projectsWebDev,
};
