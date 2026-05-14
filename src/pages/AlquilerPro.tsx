import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Check,
  Construction,
  FileText,
  HardHat,
  Phone,
  MessageCircle,
  Printer,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import logoOrtiz from "@/assets/logo-ortiz.png";
import imgRipaR15 from "@/assets/miniexcavadora-ripa-r15.jpeg";
import imgKingBull from "@/assets/miniexcavadora-kubota.png";
import imgPlataforma from "@/assets/plataforma-elevadora.png";
import imgManitou from "@/assets/manipulador-telescopico.png";
import imgRodillo from "@/assets/rodillo-compactador.png";
import imgDumper from "@/assets/dumper-escalibur.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getSiteUrl } from "@/lib/siteUrl";

const ACCENT = "#1679F1";
/** Verde marca WhatsApp */
const WA_GREEN = "#25D366";

const SHARE_TITLE = "Catálogo de Alquiler para Profesionales - Jesús Ortiz";
const HERO_BANNER_TITLE = "Servicios auxiliares para profesionales";
const HERO_BANNER_SUBTITLE =
  "Alquiler de maquinaria para construcción, trabajos agrícolas y particulares";
/** Móvil: imagen anterior (no cambiar composición). Escritorio: cabecera panorámica nueva. OG = imagen web. */
const HERO_MOBILE_IMAGE = "/alquiler-pro-hero-mobile.png";
const HERO_WEB_IMAGE = "/alquiler-pro-hero-web.png";
const HERO_IMAGE_QUERY = "?v=8";

/** Rellenar con la ruta del PDF (p. ej. "/modelo-contrato-alquiler.pdf") cuando esté subido. */
const MODELO_CONTRATO_PDF_URL = "";

type FleetMachine = {
  id: string;
  name: string;
  image: string;
  specs: string[];
};

const fleetMachinery: FleetMachine[] = [
  {
    id: "ripa-r15",
    name: "Miniexcavadora Ripa R15 Kubota",
    image: imgRipaR15,
    specs: [
      "Ideal para trabajar en espacios reducidos",
      "Cazo de excavación de 20 y 40 cm",
      "Cazo de limpieza de 80 cm",
      "Martillo neumático y ahoyador",
    ],
  },
  {
    id: "king-bull",
    name: "Miniexcavadora King Bull Excalibur",
    image: imgKingBull,
    specs: [
      "Ideal para trabajar en espacios reducidos",
      "Cazo de excavación de 20 y 40 cm",
      "Cazo de limpieza de 80 cm",
      "Martillo neumático y ahoyador",
    ],
  },
  {
    id: "plataforma",
    name: "Plataforma elevadora articulada",
    image: imgPlataforma,
    specs: [
      "Altura de trabajo: 15,80 m",
      "Opción muy recomendada para trabajos en altura",
      "Total seguridad",
    ],
  },
  {
    id: "manitou",
    name: "Manipulador Manitou MT 1740",
    image: imgManitou,
    specs: ["Capacidad de carga: 4000 kilos", "Altura de elevación: 17,00 m"],
  },
  {
    id: "rodillo",
    name: "Rodillo compactador Escalibur",
    image: imgRodillo,
    specs: [
      "Rodillo compactador de empuje SVR 700",
      "Ofrece una fuerza de 20 kN",
      "Acondicionamiento hidráulico de doble dirección",
    ],
  },
  {
    id: "dumper",
    name: "Dumper de carga Escalibur",
    image: imgDumper,
    specs: [
      "Capacidad de carga para 1200 kilos",
      "Tolva giratoria",
      "Muy eficaz para trabajar en espacios reducidos",
    ],
  },
];

const highlights = [
  {
    icon: Truck,
    title: "Flujo constante",
    body: "Entrega y recogida coordinadas para que la obra no pare.",
  },
  {
    icon: ShieldCheck,
    title: "Operación segura",
    body: "Maquinaria revisada y asesoramiento sobre uso en obra.",
  },
  {
    icon: Wrench,
    title: "Soporte técnico",
    body: "Resolvemos dudas de maniobra, accesos y compatibilidad de equipos.",
  },
];

function whatsappHrefForMachine(phoneE164: string, machineName: string) {
  const text = `Hola, me interesa consultar disponibilidad de esta máquina: ${machineName}.`;
  return `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

function whatsappSoporteAlquilerHref(phoneE164: string) {
  const text =
    "Hola, necesito soporte directo para alquileres (documentación, disponibilidad u otras consultas).";
  return `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

const btnWa =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-semibold text-[#0b141a] shadow-md transition hover:opacity-[0.92] active:scale-[0.99]";

const AlquilerPro = () => {
  const phoneDisplay = "608 918 870";
  const phoneE164 = "+34608918870";
  const waHref = `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa información sobre alquiler de maquinaria."
  )}`;
  const waSoporteHref = whatsappSoporteAlquilerHref(phoneE164);

  const [selectedMachine, setSelectedMachine] = useState<FleetMachine | null>(null);

  const siteUrl = getSiteUrl();
  const ogImageUrl = `${siteUrl}${HERO_WEB_IMAGE}${HERO_IMAGE_QUERY}`;
  const pageUrl = `${siteUrl}/alquiler-pro`;

  return (
    <div
      className="alquiler-pro-page min-h-screen text-zinc-100 antialiased selection:bg-[#1679F1]/35 selection:text-white"
      style={{
        backgroundColor: "#0b0f14",
        backgroundImage: `
          linear-gradient(105deg, rgba(22, 121, 241, 0.06) 0%, transparent 45%),
          repeating-linear-gradient(
            -12deg,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 14px
          )
        `,
      }}
    >
      <Helmet prioritizeSeoTags>
        <title>{SHARE_TITLE}</title>
        <meta name="description" content={HERO_BANNER_SUBTITLE} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={SHARE_TITLE} />
        <meta property="og:description" content={HERO_BANNER_SUBTITLE} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={SHARE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SHARE_TITLE} />
        <meta name="twitter:description" content={HERO_BANNER_SUBTITLE} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>

      <h1 className="sr-only lg:hidden">{SHARE_TITLE}. {HERO_BANNER_SUBTITLE}</h1>

      {/* Móvil / tablet: cabecera compacta original (sin ALQUILERES grande) */}
      <header className="no-print sticky top-0 z-30 border-b border-white/[0.08] bg-[#080b10]/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={logoOrtiz}
              alt="Construcciones y Servicios Jesús Ortiz"
              className="h-12 w-auto shrink-0 object-contain sm:h-[3.75rem]"
              width={240}
              height={96}
              decoding="async"
            />
            <div className="min-w-0 text-left">
              <p className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                Jesús Ortiz
              </p>
              <p className="truncate text-xs font-medium text-zinc-100 sm:text-sm">
                Alquiler de maquinaria
              </p>
            </div>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${phoneE164}`}
              className="hidden rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/[0.08] sm:inline-flex"
            >
              Llamar
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-[#0b141a] shadow-md transition hover:opacity-90 sm:gap-2 sm:px-4 sm:text-sm"
              style={{ backgroundColor: WA_GREEN }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Escritorio: cabecera oscura + ALQUILERES + logo grande */}
      <header className="no-print sticky top-0 z-30 hidden border-b border-white/[0.07] bg-[#030508] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-8 py-5">
          <Link to="/" className="flex min-w-0 flex-1 items-center gap-6">
            <img
              src={logoOrtiz}
              alt="Construcciones y Servicios Jesús Ortiz"
              className="h-[4.75rem] w-auto shrink-0 object-contain xl:h-[5.25rem]"
              width={280}
              height={112}
              decoding="async"
            />
            <div className="min-w-0 text-left">
              <p className="truncate text-xs font-semibold uppercase tracking-[0.28em] text-zinc-600">
                Construcciones y Servicios · Jesús Ortiz
              </p>
              <h1 className="truncate text-4xl font-black uppercase tracking-[0.12em] text-white xl:text-[2.75rem] xl:leading-none">
                ALQUILERES
                <span className="sr-only">
                  {" "}
                  — {SHARE_TITLE}. {HERO_BANNER_SUBTITLE}
                </span>
              </h1>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">{HERO_BANNER_SUBTITLE}</p>
            </div>
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={`tel:${phoneE164}`}
              className="rounded-lg border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08]"
            >
              Llamar
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b141a] shadow-lg shadow-black/30 transition hover:opacity-90"
              style={{ backgroundColor: WA_GREEN }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="alquiler-pro-print-main">
        <section
          className="relative isolate w-full overflow-hidden border-b border-white/[0.08] bg-[#05070b]"
          aria-labelledby="alquiler-pro-hero-heading"
        >
          <p id="alquiler-pro-hero-heading" className="sr-only">
            Imagen de cabecera: parque de maquinaria para alquiler profesional.
          </p>
          {/* Móvil: imagen y layout como antes (ancho completo, archivo dedicado) */}
          <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-3 lg:hidden">
            <img
              src={`${HERO_MOBILE_IMAGE}${HERO_IMAGE_QUERY}`}
              alt={`${HERO_BANNER_TITLE}. ${HERO_BANNER_SUBTITLE}`}
              className="mx-auto block h-auto w-full max-w-full object-contain object-center print:max-h-[280px]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          {/* Escritorio: nueva cabecera web, banda más estrecha */}
          <div className="mx-auto hidden w-full max-w-[min(100%,920px)] px-6 xl:max-w-[min(100%,1020px)] lg:block">
            <img
              src={`${HERO_WEB_IMAGE}${HERO_IMAGE_QUERY}`}
              alt={`${HERO_BANNER_TITLE}. ${HERO_BANNER_SUBTITLE}`}
              className="mx-auto block h-auto w-full max-w-full object-contain object-center print:max-h-[280px]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            {/* Columna izquierda: documentación arriba + mensaje + datos */}
            <div className="space-y-12 lg:col-span-5">
              <section
                id="documentacion-contacto"
                className="rounded-2xl border border-white/10 bg-[#0c1119]/90 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8"
                aria-labelledby="documentacion-heading"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Documentación
                </p>
                <h2 id="documentacion-heading" className="mt-2 text-xl font-bold text-white">
                  Contrato e impresión
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Descarga el modelo cuando esté disponible o imprime esta página para llevar el catálogo a obra.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={MODELO_CONTRATO_PDF_URL || "#"}
                    onClick={(e) => {
                      if (!MODELO_CONTRATO_PDF_URL) e.preventDefault();
                    }}
                    className={`no-print inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-black/20 transition sm:min-w-[220px] sm:flex-none ${
                      MODELO_CONTRATO_PDF_URL ? "hover:brightness-110" : "cursor-not-allowed opacity-75"
                    }`}
                    style={{ backgroundColor: ACCENT }}
                    aria-disabled={!MODELO_CONTRATO_PDF_URL}
                    title={
                      MODELO_CONTRATO_PDF_URL
                        ? undefined
                        : "Sube el PDF y asigna MODELO_CONTRATO_PDF_URL en el código."
                    }
                  >
                    <FileText className="h-5 w-5 shrink-0" aria-hidden />
                    Descargar Modelo de Contrato
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="no-print inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3.5 text-center text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.08] sm:min-w-[200px] sm:flex-none"
                  >
                    <Printer className="h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                    Imprimir esta página
                  </button>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Contacto rápido
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-2 text-lg font-semibold text-white">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                    <a href={`tel:${phoneE164}`} className="underline-offset-4 hover:underline">
                      {phoneDisplay}
                    </a>
                  </p>
                  <a
                    href={waSoporteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`no-print mt-4 w-full ${btnWa} sm:inline-flex sm:w-auto`}
                    style={{ backgroundColor: WA_GREEN }}
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#0b141a]" aria-hidden />
                    Soporte Directo para Alquileres
                  </a>
                  <p className="mt-3 hidden text-xs text-zinc-500 print:block print:text-gray-700">
                    WhatsApp: mismo número ({phoneDisplay}).
                  </p>
                </div>
              </section>

              <div>
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-300 sm:text-xs"
                  style={{ boxShadow: `inset 0 0 0 1px ${ACCENT}33` }}
                >
                  <HardHat className="h-3.5 w-3.5" style={{ color: ACCENT }} aria-hidden />
                  Maquinaria lista para obra
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                  Alquiler profesional para{" "}
                  <span style={{ color: ACCENT }}>obra y reforma</span>
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Equipamiento robusto, entrega ágil y trato directo. Pensado para empresas y particulares
                  que necesitan rendimiento en planta sin complicaciones.
                </p>

                <ul className="mt-8 space-y-3 text-sm text-zinc-300 sm:text-base">
                  <li className="flex gap-3">
                    <Construction className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} />
                    Disponibilidad orientativa y tiempos de respuesta claros.
                  </li>
                  <li className="flex gap-3">
                    <Construction className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} />
                    Opciones según accesos, espacio y tipo de trabajo.
                  </li>
                  <li className="flex gap-3">
                    <Construction className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ACCENT }} />
                    La Rioja y entornos habituales de servicio (consultar).
                  </li>
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`no-print ${btnWa} sm:min-w-[220px]`}
                    style={{ backgroundColor: WA_GREEN }}
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#0b141a]" aria-hidden />
                    Solicitar disponibilidad
                  </a>
                  <a
                    href={`tel:${phoneE164}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.08] sm:min-w-[180px]"
                  >
                    <Phone className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                    {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha: catálogo */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-[9rem] lg:z-10 lg:-mt-1 lg:rounded-xl lg:border lg:border-white/[0.06] lg:bg-[#0b0f14]/85 lg:p-6 lg:backdrop-blur-md xl:top-[9.5rem] xl:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Catálogo
                </p>
                <h2
                  id="catalogo-maquinaria-heading"
                  className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-[1.85rem]"
                >
                  Maquinaria disponible
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Pulsa una tarjeta para ver la ficha completa y consultar disponibilidad por WhatsApp.
                </p>
              </div>

              <div
                id="catalogo-maquinaria"
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6"
              >
                {fleetMachinery.map((machine) => (
                  <button
                    key={machine.id}
                    type="button"
                    onClick={() => setSelectedMachine(machine)}
                    className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0f1620]/90 text-left shadow-lg shadow-black/25 outline-none transition hover:border-[#1679F1]/50 hover:bg-[#121a26] focus-visible:ring-2 focus-visible:ring-[#1679F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#070a10]">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent"
                        aria-hidden
                      />
                    </div>
                    <div className="border-t border-white/10 px-4 py-4 sm:px-5 sm:py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Ver ficha técnica
                      </p>
                      <p className="mt-1.5 text-[15px] font-semibold leading-snug text-white sm:text-base">
                        {machine.name}
                      </p>
                      <p className="mt-2.5 text-xs font-medium text-zinc-500 transition group-hover:text-[#1679F1]">
                        Abrir detalle →
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Dialog
            open={selectedMachine !== null}
            onOpenChange={(open) => {
              if (!open) setSelectedMachine(null);
            }}
          >
            <DialogContent className="flex max-h-[95vh] w-[min(100vw-1rem,1150px)] max-w-[min(100vw-1rem,1150px)] flex-col gap-0 overflow-hidden border-white/10 bg-[#0f1620] p-0 text-zinc-100 sm:rounded-2xl [&>button]:text-zinc-400 [&>button]:hover:bg-white/10 [&>button]:hover:text-white">
              {selectedMachine ? (
                <div className="flex max-h-[95vh] flex-col lg:flex-row lg:overflow-hidden">
                  <div className="relative flex min-h-[220px] flex-[1.15] items-center justify-center bg-gradient-to-b from-black via-[#0a0d12] to-[#0f1620] px-4 py-6 sm:min-h-[280px] sm:px-6 lg:min-h-0 lg:max-h-[95vh] lg:overflow-hidden lg:py-8">
                    <img
                      src={selectedMachine.image}
                      alt={selectedMachine.name}
                      className="max-h-[min(62vh,620px)] w-full max-w-full object-contain lg:max-h-[min(88vh,760px)]"
                    />
                  </div>
                  <div className="flex max-h-[50vh] min-w-0 flex-shrink-0 flex-col overflow-y-auto border-t border-white/10 lg:max-h-[95vh] lg:w-[min(100%,420px)] lg:border-l lg:border-t-0 xl:w-[440px]">
                    <div className="p-6 sm:p-8">
                      <DialogHeader className="space-y-2 text-left">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          Ficha técnica
                        </p>
                        <DialogTitle className="text-xl font-bold leading-tight text-white sm:text-2xl">
                          {selectedMachine.name}
                        </DialogTitle>
                        <DialogDescription className="text-left text-sm text-zinc-400">
                          Características principales según equipo y uso en obra.
                        </DialogDescription>
                      </DialogHeader>
                      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                        {selectedMachine.specs.map((line) => (
                          <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                            <Check
                              className="mt-0.5 h-5 w-5 shrink-0"
                              style={{ color: ACCENT }}
                              aria-hidden
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                        <a
                          href={whatsappHrefForMachine(phoneE164, selectedMachine.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center text-sm font-semibold text-[#0b141a] transition hover:opacity-90`}
                          style={{ backgroundColor: WA_GREEN }}
                        >
                          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                          Consultar disponibilidad de esta máquina
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedMachine(null)}
                          className="rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06]"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </DialogContent>
          </Dialog>

          <section className="mt-16 grid gap-5 border-t border-white/10 pt-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6 lg:pt-16">
            {highlights.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-white/10 bg-[#0f1620]/80 p-5 backdrop-blur-sm sm:p-6"
              >
                <Icon className="h-6 w-6" style={{ color: ACCENT }} aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
              </article>
            ))}
          </section>

          <section className="mt-14 rounded-2xl border border-white/10 bg-[#0f1620]/70 p-6 sm:p-8 lg:mt-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Siguiente paso
                </p>
                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Cuéntanos fechas, ubicación y tipo de trabajo
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Prepararemos la mejor opción de equipo y te confirmamos disponibilidad con la mayor
                  brevedad posible.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#0b141a] transition hover:opacity-90`}
                  style={{ backgroundColor: WA_GREEN }}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={`tel:${phoneE164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.06]"
                >
                  <Phone className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                  Llamada directa
                </a>
              </div>
            </div>
          </section>

          <p className="no-print mt-12 text-center text-xs text-zinc-600">
            <Link to="/" className="underline underline-offset-4 hover:text-zinc-400">
              Volver al sitio principal
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default AlquilerPro;
