---
title: The revolution will not be tweeted
description: "A call to arms for those tired of paying for what should be the free and open web"
published: "March 8, 2023"
---

While we've done our best to make this blog template usable right out of the box we assume you will want to customize it to suit your own needs. The following is a set of spots you may want to update before deploying to production.

## Blog Posts

You'll probably want to clear out all the files in `app/blog/posts` since you didn't write them. Any file with the extension `.md` will automatically be added to your blog. The filename should follow the format `YYYY-MM-DD-title.md` (e.g. `2023-03-07-new-post.md`).

In order for the file to be correctly processed it needs to include some frontmatter.

```yaml
---
title: The title
description: A description of your post
published: The date published in the format "Month Day, Year" (e.g. March 7, 2023)
---
```

Then the rest of your post can be any valid markdown including fenced code blocks. For more info on how to add additional languages to the syntax highlighting check out the documentation for [Arcdown](https://github.com/architect/arcdown).

## Styling

Styles for this template are applied in the following places:

1. `styleguide.json`: Dark and light colours are defined here, as are the font stacks to be used on headings and body text. System font stacks are used by default; you can find some great alternatives over at [Modern Font Stacks](https://modernfontstacks.com/).
1. `public/css/global.css`: This stylesheet applies some basic styles at the global level.
1. `public/css/a11y-dark.min.css`: This stylesheet applies syntax highlighting to code blocks. Feel free to swap this out with another [HighlightJS theme](https://highlightjs.org/static/demo/) of your choosing (and update the link to this stylesheet in your `head.mjs` file).
1. `app/lib/markdown-class-mappings.mjs`: This file exports an object of HTML element names matched to arrays of classes from [Enhance’s utility class system](https://enhance.dev/docs/learn/concepts/styling/utility-classes). When your markdown files are converted to HTML, these classes will be attached to the respective HTML elements.
1. `<style>` blocks in the Single File Components (SFCs), which live in the `app/elements` directory. Styles written in these style blocks will be scoped to the custom elements they're defined in.

> An elegant solution can only be found when the problem is understood

This template supports dark mode out of the box — try switching between light and dark mode in your operating system settings to see this in action!

## Site Title

There are a few places in the template where you will want to update your site's title:

- In `app/head.mjs` you can set the `<title/>` tag.
- In `app/elements/site-header.mjs` you can set the blog title and subtitle that shows up on every page.
- Finally, in `src/plugins/create-rss-feed.js` you can update the title and description that is included in your RSS feed.
