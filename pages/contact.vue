<template>
  <div class="page">
    <section class="contact-hero">
      <div class="hero-inner">
        <div class="left a-fadeUp">
          <p class="eyebrow">// Contact · Initiate transmission</p>
          <h1 class="h1">
            Let's build<br />
            <span class="text-gradient">something real.</span>
          </h1>
          <p class="lead">
            I work with founders, design teams, and engineering leaders who want
            to ship products that feel good to use. Tell me what you're working
            on — I'll tell you honestly if I can help.
          </p>

          <div class="channels a-fadeUp d-2">
            <a href="mailto:contact@reggieescobar.com" class="channel glass">
              <div class="ch-icon">✉︎</div>
              <div>
                <p class="ch-label">Email</p>
                <p class="ch-value">contact@reggieescobar.com</p>
              </div>
              <div class="ch-go">→</div>
            </a>
            <a href="https://x.com/_reggieescobar" target="_blank" rel="noopener" class="channel glass">
              <div class="ch-icon">𝕏</div>
              <div>
                <p class="ch-label">Twitter / X</p>
                <p class="ch-value">@_reggieescobar</p>
              </div>
              <div class="ch-go">→</div>
            </a>
            <a href="https://www.linkedin.com/in/reggie-escobar/" target="_blank" rel="noopener" class="channel glass">
              <div class="ch-icon">in</div>
              <div>
                <p class="ch-label">LinkedIn</p>
                <p class="ch-value">reggie-escobar</p>
              </div>
              <div class="ch-go">→</div>
            </a>
          </div>

          <div class="status-box glass a-fadeUp d-3">
            <div class="flex items-center gap-3">
              <span class="dot-live"></span>
              <span class="text-white font-medium">Currently available</span>
            </div>
            <p class="status-sub">
              Open to new contract engagements starting
              <span class="text-cyan">{{ availableDate }}</span>.
              I reply within one business day.
            </p>
          </div>
        </div>

        <div class="right a-fadeUp d-2">
          <form class="form grad-border" @submit.prevent="handleSubmit" novalidate>
            <div class="form-head">
              <p class="eyebrow">// Transmission form</p>
              <h2 class="form-title">Send a message</h2>
            </div>

            <div class="field">
              <label for="name">Your name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div class="field">
              <label>What are you building?</label>
              <div class="chip-row">
                <button
                  type="button"
                  v-for="tag in topics"
                  :key="tag"
                  :class="['chip-btn', form.topic === tag && 'active']"
                  @click="form.topic = tag"
                >
                  {{ tag }}
                </button>
              </div>
            </div>

            <div class="field">
              <label for="msg">Tell me about it</label>
              <textarea
                id="msg"
                v-model="form.message"
                rows="5"
                placeholder="A short brief, timeline, and where you are in the journey..."
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full justify-center">
              {{ sent ? "Message ready ✓ opening email..." : "Send via email →" }}
            </button>

            <p class="form-note font-mono-ui">
              Prefer a direct email? Hit
              <a href="mailto:contact@reggieescobar.com" class="text-cyan link-magnetic">contact@reggieescobar.com</a>.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="section-head reveal">
        <p class="eyebrow">// FAQ</p>
        <h2 class="h2">Questions I get a lot.</h2>
      </div>

      <div class="faq-list">
        <details v-for="(f, i) in faqs" :key="f.q" class="faq glass reveal" :style="{ transitionDelay: (i * 0.04) + 's' }">
          <summary>
            <span>{{ f.q }}</span>
            <span class="plus">＋</span>
          </summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section cta-wrap">
      <div class="cta-card reveal">
        <div class="cta-bg"></div>
        <div class="cta-content">
          <p class="eyebrow mb-3">// Let's build</p>
          <h2 class="cta-title">
            Have an idea in your head?<br/>
            <span class="text-gradient">Let's get it into production.</span>
          </h2>
          <p class="cta-sub">
            I take on a small number of engagements at a time — from
            fractional CTO roles to full-build contracts.
          </p>
          <div class="flex flex-wrap gap-3 justify-center mt-8">
            <a href="mailto:contact@reggieescobar.com" class="btn-primary">Email me →</a>
            <NuxtLink to="/portfolio" class="btn-ghost">View portfolio</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact — Reggie Escobar",
  meta: [{ name: "description", content: "Get in touch with Reggie Escobar for contract software engineering, fractional CTO, or AI-native product work." }],
});

const topics = ["SaaS build", "Mobile app", "AI / LLM", "Fractional CTO", "Audit / advisory"];

const form = reactive({
  name: "",
  email: "",
  topic: "",
  message: "",
});

const sent = ref(false);

const availableDate = computed(() => {
  return "April 2026";
});

function handleSubmit() {
  const subject = encodeURIComponent(`New project — ${form.topic || "General"}`);
  const body = encodeURIComponent(
    `Hi Reggie,\n\nI'm ${form.name} (${form.email}).\n\nTopic: ${form.topic}\n\n${form.message}`
  );
  sent.value = true;
  window.location.href = `mailto:contact@reggieescobar.com?subject=${subject}&body=${body}`;
}

const faqs = [
  {
    q: "What types of engagements do you take?",
    a: "Contract full-builds, fractional CTO roles, short audits, and collaborations with design/product teams. Typically 3–6 month engagements, sometimes longer.",
  },
  {
    q: "Are you available for full-time roles?",
    a: "I am available for full-time roles.",
  },
  {
    q: "What's your timezone?",
    a: "Taipei (UTC+8) & Bangkok (UTC+7). I work async-first and have significant overlap with EU morning and US evening. I've shipped with teams across every continent.",
  },
  {
    q: "Do you do pure frontend or pure backend?",
    a: "I'm a full-stack engineer by default, but I'm happy to scope to any layer. My strongest areas: complex frontend, typed APIs, auth/billing, AI-native features.",
  },
  {
    q: "What does engagement typically look like?",
    a: "We start with a 30-minute call, a tight scoping document, and a clear milestone plan. Weekly demos. You'll see real, working software within the first sprint.",
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

.contact-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}
@media (min-width: 768px) { .contact-hero { padding: 80px 24px 80px; } }
.hero-inner {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  align-items: start;
}
@media (min-width: 1024px) { .hero-inner { grid-template-columns: 1fr 1fr; gap: 56px; } }

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
  line-height: 1.05;
  margin: 12px 0 14px;
}
.lead {
  color: #bdb5a5;
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.65;
  max-width: 520px;
}

/* Channels */
.channels {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 540px;
}
.channel {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  color: #efece5;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.channel:hover {
  transform: translateX(4px);
  border-color: rgba(224, 108, 135, 0.35);
  background: rgba(224, 108, 135, 0.06);
}
.ch-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(232, 181, 100, 0.2), rgba(224, 108, 135, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 16px;
  color: #fff;
}
.ch-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  color: #7c83ab;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.ch-value {
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-top: 3px;
}
.ch-go {
  margin-left: auto;
  color: #e8b564;
  font-weight: 700;
}

/* Status */
.status-box {
  margin-top: 22px;
  padding: 18px;
  border-radius: 16px;
  max-width: 540px;
}
.status-sub {
  margin-top: 8px;
  color: #bdb5a5;
  font-size: 13px;
  line-height: 1.6;
}
.text-cyan { color: #e8b564; }
.dot-live {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 10px rgba(134, 239, 172, 0.9);
  animation: pulseX 1.8s ease-in-out infinite;
}
@keyframes pulseX {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.55; }
}

/* Form */
.form {
  padding: 32px 28px;
  border-radius: 22px;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-head {
  margin-bottom: 4px;
}
.form-title {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.01em;
  margin-top: 8px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.field label {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #7c83ab;
}
.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  resize: vertical;
}
.field input::placeholder,
.field textarea::placeholder {
  color: #7a7265;
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: rgba(232, 181, 100, 0.55);
  box-shadow: 0 0 0 4px rgba(232, 181, 100, 0.1);
  background: rgba(232, 181, 100, 0.04);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip-btn {
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  color: #d6d0c2;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.chip-btn:hover {
  color: #fff;
  border-color: rgba(232, 181, 100, 0.35);
}
.chip-btn.active {
  color: #0b0809;
  background: #e8b564;
  border-color: transparent;
  box-shadow: 0 4px 16px -4px rgba(232, 181, 100, 0.55);
}

.form-note {
  text-align: center;
  font-size: 11px;
  color: #7c83ab;
  margin-top: 6px;
}
.w-full { width: 100%; }
.justify-center { justify-content: center; }

/* FAQ */
.section {
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 20px;
}
@media (min-width: 768px) { .section { padding: 100px 24px; } }
.section-head { margin-bottom: 32px; }

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.faq {
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.faq[open] {
  border-color: rgba(224, 108, 135, 0.35);
}
.faq summary {
  list-style: none;
  cursor: pointer;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.005em;
}
.faq summary::-webkit-details-marker { display: none; }
.plus {
  color: #e8b564;
  font-size: 18px;
  transition: transform 0.3s ease;
}
.faq[open] .plus { transform: rotate(45deg); }
.faq p {
  padding: 0 22px 22px;
  color: #bdb5a5;
  font-size: 14px;
  line-height: 1.7;
}

/* CTA */
.cta-wrap { max-width: 1200px; }
.cta-card {
  position: relative;
  border-radius: 28px;
  padding: 64px 24px;
  overflow: hidden;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(10, 11, 24, 0.6);
  backdrop-filter: blur(14px);
}
.cta-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(232, 181, 100, 0.25), transparent 55%),
    radial-gradient(circle at 80% 70%, rgba(224, 108, 135, 0.3), transparent 55%),
    radial-gradient(circle at 50% 50%, rgba(234, 136, 89, 0.2), transparent 70%);
  animation: ctaShift 14s ease-in-out infinite alternate;
}
@keyframes ctaShift {
  from { transform: scale(1) translate(0, 0); }
  to   { transform: scale(1.1) translate(-10px, -10px); }
}
.cta-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}
.cta-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 14px;
}
.cta-sub {
  color: #bdb5a5;
  font-size: clamp(14px, 1.3vw, 17px);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 auto;
}
.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.gap-3 { gap: 0.75rem; }
.justify-center { justify-content: center; }
.mt-8 { margin-top: 2rem; }
</style>
