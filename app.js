const modeDescriptions = {
  Literal: "Exactamente lo que dijiste",
  Limpio: "Sin muletillas ni errores obvios",
  Prompt: "Ordena contexto e instrucciones",
  Mensaje: "Breve, natural y casual",
  Correo: "Claro y bien estructurado",
  Código: "Respeta rutas, comandos e identificadores",
};

const modeButtons = document.querySelectorAll(".live-mode-row button");
const modeHelp = document.getElementById("live-mode-help");

modeButtons.forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.classList.contains("active")),
  );

  button.addEventListener("click", () => {
    modeButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });

    if (modeHelp) {
      modeHelp.textContent = modeDescriptions[button.dataset.mode] || "";
    }
  });
});
