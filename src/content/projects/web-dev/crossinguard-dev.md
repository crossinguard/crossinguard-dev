---
title: "crossinguard.dev"
description: "The personal website for Brett Egbert and his nerdy little projects."
pubDate: 2025-10-25
updatedDate: 2026-02-06
status: "under development"
category: "web-dev"
tags:
  - "web-dev"
  - "personal"
  - "astro"
---

This website is my own personal creation, used for the following purposes:

1. Provide a digital home to present information about me, posts I write, and projects I work on
2. Test out new approaches and technologies

That means this site is pretty much always *under development*. That said, nothing should ever be "broken" and all typos are completely unintentional. Gotta catch 'em all!

## Technology Used

This site is primarily a "static" site, meaning the focus is on content, not interactivity. No single-page web apps with semi-functional back button behavior or scrolljacking over here, just good clean fun.

### Framework: Astro

The primary piece of technology used in my site is [Astro](https://astro.build/), the self-proclaimed "web framework for content-driven websites". Astro is by far my favorite framework I have used, giving me many of the modern benefits of something like React, but with a focus on static content stripped of unnecessary client-side JavaScript. Nearly all code is core HTML, CSS, and markdown.

Within my Astro site, I am using the excellent [Astro Icon](https://www.astroicon.dev/) integration. This gives me an `<Icon />` component  to make use of local `.svg` files and to pull in new icons from the [Phosphor](https://phosphoricons.com/) icon family through [Iconify](https://icon-sets.iconify.design/).

### Content Management System: DecapCMS

This is my own personal site with nobody else coming in here to make edits. Because of that I really don't need a content management system. I am currently writing this on my local desktop in a simple markdown editor. However, my hope is to make websites for small local businesses in the future, so I need to make sure I can make content editable by non-technical people. Enter the content management system.

I specifically chose [DecapCMS](https://decapcms.org/) for a few reasons. First, it is git-based and lives directly with my files in my repo. The code, content, images, and CMS all live together with no vendor lock in. Second, DecapCMS can use images in my `src` folder, meaning user-uploaded images benefit from Astro image rendering optimizations. And third, I am able to use the editorial workflow (drafts, in review, ready). This makes it much easier to work on content and review changes before they go live. It makes it easier to make edits to multiple pages. Plenty of other CMS platforms have this, but few let me do it for free.

Authentication for my CMS is handled through [DecapBridge](https://decapbridge.com/). I only recently started using this when I learned that Netlify Identity is now officially deprecated. DecapBridge only works with GitHub, which is one of the reasons I am mirroring my repo between Codeberg and GitHub.

### Cloud Repo: Codeberg

I only recently learned about [Codeberg](https://codeberg.org/). I followed a project link in one of the newsletters I subscribe to and thought "Hey, this ain't GitHub!" I don't like the direction Microsoft is going with pretty much anything, so have pulled back from them wherever I can (see my post [Breaking up with Micro$oft](/posts/microsoft)). At least at the level of needs I currently have, there is nothing I miss that is GitHub specific. However, there are a few tools I am using or trying out that require GitHub. Because of that, I am now experimenting with mirror my Codeberg and GitHub repos. Codeberg is my primary, and GitHub is the ex I wish I could quit that keeps slipping into my AOL Instant Messenger chats.

If interested in migrating from GitHub to Codeberg, or using both with mirrored repos, this is the guide I followed: [A central place of information about mirroring repos to Codeberg #GiveUpGitHub](https://codeberg.org/Recommendations/Mirror_to_Codeberg)

### Hosting: Netlify

My website is hosted and deployed through [Netlify](https://www.netlify.com/, which has an incredibly generous free tier. Netlify can work with Codeberg (or any cloud repo), but it requires manually deploying. That's fine for me, but I need to make sure non-technical users can update content and the website automatically rebuilds based on that new content. Netlify can do this with GitHub, which is yet another reason I am mirroring my repo.  
