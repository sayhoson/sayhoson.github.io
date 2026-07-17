import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [index, app, styles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../assets/app.mjs", import.meta.url), "utf8"),
  readFile(new URL("../assets/styles.css", import.meta.url), "utf8"),
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
