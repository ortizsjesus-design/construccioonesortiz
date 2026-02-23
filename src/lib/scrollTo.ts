/**
 * Scroll suave a un elemento por ID o selector.
 *
 * En la primera carga el layout puede no estar estabilizado aún
 * (los contenedores lazy-loaded con aspect-ratio reservan espacio,
 * pero React necesita un ciclo de render extra para calcularlos).
 * Por eso esperamos 2 frames + un pequeño delay antes de calcular
 * la posición, lo que garantiza que offsetTop sea correcto.
 */
function getAccumulatedTop(element: HTMLElement): number {
  let top = 0;
  let el: HTMLElement | null = element;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }
  return top;
}

export function scrollToElement(target: string | HTMLElement | null) {
  const element =
    typeof target === "string"
      ? (document.getElementById(target.replace(/^#/, "")) ??
         document.querySelector(target))
      : target;

  if (!element) return;

  const headerOffset = window.innerWidth < 768 ? 110 : 160;

  // En primera carga las imágenes lazy y aspect-ratio containers pueden
  // tardar varios frames en estabilizar el layout. Hacemos un doble
  // intento: uno rápido (150 ms) y una corrección posterior (400 ms)
  // que compensa cualquier reflow tardío.
  const doScroll = () => {
    const top = getAccumulatedTop(element as HTMLElement);
    window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        doScroll();
        // Corrección tardía: si el layout cambió, reajustamos
        setTimeout(doScroll, 300);
      }, 150);
    });
  });
}
