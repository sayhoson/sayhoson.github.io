import { portfolio } from "./content.mjs";

const visual = {
  hero: "./assets/research-photos/pmsm-assembly.jpg",
  profile: "./assets/research-photos/motor-research-lab.jpg",
  research: [
    "./assets/editorial-figures/operator-field.svg",
    "./assets/editorial-figures/digital-twin-loop.svg",
    "./assets/editorial-figures/virtual-sensing-grid.svg",
  ],
  projects: [
    "./assets/research-photos/stator-winding.jpg",
    "./assets/research-photos/rotor-balance.jpg",
    "./assets/editorial-figures/bearing-agent.svg",
  ],
  collaboration: "./assets/editorial-figures/collaboration-loop.svg",
};

const visualAlt = {
  hero: "Permanent-magnet synchronous motor assembly used as the context for rotating-machine research.",
  profile: "Electric motor research apparatus in a laboratory.",
  research: [
    "Physics-informed operator learning diagram showing conditions and equations mapped to a response field.",
    "Digital twin diagram linking an experiment to coupled electromagnetic, thermal, and structural models.",
    "Virtual sensing diagram translating sparse measurements into a full vibration response field.",
  ],
  projects: [
    "Stator winding detail for a multiphysics PMSM project.",
    "Rotor balance detail for a virtual sensing project.",
    "Bearing modeling agent workflow from an engineering request to contact finite-element analysis.",
  ],
};

const root = document.querySelector("#portfolio-root");
let language = "ko";

const arrow = '<span aria-hidden="true">&rarr;</span>';
const list = (items) => `<ul class="tags">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

function publication(item, index) {
  return `<article class="publication">
    <div class="publication-number">${String(index + 1).padStart(2, "0")}</div>
    <div class="publication-main"><p>${item.year} &middot; ${item.type}</p><h3>${item.title}</h3><span>${item[language === "ko" ? "metaKo" : "metaEn"]}</span></div>
    ${item.cover ? `<img class="publication-cover" src="${item.cover}" alt="" loading="lazy">` : ""}
  </article>`;
}

function render() {
  const copy = portfolio.copy[language];
  document.documentElement.lang = language;
  document.title = "Seho Son | Physics-informed AI for Rotating Machinery";
  root.innerHTML = `<main id="top">
    <header class="site-header"><div class="shell nav-wrap">
      <a class="wordmark" href="#top">SEHO SON <small>RESEARCH PORTFOLIO</small></a>
      <nav aria-label="Primary navigation"><a href="#research">${copy.nav[0]}</a><a href="#projects">${copy.nav[1]}</a><a href="#publications">${copy.nav[2]}</a></nav>
      <div class="language-switch" aria-label="Language selection"><button type="button" data-language="ko" aria-pressed="${language === "ko"}">KO</button><i>/</i><button type="button" data-language="en" aria-pressed="${language === "en"}">EN</button></div>
    </div></header>

    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy reveal"><p class="kicker">MECHANICAL ENGINEERING &middot; HANYANG UNIVERSITY</p><h1 id="hero-title">Physics-informed AI<br>for rotating machinery.</h1><p class="hero-lead">${copy.intro}</p><div class="hero-actions"><a class="button" href="#research">${copy.primary} ${arrow}</a><a class="quiet-link" href="#publications">${copy.secondary} ${arrow}</a></div></div>
      <figure class="hero-figure reveal"><img src="${visual.hero}" alt="${visualAlt.hero}" fetchpriority="high"><figcaption>FIG. 01 &mdash; ROTATING-MACHINE RESEARCH CONTEXT</figcaption></figure>
      <div class="hero-index"><span>01&mdash;03</span><span>OPERATOR LEARNING / DIGITAL TWIN / VIRTUAL SENSING</span></div>
    </section>

    <section class="statement" id="identity"><div class="shell statement-grid">
      <div><p class="kicker">RESEARCHER PROFILE</p><h2>${copy.profileTitle}</h2></div>
      <div class="statement-side"><p>${copy.profileLead}</p><dl><div><dt>ROLE</dt><dd>${portfolio.profile.role}</dd></div><div><dt>LAB</dt><dd>ADIP Laboratory</dd></div><div><dt>FOCUS</dt><dd>Physics, data, and engineering systems</dd></div></dl></div>
    </div></section>

    <section class="research-section" id="research"><div class="shell">
      <div class="section-intro"><p class="kicker">RESEARCH DIRECTIONS</p><h2>${copy.researchTitle}</h2><p>${copy.researchLead}</p></div>
      <div class="research-grid">${portfolio.research.map((item, index) => `<article class="research-card reveal"><div class="card-folio"><span>${item.number}</span><span>METHOD STUDY</span></div><img src="${visual.research[index]}" alt="${visualAlt.research[index]}" loading="lazy"><h3>${item.title}</h3><p>${item[language]}</p>${list(item.tags)}</article>`).join("")}</div>
    </div></section>

    <section class="method-section"><div class="shell method-grid">
      <figure><img src="${visual.profile}" alt="${visualAlt.profile}" loading="lazy"><figcaption>LABORATORY NOTE &mdash; MEASUREMENT IS PART OF THE MODEL</figcaption></figure>
      <div><p class="kicker">RESEARCH POSITION</p><h2>${copy.identityTitle}</h2><p>${copy.identityLead}</p><div class="method-points"><span>01 / MODEL</span><span>02 / MEASURE</span><span>03 / VERIFY</span></div></div>
    </div></section>

    <section class="projects-section" id="projects"><div class="shell">
      <div class="section-intro"><p class="kicker">PROJECTS &mdash; COMPLETE INDEX</p><h2>${copy.projectTitle}</h2><p>${copy.projectLead}</p></div>
      <div class="project-list">${portfolio.projects.map((project, index) => `<article class="project reveal"><div class="project-media"><img src="${visual.projects[index]}" alt="${visualAlt.projects[index]}" loading="lazy"></div><div class="project-copy"><p class="project-code">${project.index} &middot; ${project.subtitle}</p><h3>${project.title}</h3><p>${project[language]}</p>${list(project.methods)}</div><div class="project-result"><strong>${project.metric}</strong><span>${project[language === "ko" ? "metricKo" : "metricEn"]}</span></div></article>`).join("")}</div>
    </div></section>

    <section class="publications-section" id="publications"><div class="shell">
      <div class="section-intro"><p class="kicker">PUBLICATIONS &amp; PRESENTATIONS</p><h2>${copy.outputTitle}</h2><p>${copy.outputLead}</p></div>
      <div class="publication-list">${portfolio.publications.map(publication).join("")}</div>
      <div class="talk-list"><p class="kicker">SELECTED PRESENTATIONS</p>${portfolio.talks.map((talk) => `<article><span>${talk.year}</span><div><h3>${talk.title}</h3><p>${talk[language === "ko" ? "metaKo" : "metaEn"]}</p></div><em>${talk.type}</em></article>`).join("")}</div>
    </div></section>

    <section class="contact-section"><div class="shell"><figure class="collaboration-figure"><img src="${visual.collaboration}" alt="Research collaboration loop connecting modeling, experiments, and applications." loading="lazy"></figure><div class="contact-copy"><p class="kicker">COLLABORATION</p><h2>${copy.contactTitle}</h2><p>${copy.contactLead}</p><div><a class="button" href="${portfolio.profile.scholar}" target="_blank" rel="noreferrer">Google Scholar ${arrow}</a><a class="quiet-link" href="${portfolio.profile.github}" target="_blank" rel="noreferrer">GitHub ${arrow}</a></div></div></div></section>
    <footer><div class="shell footer-inner"><span>${portfolio.profile.nameKo} / ${portfolio.profile.department}</span><a href="#top">${copy.backToTop} ${arrow}</a><span>${copy.footer}</span></div><details class="shell photo-credits"><summary>Photo credits</summary><ul><li>PMSM assembly: OSX, public domain, Wikimedia Commons.</li><li>BLDC stator winding: Medvedev, CC BY-SA 3.0, Wikimedia Commons.</li><li>Rotor balance detail: Raimond Spekking, CC BY-SA 4.0, Wikimedia Commons.</li><li>Motor research apparatus: Oak Ridge National Laboratory, CC BY 2.0, Wikimedia Commons.</li></ul></details></footer>
  </main>`;

  root.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => { language = button.dataset.language; render(); }));
  observeReveals();
}

function observeReveals() {
  const revealElements = root.querySelectorAll(".reveal");
  if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
}

render();
