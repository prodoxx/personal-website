<template>
  <div class="page">
    <!-- Header -->
    <section class="head-section">
      <div class="head-inner a-fadeUp">
        <p class="eyebrow">// Portfolio · 2026</p>
        <h1 class="h1">
          Selected <span class="text-gradient">work</span>.
        </h1>
        <p class="lead">
          Selected software engineering projects from over seven years shipping
          production SaaS platforms, AI infrastructure, payment systems, and
          full stack web applications. Clients range from fintech and AI
          analytics companies to national institutions.
        </p>

        <div class="head-stats a-fadeUp d-2">
          <div class="hs-cell">
            <div class="hs-num font-mono-ui">06</div>
            <div class="hs-label">Case studies</div>
          </div>
          <div class="hs-cell">
            <div class="hs-num font-mono-ui">04</div>
            <div class="hs-label">Categories</div>
          </div>
          <div class="hs-cell">
            <div class="hs-num font-mono-ui">2015 · Present</div>
            <div class="hs-label">Span</div>
          </div>
          <div class="hs-cell">
            <div class="hs-num font-mono-ui">
              <span class="hs-dot"></span> Open
            </div>
            <div class="hs-label">New projects</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// 01 · Capabilities</p>
        <h2 class="h2">What I build for clients and teams.</h2>
        <p class="lead" style="max-width: 620px;">
          From early stage prototypes to platforms serving millions of users.
          I jump in at any stage of the product lifecycle and move the work
          forward, fast.
        </p>
      </div>

      <div class="cap-grid">
        <article class="cap-card hover-lift glass reveal">
          <div class="cap-icon">
            <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="url(#c1)" stroke-width="1.5"/><path d="M3 16h26M16 3c4 4 4 22 0 26M16 3c-4 4-4 22 0 26" stroke="url(#c1)" stroke-width="1"/><defs><linearGradient id="c1" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e8b564"/><stop offset="1" stop-color="#ea8859"/></linearGradient></defs></svg>
          </div>
          <h3>Web Platforms</h3>
          <p>Fast SaaS products, dashboards, and marketing sites that feel native on every device. Built with Next.js, Nuxt, and React for performance and conversion.</p>
        </article>

        <article class="cap-card hover-lift glass reveal" style="transition-delay: .06s;">
          <div class="cap-icon">
            <svg viewBox="0 0 32 32" fill="none"><rect x="9" y="4" width="14" height="24" rx="2.5" stroke="url(#c2)" stroke-width="1.5"/><circle cx="16" cy="24" r="1" fill="url(#c2)"/><defs><linearGradient id="c2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e06c87"/><stop offset="1" stop-color="#e99aad"/></linearGradient></defs></svg>
          </div>
          <h3>Mobile Apps</h3>
          <p>React Native and Expo apps for iOS and Android. One codebase, both stores, native feel, zero friction for your users.</p>
        </article>

        <article class="cap-card hover-lift glass reveal" style="transition-delay: .12s;">
          <div class="cap-icon">
            <svg viewBox="0 0 32 32" fill="none"><path d="M5 10l11-5 11 5-11 5-11-5z" stroke="url(#c3)" stroke-width="1.5"/><path d="M5 16l11 5 11-5M5 22l11 5 11-5" stroke="url(#c3)" stroke-width="1.5"/><defs><linearGradient id="c3" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ea8859"/><stop offset="1" stop-color="#e8b564"/></linearGradient></defs></svg>
          </div>
          <h3>APIs and Infrastructure</h3>
          <p>Typed APIs, clean database schemas, AWS and GCP deployments, CI/CD pipelines, and observability built to run reliably under real production load.</p>
        </article>

        <article class="cap-card hover-lift glass reveal" style="transition-delay: .18s;">
          <div class="cap-icon">
            <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="4" stroke="url(#c4)" stroke-width="1.5"/><circle cx="16" cy="16" r="11" stroke="url(#c4)" stroke-width="1" opacity=".6"/><circle cx="27" cy="16" r="1.5" fill="url(#c4)"/><circle cx="5" cy="16" r="1.5" fill="url(#c4)"/><defs><linearGradient id="c4" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e8b564"/><stop offset="1" stop-color="#e06c87"/></linearGradient></defs></svg>
          </div>
          <h3>AI Features</h3>
          <p>Autonomous agents, retrieval augmented generation, LLM powered assistants, and smart automations shipped into real products used by paying customers.</p>
        </article>
      </div>
    </section>

    <!-- Tech marquee -->
    <section class="marquee-section">
      <div class="marquee-track">
        <template v-for="n in 2" :key="n">
          <span class="mq-item"><span class="mq-star">✦</span> TypeScript</span>
          <span class="mq-item"><span class="mq-star">✦</span> React</span>
          <span class="mq-item"><span class="mq-star">✦</span> Next.js</span>
          <span class="mq-item"><span class="mq-star">✦</span> Node.js</span>
          <span class="mq-item"><span class="mq-star">✦</span> React Native</span>
          <span class="mq-item"><span class="mq-star">✦</span> GraphQL</span>
          <span class="mq-item"><span class="mq-star">✦</span> Postgres</span>
          <span class="mq-item"><span class="mq-star">✦</span> AWS</span>
          <span class="mq-item"><span class="mq-star">✦</span> Docker</span>
          <span class="mq-item"><span class="mq-star">✦</span> LLMs &amp; Agents</span>
          <span class="mq-item"><span class="mq-star">✦</span> Python</span>
          <span class="mq-item"><span class="mq-star">✦</span> Tailwind</span>
        </template>
      </div>
    </section>

    <!-- Projects grid -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// 02 · Case studies</p>
        <h2 class="h2">Production software I've shipped.</h2>
        <p class="lead" style="max-width: 640px;">
          Real products built for real users, from AI driven real estate
          software to a crypto fintech platform. Every project below shipped
          to production and generated revenue or served paying customers.
        </p>
      </div>

      <div class="filters reveal">
        <button
          v-for="tag in filters"
          :key="tag"
          :class="['filter-chip', activeFilter === tag && 'active']"
          @click="activeFilter = tag"
        >
          <span class="font-mono-ui">{{ tag }}</span>
        </button>
      </div>

      <div class="proj-grid">
        <article
          v-for="(p, i) in filteredProjects"
          :key="p.title"
          class="proj-card glass reveal"
          :style="{ transitionDelay: (i * 0.05) + 's' }"
        >
          <div class="proj-thumb" :style="{ backgroundColor: p.bg }">
            <!-- Category-specific ornament -->
            <svg v-if="p.category === 'SaaS'" class="proj-orn" viewBox="0 0 300 180" fill="none" preserveAspectRatio="xMidYMid meet">
              <g stroke="rgba(11,8,9,0.28)" stroke-width="1">
                <line x1="30" y1="40" x2="270" y2="40" />
                <line x1="30" y1="80" x2="270" y2="80" />
                <line x1="30" y1="120" x2="270" y2="120" />
                <line x1="30" y1="160" x2="270" y2="160" />
              </g>
              <g fill="rgba(11,8,9,0.55)">
                <rect x="60" y="100" width="18" height="60" rx="2" />
                <rect x="92" y="76" width="18" height="84" rx="2" />
                <rect x="124" y="120" width="18" height="40" rx="2" />
                <rect x="156" y="60" width="18" height="100" rx="2" />
                <rect x="188" y="90" width="18" height="70" rx="2" />
                <rect x="220" y="44" width="18" height="116" rx="2" />
              </g>
              <circle cx="250" cy="34" r="5" fill="rgba(11,8,9,0.7)" class="pulse-a" />
            </svg>

            <svg v-else-if="p.category === 'AI'" class="proj-orn" viewBox="0 0 300 180" fill="none" preserveAspectRatio="xMidYMid meet">
              <g stroke="rgba(255,255,255,0.28)" stroke-width="1">
                <line x1="80"  y1="60"  x2="150" y2="90"  />
                <line x1="80"  y1="120" x2="150" y2="90"  />
                <line x1="150" y1="90"  x2="220" y2="50"  />
                <line x1="150" y1="90"  x2="220" y2="130" />
                <line x1="220" y1="50"  x2="260" y2="90"  />
                <line x1="220" y1="130" x2="260" y2="90"  />
              </g>
              <g fill="rgba(11,8,9,0.75)" stroke="rgba(255,255,255,0.4)" stroke-width="1">
                <circle cx="80"  cy="60"  r="7" />
                <circle cx="80"  cy="120" r="7" />
                <circle cx="150" cy="90"  r="10" class="pulse-a" />
                <circle cx="220" cy="50"  r="7" />
                <circle cx="220" cy="130" r="7" />
                <circle cx="260" cy="90"  r="8" />
              </g>
            </svg>

            <svg v-else-if="p.category === 'Mobile'" class="proj-orn" viewBox="0 0 300 180" fill="none" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(110 18)">
                <rect x="0" y="0" width="80" height="144" rx="12" stroke="rgba(11,8,9,0.45)" stroke-width="1.5" fill="rgba(11,8,9,0.1)"/>
                <rect x="28" y="6" width="24" height="4" rx="2" fill="rgba(11,8,9,0.45)"/>
                <line x1="12" y1="28" x2="68" y2="28" stroke="rgba(11,8,9,0.35)" stroke-width="1"/>
                <rect x="12" y="38" width="56" height="30" rx="4" fill="rgba(11,8,9,0.25)"/>
                <rect x="12" y="74" width="56" height="8" rx="2" fill="rgba(11,8,9,0.35)"/>
                <rect x="12" y="86" width="40" height="6" rx="2" fill="rgba(11,8,9,0.25)"/>
                <rect x="12" y="98" width="48" height="6" rx="2" fill="rgba(11,8,9,0.25)"/>
                <circle cx="20" cy="122" r="4" fill="rgba(11,8,9,0.4)" class="pulse-a"/>
                <line x1="30" y1="122" x2="60" y2="122" stroke="rgba(11,8,9,0.3)" stroke-width="1"/>
              </g>
              <circle cx="60"  cy="40"  r="3" fill="rgba(11,8,9,0.35)"/>
              <circle cx="240" cy="50"  r="2" fill="rgba(11,8,9,0.35)"/>
              <circle cx="50"  cy="130" r="2" fill="rgba(11,8,9,0.35)"/>
              <circle cx="250" cy="140" r="3" fill="rgba(11,8,9,0.35)"/>
            </svg>

            <svg v-else class="proj-orn" viewBox="0 0 300 180" fill="none" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(50 20)">
                <rect x="0" y="0" width="200" height="140" rx="8" stroke="rgba(11,8,9,0.45)" stroke-width="1.5" fill="rgba(11,8,9,0.08)"/>
                <circle cx="12" cy="12" r="2.5" fill="rgba(11,8,9,0.5)"/>
                <circle cx="22" cy="12" r="2.5" fill="rgba(11,8,9,0.4)"/>
                <circle cx="32" cy="12" r="2.5" fill="rgba(11,8,9,0.3)"/>
                <line x1="0" y1="24" x2="200" y2="24" stroke="rgba(11,8,9,0.35)" stroke-width="1"/>
                <rect x="16" y="38" width="80" height="12" rx="2" fill="rgba(11,8,9,0.4)"/>
                <rect x="16" y="56" width="168" height="6" rx="2" fill="rgba(11,8,9,0.25)"/>
                <rect x="16" y="68" width="140" height="6" rx="2" fill="rgba(11,8,9,0.2)"/>
                <rect x="16" y="88" width="52" height="36" rx="4" fill="rgba(11,8,9,0.28)"/>
                <rect x="76" y="88" width="52" height="36" rx="4" fill="rgba(11,8,9,0.22)"/>
                <rect x="136" y="88" width="48" height="36" rx="4" fill="rgba(11,8,9,0.18)"/>
              </g>
            </svg>

            <div class="proj-badge font-mono-ui">{{ p.year }}</div>
            <div class="proj-category font-mono-ui">{{ p.category }}</div>
            <div class="proj-emoji">{{ p.emoji }}</div>
          </div>
          <div class="proj-body">
            <div class="proj-tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
            <h3 class="proj-title">{{ p.title }}</h3>
            <p class="proj-desc">{{ p.desc }}</p>
            <div class="proj-meta font-mono-ui">
              <span>{{ p.role }}</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Tech strip -->
    <section class="section">
      <div class="tech-strip reveal">
        <p class="eyebrow mb-6">// 03 · Tooling</p>
        <h2 class="h2">The stack behind the work.</h2>
        <p class="lead" style="max-width:620px;">
          A curated toolkit I reach for, sharpened across seven years of
          shipping production software for SaaS, fintech, and AI platforms.
        </p>

        <div class="tech-grid">
          <div v-for="g in tech" :key="g.category" class="tech-card glass">
            <p class="tech-cat">{{ g.category }}</p>
            <div class="tech-items">
              <span v-for="t in g.items" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA strip -->
    <section class="section">
      <div class="mini-cta reveal">
        <div>
          <p class="eyebrow mb-2">// Next project?</p>
          <h3 class="h3">Your product could be the next case study.</h3>
          <p class="lead" style="max-width: 560px; margin-top: 10px;">
            Currently taking on new clients for SaaS, AI, and fintech builds.
            Ship in weeks, not quarters.
          </p>
        </div>
        <NuxtLink to="/contact" class="btn-primary">Let's talk →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Portfolio · Reggie Escobar · Senior Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Selected software engineering projects by Reggie Escobar. Production SaaS platforms, AI infrastructure, payment integrations, and full stack web applications built across Node.js, Python, and TypeScript for fintech, AI, and real estate companies.",
    },
    {
      name: "keywords",
      content:
        "senior software engineer portfolio, full stack developer, backend engineer, SaaS, AI infrastructure, payment integrations, Node.js, Python, TypeScript, React, Next.js, Nuxt",
    },
    { property: "og:title", content: "Portfolio · Reggie Escobar · Senior Software Engineer" },
    {
      property: "og:description",
      content:
        "Production SaaS, AI, and fintech projects shipped over seven years. Built with Node.js, Python, TypeScript, and modern cloud infrastructure.",
    },
    { property: "og:type", content: "website" },
  ],
});

const filters = ["All", "SaaS", "AI", "Fintech", "Enterprise"];
const activeFilter = ref("All");

interface Project {
  title: string;
  desc: string;
  tags: string[];
  year: string;
  role: string;
  emoji: string;
  bg: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Propertyfi AI",
    desc: "AI driven real estate SaaS serving agents, investors, and homeowners. Owned backend, distributed systems, and AI infrastructure across AWS and GCP. Shipped event driven workflows, agent pipelines, and infrastructure as code deployments powering real time property intelligence.",
    tags: ["TypeScript", "Python", "AWS", "GCP", "Temporal", "Pulumi"],
    year: "2025",
    role: "Senior Backend Engineer",
    emoji: "◈",
    bg: "#e8b564",
    category: "AI",
  },
  {
    title: "Central",
    desc: "Automated payroll platform for a San Francisco fintech. Shipped Plaid and QuickBooks integrations, OIDC authentication, and LLM assisted workflows that turned complex tax filings into a one click experience for small business owners.",
    tags: ["Next.js", "Node.js", "TypeScript", "Plaid", "QuickBooks", "OIDC"],
    year: "2024",
    role: "Senior Full Stack Engineer",
    emoji: "✦",
    bg: "#e06c87",
    category: "Fintech",
  },
  {
    title: "Appier Aideal",
    desc: "AI marketing analytics platform serving millions of enterprise users across Asia. Built Node.js backend services and GraphQL APIs, cut platform load time from 20.56 seconds to 602 milliseconds, and owned data pipelines on Airflow and Spark.",
    tags: ["Node.js", "GraphQL", "Airflow", "Spark", "AWS", "PostgreSQL"],
    year: "2023",
    role: "Senior Software Engineer II",
    emoji: "⬢",
    bg: "#ea8859",
    category: "AI",
  },
  {
    title: "Unbanked (Ternio)",
    desc: "Crypto fintech platform offering cards, banking, and payment rails for consumers and businesses. Built backend services, REST APIs, and event driven workers on AWS Lambda and SQS with full observability through Grafana and Prometheus.",
    tags: ["Node.js", "AWS", "SQS", "Lambda", "Grafana", "Prometheus"],
    year: "2021",
    role: "Full Stack Engineer",
    emoji: "◉",
    bg: "#f4d48a",
    category: "Fintech",
  },
  {
    title: "Indie SaaS Launches",
    desc: "A line of solo SaaS products I design, build, and ship end to end. Payments powered by Paddle and Lemon Squeezy, clean dashboards, authentication, and AI features. Idea to paying users in weeks, not quarters.",
    tags: ["Next.js", "Nuxt", "Paddle", "Lemon Squeezy", "LLMs"],
    year: "2024",
    role: "Solo Founder and Engineer",
    emoji: "✺",
    bg: "#e99aad",
    category: "SaaS",
  },
  {
    title: "Belize Social Security Board",
    desc: "Full stack systems for Belize's national social security institution. Built and maintained applications supporting benefit calculations, member records, and payment processing for the country's entire workforce.",
    tags: ["Full Stack", "Government", "Public Sector"],
    year: "2016",
    role: "Senior Software Engineer",
    emoji: "◎",
    bg: "#d6a853",
    category: "Enterprise",
  },
];

const filteredProjects = computed(() =>
  activeFilter.value === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter.value)
);

const tech = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Nuxt", "Vue", "Tailwind"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    items: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Temporal"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "GCP", "Docker", "Pulumi", "Terraform", "GitHub Actions"],
  },
  {
    category: "AI",
    items: ["OpenAI", "Anthropic", "Vector Databases", "RAG", "Agents"],
  },
];

onMounted(async () => {
  await nextTick();

  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  const reveal = (el: Element) => el.classList.add("visible");

  const sweep = () => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.classList.contains("visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 1.15 && rect.bottom > -vh * 0.1) reveal(el);
    });
  };

  sweep();

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0, rootMargin: "200px 0px 200px 0px" }
  );
  els.forEach((el) => obs.observe(el));

  window.addEventListener("scroll", sweep, { passive: true });
  window.addEventListener("load", sweep);

  setTimeout(() => els.forEach(reveal), 900);
});
</script>

<style scoped>
.page { position: relative; }

/* Header */
.head-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}
@media (min-width: 768px) { .head-section { padding: 80px 24px 20px; } }
.head-inner { max-width: 820px; }
.eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(232, 181, 100, 0.25);
  background: rgba(232, 181, 100, 0.06);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f4d48a;
  margin-bottom: 20px;
}
.h1 {
  font-size: clamp(40px, 6vw, 78px);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: #fff;
  margin-bottom: 22px;
}
.h2 {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
  line-height: 1.05;
  margin: 12px 0 14px;
}
.h3 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
}
.lead {
  color: #bdb5a5;
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.65;
}

/* Head stats */
.head-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 24px;
  margin-top: 32px;
  padding: 20px 4px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  max-width: 720px;
}
@media (min-width: 768px) {
  .head-stats { grid-template-columns: repeat(4, 1fr); }
}
.hs-cell { display: flex; flex-direction: column; gap: 6px; }
.hs-num {
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.hs-label {
  color: #8b8474;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.hs-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e8b564;
  box-shadow: 0 0 10px rgba(232, 181, 100, 0.75);
  animation: pulseDotP 1.8s ease-in-out infinite;
  display: inline-block;
}
@keyframes pulseDotP {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.25); opacity: 0.6; }
}

/* Filters */
.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.filter-chip {
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: #b0a89a;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
}
.filter-chip:hover {
  color: #fff;
  border-color: rgba(232, 181, 100, 0.35);
}
.filter-chip.active {
  color: #0b0809;
  background: #e8b564;
  border-color: transparent;
  box-shadow: 0 6px 20px -6px rgba(232, 181, 100, 0.55);
}

/* Section */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}
@media (min-width: 768px) { .section { padding: 100px 24px; } }

.section-head {
  max-width: 720px;
  margin-bottom: 36px;
}
.section-head .eyebrow { margin-bottom: 16px; }
.section-head .lead { margin-top: 14px; }

/* Capabilities */
.cap-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
}
@media (min-width: 640px) { .cap-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cap-grid { grid-template-columns: repeat(4, 1fr); } }

.cap-card {
  padding: 24px;
  border-radius: 18px;
}
.cap-icon {
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.cap-icon svg { width: 22px; height: 22px; }
.cap-card h3 {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.cap-card p {
  color: #b0a89a;
  font-size: 14px;
  line-height: 1.6;
}

/* Marquee */
.marquee-section {
  position: relative;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 11, 24, 0.4);
  backdrop-filter: blur(6px);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  margin-top: 20px;
}
.mq-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #e1dccf;
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  letter-spacing: 0.08em;
  white-space: nowrap;
  padding-right: 36px;
}
.mq-star {
  color: #e8b564;
}

/* Project grid */
.proj-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 640px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .proj-grid { grid-template-columns: repeat(3, 1fr); } }

.proj-card {
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  cursor: pointer;
}
.proj-card:hover {
  transform: translateY(-6px);
  border-color: rgba(224, 108, 135, 0.35);
  box-shadow: 0 30px 80px -30px rgba(234, 136, 89, 0.45);
}
.proj-thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.proj-thumb::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(5, 6, 13, 0.35) 100%);
}
.proj-orn {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.85;
}
.proj-orn .pulse-a {
  transform-origin: center;
  animation: pulseA 2.2s ease-in-out infinite;
}
@keyframes pulseA {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.proj-emoji {
  position: absolute;
  z-index: 3;
  top: 14px;
  left: 16px;
  font-size: 28px;
  color: rgba(11, 8, 9, 0.85);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
  line-height: 1;
}
.proj-badge {
  position: absolute;
  z-index: 3;
  top: 12px;
  right: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(11, 8, 9, 0.45);
  color: #f8e9c0;
  font-size: 11px;
  letter-spacing: 0.12em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
}
.proj-category {
  position: absolute;
  z-index: 3;
  left: 16px;
  bottom: 14px;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(11, 8, 9, 0.7);
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(11, 8, 9, 0.15);
  backdrop-filter: blur(4px);
}

.proj-body { padding: 20px 22px 22px; }
.proj-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 11px;
  color: #d6d0c2;
  font-family: "JetBrains Mono", monospace;
}
.proj-title {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}
.proj-desc {
  color: #b0a89a;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 14px;
}
.proj-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #7c83ab;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.proj-meta .arrow {
  color: #e8b564;
  transition: transform 0.3s ease;
}
.proj-card:hover .proj-meta .arrow {
  transform: translateX(6px);
}

/* Tech grid */
.tech-strip { padding-top: 20px; }
.tech-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 36px;
}
@media (min-width: 640px) { .tech-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .tech-grid { grid-template-columns: repeat(3, 1fr); } }

.tech-card {
  border-radius: 18px;
  padding: 22px;
}
.tech-cat {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: #e8b564;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Mini CTA */
.mini-cta {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 28px;
  border-radius: 22px;
  background: rgba(10, 11, 24, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}
@media (min-width: 768px) {
  .mini-cta { flex-direction: row; align-items: center; }
}
</style>
