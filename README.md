# AI Knowledge Base

My personal, searchable knowledge base about **creating stuff with AI** — prompts, tools, workflows, gotchas and experiments.

Built with [Docusaurus](https://docusaurus.io).

## Quick start

```bash
npm install
npm run start        # dev server at http://localhost:3000
```

## Build & deploy

```bash
npm run build        # static site in ./build
npm run serve        # preview the production build locally
```

Content is plain Markdown in `docs/` (and `blog/` for longer posts), so it can be deployed anywhere — GitHub Pages, Vercel, Netlify, Cloudflare Pages.

## Where things live

```
docs/
  intro.md            # start here
  prompting/          # prompt techniques & examples
  tools/              # AI tools, models, services
  workflows/          # end-to-end "how I built X" recipes
  gotchas/            # pitfalls and lessons learned
blog/                 # longer write-ups
src/pages/index.js    # landing page
```

## Adding a note

1. Add a Markdown file to the matching `docs/<topic>/` folder.
2. Include front matter:

   ```md
   ---
   title: My note
   sidebar_position: 1
   ---
   ```

3. Commit — the sidebar is auto-generated, no config needed.

## Project setup note

The site was scaffolded manually with the Docusaurus **classic preset** (docs + blog + pages), which is equivalent to `npx create-docusaurus@latest . classic`.
