<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">

    <!-- Nav -->
    <nav class="fade-in fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span class="font-bold text-lg tracking-tight">Reggie Escobar</span>
        <a
          href="mailto:contact@reggieescobar.com"
          class="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="pt-32 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div class="slide-up">
          <h1 class="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            Your<br/>
            <span class="relative inline-block">
              personal
              <svg class="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0 6 Q 50 0, 100 6 T 200 6" fill="none" stroke="#3b82f6" stroke-width="3"/>
              </svg>
            </span>
            <br/>CTO.
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            11 years building software. From a landing page to a full SaaS — web and mobile.
            I help founders ship faster, smarter, and at a fraction of the usual cost.
          </p>

          <a
            href="mailto:contact@reggieescobar.com"
            class="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Work with me →
          </a>
        </div>

        <!-- Character — no background, no shadow -->
        <div class="flex justify-center md:justify-end slide-up-delay">
          <img
            src="/images/reggie.png"
            alt="Reggie Escobar"
            class="w-56 sm:w-72 h-auto"
          />
        </div>
      </div>
    </section>

    <!-- Social proof bar -->
    <section class="border-y border-gray-100 bg-gray-50 py-5 px-4 sm:px-6 fade-in-section">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 font-medium">
        <span class="shrink-0">Worked with teams from:</span>
        <div class="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-[#FF6600] rounded flex items-center justify-center shrink-0">
              <span class="text-white font-black text-xs leading-none">Y</span>
            </div>
            <span class="text-gray-700 font-semibold">Y Combinator</span>
          </div>
          <span class="text-gray-400">Silicon Valley Startups</span>
          <span class="text-gray-400 hidden sm:inline">Series A & B Companies</span>
          <span class="text-gray-400 hidden sm:inline">Early-stage Founders</span>
        </div>
      </div>
    </section>

    <!-- What I Build -->
    <section class="py-20 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto fade-in-section">
      <div class="mb-10 sm:mb-14">
        <p class="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">What I build</p>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight">From zero to shipped.</h2>
        <p class="text-gray-500 mt-3 text-base sm:text-lg max-w-xl">
          Whether you need something built from scratch or need help scaling what you already have — I can jump in at any stage.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="card-hover border border-gray-100 rounded-2xl p-6 sm:p-7 transition-all">
          <div class="text-3xl mb-4">🌐</div>
          <h3 class="font-bold text-lg mb-2">Marketing Websites</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Fast, polished, SEO-ready landing pages and marketing sites that convert visitors into customers.
          </p>
        </div>
        <div class="card-hover border border-gray-100 rounded-2xl p-6 sm:p-7 transition-all">
          <div class="text-3xl mb-4">⚙️</div>
          <h3 class="font-bold text-lg mb-2">Full SaaS Applications</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            End-to-end product engineering — auth, payments, dashboards, APIs, and the infrastructure to keep it running.
          </p>
        </div>
        <div class="card-hover border border-gray-100 rounded-2xl p-6 sm:p-7 transition-all">
          <div class="text-3xl mb-4">📱</div>
          <h3 class="font-bold text-lg mb-2">Mobile Apps (iOS & Android)</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Cross-platform apps with Expo/React Native. Ship to both app stores with a single codebase.
          </p>
        </div>
        <div class="card-hover border border-gray-100 rounded-2xl p-6 sm:p-7 transition-all">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="font-bold text-lg mb-2">Scale What You Have</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Join your existing team, audit the codebase, fix the bottlenecks, and help you move faster without adding headcount.
          </p>
        </div>
      </div>
    </section>

    <!-- AI Superpower -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 bg-black text-white fade-in-section">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p class="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-widest">AI-powered delivery</p>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6">
            What used to take months<br/>now takes days.
          </h2>
          <p class="text-gray-400 text-base sm:text-lg leading-relaxed">
            I leverage AI at every stage of the build — from design to deployment. The result: higher quality software,
            delivered faster, at a fraction of what an agency would charge.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
            <p class="text-3xl font-black text-white mb-1">11+</p>
            <p class="text-gray-400 text-sm">Years of engineering experience</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
            <p class="text-3xl font-black text-white mb-1">10x</p>
            <p class="text-gray-400 text-sm">Faster delivery with AI tools</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
            <p class="text-3xl font-black text-white mb-1">Full</p>
            <p class="text-gray-400 text-sm">Stack — web, mobile, backend, infra</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
            <p class="text-3xl font-black text-white mb-1">0</p>
            <p class="text-gray-400 text-sm">Agency overhead or markup</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="py-20 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto fade-in-section">
      <div class="mb-10 sm:mb-14">
        <p class="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">Experience</p>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight">Engineer + Product thinker.</h2>
        <p class="text-gray-500 mt-3 text-base sm:text-lg max-w-xl">
          I don't just write code — I understand the product, the user, and the business. That's what makes me more than a contractor.
        </p>
      </div>

      <div class="space-y-4">
        <div class="flex gap-4 sm:gap-5 p-5 sm:p-6 border border-gray-100 rounded-2xl items-start card-hover transition-all">
          <div class="text-2xl shrink-0">🏗️</div>
          <div>
            <h3 class="font-bold text-base mb-1">11 years of full-stack engineering</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Frontend to backend to DevOps — I've built across the full stack, from consumer apps to enterprise platforms.</p>
          </div>
        </div>
        <div class="flex gap-4 sm:gap-5 p-5 sm:p-6 border border-gray-100 rounded-2xl items-start card-hover transition-all">
          <div class="w-8 h-8 bg-[#FF6600] rounded flex items-center justify-center shrink-0">
            <span class="text-white font-black text-sm leading-none">Y</span>
          </div>
          <div>
            <h3 class="font-bold text-base mb-1">Silicon Valley & YC-backed companies</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Worked alongside world-class engineering and product teams at high-growth startups. I know what a real engineering culture looks like.</p>
          </div>
        </div>
        <div class="flex gap-4 sm:gap-5 p-5 sm:p-6 border border-gray-100 rounded-2xl items-start card-hover transition-all">
          <div class="text-2xl shrink-0">🎯</div>
          <div>
            <h3 class="font-bold text-base mb-1">Product management experience</h3>
            <p class="text-gray-500 text-sm leading-relaxed">I've led roadmaps, run sprints, and shipped features with business impact in mind — not just technical completeness.</p>
          </div>
        </div>
        <div class="flex gap-4 sm:gap-5 p-5 sm:p-6 border border-gray-100 rounded-2xl items-start card-hover transition-all">
          <div class="text-2xl shrink-0">🌎</div>
          <div>
            <h3 class="font-bold text-base mb-1">Remote-first, globally available</h3>
            <p class="text-gray-500 text-sm leading-relaxed">Based in Taipei, Taiwan. Available across US, EU, and APAC timezones. I work async by default and move fast.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Credentials -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950 text-white fade-in-section">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p class="text-gray-400 font-semibold text-sm mb-3 uppercase tracking-widest">Credentials</p>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-5">
            The credentials<br/>are covered.
          </h2>
          <p class="text-gray-400 text-base sm:text-lg leading-relaxed">
            You can be confident you're in good hands — the technical depth and business thinking to match.
          </p>
        </div>
        <div class="space-y-4">
          <div class="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
            <div class="text-2xl shrink-0">🎓</div>
            <div>
              <p class="font-bold text-white text-base">BSc. Computer Science</p>
              <p class="text-gray-400 text-sm mt-1">A rigorous technical foundation — algorithms, systems, and software engineering from first principles.</p>
            </div>
          </div>
          <div class="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
            <div class="text-2xl shrink-0">💼</div>
            <div>
              <p class="font-bold text-white text-base">MBA in Technology Management</p>
              <p class="text-gray-400 text-sm mt-1">Business strategy meets technical leadership. I understand what gets built and why it matters to the bottom line.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 sm:py-24 px-4 sm:px-6 bg-blue-50 border-t border-blue-100 fade-in-section">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight mb-4">Ready to build something?</h2>
        <p class="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
          Tell me what you're working on. I'll tell you honestly if I can help — and how fast we can ship it.
        </p>
        <a
          href="mailto:contact@reggieescobar.com"
          class="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors break-all sm:break-normal"
        >
          contact@reggieescobar.com
        </a>
        <div class="flex gap-6 justify-center mt-8 text-sm text-gray-500">
          <a href="https://x.com/_reggieescobar" target="_blank" class="hover:text-gray-900 transition-colors underline underline-offset-2">X / Twitter</a>
          <a href="https://www.linkedin.com/in/reggie-escobar/" target="_blank" class="hover:text-gray-900 transition-colors underline underline-offset-2">LinkedIn</a>
          <a href="/blog" class="hover:text-gray-900 transition-colors underline underline-offset-2">Blog</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-100 py-6 px-4 sm:px-6 text-center text-sm text-gray-400">
      © {{ new Date().getFullYear() }} Reggie Escobar
    </footer>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Reggie Escobar — Fractional CTO & Software Engineer for Hire",
  meta: [
    {
      name: "description",
      content:
        "Hire Reggie Escobar as your fractional CTO or contract software engineer. 11 years of experience building SaaS platforms, mobile apps, and scalable products. Worked with YC-backed and Silicon Valley startups. BSc Computer Science, MBA Technology Management. Available now.",
    },
    {
      name: "keywords",
      content:
        "fractional CTO for hire, contract software engineer, hire senior developer, SaaS developer for hire, startup CTO, technical co-founder, mobile app developer, React Native developer, full stack engineer, YC startup engineer, Silicon Valley developer, AI-powered development, build SaaS fast, MVP developer, startup engineer, product manager engineer, hire CTO, software consultant, Taipei developer, remote CTO",
    },
    { property: "og:title", content: "Reggie Escobar — Fractional CTO & Software Engineer for Hire" },
    {
      property: "og:description",
      content:
        "Your personal CTO for hire. 11 years building software — SaaS, mobile apps, and scalable products. Worked with YC-backed startups. Available for contract work.",
    },
    { property: "og:image", content: "https://reggieescobar.com/images/reggie.png" },
    { property: "og:url", content: "https://reggieescobar.com" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
    { name: "twitter:title", content: "Reggie Escobar — Fractional CTO & Software Engineer for Hire" },
    { name: "twitter:description", content: "Your personal CTO for hire. 11 years building software — SaaS, mobile apps, and scalable products." },
    { name: "twitter:image", content: "https://reggieescobar.com/images/reggie.png" },
  ],
  link: [{ rel: "canonical", href: "https://reggieescobar.com" }],
});

// Intersection observer for scroll animations
if (process.client) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  onMounted(() => {
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
  });
}
</script>

<style>
/* Entry animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0);    }
}

.fade-in {
  animation: fadeIn 0.6s ease both;
}

.slide-up {
  animation: slideUp 0.7s ease both;
}

.slide-up-delay {
  animation: slideUp 0.7s 0.15s ease both;
}

/* Scroll-triggered sections */
.fade-in-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Card hover lift */
.card-hover:hover {
  border-color: #bfdbfe;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
</style>
