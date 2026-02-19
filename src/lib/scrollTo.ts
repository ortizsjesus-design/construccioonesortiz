/**
 * Scroll suave a un elemento por ID o selector.
 * Usa offsetTop acumulado (estable con lazy loading) en lugar de getBoundingClientRect.
 */
export function scrollToElement(target: string | HTMLElement | null) {
  const element =
    typeof target === "string"
      ? (document.getElementById(target.replace(/^#/, "")) ??
         document.querySelector(target))
      : target;

  if (!element) return;

  const headerOffset = window.innerWidth < 768 ? 110 : 160;

  // offsetTop acumulado desde el tope del documento (ignora transforms/sticky)
  let top = 0;
  let el: HTMLElement | null = element as HTMLElement;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }

  window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
}
