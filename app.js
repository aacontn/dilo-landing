// Dilo landing — sin dependencias, sin trackers.
document.documentElement.classList.add("js");

// ── Botón de descarga según OS ──────────────────────────────
const RELEASES = "https://github.com/aacontn/dilo/releases/latest";
const ua = navigator.userAgent;
const os = /Mac/i.test(ua) ? "macOS" : /Win/i.test(ua) ? "Windows" : /Linux/i.test(ua) ? "Linux" : null;

for (const id of ["download-btn", "download-btn-2"]) {
  const btn = document.getElementById(id);
  if (!btn) continue;
  btn.href = RELEASES;
  if (os) btn.firstChild.textContent = `Descargar gratis para ${os}\n`;
}
const btnSub = document.getElementById("btn-sub");
if (btnSub && os) {
  const others = ["macOS", "Windows", "Linux"].filter((o) => o !== os).join(" y ");
  btnSub.textContent = `~17 MB · también para ${others}`;
}

// ── Reveal on scroll ────────────────────────────────────────
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealables = document.querySelectorAll(".reveal");
if (reduced || !("IntersectionObserver" in window)) {
  revealables.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  revealables.forEach((el) => io.observe(el));
}

// ── Demo: la página se dicta sola ───────────────────────────
const PHRASES = [
  "mejora el manejo de errores del endpoint de pagos y agrega tests",
  "refactoriza este componente a server components y explícame el trade-off",
  "escribe el commit: fix del race condition en el websocket de notificaciones",
  "genera el docker-compose con postgres, redis y el worker de colas",
];

const typed = document.getElementById("typed");
const pill = document.getElementById("pill");
const send = document.getElementById("ed-send");
const input = document.querySelector(".ed-input");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeOut(text) {
  for (let i = 1; i <= text.length; i++) {
    typed.textContent = text.slice(0, i);
    await sleep(text[i - 1] === " " ? 30 : 16 + Math.random() * 24);
  }
}

async function demoLoop() {
  if (!typed || !pill) return;
  if (reduced) {
    typed.textContent = PHRASES[0];
    return;
  }
  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    typed.textContent = "";
    send?.classList.remove("fire");
    // 1) apretaste el atajo: la pastilla escucha
    pill.classList.add("rec");
    input?.classList.add("glow");
    await sleep(1900);
    // 2) soltaste: se escribe el dictado
    pill.classList.remove("rec");
    await sleep(220);
    await typeOut(PHRASES[i % PHRASES.length]);
    // 3) envío automático
    await sleep(420);
    send?.classList.add("fire");
    await sleep(1900);
    send?.classList.remove("fire");
    input?.classList.remove("glow");
    await sleep(500);
    i++;
  }
}
demoLoop();

// ── Footer ──────────────────────────────────────────────────
const year = document.getElementById("year");
if (year) year.textContent = `© ${new Date().getFullYear()}`;
