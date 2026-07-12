// Dilo landing — sin dependencias, sin trackers.

// ── Botón de descarga según OS ──────────────────────────────
const RELEASES = "https://github.com/aacontn/dilo/releases/latest";
const ua = navigator.userAgent;
const os = /Mac/i.test(ua) ? "macOS" : /Win/i.test(ua) ? "Windows" : /Linux/i.test(ua) ? "Linux" : null;

for (const id of ["download-btn", "download-btn-2"]) {
  const btn = document.getElementById(id);
  if (btn && os) btn.textContent = `Descargar para ${os}`;
  if (btn) btn.href = RELEASES;
}
const osNote = document.getElementById("os-note");
if (osNote && os) {
  const others = ["macOS", "Windows", "Linux"].filter((o) => o !== os).join(" · ");
  osNote.textContent = `También para ${others}`;
}

// ── Demo: la página se dicta sola ───────────────────────────
const PHRASES = [
  "mejora el manejo de errores del endpoint de pagos y agrega tests",
  "refactoriza este componente a server components y explícame el trade-off",
  "escribe el commit: fix del race condition en el websocket de notificaciones",
  "genera el docker-compose con postgres, redis y el worker de colas",
];

const typed = document.getElementById("typed");
const wave = document.getElementById("wave");
const pill = document.getElementById("demo-pill");

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeOut(text) {
  for (let i = 1; i <= text.length; i++) {
    typed.textContent = text.slice(0, i);
    await sleep(text[i - 1] === " " ? 34 : 18 + Math.random() * 26);
  }
}

async function demoLoop() {
  if (!typed || !wave || !pill) return;
  if (reduced) {
    typed.textContent = PHRASES[0];
    return;
  }
  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    typed.textContent = "";
    // 1) "apretaste el atajo": pastilla roja + onda viva
    pill.classList.add("rec");
    wave.classList.add("on");
    await sleep(1900);
    // 2) "soltaste": deja de grabar y el texto se escribe
    pill.classList.remove("rec");
    wave.classList.remove("on");
    await sleep(250);
    await typeOut(PHRASES[i % PHRASES.length]);
    await sleep(2600);
    i++;
  }
}
demoLoop();

// ── Footer ──────────────────────────────────────────────────
const year = document.getElementById("year");
if (year) year.textContent = `© ${new Date().getFullYear()}`;
