# HuynhNguyenPhuc.github.io

Personal site built with React, Vite and React Router. Blog posts are Markdown files.

## Run locally

```powershell
npm install
npm run dev
```

Open the address Vite prints (http://localhost:5173). `npm run build` writes the site to `dist/`, and `npm run preview` serves that build.

## Add a blog post

1. Copy `src/posts/_template.md` to `src/posts/my-post.md`.
2. Edit the front matter (`title`, `date`, `summary`) and write the post in Markdown.

The file name becomes the address (`/blog/my-post`). Posts are sorted by `date`, newest first, and the three newest also appear on the home page. Files starting with an underscore are ignored.

## Edit the home page

Text for research, experience, projects and honors lives in `src/content.js`. The layout is in `src/pages/Home.jsx`, and colors and type are the variables at the top of `src/styles.css`.

## Publish

GitHub serves a user site from a repository named exactly `HuynhNguyenPhuc.github.io`.

```powershell
git init -b main
git add .
git commit -m "Add personal site"
git remote add origin https://github.com/HuynhNguyenPhuc/HuynhNguyenPhuc.github.io.git
git push -u origin main
```

Then open the repository's Settings, Pages, and set Source to **GitHub Actions**. Each push to `main` runs `.github/workflows/deploy.yml`, builds the site and publishes it to https://huynhnguyenphuc.github.io/.

`npm run build` also copies `index.html` to `404.html`. GitHub Pages has no single-page-app fallback, so this lets a direct link such as `/blog/my-post` load the app.

## Layout

| Path | Purpose |
| --- | --- |
| `src/pages/` | Home, blog index, post and not-found pages |
| `src/components/` | Header, footer, post list and the X-ray figure |
| `src/content.js` | Home page text |
| `src/posts/` | Blog posts in Markdown |
| `src/posts.js` | Loads and sorts the posts |
| `src/styles.css` | Styles, with light and dark themes |
