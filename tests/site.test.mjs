import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const [index, app, styles, content, paperCoverFiles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../assets/app.mjs", import.meta.url), "utf8"),
  readFile(new URL("../assets/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../assets/content.mjs", import.meta.url), "utf8"),
  readdir(new URL("../assets/paper-covers/", import.meta.url)),
]);

test("publishes canonical and social metadata", () => {
  assert.match(index, /rel="canonical" href="https:\/\/sayhoson\.github\.io\/"/);
  assert.match(index, /property="og:image" content="https:\/\/sayhoson\.github\.io\/assets\/og-preview\.png"/);
  assert.match(index, /name="twitter:card" content="summary_large_image"/);
});

test("keeps the academic portfolio structure and accessible navigation", () => {
  assert.match(index, /class="skip-link" href="#top"/);
  assert.match(app, /Research dossier \/ 2026/);
  assert.match(app, /Physics-informed AI/);
  assert.match(app, /id="projects"/);
  assert.match(app, /Google Scholar/);
});

test("provides the selected academic visual system and motion safeguards", () => {
  assert.match(styles, /--ink:\s*#07172d/);
  assert.match(styles, /--blue:\s*#12b8cb/);
  assert.match(styles, /--display:\s*Georgia/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("introduces papers with verified PDF first-page covers", () => {
  assert.match(app, /function paperCover/);
  assert.match(app, /actual-paper-cover/);
  assert.match(app, /SEHO SON \/ RESEARCH/);
  assert.match(styles, /aspect-ratio:\s*210 \/ 297/);
  assert.match(styles, /\.publication-item h3/);
  assert.equal((content.match(/cover: "\.\/assets\/paper-covers\//g) || []).length, 9);
  assert.equal(paperCoverFiles.filter((name) => name.endsWith(".webp")).length, 9);
});
