<template>
  <div class="page">
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero-inner">
        <div class="intro a-fadeUp">
          <p class="eyebrow">// About me</p>
          <h1 class="h1">
            Engineer, <span class="text-gradient">builder</span>,<br />
            restless tinkerer.
          </h1>
          <p class="lead">
            I'm Reggie, a senior backend and full stack software engineer with
            over 7 years shipping production Node.js, Python, and TypeScript
            systems at scale. I've built payment integrations, AI
            infrastructure, and distributed backends for SaaS platforms,
            fintech products, and AI analytics companies. Great products live
            in the 1% of details most teams skip. That's where I spend my
            time.
          </p>
          <div class="meta a-fadeUp d-2">
            <span class="meta-item">
              <span class="dot-live"></span>
              Based in Taipei, Taiwan
            </span>
            <span class="meta-item font-mono-ui">UTC+8</span>
            <span class="meta-item font-mono-ui">Remote-first</span>
          </div>
        </div>

        <div class="portrait a-fadeUp d-3">
          <div class="portrait-bg">
            <div class="pr-ring"></div>
            <div class="pr-ring r2"></div>
          </div>
          <div class="portrait-card grad-border">
            <img src="/hero.png" alt="Reggie Escobar" class="portrait-img" />
            <div class="portrait-glow"></div>
            <div class="portrait-scan"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="story-grid reveal">
        <div>
          <p class="eyebrow mb-3">// Story</p>
          <h2 class="h2">A builder for as long as I can remember.</h2>
        </div>
        <div class="story-body">
          <p>
            I started writing code as a kid. Cheat menus for flash games
            became personal blogs, then tiny apps in college, then a career
            spent shipping software that real people use every day.
            Somewhere along the way I realized I wasn't just learning
            programming. I was learning how to think in systems.
          </p>
          <p>
            Over the last seven years I've built production backend and full
            stack systems for a crypto fintech, an AI analytics platform
            serving millions of enterprise users, a San Francisco payroll
            company, and an AI driven real estate SaaS. My work lives where
            distributed systems, payment integrations, and AI infrastructure
            meet. I've shipped it in Node.js, Python, and TypeScript across
            AWS and GCP, integrated payments with Paddle, Lemon Squeezy,
            Plaid, and QuickBooks, and led cloud migrations with zero
            downtime.
          </p>
          <p>
            On the side I ship my own SaaS products solo, which keeps my full
            stack chops sharp and my empathy for founders fresh. Today I'm
            most excited about products at the intersection of humans, AI,
            and thoughtful UX, where craftsmanship meets real capability. If
            your next product needs to ship fast without feeling rushed,
            let's talk.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section">
      <div class="stats-card grad-border reveal">
        <div class="stat-cell">
          <div class="stat-num text-gradient-ice">7<span>+</span></div>
          <div class="stat-label">Years shipping software</div>
        </div>
        <div class="stat-cell">
          <div class="stat-num text-gradient">8<span>+</span></div>
          <div class="stat-label">Products shipped end to end</div>
        </div>
        <div class="stat-cell">
          <div class="stat-num text-gradient-warm">10<span>×</span></div>
          <div class="stat-label">Shipping velocity with AI</div>
        </div>
        <div class="stat-cell">
          <div class="stat-num text-gradient">∞</div>
          <div class="stat-label">Curiosity for hard problems</div>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// 01 · Principles</p>
        <h2 class="h2">How I work.</h2>
      </div>
      <div class="principles">
        <div v-for="(p, i) in principles" :key="p.title" class="p-card glass reveal" :style="{ transitionDelay: (i * 0.06) + 's' }">
          <div class="p-index font-mono-ui">P/{{ String(i + 1).padStart(2, '0') }}</div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// 02 · Process</p>
        <h2 class="h2">A process that respects your runway.</h2>
      </div>

      <div class="timeline">
        <div class="t-step reveal">
          <div class="t-index font-mono-ui">01</div>
          <h4>Discover</h4>
          <p>We map the problem, the users, and the must haves versus nice to haves, then build only what moves the business.</p>
        </div>
        <div class="t-step reveal" style="transition-delay: .06s;">
          <div class="t-index font-mono-ui">02</div>
          <h4>Design</h4>
          <p>Lightweight wireframes first, then a real visual pass. I prototype in code, not in Figma theater, so what you see is what you ship.</p>
        </div>
        <div class="t-step reveal" style="transition-delay: .12s;">
          <div class="t-index font-mono-ui">03</div>
          <h4>Build</h4>
          <p>Typed, tested, continuously deployed. Weekly demos of real working software. You see progress every week, not slide decks.</p>
        </div>
        <div class="t-step reveal" style="transition-delay: .18s;">
          <div class="t-index font-mono-ui">04</div>
          <h4>Ship and iterate</h4>
          <p>Monitoring, metrics, and honest feedback loops from day one. We ship early, learn fast, and keep improving.</p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// 03 · Experience</p>
        <h2 class="h2">Career timeline.</h2>
      </div>

      <div class="tl">
        <div class="tl-rail"></div>
        <div v-for="(job, i) in experience" :key="job.company" class="tl-item reveal" :style="{ transitionDelay: (i * 0.07) + 's' }">
          <div class="tl-dot"></div>
          <div class="tl-card glass">
            <div class="tl-head">
              <span class="tl-when font-mono-ui">{{ job.when }}</span>
              <h3 class="tl-role">{{ job.role }} <span class="at">@ {{ job.company }}</span></h3>
            </div>
            <p>{{ job.description }}</p>
            <div class="tl-tags">
              <span v-for="t in job.tech" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Credentials -->
    <section class="section">
      <div class="cred-grid reveal">
        <div class="cred-card grad-border">
          <div class="cred-icon">🎓</div>
          <p class="eyebrow">Education · 2016</p>
          <h3 class="cred-title">BSc. Computer Science</h3>
          <p class="cred-sub">University of Belize. Algorithms, systems, and software engineering from first principles.</p>
        </div>
        <div class="cred-card grad-border">
          <div class="cred-icon">💼</div>
          <p class="eyebrow">Education · 2018</p>
          <h3 class="cred-title">MBA · National Tsinghua University</h3>
          <p class="cred-sub">Strategy and technical leadership. Building products that matter to the business, not just the backlog.</p>
        </div>
        <div class="cred-card grad-border">
          <div class="cred-icon">🌎</div>
          <p class="eyebrow">Locale</p>
          <h3 class="cred-title">Taipei · Global</h3>
          <p class="cred-sub">Permanent resident of Taiwan. Async first, comfortable working across US, EU, and APAC time zones.</p>
        </div>
      </div>
    </section>

    <!-- Off-the-clock -->
    <section class="section">
      <div class="off-card reveal">
        <div>
          <p class="eyebrow mb-3">// Off the clock</p>
          <h2 class="h2">When I'm not building.</h2>
        </div>
        <ul class="off-list">
          <li>🏃 Long runs through Taipei's river trails</li>
          <li>🎛️ Making electronic music in Ableton</li>
          <li>📚 Philosophy, systems thinking, and sci fi</li>
          <li>🍜 Hunting for the perfect bowl of beef noodle soup</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About · Reggie Escobar · Senior Backend and Full Stack Engineer",
  meta: [
    {
      name: "description",
      content:
        "Reggie Escobar is a senior backend and full stack software engineer with 7+ years shipping production Node.js, Python, and TypeScript systems for SaaS, fintech, and AI platforms. Principles, process, and career timeline.",
    },
  ],
});

const principles = [
  {
    title: "Details that matter",
    body: "Great software feels effortless because nothing is there by accident. I obsess over the details users feel but rarely name: timing, motion, copy, empty states, loading transitions. The payoff is a product that earns trust from the first click.",
  },
  {
    title: "Ship small, often",
    body: "Daily demos beat heroic releases. Progress compounds when the team commits to a cadence it can actually hold, and you see real working software from week one.",
  },
  {
    title: "Design meets code",
    body: "The best UX happens when design and engineering are one loop, not two departments. I design as I code and code as I design.",
  },
  {
    title: "Write it once, write it well",
    body: "Typed, tested, documented. The codebase you inherit should be easier to work in six months from now than the day it was handed over.",
  },
  {
    title: "AI is a teammate",
    body: "I use AI to think faster, write tighter, and catch issues earlier. It amplifies judgment, it does not replace it, and the final call is always human.",
  },
  {
    title: "Honest about trade offs",
    body: "Every decision is a trade off. My job is to make them visible and chosen on purpose, so you know what you are getting and what you are deferring.",
  },
];

const experience = [
  {
    when: "Feb 2025 / Feb 2026",
    role: "Senior Backend Software Engineer",
    company: "Propertyfi AI · Remote",
    description: "Owned backend, distributed systems, and AI infrastructure across AWS and GCP for an AI driven SaaS platform, designing modular services in TypeScript and Python with 99.9% uptime. Built high throughput Temporal workflows, led infrastructure as code with Pulumi and GitHub Actions CI/CD, and executed an AWS to GCP migration with zero downtime and zero data loss. Shipped AI assisted engineering workflows and agent driven automation to accelerate team productivity.",
    tech: ["TypeScript", "Python", "AWS", "GCP", "Temporal", "Pulumi", "GitHub Actions"],
  },
  {
    when: "Feb 2024 / Nov 2024",
    role: "Senior Full Stack Software Engineer",
    company: "Central · Remote",
    description: "Integrated Plaid and QuickBooks for payroll workflows and migrated payroll infrastructure to support international operations with secure, scalable data handling. Owned full stack features end to end across a Next.js frontend and Node.js backend for an enterprise SaaS platform, implemented OIDC authentication, and built an LLM powered Slack bot using multi step agent tool calling to automate HR and payroll workflows.",
    tech: ["Next.js", "Node.js", "TypeScript", "Plaid", "QuickBooks", "OIDC", "LLMs"],
  },
  {
    when: "May 2022 / Feb 2024",
    role: "Senior Software Engineer II",
    company: "Appier · Taipei",
    description: "Built and maintained Node.js backend services and GraphQL APIs for an AI SaaS analytics platform serving millions of enterprise users. Identified and resolved a critical production regression through full stack profiling, cutting platform load time from 20.56s to 602ms. Built data aggregation systems and helped develop ETL pipelines with Airflow, Spark, and AWS S3 while reviewing pull requests and mentoring peers on architecture and code quality.",
    tech: ["Node.js", "GraphQL", "Airflow", "Spark", "AWS", "PostgreSQL"],
  },
  {
    when: "Jan 2020 / Nov 2021",
    role: "Full Stack Software Engineer",
    company: "Ternio (Unbanked) · Remote",
    description: "Built backend services and REST APIs for a crypto fintech platform and integrated credit card cryptocurrency purchases through third party banking and payment systems. Developed event driven services on AWS SQS and Lambda to handle asynchronous transaction flows and third party webhooks, decoupling critical fintech workflows for reliability and scale. Implemented real time monitoring and alerting with Grafana and Prometheus to catch anomalies in production.",
    tech: ["Node.js", "AWS", "SQS", "Lambda", "REST", "Grafana", "Prometheus"],
  },
  {
    when: "Jun 2015 / Aug 2016",
    role: "Senior Software Engineer",
    company: "Belize Social Security Board · Belmopan",
    description: "Built and maintained software systems for Belize's national social security institution, delivering reliable tooling used by agency staff and citizens across the country. My first professional engineering role, where I learned the fundamentals of shipping production software that real people depend on.",
    tech: [],
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

  // Immediate reveal of anything already in or near the viewport.
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

  // Extra coverage: sweep again on scroll and on full page load.
  window.addEventListener("scroll", sweep, { passive: true });
  window.addEventListener("load", sweep);

  // Hard safety net: nothing stays invisible past 900ms.
  setTimeout(() => els.forEach(reveal), 900);
});
</script>

<style scoped>
.page { position: relative; }

.about-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 40px;
}
@media (min-width: 768px) {
  .about-hero { padding: 80px 24px 60px; }
}
.about-hero-inner {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 1024px) {
  .about-hero-inner { grid-template-columns: 1.35fr 1fr; }
}

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
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.04;
  color: #fff;
  margin-bottom: 22px;
}
.h2 {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
  line-height: 1.08;
  margin: 12px 0 14px;
}
.lead {
  color: #bdb5a5;
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.65;
  max-width: 580px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 32px;
}
.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #d6d0c2;
  font-size: 13px;
}
.dot-live {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 10px rgba(134, 239, 172, 0.9);
  animation: pulseA 1.8s ease-in-out infinite;
}
@keyframes pulseA {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.55; }
}

/* Portrait */
.portrait {
  position: relative;
  justify-self: center;
  width: min(360px, 85vw);
  aspect-ratio: 1 / 1;
}
.portrait-bg {
  position: absolute;
  inset: 0;
}
.pr-ring {
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  border: 1px solid rgba(224, 108, 135, 0.2);
  animation: spinA 36s linear infinite;
}
.pr-ring.r2 {
  inset: -80px;
  border: 1px dashed rgba(232, 181, 100, 0.22);
  animation: spinB 48s linear infinite reverse;
}
@keyframes spinA { to { transform: rotate(360deg); } }
@keyframes spinB { to { transform: rotate(360deg); } }

.portrait-card {
  position: relative;
  z-index: 2;
  border-radius: 24px;
  background: #14100e;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  box-shadow:
    0 30px 80px -20px rgba(234, 136, 89, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.portrait-card .portrait-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.portrait-card:hover .portrait-img {
  transform: scale(1.04);
}
.portrait-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 25% 15%, rgba(224, 108, 135, 0.28), transparent 55%),
    radial-gradient(circle at 80% 90%, rgba(232, 181, 100, 0.22), transparent 55%),
    linear-gradient(180deg, transparent 50%, rgba(5, 6, 13, 0.55) 100%);
  mix-blend-mode: screen;
  opacity: 0.8;
}
.portrait-scan {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 25%;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(232, 181, 100, 0.08) 50%,
    transparent 100%
  );
  animation: portraitScan 7s linear infinite;
}
@keyframes portraitScan {
  0%   { transform: translateY(-30%); opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateY(420%); opacity: 0; }
}

/* Make the portrait taller on desktop so the full figure breathes */
@media (min-width: 1024px) {
  .portrait { width: min(420px, 90%); }
}

/* Sections */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}
@media (min-width: 768px) {
  .section { padding: 100px 24px; }
}
.section-head { max-width: 820px; margin-bottom: 40px; }

/* Story */
.story-grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}
@media (min-width: 900px) {
  .story-grid { grid-template-columns: 1fr 1.25fr; gap: 60px; }
}
.story-body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #d2ccbe;
  font-size: clamp(15px, 1.3vw, 17px);
  line-height: 1.75;
}

/* Stats */
.stats-card {
  border-radius: 24px;
  padding: 36px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  backdrop-filter: blur(12px);
}
@media (min-width: 768px) {
  .stats-card { grid-template-columns: repeat(4, 1fr); }
}
.stat-cell { text-align: center; }
.stat-num {
  font-size: clamp(44px, 5.5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}
.stat-num span { font-size: 0.6em; opacity: 0.7; }
.stat-label {
  margin-top: 8px;
  color: #b0a89a;
  font-size: 12px;
  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Timeline (Process) */
.timeline {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 18px;
}
@media (min-width: 768px) { .timeline { grid-template-columns: repeat(4, 1fr); } }

.t-step {
  padding: 28px 24px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  transition: all 0.3s ease;
}
.t-step:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(232, 181, 100, 0.25);
  transform: translateY(-3px);
}
.t-index {
  display: inline-block;
  padding: 4px 8px;
  background: rgba(232, 181, 100, 0.1);
  color: #e8b564;
  border-radius: 6px;
  font-size: 11px;
  letter-spacing: 0.2em;
  margin-bottom: 16px;
}
.t-step h4 {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
}
.t-step p {
  color: #b0a89a;
  font-size: 14px;
  line-height: 1.65;
}

/* Principles */
.principles {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 700px) { .principles { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .principles { grid-template-columns: repeat(3, 1fr); } }

.p-card {
  padding: 26px;
  border-radius: 18px;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease;
}
.p-card:hover {
  transform: translateY(-4px);
  border-color: rgba(224, 108, 135, 0.35);
}
.p-index {
  font-size: 11px;
  color: #e8b564;
  letter-spacing: 0.2em;
  margin-bottom: 14px;
}
.p-card h3 {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}
.p-card p {
  color: #b0a89a;
  font-size: 14px;
  line-height: 1.65;
}

/* Timeline */
.tl {
  position: relative;
  padding-left: 28px;
}
.tl-rail {
  position: absolute;
  left: 10px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: linear-gradient(180deg, #e8b564, #e06c87, rgba(255, 255, 255, 0.08));
  border-radius: 1px;
  opacity: 0.6;
}
.tl-item {
  position: relative;
  padding-bottom: 28px;
}
.tl-dot {
  position: absolute;
  left: -23px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #14100e;
  border: 2px solid #e8b564;
  box-shadow: 0 0 14px rgba(232, 181, 100, 0.7);
}
.tl-card {
  padding: 22px;
  border-radius: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.tl-card:hover {
  transform: translateX(4px);
  border-color: rgba(224, 108, 135, 0.35);
}
.tl-head { margin-bottom: 10px; }
.tl-when {
  display: inline-block;
  font-size: 11px;
  color: #e8b564;
  letter-spacing: 0.2em;
  margin-bottom: 6px;
}
.tl-role {
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.01em;
}
.tl-role .at { color: #b0a89a; font-weight: 500; }
.tl-card p {
  color: #c6bfae;
  font-size: 14px;
  line-height: 1.65;
  margin-bottom: 12px;
}
.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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

/* Credentials */
.cred-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 768px) { .cred-grid { grid-template-columns: repeat(3, 1fr); } }
.cred-card {
  padding: 28px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}
.cred-card:hover { transform: translateY(-4px); }
.cred-icon { font-size: 28px; margin-bottom: 16px; }
.cred-title {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.01em;
  margin: 10px 0 8px;
}
.cred-sub {
  color: #b0a89a;
  font-size: 14px;
  line-height: 1.6;
}

/* Off card */
.off-card {
  padding: 40px 28px;
  border-radius: 24px;
  background: rgba(10, 11, 24, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  display: grid;
  gap: 28px;
  grid-template-columns: 1fr;
}
@media (min-width: 900px) {
  .off-card { grid-template-columns: 1fr 1fr; align-items: center; }
}
.off-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #d6d0c2;
  font-size: 16px;
}
</style>
