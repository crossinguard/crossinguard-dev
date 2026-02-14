---
title: How I made this website
description: An overview of the tools, resources, and methodologies I used to
  create my own custom website.
pubDate: 2026-02-07
updatedDate: 2026-02-13
tags:
  - web-dev
  - astro
  - codeberg
  - decapCMS
relatedPosts:
  - microsoft
isDraft: false
isFeatured: true
---

## About crossinguard.dev

This website is my own personal creation, used for the following purposes:

1. To provide a digital home for information about me, posts I write, and projects I work on
2. To test out new web development approaches and technologies

This site is pretty much always *under development*. That said, nothing should ever be "broken" and all typos are completely unintentional. Gotta catch 'em all!

I first launched **crossinguard.dev** in the back half of 2023 following a surprise layoff (reduction in force? whatever the cool kids call it these days). LinkedIn felt/feels well beyond it's "best by" date, and I wanted a place I fully controlled. I didn't and still don't know if I want this to be a blog, a portfolio, or something else. That's kind of the fun, it's whatever I want it to be at any given time.

I am now years down this road and not going anywhere. Whether physical or digital, I think it is important to model the sort of community you wish to be part of. I want to do things right, even if it means redoing my site from scratch for the 1000th time because I am offended by the approaches used by prior me. Bad llama.

## Technology Used

This site is primarily a "static" site, meaning the focus is on content, not interactivity. No single-page web apps with semi-functional back button behavior or scrolljacking over here, just good clean fun.

### Framework: Astro

The main piece of technology used in my site is [Astro](https://astro.build/), the self-proclaimed "web framework for content-driven websites". Astro is by far my favorite framework I have used, giving me many of the modern benefits of something like React, but with a focus on static content stripped of unnecessary client-side JavaScript. Nearly all code I write for this site is HTML, CSS, and markdown. 

I legitimately love writing HTML and CSS. Thinking through the structure of information and then the presentation of information just does it for me. The advantage of Astro over sticking with vanilla HTML and CSS is the ability to create reusable components and layouts, supercharged with the use of JavaScript (or TypeScript) directly within the HTML and CSS. It's a lot to get into, so if interested check out the documentation's *[Why Astro?](https://docs.astro.build/en/concepts/why-astro/)* page.

Astro is basically a superset of HTML. In fact, you can take an `index.html` file, rename it to `index.astro`, and everything should work the same as before. Astro isn't it's own language, it is standard HTML, standard CSS, and JSX-like JavaScript all wrapped up in a single file. 

Within my Astro site, I am using the excellent [Astro Icon](https://www.astroicon.dev/) integration. This gives me an `<Icon />` component  to make use of local `.svg` files. It can also pull in new icons through [Iconify](https://icon-sets.iconify.design/), such as my icon family of choice [Phosphor](https://phosphoricons.com/). I only have a few icons sprinkled throughout my site, but it's nice to have this for when I want to bring new ones in. One day I hope to make my own custom icon set to replace them with.

### Content Management System: DecapCMS

This is my own personal site with nobody else coming in here to make edits. Because of that I really don't need a content management system. I am currently writing this post on my laptop in a simple markdown editor. However, my hope is to make websites for small local businesses and community groups in the future, so I need to make sure I can make content editable by non-technical people. Enter the content management system (CMS).

I specifically chose [DecapCMS](https://decapcms.org/) for a few reasons:

1. Everything stays git-based and lives directly with my files in my repo. The code, content, images, and CMS all live together with no vendor lock-in. I could put my website in a zip archive and email the entirety of it to myself. Try doing that with WordPress.
2. I can use images in my `src` folder within the DecapCMS editor, meaning user-uploaded images benefit from Astro image rendering optimizations. I tried alternative git-based CMS options, like TinaCMS, but those needed to use the `public` folder. Astro intentionally does not run image optimization on the `public` folder as those are meant to be served as-is, and I didn't want to give up image optimization.
3. Access to the editorial workflow, where changed files travel through a process: drafts, in review, ready. This makes it much easier to work on content across multiple files and review changes before they go live. Plenty of other CMS platforms have this, but few let me do it for free.
4. One-off file-based collections. This one is huge. A content collection represents a group of content with similar metadata. Think blog posts, where each will have a title, description, publication date, and maybe a hero image, all stored together in a "blog" folder. Content collections must redundantly be set up in the Astro configuration as well as the Decap configuration. File collections allow me to have user-editable files for specific single elements, like the navbar or footer information, without setting them up on the Astro side as individual content collections.

Authentication for my CMS is handled through [DecapBridge](https://decapbridge.com/). I only recently started using this when I learned that Netlify Identity is now officially deprecated. So far this seems like exactly what I needed and was relatively simple to get set up.

### Cloud Repo: Codeberg, ~~GitHub~~

It wasn't that long ago that I even figured out what git and GitHub were. I only discovered [Codeberg](https://codeberg.org/) because I followed a project link in one of the newsletters I subscribe to and thought "Hey, this ain't GitHub!"

This website repo was originally hosted on GitHub. I don't like the direction Microsoft is going with pretty much anything, so have pulled back from them wherever I can (see my post [Breaking up with Micro$oft](/posts/microsoft)). There is nothing I need that is GitHub specific for my scale of projects, so I migrated the repo to Codeberg in late 2025.

However, there are a few tools I am using or trying out that require GitHub, like DecapBridge (for now). Because of that, I mirror my Codeberg and GitHub repos. Codeberg is my primary, and GitHub is the ex I wish I could quit that keeps slipping into my AOL Instant Messenger chats.

If interested in migrating from GitHub to Codeberg, or using both with mirrored repos, this is the guide I followed: [A central place of information about mirroring repos to Codeberg #GiveUpGitHub](https://codeberg.org/Recommendations/Mirror_to_Codeberg). Eventually I want to have my own Forego

### Hosting: Netlify

My website is hosted and deployed through [Netlify](https://www.netlify.com/), which has an incredibly generous free tier. Back in my GitHub days, Netlify could connect to that repo and know to automatically rebuild my website every time the GitHub repo changed. Whether I made the change locally through the code side, or somebody (still just me) made an update through a CMS, Netlify would get notified of that change and rebuild the site.

Netlify can work with Codeberg pretty easily through the Netlify CLI tool (or manually importing through their website if you hate what you do), but it requires telling Netlify to rebuild the site and some sort of local version of your files. That trade-off is fine for me, for the same reason I am willing to pay more money to avoid Amazon.

But the entire reason I added a CMS was to make things editable for *others*. I need to make sure non-technical users can update content and the website automatically rebuilds based on that new content. This is yet another reason why I am mirroring my Codeberg repo with GitHub. Originally I only synced the repos from Codeberg to GitHub. That didn't work because DecapBridge uses GitHub, so the changes made in the DecapCMS editor were only going to GitHub. Turns out I have to sync both ways and go full mirror. I am hopeful that DecapBridge and/or Netlify will eventually support a more diverse list of cloud repo hosts. 

## Resources Referenced (pending)

Eventually this will be a discussion about the resources I found most useful for making all of this. Some will be directly relevant and a bit obvious, like tool documentation. Others will be blogs or tutorials I found useful. I don't generally like using starter templates, but I do love pulling ideas from the repos of starter templates!

## Methodologies Employed (pending)

CSS alone is an ocean of depth, not just in technical use but in *how* it gets used. I'm not a Tailwind boi, I think it takes all of the fun out of this, and makes my HTML obnoxious to read. I like writing CSS. I love writing CSS. I just want to do it effectively. And that's only 1 of the core pieces, we haven't even touched HTML itself, JavaScript, TypeScript, Astro-specific approaches, content schemas, or any of the other ocean-sized paths to plunge into. 

This section will go over some of my trusted resources that inspire the approaches I use when working on this website and others.
