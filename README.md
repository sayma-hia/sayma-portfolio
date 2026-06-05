# Sayma Saymon Hia — Personal Portfolio

Personal portfolio website built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. No environment variables required by default.
4. Click Deploy.

## Adding your CV

Place your CV PDF at `public/cv/CV.pdf`. The "Download CV" button links there automatically.

## How to publish a new blog post

1. Create a new `.mdx` file in `content/blog/`, e.g. `content/blog/my-new-post.mdx`.
2. Add frontmatter at the top:

```mdx
---
title: "Your post title"
excerpt: "A short 1-2 sentence summary shown on the blog listing page."
date: "YYYY-MM-DD"
category: "Engineering"
readTime: "5 min"
slug: "my-new-post"
published: true
---

Your post content in Markdown goes here.
```

3. Available categories: `Engineering`, `AI & LLMs`, `Career`, `Women in Tech`, `Personal`.
4. Set `published: false` to keep a draft hidden.
5. The slug must match the filename (without `.mdx`).

## Setting up the contact form

The contact form uses [Formspree](https://formspree.io):

1. Create a free account at formspree.io.
2. Create a new form and copy your Form ID.
3. In `components/ContactForm.tsx`, replace `YOUR_FORM_ID` with your actual form ID.

## Updating content

All non-blog content (bio, experience, projects, skills) lives in `lib/data.ts` as typed constants — edit that file to update any page content without touching the components.
