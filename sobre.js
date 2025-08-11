// sobre.js — preparado para futuras mejoras
// Obtiene los elementos
const audio = document.getElementById("bg-music");
const musicButton = document.querySelector(".floating-music");

// Función para alternar la música
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    localStorage.setItem("music", "on"); // Guardar estado
  } else {
    audio.pause();
    localStorage.setItem("music", "off");
  }
}

// Al cargar la página, comprobar si la música debe estar activada
window.addEventListener("DOMContentLoaded", () => {
  const musicState = localStorage.getItem("music");

  if (musicState === "on") {
    audio.play().catch(() => {
      // Algunos navegadores bloquean la reproducción automática
      console.log("Reproducción automática bloqueada");
    });
  } else {
    audio.pause();
  }
});






// Mejora: Añadir clase activa al botón de música
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    localStorage.setItem("music", "on");
    musicButton.classList.add("active");
  } else {
    audio.pause();
    localStorage.setItem("music", "off");
    musicButton.classList.remove("active");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const musicState = localStorage.getItem("music");

  if (musicState === "on") {
    audio.play().then(() => {
      musicButton.classList.add("active");
    });
  }
});
