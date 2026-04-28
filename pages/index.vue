<template>
  <div class="page">
    <!-- ====================== HERO ====================== -->
    <section class="hero">
      <!-- Background portrait + overlay -->
      <div class="hero-bg" aria-hidden="true">
        <div class="hero-bg-img"></div>
        <div class="hero-bg-overlay"></div>
        <div class="hero-bg-grain"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-left">

          <h1 class="hero-title a-fadeUp d-2">
            Hi, I'm
            <span class="text-gradient">Reggie Escobar</span>
            <span class="caret"></span>
          </h1>

          <p class="hero-sub a-fadeUp d-3">
            Senior software engineer helping founders and product teams ship
            fast, reliable web apps, mobile apps, and AI tools. I deliver the
            entire build from idea to launch with production quality and a
            shipping speed most teams can't match.
          </p>

          <div class="hero-ctas a-fadeUp d-4">
            <NuxtLink to="/portfolio" class="btn-primary">
              <span>See my work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-ghost">Get in touch</NuxtLink>
          </div>

          <!-- Quick stat row -->
          <div class="hero-strip a-fadeUp d-5">
            <div class="strip-cell">
              <span class="strip-num">7+</span>
              <span class="strip-label">years</span>
            </div>
            <div class="strip-sep"></div>
            <div class="strip-cell">
              <span class="strip-num">8+</span>
              <span class="strip-label">projects</span>
            </div>
            <div class="strip-sep"></div>
            <div class="strip-cell">
              <span class="strip-num">∞</span>
              <span class="strip-label">curiosity</span>
            </div>
          </div>
        </div>

        <!-- Right-side HUD (hero.png fills the rest via background) -->
        <div class="hero-right a-fadeUp d-4">
          <div class="hud glass">
            <div class="hud-row">
              <span class="hud-key font-mono-ui">ID</span>
              <span class="hud-val">a3f9c2e1b847d506f2e8c3a1d09b4e72</span>
            </div>
            <div class="hud-row">
              <span class="hud-key font-mono-ui">STATUS</span>
              <span class="hud-val flex items-center gap-2">
                <span class="dot-live"></span>ONLINE
              </span>
            </div>
            <div class="hud-row">
              <span class="hud-key font-mono-ui">LOC</span>
              <span class="hud-val">Global Remote</span>
            </div>
            <div class="hud-row">
              <span class="hud-key font-mono-ui">ROLE</span>
              <span class="hud-val">Senior Software Engineer</span>
            </div>
            <div class="hud-row">
              <span class="hud-key font-mono-ui">VER</span>
              <span class="hud-val">v4.2026</span>
            </div>

            <div class="hud-chips">
              <span class="hud-chip">⚡ Fast shipper</span>
              <span class="hud-chip">◈ Full-stack</span>
              <span class="hud-chip">✦ AI-native</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll / wayfinder -->
      <div class="wayfinder a-fadeIn d-6">
        <NuxtLink to="/portfolio" class="wf-link">
          <span class="wf-num font-mono-ui">02</span>
          <span class="wf-label">Portfolio</span>
          <span class="wf-arrow">→</span>
        </NuxtLink>
        <NuxtLink to="/blog" class="wf-link">
          <span class="wf-num font-mono-ui">03</span>
          <span class="wf-label">Blog</span>
          <span class="wf-arrow">→</span>
        </NuxtLink>
        <NuxtLink to="/about" class="wf-link">
          <span class="wf-num font-mono-ui">04</span>
          <span class="wf-label">About</span>
          <span class="wf-arrow">→</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="wf-link">
          <span class="wf-num font-mono-ui">05</span>
          <span class="wf-label">Contact</span>
          <span class="wf-arrow">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Reggie Escobar — Senior Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Reggie Escobar — senior software engineer with 7+ years shipping web, mobile, and AI-native software. Available for contract engagements.",
    },
    { property: "og:title", content: "Reggie Escobar — Senior Software Engineer" },
    { property: "og:description", content: "Senior software engineer with 7+ years building web, mobile, and AI-native products." },
    { property: "og:image", content: "https://reggieescobar.com/images/reggie.png" },
    { property: "og:url", content: "https://reggieescobar.com" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
  ],
  link: [{ rel: "canonical", href: "https://reggieescobar.com" }],
});
</script>

<style scoped>
.page {
  position: relative;
  min-height: calc(100vh - 88px);
  display: flex;
  align-items: center;
}

/* ==================== HERO ==================== */
.hero {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 60px;
  overflow: hidden;
  border-radius: 0;
  isolation: isolate;
}
@media (min-width: 768px) {
  .hero {
    padding: 60px 24px 80px;
    max-width: 1280px;
    border-radius: 28px;
    margin: 16px auto 0;
  }
}

/* Hero background image + overlays */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  border-radius: inherit;
}
.hero-bg-img {
  position: absolute;
  inset: 0;
  background-image: url('/hero.png');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  animation: heroDrift 24s ease-in-out infinite alternate;
  transform-origin: center;
  will-change: transform;
}
@keyframes heroDrift {
  from { transform: scale(1.04) translate(0, 0); }
  to   { transform: scale(1.1) translate(-12px, -8px); }
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(5, 6, 13, 0.95) 0%,
      rgba(5, 6, 13, 0.82) 30%,
      rgba(5, 6, 13, 0.45) 55%,
      rgba(5, 6, 13, 0.25) 75%,
      rgba(5, 6, 13, 0.55) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 6, 13, 0.35) 0%,
      transparent 30%,
      transparent 70%,
      rgba(5, 6, 13, 0.5) 100%
    ),
    radial-gradient(
      ellipse 70% 60% at 25% 50%,
      rgba(234, 136, 89, 0.25),
      transparent 60%
    );
}
.hero-bg-grain {
  position: absolute;
  inset: 0;
  opacity: 0.07;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  pointer-events: none;
}

/* On smaller screens center-align the figure better */
@media (max-width: 767px) {
  .hero-bg-img {
    background-position: 70% center;
  }
  .hero-bg-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(5, 6, 13, 0.55) 0%,
        rgba(5, 6, 13, 0.85) 60%,
        rgba(5, 6, 13, 0.95) 100%
      ),
      radial-gradient(circle at 50% 30%, rgba(234, 136, 89, 0.2), transparent 60%);
  }
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1.25fr 0.75fr;
    gap: 56px;
  }
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(232, 181, 100, 0.25);
  background: rgba(232, 181, 100, 0.06);
  margin-bottom: 28px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f4d48a;
}
.dot-live {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 10px rgba(134, 239, 172, 0.9);
  display: inline-block;
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.35); opacity: 0.55; }
}

.hero-title {
  font-size: clamp(42px, 7vw, 88px);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: #fff;
  margin-bottom: 20px;
}
.hero-sub {
  max-width: 560px;
  color: #bdb5a5;
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.65;
  margin-bottom: 32px;
}
.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

/* Hero strip */
.hero-strip {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 16px 22px;
  border-radius: 16px;
  background: rgba(10, 11, 24, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}
.strip-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.strip-num {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
}
.strip-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  color: #7c83ab;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.strip-sep {
  width: 1px;
  height: 28px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.16), transparent);
}

/* ===== HUD card (right column) ===== */
.hero-right {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
@media (max-width: 1023px) {
  .hero-right { justify-content: flex-start; }
}
.hud {
  position: relative;
  width: 100%;
  max-width: 340px;
  padding: 20px;
  border-radius: 18px;
  background: rgba(10, 11, 24, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px) saturate(140%);
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.hud::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(232, 181, 100, 0.4), rgba(224, 108, 135, 0.4));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.55;
}
.hud-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
  font-size: 12px;
}
.hud-row:last-of-type { border-bottom: none; }
.hud-key {
  color: #7c83ab;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.hud-val {
  color: #fff;
  font-weight: 500;
  text-align: right;
}
.hud-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.hud-chip {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 11px;
  color: #e1dccf;
  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.02em;
}

/* Wayfinder */
.wayfinder {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
}
.wf-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: #d6d0c2;
  font-size: 13px;
  transition: all 0.25s ease;
}
.wf-link:hover {
  color: #fff;
  border-color: rgba(232, 181, 100, 0.4);
  background: rgba(232, 181, 100, 0.06);
  transform: translateY(-2px);
}
.wf-num {
  font-size: 10px;
  color: #e8b564;
  letter-spacing: 0.18em;
}
.wf-arrow {
  color: #e8b564;
  transition: transform 0.3s ease;
}
.wf-link:hover .wf-arrow { transform: translateX(4px); }
</style>
