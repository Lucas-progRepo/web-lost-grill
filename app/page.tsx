export default function Page() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            Lost <span className="italic text-accent">Grill</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-inkSoft">
            <a href="#filosofia" className="hover:text-ink transition-colors duration-200">Filosofía</a>
            <a href="#mesa" className="hover:text-ink transition-colors duration-200">La mesa</a>
            <a href="#local" className="hover:text-ink transition-colors duration-200">El local</a>
            <a href="#contacto" className="hover:text-ink transition-colors duration-200">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen hero-bg overflow-hidden flex items-center">
        <div className="grain" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="pill mb-10">
              <span className="dot" />
              <span>Parrilla · Madrid</span>
            </div>
            <h1 className="font-display h1 font-normal mb-8">
              Donde la <em className="italic text-accent">brasa</em> manda.
            </h1>
            <p className="body-lg text-inkSoft max-w-xl mb-12">
              Carne, fuego y tiempo. Lost Grill es una parrilla en Madrid construida alrededor de una idea sencilla: producto honesto cocinado sobre brasa de verdad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="btn">
                Cómo llegar
                <span aria-hidden>→</span>
              </a>
              {/* pending real phone */}
              <a href="#" className="btn-ghost">Llamar</a>
            </div>
          </div>

          {/* meta strip */}
          <div className="absolute bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex items-end justify-between text-inkSoft">
            <div className="overline">Est. — Madrid</div>
            <div className="hidden md:block overline text-right">
              Brasa de encina<br/>
              <span className="text-ink">cocción al fuego</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section id="filosofia" className="relative bg-bg py-24 lg:py-40 overflow-hidden">
        <div className="absolute top-10 right-6 lg:right-20 numeral" aria-hidden>01</div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="overline text-accent mb-6">Capítulo 01 — Filosofía</p>
              <span className="bar mb-8" />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display h2 font-normal mb-10">
                Sin atajos, sin <em className="italic text-inkSoft">humo</em> de marketing.
              </h2>
              <p className="body-lg text-inkSoft max-w-2xl">
                Trabajamos con cortes seleccionados, brasa de encina y la paciencia que exige cocinar al fuego. Cada plato sale cuando tiene que salir. Esa es toda la fórmula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA / LA MESA */}
      <section id="mesa" className="relative bg-surface py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 diag-pattern hidden lg:block" aria-hidden />
        <div className="absolute top-12 left-6 lg:left-24 numeral" aria-hidden>02</div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="max-w-3xl mb-16 lg:mb-24 group">
            <p className="overline text-accent mb-6">Capítulo 02 — La mesa</p>
            <span className="bar bar-grow mb-8" />
            <h2 className="font-display h2 font-normal">
              Lo que ponemos sobre la <em className="italic">brasa</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {[
              { n: '01', t: 'Carnes maduradas', d: 'Cortes nacionales y de importación seleccionados pieza a pieza.' },
              { n: '02', t: 'Brasa de encina', d: 'Calor lento, ahumado limpio, sin trampas.' },
              { n: '03', t: 'Guarniciones de mercado', d: 'Verdura de temporada asada al rescoldo.' },
              { n: '04', t: 'Vinos de productor', d: 'Carta corta, viva, con criterio.' }
            ].map((it) => (
              <article key={it.n} className="card">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="overline text-inkSoft">{it.n}</span>
                  <span className="h-px w-10 bg-line" />
                </div>
                <h3 className="font-display h3 mb-3">{it.t}</h3>
                <p className="text-inkSoft body-lg">{it.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section id="local" className="relative ambiente-bg py-32 lg:py-48 overflow-hidden">
        <div className="grain" />
        <div className="absolute top-12 right-6 lg:right-20 numeral" aria-hidden>03</div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 lg:col-start-2">
              <p className="overline text-accent mb-6">Capítulo 03 — El local</p>
              <span className="bar mb-8" />
              <h2 className="font-display h2 font-normal mb-10">
                Un sitio para <em className="italic">quedarse</em>.
              </h2>
              <p className="body-lg text-ink/90 max-w-xl">
                Madera, hierro y luz baja. Un local pensado para cenas largas, sobremesa con vino y conversación que no acaba en el postre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative bg-bg py-24 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="overline text-accent mb-6">Encuentra el fuego</p>
            <span className="bar mb-8" />
            <h2 className="font-display h2 font-normal">
              Pásate por <em className="italic">Lost Grill</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line">
            <div className="lg:col-span-4 bg-bg p-8 lg:p-10">
              <p className="overline text-inkSoft mb-4">Dirección</p>
              <p className="font-display text-2xl mb-6">Madrid</p>
              <p className="small text-inkSoft">Dirección exacta próximamente.</p>
            </div>
            <div className="lg:col-span-4 bg-bg p-8 lg:p-10">
              <p className="overline text-inkSoft mb-4">Teléfono</p>
              <p className="font-display text-2xl mb-6">[TEL_PENDIENTE]</p>
              <p className="overline text-inkSoft mb-4 mt-8">Email</p>
              <p className="font-display text-lg break-all">[EMAIL_PENDIENTE]</p>
            </div>
            <div className="lg:col-span-4 bg-bg p-8 lg:p-10">
              <p className="overline text-inkSoft mb-4">Horario</p>
              <p className="font-display text-2xl mb-6">[HORARIO_PENDIENTE]</p>
              <div className="flex flex-col gap-3 mt-8">
                {/* pending real phone */}
                <a href="#" className="btn">Llamar<span aria-hidden>→</span></a>
                {/* pending real phone */}
                <a href="#" className="btn-ghost">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-12 border border-line overflow-hidden" style={{ filter: 'grayscale(0.6) brightness(0.55) contrast(1.1)' }}>
            <iframe
              title="Mapa Madrid"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7235%2C40.4080%2C-3.6735%2C40.4380&layer=mapnik"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#top" className="font-display text-xl tracking-tight">
              Lost <span className="italic text-accent">Grill</span>
            </a>
            <p className="small text-inkSoft mt-2">Parrilla · Madrid</p>
          </div>
          <p className="small text-inkSoft">© {new Date().getFullYear()} Lost Grill. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
