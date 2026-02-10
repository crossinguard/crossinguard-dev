# crossinguard.dev

Personal website to showcase my thoughts, projects, and assorted doodads.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `bun run dev`     | Start development server at `localhost:4321`    |
| `bun run cms`     | Start development server with local CMS backend |
| `bun run build`   | Build production site to `./dist/`              |
| `bun run preview` | Preview build locally                           |


## Tools & Resources

- web framework: [Astro](https://astro.build/)
  - [astro icons](https://www.astroicon.dev/)
- content management system: [DecapCMS](https://decapcms.org/)
  - [DecapBridge](https://decapbridge.com/)
- cloud repository: [Codeberg](https://codeberg.org/), [GitHub](https://github.com/)
- web hosting platform: [Netlify](https://www.netlify.com/)
- fluid design: [Utopia](https://utopia.fyi/)

## Content Collections

### Pages

| Field       | Type     | Constraint     |
| :---------- | :------- | :------------- |
| title       | string   | required       |
| description | string   | required       |
| isFixed     | boolean  | default: false |
| body        | markdown |                |

Fixed pages (`isFixed: true`) are for the default pages using custom layouts or components:
- home
- posts
- projects
- about

Dynamic pages (`isFixed: false`) are rendered for additional content pages using the default page layout.

### Posts

| Field        | Type        | Constraint     |
| :----------- | :---------- | :------------- |
| title        | string      | required       |
| description  | string      | required       |
| pubDate      | date        | required       |
| updatedDate  | date        |                |
| image        | Image       |                |
| imageAlt     | string      |                |
| tags         | string[]    |                |
| relatedPosts | reference[] |                |
| isDraft      | boolean     | default: false |
| isFeatured   | boolean     | default: false |
| body         | markdown    | required       |

## Site Data

| File                  | Purpose            |
| :-------------------- | :----------------- |
| `src/data/site.json`  | SEO metadata       |
| `src/data/owner.json` | Owner information  |
| `src/data/nav.json`   | Primary navigation |

## CMS

Content is managed through [Decap CMS](https://decapcms.org/) with [DecapBridge](https://decapbridge.com/) for authentication. Configuration at `public/admin/config.yml`.
