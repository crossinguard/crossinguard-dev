---
title: Making a digital resume
description: Creating a responsive web resume that prints to one page
pubDate: 2026-01-15
---

[Check out my digital resume!](/resume)

Making a resume sucks. Not just trying to explain years of responsibilities in quick bullet snippets, but also pretending like any of us has access to the metrics we are told to include. Then top that with trying to fit it all on a single page and hoping the template you are using doesn't break every time you make a change.

I say enough! The information in a resume is it's own beast, but I can at least take lessons from web development and work to separate my resume *information* from my resume *presentation*.

## Web resume

My website is built using the [Astro web framework](https://astro.build/). Astro is kind of like React in that it is component-based and the syntax is incredibly similar to JSX. However, where React is all about interactivity, Astro is focused on static content (think web app vs blog). 

Astro works well with many data types, starting with the native `.astro` files but also including `.html`, `.json`, `.md`, and other files common to web development.

### Resume data structures

Looking over my existing old resumes, there are common pieces of information used in every job entry:

- job title
- department
- location
- start and end dates
- list of responsibilities

I chucked all of that information into a `json` file. See [sample-experience.json](/assets/sample-experience.json) for an example. *Note: while I am a proud former Blockbuster employee, this sample-experience information is made up.*

Then I created a similar `json` file for my education based on my common pieces of information repeated for each entry:

- degree
- field of study
- institution
- year of completion

Only suckers include their GPA or start years.

> Tommy: "You know a lot of people go to college for seven years."
> 
> Richard: "I know, they're called doctors."

### Putting the pieces together

On my resume, the header information (my name, contact details, descriptive overview) don't change often and are minimally adapted to specific jobs I am applying to. What does change is my job history and emphasis in my list of job responsibilities. I wanted my digital resume to easily adapt as I add/remove/edit existing information. When I update this next, I only want to be updating information. Everything involving styles and presentation should just work with whatever my current resume information contains. 

I made use of Astro's component architecture and created three resume components: header, experience, and education. The experience component reads information from my `experience.json` file and the education component reads information from my `education.json` file. Both components loop through the data and assign them to HTML elements, meaning it will live adjust as I add new jobs in the future.

Aside from the `.json` data, the actual HTML is just core semantic elements: sections, headers, lists, and paragraphs.

## Print resume

A digital, responsive resume is fantastic. It looks good on any screen size, is accessible, and can be easily shared with no downloading of files or software requirements beyond a web browser.

That said, a link to a resume is rarely what any open job position wants. They want a static `.pdf` that can be uploaded into their job portal (after entering all of the exact same information into their application page). I need my digital web resume to nicely print to a single-page `.pdf`. This gives me a good single source of truth for my resume (the web version) that can be snapshotted and sent to others as a document without keeping two separate versions.

The inspiration for this post came from the article [Printing the web: making webpages look good on paper](https://piccalil.li/blog/printing-the-web-making-webpages-look-good-on-paper/). This goes over using `@media print` and `@page` to enable CSS styles specifically for when somebody tries to print the current website. If you have ever tried to print a recipe from a random blog, you know how terrible the web usually translates to printed form. 

For my approach, I created a main `resume-print.css` stylesheet to be used only within my printed resume. I used that stylesheet to set some base style variables dealing with font sizes and line heights. Unlike the web version of my resume which uses relative units like `rem`, my print styles use absolute units. Specifically, I used the same unit I have traditionally used in something like Microsoft Word: `pt`. I also set a defined page size of letter and orientation of portrait. This allows me to take the exact same information on my responsive web resume and give them locked sizes when printing to paper or a `.pdf` file. 

I adjusted my font sizes, spacing, padding, and margins until everything scrunched together onto a single page. Every browser introduces its own native styles, so the single-page scrunch may not work for everyone. But it will be close enough that scaling the print size should be able to get everything to where it needs to be. 

## Final result

Want to see the final result? [Header over to my digital resume](/resume) and try to print that page. The print preview should show the same information presented in a different, more resume-y style.

Try and print any other page, including this post, and you will see a very different style of print preview.
