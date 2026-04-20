<template>
  <header class="nav-root a-fadeIn">
    <div class="nav-bar">
      <!-- Standalone brand pill (left) -->
      <NuxtLink to="/" class="brand" aria-label="Home — Reggie Escobar">
        <span class="brand-mark">
          <svg viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#e8b564" />
                <stop offset="100%" stop-color="#e06c87" />
              </linearGradient>
            </defs>
            <polygon
              points="20,3 35,12 35,28 20,37 5,28 5,12"
              stroke="url(#logoG)"
              stroke-width="1.5"
              fill="none"
            />
            <polygon
              points="20,11 28,16 28,24 20,29 12,24 12,16"
              fill="url(#logoG)"
              opacity="0.25"
            />
            <circle cx="20" cy="20" r="2.2" fill="#e8b564" />
          </svg>
        </span>
        <span class="brand-name">Reggie<span class="brand-name-extra"> Escobar</span></span>
      </NuxtLink>

      <!-- Centered nav pill (menu items only) -->
      <nav class="nav-pill" aria-label="Primary">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="is-active"
          :exact-active-class="item.to === '/' ? 'is-active' : undefined"
        >
          <span class="nav-index font-mono-ui">{{ item.index }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Right side CTA + mobile toggle -->
      <div class="nav-right">
        <NuxtLink to="/contact" class="btn-primary hidden-mobile">
          <span class="dot-status"></span>
          <span class="available-text">Available</span>
        </NuxtLink>

        <!-- Hamburger button — mobile only -->
        <button
          class="burger md-hide"
          :class="{ 'is-open': open }"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <span class="burger-line a"></span>
          <span class="burger-line b"></span>
          <span class="burger-line c"></span>
        </button>
      </div>
    </div>

    <!-- Mobile overlay menu -->
    <Transition name="mobile-menu">
      <div v-if="open" class="mobile-overlay" @click.self="open = false">
        <div class="mobile-panel glass-strong">
          <div class="mobile-panel-header">
            <span class="mobile-panel-title font-mono-ui">Menu</span>
            <button class="mobile-close" aria-label="Close menu" @click="open = false">✕</button>
          </div>
          <nav class="mobile-nav">
            <NuxtLink
              v-for="item in items"
              :key="item.to"
              :to="item.to"
              class="mobile-link"
              active-class="is-active"
              @click="open = false"
            >
              <span class="mobile-link-index font-mono-ui">{{ item.index }}</span>
              <span class="mobile-link-label">{{ item.label }}</span>
              <span class="mobile-link-arrow">→</span>
            </NuxtLink>
          </nav>
          <NuxtLink to="/contact" class="btn-primary mobile-cta" @click="open = false">
            <span class="dot-status"></span>
            <span>Available — Let's talk</span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false);

const items = [
  { to: "/", label: "Home", index: "01" },
  { to: "/portfolio", label: "Portfolio", index: "02" },
  { to: "/about", label: "About", index: "03" },
  { to: "/contact", label: "Contact", index: "04" },
];

// Close drawer on route change
const route = useRoute();
watch(() => route.fullPath, () => (open.value = false));
</script>

<style scoped>
.nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 14px 16px 0;
}

.nav-bar {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
}

/* Shared floating-pill surface for brand + nav */
.brand,
.nav-pill {
  background: linear-gradient(
    180deg,
    rgba(10, 11, 24, 0.75) 0%,
    rgba(10, 11, 24, 0.5) 100%
  );
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  box-shadow:
    0 10px 40px -10px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* Standalone brand (left) */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 10px;
  transition: transform 0.3s ease, border-color 0.3s ease;
  white-space: nowrap;
}
.brand:hover {
  transform: translateY(-1px);
  border-color: rgba(232, 181, 100, 0.3);
}
.brand-mark {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 10px rgba(232, 181, 100, 0.5));
}
.brand-mark svg {
  width: 100%;
  height: 100%;
  animation: logoSpin 14s linear infinite;
}
@keyframes logoSpin {
  from { transform: rotate(0); }
  to   { transform: rotate(360deg); }
}
.brand-name {
  font-weight: 700;
  letter-spacing: -0.005em;
  color: #fff;
  font-size: 14px;
}
@media (max-width: 480px) {
  .brand-name-extra { display: none; }
  .available-text { display: none; }
}

/* Center nav pill (menu items only) */
.nav-pill {
  display: none;
  gap: 4px;
  align-items: center;
  padding: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 768px) {
  .nav-pill { display: inline-flex; }
}
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: #d6d0c2;
  transition: color 0.25s ease, background 0.25s ease;
}
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
}
.nav-link.is-active {
  color: #0b0809;
  background: #e8b564;
  box-shadow: 0 6px 24px -8px rgba(232, 181, 100, 0.55);
}
.nav-link.is-active .nav-index {
  color: rgba(11, 8, 9, 0.55);
}
.nav-index {
  font-size: 10px;
  opacity: 0.55;
  letter-spacing: 0.1em;
}

/* Right */
.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dot-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #86efac;
  box-shadow: 0 0 10px rgba(134, 239, 172, 0.9);
  animation: pulseDot 1.8s ease-in-out infinite;
}
@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.6; }
}

/* Hide CTA on mobile, show burger instead */
@media (max-width: 767px) {
  .hidden-mobile { display: none; }
}
@media (min-width: 768px) {
  .md-hide { display: none !important; }
}

/* Burger */
.burger {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.burger:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(232, 181, 100, 0.3);
}
.burger-line {
  width: 18px;
  height: 1.5px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}
/* Default (closed) state — normal lines */
.burger .burger-line.a { transform: none; }
.burger .burger-line.b { opacity: 1; }
.burger .burger-line.c { transform: none; }
/* Open state — X */
.burger.is-open .burger-line.a { transform: translateY(6.5px) rotate(45deg); }
.burger.is-open .burger-line.b { opacity: 0; width: 0; }
.burger.is-open .burger-line.c { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile overlay */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 49;
  background: rgba(5, 6, 13, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 80px 12px 12px;
  display: flex;
  flex-direction: column;
}

.mobile-panel {
  background: linear-gradient(
    160deg,
    rgba(14, 15, 30, 0.97) 0%,
    rgba(10, 11, 24, 0.97) 100%
  );
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  box-shadow:
    0 24px 80px -16px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.mobile-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px 6px;
}
.mobile-panel-title {
  font-size: 10px;
  letter-spacing: 0.15em;
  color: rgba(232, 181, 100, 0.7);
  text-transform: uppercase;
}
.mobile-close {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.mobile-close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.mobile-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #c8c2b4;
  border-radius: 16px;
  border: 1px solid transparent;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.mobile-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.06);
}
.mobile-link.is-active {
  background: rgba(232, 181, 100, 0.1);
  color: #e8b564;
  border-color: rgba(232, 181, 100, 0.2);
}
.mobile-link-index {
  font-size: 10px;
  letter-spacing: 0.1em;
  opacity: 0.45;
  min-width: 18px;
}
.mobile-link.is-active .mobile-link-index {
  opacity: 0.7;
}
.mobile-link-label {
  flex: 1;
}
.mobile-link-arrow {
  color: #e8b564;
  opacity: 0.5;
  font-size: 14px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.mobile-link:hover .mobile-link-arrow,
.mobile-link.is-active .mobile-link-arrow {
  transform: translateX(3px);
  opacity: 1;
}

.mobile-cta {
  margin-top: 6px;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
}

/* Mobile menu transition */
.mobile-menu-enter-active {
  transition: opacity 0.25s ease;
}
.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
.mobile-menu-enter-active .mobile-panel,
.mobile-menu-leave-active .mobile-panel {
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.25s ease;
}
.mobile-menu-enter-from .mobile-panel {
  transform: translateY(-16px) scale(0.97);
  opacity: 0;
}
.mobile-menu-leave-to .mobile-panel {
  transform: translateY(-8px) scale(0.98);
  opacity: 0;
}
</style>
