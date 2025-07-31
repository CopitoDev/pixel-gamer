document.addEventListener("DOMContentLoaded", () => {
  const mensajesPorIntegrante = [
    [
      "¡Hola! Soy el programador del núcleo del juego.",
      "¡Me encargo de los jefes y enemigos!",
      "¡Nada se mueve sin mis líneas de código!"
    ],
    [
      "¡Yo di vida al mundo pixelado que ves!",
      "¡Mis sprites tienen alma!",
      "¡Diseñar en pixel art es como pintar con magia!"
    ],
    [
      "¡Soy quien compone esas melodías 8-bit!",
      "¡Mi música hace que todo cobre vida!",
      "¡Cada nivel tiene su propio ritmo!"
    ],
    [
      "¡Yo cazo bugs más rápido que los jugadores!",
      "¡Si hay un error, yo lo atrapo!",
      "¡Soy el escudo contra los glitches!"
    ],
    [
      "¡Manejo todo lo que sea historia y lore!",
      "¡Cada diálogo está lleno de misterio!",
      "¡Doy sentido a tu aventura!"
    ],
    [
      "¡Yo me encargo de que nos conozcas en todas partes!",
      "¡Las redes sociales también son un campo de batalla!",
      "¡PixelGamer necesita una voz, y esa soy yo!"
    ]
  ];

  const npcBoxes = document.querySelectorAll(".mensaje-npc");

  npcBoxes.forEach((mensajeBox, index) => {
    const mensajes = mensajesPorIntegrante[index];

    const cambiarMensaje = () => {
      const nuevoMensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
      mensajeBox.textContent = nuevoMensaje;
    };

    const mostrarMensaje = () => {
      mensajeBox.style.opacity = "1";
    };

    const ocultarMensaje = () => {
      mensajeBox.style.opacity = "0";
    };

    // Hover: cambiar mensaje y mostrar
    mensajeBox.parentElement.addEventListener("mouseenter", () => {
      cambiarMensaje();
      mostrarMensaje();
    });

    mensajeBox.parentElement.addEventListener("mouseleave", () => {
      ocultarMensaje();
    });

    // Aparición automática cada 15 segundos
    setInterval(() => {
      cambiarMensaje();
      mostrarMensaje();
      setTimeout(() => {
        ocultarMensaje();
      }, 3000); // visible por 5 segundos
    }, 15000);
  });
});
