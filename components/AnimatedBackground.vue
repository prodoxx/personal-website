<template>
  <div class="bg-root" aria-hidden="true">
    <!-- Base vignette gradient -->
    <div class="bg-base"></div>

    <!-- Blurred gradient orbs -->
    <div class="orb orb--cyan"></div>
    <div class="orb orb--violet"></div>
    <div class="orb orb--indigo"></div>
    <div class="orb orb--pink"></div>

    <!-- Grid overlay -->
    <div class="grid-overlay absolute inset-0 opacity-[0.18] mask-radial"></div>

    <!-- Scanline sweep -->
    <div class="scanline"></div>

    <!-- Floating abstract SVG shapes -->
    <svg class="shape shape--hex" viewBox="0 0 200 200" fill="none">
      <polygon
        points="100,10 190,55 190,145 100,190 10,145 10,55"
        stroke="url(#gradCyan)"
        stroke-width="1.25"
        fill="none"
      />
      <polygon
        points="100,35 168,68 168,132 100,165 32,132 32,68"
        stroke="url(#gradCyan)"
        stroke-width="0.75"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="gradCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e8b564" />
          <stop offset="100%" stop-color="#ea8859" />
        </linearGradient>
      </defs>
    </svg>

    <svg class="shape shape--tri" viewBox="0 0 200 200" fill="none">
      <polygon
        points="100,15 185,170 15,170"
        stroke="url(#gradViolet)"
        stroke-width="1"
        fill="none"
      />
      <polygon
        points="100,55 155,150 45,150"
        stroke="url(#gradViolet)"
        stroke-width="0.6"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="gradViolet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e06c87" />
          <stop offset="100%" stop-color="#e99aad" />
        </linearGradient>
      </defs>
    </svg>

    <svg class="shape shape--ring" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="80" stroke="url(#gradIce)" stroke-width="1" />
      <circle cx="100" cy="100" r="55" stroke="url(#gradIce)" stroke-width="0.75" opacity="0.6" />
      <circle cx="100" cy="100" r="30" stroke="url(#gradIce)" stroke-width="0.5" opacity="0.4" />
      <defs>
        <linearGradient id="gradIce" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f4d48a" />
          <stop offset="100%" stop-color="#ea8859" />
        </linearGradient>
      </defs>
    </svg>

    <svg class="shape shape--square" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="20" width="160" height="160" stroke="url(#gradWarm)" stroke-width="1" />
      <rect x="45" y="45" width="110" height="110" stroke="url(#gradWarm)" stroke-width="0.75" opacity="0.55" />
      <rect x="70" y="70" width="60" height="60" stroke="url(#gradWarm)" stroke-width="0.5" opacity="0.35" />
      <defs>
        <linearGradient id="gradWarm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e99aad" />
          <stop offset="100%" stop-color="#e06c87" />
        </linearGradient>
      </defs>
    </svg>

    <svg class="shape shape--plus" viewBox="0 0 60 60" fill="none">
      <path d="M30 8 V52 M8 30 H52" stroke="#e8b564" stroke-width="1" stroke-linecap="round" />
    </svg>

    <svg class="shape shape--plus2" viewBox="0 0 60 60" fill="none">
      <path d="M30 8 V52 M8 30 H52" stroke="#e06c87" stroke-width="1" stroke-linecap="round" />
    </svg>

    <svg class="shape shape--dot" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" fill="#e8b564" />
    </svg>

    <svg class="shape shape--dot2" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2" fill="#e06c87" />
    </svg>

    <!-- Orbit system -->
    <div class="orbit-system">
      <div class="orbit-core"></div>
      <div class="orbit-satellite s1"></div>
      <div class="orbit-satellite s2"></div>
      <div class="orbit-satellite s3"></div>
    </div>

    <!-- Noise overlay -->
    <div class="noise-overlay"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-root {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background-color: #0b0809;
}

.bg-base {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 700px at 15% 10%, rgba(232, 181, 100, 0.08), transparent 60%),
    radial-gradient(1000px 600px at 85% 20%, rgba(224, 108, 135, 0.10), transparent 60%),
    radial-gradient(900px 600px at 60% 90%, rgba(234, 136, 89, 0.10), transparent 65%),
    linear-gradient(180deg, #0b0809 0%, #1a1512 100%);
}

/* Floating blurred orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
  mix-blend-mode: screen;
}
.orb--cyan {
  width: 520px;
  height: 520px;
  top: -80px;
  left: -140px;
  background: radial-gradient(circle at 30% 30%, #e8b564, transparent 70%);
  animation: orbDrift1 24s ease-in-out infinite;
}
.orb--violet {
  width: 560px;
  height: 560px;
  top: 30%;
  right: -180px;
  background: radial-gradient(circle at 40% 40%, #e06c87, transparent 70%);
  animation: orbDrift2 30s ease-in-out infinite;
}
.orb--indigo {
  width: 480px;
  height: 480px;
  bottom: -160px;
  left: 20%;
  background: radial-gradient(circle at 50% 50%, #ea8859, transparent 70%);
  animation: orbDrift3 34s ease-in-out infinite;
}
.orb--pink {
  width: 360px;
  height: 360px;
  top: 65%;
  left: -80px;
  background: radial-gradient(circle at 50% 50%, #e99aad, transparent 70%);
  opacity: 0.35;
  animation: orbDrift4 28s ease-in-out infinite;
}

@keyframes orbDrift1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(80px, 60px) scale(1.15); }
}
@keyframes orbDrift2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(-120px, 80px) scale(1.1); }
}
@keyframes orbDrift3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(60px, -100px) scale(1.2); }
}
@keyframes orbDrift4 {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(100px, -60px); }
}

/* Radial mask for grid */
.mask-radial {
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 80%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 80%);
}

/* Scanline sweep */
.scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(232, 181, 100, 0.6), transparent);
  box-shadow: 0 0 18px rgba(232, 181, 100, 0.55);
  opacity: 0.35;
  animation: scanMove 9s linear infinite;
}
@keyframes scanMove {
  0%   { top: -2%; opacity: 0; }
  10%  { opacity: 0.35; }
  90%  { opacity: 0.35; }
  100% { top: 102%; opacity: 0; }
}

/* Abstract shapes */
.shape {
  position: absolute;
  filter: drop-shadow(0 0 14px rgba(234, 136, 89, 0.25));
}
.shape--hex {
  width: 180px;
  height: 180px;
  top: 12%;
  left: 6%;
  animation: spinSlowA 48s linear infinite, floatA 9s ease-in-out infinite;
  opacity: 0.7;
}
.shape--tri {
  width: 140px;
  height: 140px;
  top: 60%;
  left: 8%;
  animation: spinReverseA 55s linear infinite, floatB 11s ease-in-out infinite;
  opacity: 0.55;
}
.shape--ring {
  width: 220px;
  height: 220px;
  top: 8%;
  right: 7%;
  animation: spinSlowA 60s linear infinite, floatB 13s ease-in-out infinite;
  opacity: 0.55;
}
.shape--square {
  width: 160px;
  height: 160px;
  bottom: 10%;
  right: 10%;
  animation: spinReverseA 70s linear infinite, floatA 12s ease-in-out infinite;
  opacity: 0.4;
}
.shape--plus {
  width: 42px;
  height: 42px;
  top: 34%;
  left: 45%;
  animation: spinSlowA 22s linear infinite, floatA 6s ease-in-out infinite;
  opacity: 0.7;
}
.shape--plus2 {
  width: 30px;
  height: 30px;
  bottom: 22%;
  left: 38%;
  animation: spinReverseA 18s linear infinite, floatB 7s ease-in-out infinite;
  opacity: 0.6;
}
.shape--dot {
  width: 14px;
  height: 14px;
  top: 24%;
  right: 32%;
  animation: floatA 5s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(232, 181, 100, 0.9));
}
.shape--dot2 {
  width: 10px;
  height: 10px;
  bottom: 30%;
  left: 22%;
  animation: floatB 8s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(224, 108, 135, 0.9));
}

@keyframes spinSlowA {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes spinReverseA {
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
}
@keyframes floatA {
  0%, 100% { translate: 0 0; }
  50%      { translate: 0 -24px; }
}
@keyframes floatB {
  0%, 100% { translate: 0 0; }
  50%      { translate: 18px -14px; }
}

/* Orbit system */
.orbit-system {
  position: absolute;
  top: 42%;
  right: 6%;
  width: 0;
  height: 0;
}
.orbit-core {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e8b564;
  box-shadow: 0 0 24px rgba(232, 181, 100, 0.9);
  transform: translate(-50%, -50%);
}
.orbit-satellite {
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
}
.s1 {
  width: 8px;
  height: 8px;
  background: #e06c87;
  box-shadow: 0 0 14px rgba(224, 108, 135, 0.85);
  --orbit-r: 120px;
  animation: orbitRun 14s linear infinite;
}
.s2 {
  width: 6px;
  height: 6px;
  background: #e99aad;
  box-shadow: 0 0 14px rgba(233, 154, 173, 0.85);
  --orbit-r: 180px;
  animation: orbitRun 22s linear infinite reverse;
}
.s3 {
  width: 5px;
  height: 5px;
  background: #f4d48a;
  box-shadow: 0 0 12px rgba(244, 212, 138, 0.85);
  --orbit-r: 240px;
  animation: orbitRun 30s linear infinite;
}
@keyframes orbitRun {
  from { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
}

/* Noise overlay */
.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

@media (max-width: 640px) {
  .shape--hex, .shape--ring { width: 120px; height: 120px; }
  .shape--tri, .shape--square { width: 100px; height: 100px; }
  .orbit-system { display: none; }
  .orb { filter: blur(70px); }
}
</style>
