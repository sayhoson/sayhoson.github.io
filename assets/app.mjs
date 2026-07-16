import { portfolio } from "./content.mjs";

let language = "ko";
let outputView = "publications";
let menuOpen = false;
let introView = 0;

const root = document.querySelector("#portfolio-root");

const arrow = '<span class="arrow" aria-hidden="true">→</span>';
const tags = (items, className = "tag-list") => `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

function rotorGraphic() {
  return `<div class="rotor-graphic" aria-hidden="true">
    <div class="graphic-grid"></div>
    <div class="rotor-ring ring-outer"></div><div class="rotor-ring ring-mid"></div><div class="rotor-ring ring-inner"></div>
    <div class="rotor-core">${[1,2,3,4,5,6].map((number) => `<span class="blade blade-${number}"></span>`).join("")}</div>
    <svg class="response-lines" viewBox="0 0 620 480" role="presentation">
      <path d="M18 285 C96 285 126 185 212 214 S332 340 405 275 S514 205 604 235"></path>
      <path d="M18 305 C92 315 137 240 211 246 S326 302 402 260 S522 228 604 253"></path>
      <path d="M18 330 C104 344 145 286 218 278 S327 279 410 247 S530 250 604 286"></path>
      <path d="M18 258 C99 244 129 147 212 184 S331 360 405 294 S523 187 604 212"></path>
    </svg>
    <div class="axis axis-x"><span>x</span></div><div class="axis axis-y"><span>y</span></div>
    <div class="node node-a"></div><div class="node node-b"></div><div class="node node-c"></div><div class="node node-d"></div>
    <p class="graphic-label label-top">SYSTEM RESPONSE · OPERATOR SPACE</p><p class="graphic-label label-bottom">FIELD → SPECTRUM → STATE</p>
  </div>`;
}

function render() {
  const copy = portfolio.copy[language];
  const outputs = outputView === "publications" ? portfolio.publications : portfolio.talks;
  const introduction = portfolio.introduction[language];
  const activeIntroduction = introduction[introView];
  document.documentElement.lang = language;
  document.title = "Seho Son · Physics-informed AI for Rotating Machinery";

  root.innerHTML = `<main id="top">
    <header class="site-header"><div class="shell header-inner">
      <a class="wordmark" href="#top" aria-label="Seho Son portfolio home"><span>SEHO SON</span><small>SON, SEHO</small></a>
      <button class="menu-toggle" type="button" aria-expanded="${menuOpen}" aria-controls="site-navigation"><span class="sr-only">Menu</span><span></span><span></span></button>
      <div class="header-actions ${menuOpen ? "is-open" : ""}" id="site-navigation">
        <nav aria-label="Primary navigation"><a href="#identity">${copy.nav[0]}</a><a href="#projects">${copy.nav[1]}</a><a href="#output">${copy.nav[2]}</a></nav>
        <div class="language-switch" aria-label="Language selection"><button data-language="ko" class="${language === "ko" ? "active" : ""}">KO</button><span>/</span><button data-language="en" class="${language === "en" ? "active" : ""}">EN</button></div>
      </div>
    </div></header>

    <section class="hero shell">
      <div class="hero-copy reveal"><p class="eyebrow">${copy.eyebrow}</p><h1>Physics-informed AI<br>for Rotating Machinery</h1><p class="hero-intro">${copy.intro}</p><p class="affiliation">${portfolio.profile.affiliation} · ${portfolio.profile.role}</p>
        <div class="hero-actions"><a class="button button-primary" href="#research">${copy.primary}${arrow}</a><a class="text-link" href="#output">${copy.secondary}${arrow}</a></div>
      </div>
      ${rotorGraphic()}
      <div class="keyword-strip" aria-label="Research keywords">${portfolio.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
    </section>

    <section class="profile-section" id="identity"><div class="shell">
      <div class="profile-intro"><div><p class="eyebrow">${copy.profileEyebrow}</p><h2>${copy.profileTitle}</h2></div><p>${copy.profileLead}</p></div>
      <div class="intro-explorer">
        <div class="intro-tabs" role="tablist" aria-label="Researcher introduction">${introduction.map((item, index) => `<button type="button" role="tab" data-intro="${index}" aria-selected="${introView === index}" class="${introView === index ? "active" : ""}"><span>0${index + 1}</span>${item.tab}</button>`).join("")}</div>
        <article class="intro-panel" role="tabpanel"><p class="intro-eyebrow">${activeIntroduction.eyebrow}</p><h3>${activeIntroduction.title}</h3><p>${activeIntroduction.body}</p>${tags(activeIntroduction.tags, "tag-list intro-tags")}</article>
        <aside class="profile-facts"><div><span>Role</span><strong>${portfolio.profile.role}</strong></div><div><span>Department</span><strong>${portfolio.profile.department}</strong></div><div><span>Laboratory</span><strong>ADIP Laboratory</strong></div><div><span>Affiliation</span><strong>Hanyang University</strong></div></aside>
      </div>
    </div></section>

    <section class="identity-section"><div class="shell">
      <div class="identity-heading"><p class="eyebrow">${copy.identityEyebrow}</p><h2>${copy.identityTitle}</h2><p>${copy.identityLead}</p></div>
      <div class="identity-grid">${portfolio.identity.map((item) => `<article><span>${item.abbr}</span><h3>${item.title}</h3><p>${item[language]}</p></article>`).join("")}</div>
      <div class="convergence-line"><span>PHYSICS</span><i>+</i><span>DATA</span><i>+</i><span>AGENTS</span><b>→ VERIFIABLE INTELLIGENCE</b></div>
    </div></section>

    <section class="competency-section"><div class="shell"><div class="section-heading compact"><div><p class="eyebrow">${copy.competencyEyebrow}</p><h2>${copy.competencyTitle}</h2></div></div><div class="competency-grid">${portfolio.competencies.map((item) => `<article><span>${item.number}</span><h3>${item.title}</h3><p>${item[language]}</p></article>`).join("")}</div></div></section>

    <section class="section section-research" id="research"><div class="shell">
      <div class="section-heading"><div><p class="eyebrow">${copy.researchEyebrow}</p><h2>${copy.researchTitle}</h2></div><p>${copy.researchLead}</p></div>
      <div class="research-list">${portfolio.research.map((item) => `<article class="research-item"><span class="item-number">${item.number}</span><div><h3>${item.title}</h3><p>${item[language]}</p>${tags(item.tags)}</div></article>`).join("")}</div>
      <div class="stats-row">${portfolio.stats.map((stat) => `<div class="stat"><strong>${stat.value}</strong><span>${stat[language]}</span></div>`).join("")}</div>
    </div></section>

    <section class="section section-projects" id="projects"><div class="shell">
      <div class="section-heading"><div><p class="eyebrow">${copy.projectEyebrow}</p><h2>${copy.projectTitle}</h2></div><p>${copy.projectLead}</p></div>
      <div class="project-grid">${portfolio.projects.map((project) => `<article class="project-card ${project.featured ? "featured" : ""}"><div class="project-topline"><span>${project.index}</span><span>${project.subtitle}</span></div><div class="project-image"><img src="${project.image}" alt="" loading="lazy"></div><div class="project-body"><div><h3>${project.title}</h3><p>${project[language]}</p></div><div class="project-metric"><strong>${project.metric}</strong><span>${project[language === "ko" ? "metricKo" : "metricEn"]}</span></div></div>${tags(project.methods, "tag-list project-tags")}</article>`).join("")}</div>
    </div></section>

    <section class="section section-output" id="output"><div class="shell">
      <div class="section-heading output-heading"><div><p class="eyebrow">${copy.outputEyebrow}</p><h2>${copy.outputTitle}</h2></div><p>${copy.outputLead}</p></div>
      <div class="output-tabs" role="tablist" aria-label="Research output type"><button data-output="publications" role="tab" aria-selected="${outputView === "publications"}" class="${outputView === "publications" ? "active" : ""}">${copy.publicationsTab}<span>${String(portfolio.publications.length).padStart(2, "0")}</span></button><button data-output="talks" role="tab" aria-selected="${outputView === "talks"}" class="${outputView === "talks" ? "active" : ""}">${copy.talksTab}<span>${String(portfolio.talks.length).padStart(2, "0")}</span></button></div>
      <div class="output-list" role="tabpanel">${outputs.map((item) => `<article class="output-item"><div class="output-meta"><span>${item.year}</span><span>${item.type}</span></div><div><h3>${item.title}</h3><p>${item[language === "ko" ? "metaKo" : "metaEn"]}</p></div><span class="output-status">${copy.placeholder}</span></article>`).join("")}</div>
    </div></section>

    <section class="contact-section"><div class="shell contact-inner"><div><p class="eyebrow">${copy.contactEyebrow}</p><h2>${copy.contactTitle}</h2></div><div><p>${copy.contactLead}</p><div class="profile-links"><a href="${portfolio.profile.github}" target="_blank" rel="noreferrer">GitHub ${arrow}</a><a href="${portfolio.profile.scholar}" target="_blank" rel="noreferrer">Google Scholar ${arrow}</a></div></div></div></section>
    <footer class="site-footer"><div class="shell footer-inner"><div><strong>${portfolio.profile.name}</strong><span>${portfolio.profile.nameKo} · ${portfolio.profile.department}</span></div><span>${copy.footer}</span><a href="#top">${copy.backToTop} ${arrow}</a></div></footer>
  </main>`;

  root.querySelector(".menu-toggle")?.addEventListener("click", () => { menuOpen = !menuOpen; render(); });
  root.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => { menuOpen = false; }));
  root.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => { language = button.dataset.language; render(); }));
  root.querySelectorAll("[data-output]").forEach((button) => button.addEventListener("click", () => { outputView = button.dataset.output; const top = document.querySelector("#output")?.offsetTop; render(); if (top) window.scrollTo({ top, behavior: "instant" }); }));
  root.querySelectorAll("[data-intro]").forEach((button) => button.addEventListener("click", () => { introView = Number(button.dataset.intro); const top = document.querySelector("#identity")?.offsetTop; render(); if (top) window.scrollTo({ top, behavior: "instant" }); }));
}

render();
