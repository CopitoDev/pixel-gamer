document.addEventListener("DOMContentLoaded", () => {
  const mensajesPorIntegrante = [
    [
      "¡Hola! Yo soy la responsable de esta pagina web.",
      "¡Me encargo de lo que ves en esta pagina!",
      "¡Nada carga sin mis líneas de código!"
    ],
    [
      "¡Yo di vida al juego pixelado que ves!",
      "¡Mis sprites tienen alma!",
      "¡Diseñar en pixel art es como pintar con magia!"
    ],
    [
      "¡Soy quien da ideas fuera de lo común y lo normal!",
      "¡Mis ideas son innovadoras!"
    ],
    [
      "¡Yo hago bocetos de mis ideas para mejor expresarlas!",
      "¡Y no respondo a mensajes importantes de mi grupo!"
    ],
    [
      "¡Ayudo con los fondos y tematicas del juego!",
      "¡Y no me gusta ser responsable!"
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
