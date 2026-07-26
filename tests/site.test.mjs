import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const [index, app, styles, content, paperCoverFiles, researchPhotoFiles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../assets/app.mjs", import.meta.url), "utf8"),
  readFile(new URL("../assets/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../assets/content.mjs", import.meta.url), "utf8"),
  readdir(new URL("../assets/paper-covers/", import.meta.url)),
  readdir(new URL("../assets/research-photos/", import.meta.url)),
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

test("provides the instrument-dark portfolio system and motion safeguards", () => {
  assert.match(styles, /--ink-950:\s*#050b14/);
  assert.match(styles, /--signal:\s*#4ee0ed/);
  assert.match(styles, /--display:\s*"DM Mono"/);
  assert.match(styles, /instrument-dark portfolio surface/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("uses actual rotating-machine photos instead of generated decorative visuals", () => {
  assert.match(app, /assets\/research-photos\/pmsm-assembly\.jpg/);
  assert.match(app, /assets\/research-photos\/stator-winding\.jpg/);
  assert.match(app, /assets\/research-photos\/rotor-balance\.jpg/);
  assert.match(app, /Photo credits/);
  assert.match(app, /const researchImages/);
  assert.doesNotMatch(app, /generatedImages/);
  assert.doesNotMatch(app, /import sectionHero/);
  assert.equal(researchPhotoFiles.filter((name) => name.endsWith(".jpg")).length, 4);
});

test("connects language and tab controls to their rendered state", () => {
  assert.match(app, /aria-pressed="\$\{language === "ko"\}"/);
  assert.match(app, /aria-controls="intro-panel"/);
  assert.match(app, /aria-labelledby="intro-tab-\$\{introView\}"/);
  assert.match(app, /aria-controls="output-panel"/);
  assert.match(app, /aria-labelledby="output-tab-\$\{outputView\}"/);
  assert.match(styles, /overflow-x: hidden/);
  assert.match(styles, /word-break: keep-all/);
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
