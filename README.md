This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Notes Authoring

This site includes file-based notes at `/notes`.

1. Create a new Markdown file in `content/notes/your-slug.md`.
2. Add front matter at the top:

```md
---
title: Your Title
date: 2026-02-25
summary: One-line summary
tags: probability, inference
published: true
---
```

3. Write your note body below the front matter.

Publishing controls:
- Default: notes are published unless explicitly marked otherwise.
- Unpublish with either `published: false`, `status: draft`, or a tag like `draft`/`unpublished`.
- Publish explicitly with `published: true`, `status: published`, or a `published` tag.

Supported Markdown in notes:
- `#`, `##`, `###` headings
- Paragraphs
- Bullet lists (`- item`)
- Fenced code blocks (triple backticks)
- Inline code and links

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
