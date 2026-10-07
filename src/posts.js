// Every Markdown file in src/posts is a blog post. Files whose names start
// with an underscore are ignored, so _template.md never shows up on the site.
const files = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parse(path, raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(":");
      if (i > 0) {
        meta[line.slice(0, i).trim()] = line
          .slice(i + 1)
          .trim()
          .replace(/^(["'])(.*)\1$/, "$2");
      }
    }
  }
  const slug = path.split("/").pop().replace(/\.md$/, "");
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    summary: meta.summary || "",
    body: match ? match[2] : raw,
  };
}

export const posts = Object.entries(files)
  .filter(([path]) => !path.split("/").pop().startsWith("_"))
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

const dateFormat = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const formatDate = (iso) => (iso ? dateFormat.format(new Date(iso)) : "");
