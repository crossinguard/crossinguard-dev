export const projectCollections = {
  projectsCreativeClub: {
    name: "Creative Club",
    path: "creative-club",
    description:
      "Each month my wife's family and I take turns picking a theme and each make a creative project based on the theme. These are my submissions.",
  },
  projectsWebDev: {
    name: "Web Development",
    path: "web-dev",
    description:
      "Various web sitey projects I have made. I even got paid for some of them!",
  },
  projectsAssessment: {
    name: "Assessment",
    path: "assessment",
    description:
      'I currently work full time as an "assessment developer", meaning I design, build, and manage assessments. This can include open-ended tasks graded against a rubric as well as traditional multiple-choice questions. These are tools I am building to support my workflow.',
  },
  projectsMathEd: {
    name: "Math Education",
    path: "math-ed",
    description:
      "While I am no longer in the classroom, I still dabble in math. These are projects specific to math ed that I hope other teachers might find use in.",
  },
  projectsData: {
    name: "Data",
    path: "data",
    description:
      "It turns out I am far more interested in the tech side of data analytics than the business side. These are my data projects that do just that.",
  },
} as const;

export type ProjectCollectionKey = keyof typeof projectCollections;

// Define display order and limit for the projects landing page
export const projectsPageConfig: Array<{
  key: ProjectCollectionKey;
  limit?: number;
}> = [
  { key: "projectsWebDev", limit: 6 },
  { key: "projectsAssessment", limit: 6 },
  // { key: "projectsMathEd", limit: 6 },
  { key: "projectsCreativeClub", limit: 6 },
];
