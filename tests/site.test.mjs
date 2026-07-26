import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const [index, app, styles, content, paperCoverFiles, editorialFigureFiles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../assets/app.mjs", import.meta.url), "utf8"),
  readFile(new URL("../assets/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../assets/content.mjs", import.meta.url), "utf8"),
  readdir(new URL("../assets/paper-covers/", import.meta.url)),
  readdir(new URL("../assets/editorial-figures/", import.meta.url)),
]);

test("publishes canonical and social metadata for the light editorial site", () => {
  assert.match(index, /rel="canonical" href="https:\/\/sayhoson\.github\.io\/"/);
  assert.match(index, /name="theme-color" content="#f7f5ef"/);
  assert.match(index, /name="color-scheme" content="light"/);
  assert.match(index, /property="og:image" content="https:\/\/sayhoson\.github\.io\/assets\/og-preview\.png"/);
});

test("keeps the complete research portfolio navigation and accessible language state", () => {
  assert.match(index, /class="skip-link" href="#top"/);
  assert.match(app, /id="research"/);
  assert.match(app, /id="projects"/);
  assert.match(app, /id="publications"/);
  assert.match(app, /data-language="ko"/);
  assert.match(app, /aria-pressed="\$\{language === "ko"\}"/);
  assert.match(app, /Google Scholar/);
  assert.match(app, /Photo credits/);
});

test("uses a warm editorial system with focus and motion safeguards", () => {
  assert.match(styles, /--paper:#f7f5ef/);
  assert.match(styles, /--serif:/);
  assert.match(styles, /--blue:#315c79/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /:lang\(ko\) \.statement h2/);
  assert.doesNotMatch(styles, /--ink-950/);
});

test("assigns every on-page visual a distinct asset", () => {
  const paths = [...app.matchAll(/"(\.\/assets\/(?:research-photos|editorial-figures)\/[^"\n]+)"/g)].map((match) => match[1]);
  assert.equal(paths.length, 9);
  assert.equal(new Set(paths).size, paths.length);
  assert.deepEqual(editorialFigureFiles.filter((name) => name.endsWith(".svg")).sort(), [
    "bearing-agent.svg", "collaboration-loop.svg", "digital-twin-loop.svg", "operator-field.svg", "virtual-sensing-grid.svg",
  ]);
  assert.doesNotMatch(app, /research-diagrams/);
  assert.doesNotMatch(app, /image-data/);
  assert.match(app, /revealElements\.forEach\(\(element\) => element\.classList\.add\("is-visible"\)\)/);
});

test("shows all verified publication covers without a generated substitute", () => {
  assert.match(app, /portfolio\.publications\.map\(publication\)/);
  assert.doesNotMatch(app, /generated-paper-cover/);
  assert.equal((content.match(/cover: "\.\/assets\/paper-covers\//g) || []).length, 9);
  assert.equal(paperCoverFiles.filter((name) => name.endsWith(".webp")).length, 9);
});
