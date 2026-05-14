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
import imgHeroGrupo from "@/assets/maquinaria-general.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getSiteUrl } from "@/lib/siteUrl";

const ACCENT = "#1679F1";

const SHARE_TITLE = "Catálogo de Alquiler para Profesionales - Jesús Ortiz";
const HERO_BANNER_TITLE = "Servicios auxiliares para profesionales";
const HERO_BANNER_SUBTITLE =
  "Alquiler de maquinaria para construcción, trabajos agrícolas y particulares";
const OG_IMAGE_QUERY = "?v=2";

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

const fleet = [
  "Miniexcavadoras",
  "Dumper de carga",
  "Plataformas elevadoras",
  "Manipuladores telescópicos",
  "Rodillos compactadores",
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

const AlquilerPro = () => {
  const phoneDisplay = "608 918 870";
  const phoneE164 = "+34608918870";
  const waHref = `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa información sobre alquiler de maquinaria."
  )}`;
  const waSoporteHref = whatsappSoporteAlquilerHref(phoneE164);

  const [selectedMachine, setSelectedMachine] = useState<FleetMachine | null>(null);

  const siteUrl = getSiteUrl();
  const ogImageUrl = `${siteUrl}/og-alquiler-pro.png${OG_IMAGE_QUERY}`;
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

      <header className="no-print border-b border-white/[0.08] bg-[#080b10]/90 backdrop-blur-md sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src={logoOrtiz}
              alt="Construcciones y Servicios Jesús Ortiz"
              className="h-11 w-auto shrink-0 object-contain sm:h-12"
              width={160}
              height={64}
            />
            <div className="min-w-0 text-left">
              <p className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Jesús Ortiz
              </p>
              <p className="truncate text-sm font-medium text-zinc-200">Alquiler Pro</p>
            </div>
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${phoneE164}`}
              className="hidden rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/[0.07] sm:inline-flex sm:text-sm"
            >
              Llamar
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110 sm:px-4 sm:text-sm"
              style={{ backgroundColor: ACCENT }}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="alquiler-pro-print-main">
        <section
          className="relative isolate w-full overflow-hidden border-b border-white/[0.08]"
          aria-labelledby="alquiler-pro-hero-heading"
        >
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]">
            <img
              src={imgHeroGrupo}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              width={1920}
              height={1080}
              decoding="async"
              fetchPriority="high"
            />
            <div
              className="alquiler-pro-hero-mask absolute inset-0 bg-gradient-to-r from-[#0b0f14]/95 via-[#0b0f14]/78 to-[#0b0f14]/40 print:hidden"
              aria-hidden
            />
            <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
              <h1
                id="alquiler-pro-hero-heading"
                className="max-w-3xl text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {HERO_BANNER_TITLE}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-100 sm:text-lg">
                {HERO_BANNER_SUBTITLE}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-300 sm:text-xs"
              style={{ boxShadow: `inset 0 0 0 1px ${ACCENT}33` }}
            >
              <HardHat className="h-3.5 w-3.5" style={{ color: ACCENT }} aria-hidden />
              Maquinaria lista para obra
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: ACCENT }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Solicitar disponibilidad
              </a>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-center text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.06]"
              >
                <Phone className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                {phoneDisplay}
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1620] p-6 shadow-2xl shadow-black/50 sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full blur-3xl"
                style={{ backgroundColor: `${ACCENT}22` }}
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Parque habitual
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Equipos solicitados con frecuencia</p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {fleet.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-3 text-sm text-zinc-300"
                    >
                      <span>{item}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                        Alquiler
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Respuesta
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">Ágil</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Enfoque
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">Obra real</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Estándar
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">Profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section
          id="catalogo-maquinaria"
          className="mt-16 scroll-mt-28 border-t border-white/10 pt-14 lg:mt-20 lg:pt-16"
          aria-labelledby="catalogo-maquinaria-heading"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Catálogo
            </p>
            <h2 id="catalogo-maquinaria-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Maquinaria disponible
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Pulsa una tarjeta para ver la ficha técnica y consultar disponibilidad por WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fleetMachinery.map((machine) => (
              <button
                key={machine.id}
                type="button"
                onClick={() => setSelectedMachine(machine)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0f1620]/90 text-left shadow-lg shadow-black/20 outline-none transition hover:border-[#1679F1]/45 hover:bg-[#121a26] focus-visible:ring-2 focus-visible:ring-[#1679F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="border-t border-white/10 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Ficha técnica
                  </p>
                  <p className="mt-1 text-base font-semibold leading-snug text-white sm:text-lg">
                    {machine.name}
                  </p>
                  <p className="mt-3 text-xs font-medium text-zinc-500 transition group-hover:text-[#1679F1]">
                    Ver detalles →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section
          id="documentacion-contacto"
          className="mt-14 scroll-mt-28 border-t border-white/10 pt-14 lg:mt-16 lg:pt-16"
          aria-labelledby="documentacion-contacto-heading"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Documentación
          </p>
          <h2
            id="documentacion-contacto-heading"
            className="mt-2 text-2xl font-bold text-white sm:text-3xl"
          >
            Documentación y Contacto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Modelo de contrato, copia en papel de esta página y canal directo para dudas de alquiler.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={MODELO_CONTRATO_PDF_URL || "#"}
                onClick={(e) => {
                  if (!MODELO_CONTRATO_PDF_URL) e.preventDefault();
                }}
                className={`no-print inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-black/25 transition sm:min-w-[240px] sm:flex-none ${
                  MODELO_CONTRATO_PDF_URL ? "hover:brightness-110" : "cursor-not-allowed opacity-80"
                }`}
                style={{ backgroundColor: ACCENT }}
                aria-disabled={!MODELO_CONTRATO_PDF_URL}
                title={
                  MODELO_CONTRATO_PDF_URL
                    ? undefined
                    : "Enlace pendiente: sube el PDF y actualiza MODELO_CONTRATO_PDF_URL en el código."
                }
              >
                <FileText className="h-5 w-5 shrink-0" aria-hidden />
                Descargar Modelo de Contrato
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="no-print inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-center text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.08] sm:min-w-[220px] sm:flex-none"
              >
                <Printer className="h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                Imprimir esta página
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0f1620]/80 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Contacto rápido
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-2 text-lg font-semibold text-white">
                <Phone className="h-5 w-5 shrink-0" style={{ color: ACCENT }} aria-hidden />
                <a href={`tel:${phoneE164}`} className="underline-offset-4 hover:underline">
                  {phoneDisplay}
                </a>
              </p>
              <a
                href={waSoporteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="no-print mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
                style={{ backgroundColor: ACCENT }}
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                Soporte Directo para Alquileres
              </a>
              <p className="mt-3 hidden text-xs text-zinc-500 print:block print:text-gray-700">
                WhatsApp: mismo número ({phoneDisplay}). Solicita el PDF del contrato si lo necesitas en papel.
              </p>
            </div>
          </div>
        </section>

        <Dialog
          open={selectedMachine !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedMachine(null);
          }}
        >
          <DialogContent
            className="max-h-[min(90vh,840px)] max-w-[min(100vw-1.5rem,52rem)] gap-0 overflow-y-auto border-white/10 bg-[#0f1620] p-0 text-zinc-100 sm:rounded-xl [&>button]:text-zinc-400 [&>button]:hover:bg-white/10 [&>button]:hover:text-white"
          >
            {selectedMachine ? (
              <>
                <div className="grid gap-0 lg:grid-cols-2 lg:gap-0">
                  <div className="relative aspect-[4/3] bg-black/50 lg:aspect-auto lg:min-h-[280px]">
                    <img
                      src={selectedMachine.image}
                      alt={selectedMachine.name}
                      className="h-full w-full object-cover lg:absolute lg:inset-0"
                    />
                  </div>
                  <div className="flex flex-col border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                        Consultar disponibilidad de esta máquina
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedMachine(null)}
                        className="rounded-lg border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06]"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>

        <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-[#0f1620]/80 p-5 backdrop-blur-sm sm:p-6"
            >
              <Icon className="h-6 w-6" style={{ color: ACCENT }} aria-hidden />
              <h2 className="mt-4 text-base font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-[#0f1620]/70 p-6 sm:p-8 lg:mt-20">
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
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: ACCENT }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.06]"
              >
                <Phone className="h-4 w-4" style={{ color: ACCENT }} aria-hidden />
                Llamada directa
              </a>
            </div>
          </div>
        </section>

        <p className="no-print mt-10 text-center text-xs text-zinc-600">
          Página de acceso directo —{" "}
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
