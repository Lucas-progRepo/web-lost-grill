import Link from 'next/link';

const phone = '+34675811548';
const whatsappNumber = phone.replace(/\s+/g, '').replace('+', '');

const cartaItems = [
  { n: '01', title: 'Carnes maduradas', desc: 'Cortes nacionales y de importación seleccionados pieza a pieza.' },
  { n: '02', title: 'Brasa de encina', desc: 'Calor lento, ahumado limpio, sin trampas.' },
  { n: '03', title: 'Guarniciones de mercado', desc: 'Verdura de temporada asada al rescoldo.' },
  { n: '04', title: 'Vinos de productor', desc: 'Carta corta, viva, con criterio.' }
];

function Noise({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  );
}

function DiagonalLines() {
  return (
    <svg
      aria-hidden="true"
      className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="diag" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="24" stroke="#c2562b" strokeWidth="1" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-6 flex items-center justify-between">
          <Link href="#top" className="font-display text-xl font-semibold tracking-tight">
            Lost <span className="italic text-accent">Grill</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-inkSoft">
            <a href="#sobre-nosotros" className="transition-colors duration-200 hover:text-ink">Sobre nosotros</a>
            <a href="#carta" className="transition-colors duration-200 hover:text-ink">Carta</a>
            <a href="#local" className="transition-colors duration-200 hover:text-ink">Local</a>
            <a href="#contacto" className="transition-colors duration-200 hover:text-ink">Contacto</a>
          </nav>
          <a
            href={`tel:${phone}`}
            className="text-sm font-medium tracking-wide hidden sm:inline-flex items-center gap-2 text-ink transition-colors duration-200 hover:text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" style={{ boxShadow: '0 0 10px #c2562b' }} />
            Llamar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <Noise opacity={0.04} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 py-32 text-center">
          <div className="mb-8 flex justify-center">
            <span className="pill">
              <span className="pill-dot" />
              Parrilla · Madrid
            </span>
          </div>
          <h1 className="font-display text-display-1 font-normal text-ink">
            Donde la brasa<br />
            <span className="italic font-normal text-accent">manda.</span>
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-inkSoft text-[1.0625rem] leading-relaxed">
            Carne, fuego y tiempo. Lost Grill es una parrilla en Madrid construida alrededor de una idea sencilla: producto honesto cocinado sobre brasa de verdad.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${phone}`} className="btn-primary">
              Llamar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quería preguntar por Lost Grill.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-bg pointer-events-none" />
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative bg-bg py-24 lg:py-40 group">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative">
            <span className="deco-number" aria-hidden="true">01</span>
            <div className="relative">
              <div className="overline mb-5">Capítulo 01 — Sobre nosotros</div>
              <span className="editorial-bar mb-8" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-5">
                  <h2 className="font-display text-display-2 font-normal text-ink">
                    Sin atajos,<br />
                    <span className="italic">sin humo de marketing.</span>
                  </h2>
                </div>
                <div className="md:col-span-7 md:pt-4">
                  <p className="text-inkSoft text-lg leading-[1.75] max-w-prose">
                    Trabajamos con cortes seleccionados, brasa de encina y la paciencia que exige cocinar al fuego. Cada plato sale cuando tiene que salir. Esa es toda la fórmula.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-2.5">
                    <span className="pill">Brasa de encina</span>
                    <span className="pill">Producto honesto</span>
                    <span className="pill">Madrid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="relative bg-surface py-24 lg:py-40 group overflow-hidden">
        <DiagonalLines />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative mb-16 lg:mb-20">
            <span className="deco-number" aria-hidden="true">02</span>
            <div className="relative">
              <div className="overline mb-5">Capítulo 02 — La carta</div>
              <span className="editorial-bar mb-8" aria-hidden="true" />
              <h2 className="font-display text-display-2 font-normal text-ink max-w-2xl">
                Lo que ponemos<br />
                <span className="italic">sobre la brasa.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {cartaItems.map((item) => (
              <article key={item.n} className="carta-card rounded-2xl p-8 md:p-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display italic text-2xl text-accent">{item.n}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-inkSoft">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
                <h3 className="font-display text-display-3 font-normal text-ink mb-3">{item.title}</h3>
                <p className="text-inkSoft leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-sm text-inkSoft max-w-md">
            Para reservar, escríbenos por WhatsApp.{' '}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quería reservar mesa en Lost Grill.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors duration-200"
            >
              Mándanos un mensaje
            </a>.
          </p>
        </div>
      </section>

      {/* LOCAL */}
      <section id="local" className="relative py-24 lg:py-40 group overflow-hidden local-bg">
        <Noise opacity={0.05} />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative">
            <span className="deco-number" aria-hidden="true">03</span>
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
              <div className="md:col-span-7">
                <div className="overline mb-5">Capítulo 03 — El local</div>
                <span className="editorial-bar mb-8" aria-hidden="true" />
                <h2 className="font-display text-display-2 font-normal text-ink">
                  Un sitio<br />
                  <span className="italic">para quedarse.</span>
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-inkSoft text-lg leading-[1.75]">
                  Madera, hierro y luz baja. Un local pensado para cenas largas, sobremesa con vino y conversación que no acaba en el postre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative bg-bg py-24 lg:py-40 group">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="overline mb-5">Encuentra el fuego</div>
            <div className="flex justify-center mb-8"><span className="editorial-bar" aria-hidden="true" /></div>
            <h2 className="font-display text-display-2 font-normal text-ink">
              Pásate por <span className="italic">Lost Grill.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="py-8 md:py-4 md:px-10 border-t border-line md:border-t-0 md:border-l md:border-l-accent/40 md:first:border-l-0 text-center md:text-left">
              <div className="overline mb-3 text-inkSoft" style={{ color: 'var(--ink-soft)' }}>Teléfono</div>
              <a href={`tel:${phone}`} className="font-display text-2xl text-ink hover:text-accent transition-colors duration-200">
                +34 675 811 548
              </a>
              <p className="mt-2 text-sm text-inkSoft">Reservas y consultas</p>
            </div>
            <div className="py-8 md:py-4 md:px-10 border-t border-line md:border-t-0 md:border-l md:border-l-accent/40 text-center md:text-left">
              <div className="overline mb-3" style={{ color: 'var(--ink-soft)' }}>WhatsApp</div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quería reservar mesa en Lost Grill.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-ink hover:text-accent transition-colors duration-200"
              >
                Escríbenos
              </a>
              <p className="mt-2 text-sm text-inkSoft">Respuesta rápida</p>
            </div>
            <div className="py-8 md:py-4 md:px-10 border-t border-line md:border-t-0 md:border-l md:border-l-accent/40 text-center md:text-left">
              <div className="overline mb-3" style={{ color: 'var(--ink-soft)' }}>Ubicación</div>
              <p className="font-display text-2xl text-ink">Madrid</p>
              <p className="mt-2 text-sm text-inkSoft">Dirección exacta a confirmar</p>
            </div>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${phone}`} className="btn-primary">
              Llamar ahora
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quería reservar mesa en Lost Grill.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="h-px w-full bg-accent/40" />
          <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-inkSoft">
            <div className="font-display text-base">
              Lost <span className="italic text-accent">Grill</span>
            </div>
            <div className="text-xs tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} · Parrilla · Madrid
            </div>
            <a href={`tel:${phone}`} className="text-xs hover:text-ink transition-colors duration-200">
              +34 675 811 548
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
