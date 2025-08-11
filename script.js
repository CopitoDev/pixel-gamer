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


// Función para manejar la descarga del juego
function descargarJuego() {
  // Cambia esta ruta al enlace real de descarga
  window.location.href = "https://drive.google.com/file/d/1YPN2KyZqb7IhjexFozjfnQDs_2VGzNDm/view?usp=sharing";
}






// Cambia los diálogos según la sección visible
const npcDialog = document.getElementById('npc-dialog');

// Diccionario de secciones y mensajes
const npcMessages = {
  inicio: "¡Bienvenido a PixelGamer!",
  nosotros: "Nuestra misión es ayudar de una forma divertida.",
  galeria: "Mira estas increíbles imágenes pixeladas.",
  descarga: "¡Descarga la demo y comienza tu aventura!",
  default: "¡Explora el mundo pixel!"
};

// Función que detecta la sección visible
function updateNPCDialog() {
  const sections = ["inicio", "nosotros", "galeria", "descarga"];
  let found = false;

  for (const id of sections) {
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      npcDialog.textContent = npcMessages[id];
      found = true;
      break;
    }
  }

  if (!found) {
    npcDialog.textContent = npcMessages.default;
  }
}

// Ejecuta al cargar y al hacer scroll
window.addEventListener('scroll', updateNPCDialog);
window.addEventListener('load', updateNPCDialog);











