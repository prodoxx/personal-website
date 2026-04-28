<template>
  <footer class="footer-root">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <p class="eyebrow mb-3">// End of file</p>
          <h3 class="footer-title text-gradient">Let's build something worth shipping.</h3>
        </div>
        <NuxtLink to="/contact" class="btn-primary">
          Start a project →
        </NuxtLink>
      </div>

      <div class="footer-grid">
        <div>
          <p class="footer-label">Navigate</p>
          <ul class="footer-list">
            <li><NuxtLink to="/" class="link-magnetic">Home</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="link-magnetic">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/blog" class="link-magnetic">Blog</NuxtLink></li>
            <li><NuxtLink to="/about" class="link-magnetic">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="link-magnetic">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <p class="footer-label">Connect</p>
          <ul class="footer-list">
            <li><a href="https://x.com/_reggieescobar" target="_blank" rel="noopener" class="link-magnetic">X / Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/reggie-escobar/" target="_blank" rel="noopener" class="link-magnetic">LinkedIn</a></li>
            <li><a href="https://github.com/prodoxx" target="_blank" rel="noopener" class="link-magnetic">GitHub</a></li>
            <li><a href="mailto:contact@reggieescobar.com" class="link-magnetic">Email</a></li>
          </ul>
        </div>

        <div>
          <p class="footer-label">Also</p>
          <ul class="footer-list">
            <li><NuxtLink to="/blog" class="link-magnetic">Blog</NuxtLink></li>
            <li><a href="/resume.pdf" target="_blank" class="link-magnetic">Résumé (PDF)</a></li>
          </ul>
        </div>

        <div class="footer-status glass-strong">
          <p class="eyebrow mb-2">Status</p>
          <p class="flex items-center gap-2 text-sm text-white">
            <span class="dot"></span> Open to new projects and full-time hire
          </p>
          <p class="text-xs text-ink-2 mt-2 font-mono-ui">Taipei · UTC+8 · Bangkok · UTC+7</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="font-mono-ui text-xs text-ink-3">
          © {{ new Date().getFullYear() }} Reggie Escobar
        </p>
        <p class="font-mono-ui text-xs text-ink-3">
          v4.0.{{ new Date().getFullYear() }}.04
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-root {
  position: relative;
  padding: 80px 16px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 60px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 48px;
}
@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    align-items: flex-end;
  }
}
.footer-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  max-width: 20ch;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #7c83ab;
  margin-bottom: 14px;
}
.footer-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-list a,
.footer-list :deep(a) {
  color: #e1dccf;
  font-size: 14px;
  transition: color 0.2s ease;
}
.footer-list a:hover,
.footer-list :deep(a:hover) {
  color: #e8b564;
}

.footer-status {
  padding: 16px;
  border-radius: 16px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 10px rgba(134, 239, 172, 0.8);
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.6; }
}

.text-ink-2 { color: #b0a89a; }
.text-ink-3 { color: #7a7265; }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
