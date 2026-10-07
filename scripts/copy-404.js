// GitHub Pages has no SPA fallback. Serving the app shell as 404.html lets
// deep links such as /blog/my-post load the app, which then routes client-side.
import { copyFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
