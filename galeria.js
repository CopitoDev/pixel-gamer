let slideshowTimer = null;
let slideshowIndex = 0;
let galeriaImgs = [];
let galeriaCaptions = [];

// Abrir Lightbox
function abrirLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
  lightboxCaption.textContent = imgElement.nextElementSibling?.textContent || "";

  // Guardamos las imágenes y captions actuales para slideshow y navegación
  galeriaImgs = Array.from(document.querySelectorAll('.img-box img'));
  galeriaCaptions = galeriaImgs.map(img => img.nextElementSibling?.textContent || "");
  slideshowIndex = galeriaImgs.indexOf(imgElement);
}

// Cerrar Lightbox
function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
  clearInterval(slideshowTimer);
}

// Slideshow automático
function iniciarSlideshow() {
  const imagenes = document.querySelectorAll('.img-box img');
  if (imagenes.length === 0) return;

  abrirLightbox(imagenes[0]);
  slideshowIndex = 0;

  clearInterval(slideshowTimer);
  slideshowTimer = setInterval(() => {
    slideshowIndex = (slideshowIndex + 1) % galeriaImgs.length;
    document.getElementById("lightbox-img").src = galeriaImgs[slideshowIndex].src;
    document.getElementById("lightbox-caption").textContent = galeriaCaptions[slideshowIndex];
  }, 2000);
}

// Navegación con teclas
document.addEventListener("keydown", function (e) {
  const lightboxVisible = document.getElementById("lightbox").style.display === "flex";
  if (!lightboxVisible) return;

  if (e.key === "ArrowRight") {
    slideshowIndex = (slideshowIndex + 1) % galeriaImgs.length;
    actualizarLightbox();
  } else if (e.key === "ArrowLeft") {
    slideshowIndex = (slideshowIndex - 1 + galeriaImgs.length) % galeriaImgs.length;
    actualizarLightbox();
  } else if (e.key === "Escape") {
    cerrarLightbox();
  }
});

// Actualizar imagen en Lightbox
function actualizarLightbox() {
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightboxImg.src = galeriaImgs[slideshowIndex].src;
  lightboxCaption.textContent = galeriaCaptions[slideshowIndex];
}




















































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












