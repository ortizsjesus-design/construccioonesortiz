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

  // Esperamos 2 animationFrames + 80ms para que el layout (aspect-ratio
  // containers) esté completamente calculado antes de medir offsetTop.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        const top = getAccumulatedTop(element as HTMLElement);
        window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
      }, 80);
    });
  });
}
