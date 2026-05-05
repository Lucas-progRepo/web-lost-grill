export default function Page() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-lg tracking-tight">
            Lost <span className="italic text-accent">Grill</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre-nosotros" className="nav-link">Sobre</a>
            <a href="#carta" className="nav-link">Carta</a>
            <a href="#local" className="nav-link">Local</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </nav>
          <span className="md:hidden text-[11px] tracking-[0.2em] text-inkSoft uppercase">Madrid</span>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[100vh] flex items-center embers overflow-hidden">
        <div className="noise" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-9">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-line text-[11px] uppercase tracking-[0.2em] text-inkSoft">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Parrilla · Madrid
              </span>
              <h1 className="mt-8 font-display font-normal leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                Donde la <span className="italic text-accent">brasa</span><br />manda.
              </h1>
              <p className="mt-8 max-w-xl text-inkSoft leading-[1.7]" style={{ fontSize: '1.0625rem' }}>
                Carne, fuego y tiempo. Lost Grill es una parrilla en Madrid construida alrededor de una idea sencilla: producto honesto cocinado sobre brasa de verdad.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#carta" className="btn">
                  Ver la carta
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#contacto" className="btn btn-ghost">Cómo llegar</a>
              </div>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <div className="text-right">
                <div className="font-display italic text-accent text-5xl leading-none">01</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-inkSoft">Capítulo</div>
                <div className="mt-1 text-sm text-inkSoft">Brasa de encina</div>
                <div className="mt-12 text-[11px] uppercase tracking-[0.25em] text-inkSoft">Producto · Fuego · Tiempo</div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-inkSoft/70">
          Scroll
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative py-24 lg:py-40 section-hover">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <span className="bg-number" aria-hidden="true">01</span>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Capítulo 01 — Sobre nosotros</div>
              <div className="editorial-bar mt-10" />
            </div>
            <div className="lg:col-span-8 relative">
              <h2 className="font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Sin atajos, sin <span className="italic text-accent">humo</span> de marketing.
              </h2>
              <p className="mt-10 max-w-2xl text-inkSoft leading-[1.8]" style={{ fontSize: '1.0625rem' }}>
                Trabajamos con cortes seleccionados, brasa de encina y la paciencia que exige cocinar al fuego. Cada plato sale cuando tiene que salir. Esa es toda la fórmula.
              </p>
              <div className="mt-14 grid sm:grid-cols-3 gap-8 pt-10 border-t border-line">
                <div>
                  <div className="font-display italic text-accent text-3xl">01</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-inkSoft">Producto</div>
                  <div className="mt-2 text-sm text-ink/90">Cortes seleccionados pieza a pieza.</div>
                </div>
                <div>
                  <div className="font-display italic text-accent text-3xl">02</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-inkSoft">Fuego</div>
                  <div className="mt-2 text-sm text-ink/90">Brasa de encina, calor lento.</div>
                </div>
                <div>
                  <div className="font-display italic text-accent text-3xl">03</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-inkSoft">Tiempo</div>
                  <div className="mt-2 text-sm text-ink/90">Cada pieza sale cuando toca.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="relative py-24 lg:py-40 bg-surface border-y border-line">
        <div className="absolute inset-y-0 left-0 w-32 diag-lines hidden lg:block" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <span className="bg-number" aria-hidden="true">02</span>
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Capítulo 02 — La carta</div>
              <div className="editorial-bar mt-8" />
              <h2 className="mt-6 font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Lo que ponemos sobre la <span className="italic text-accent">brasa</span>.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
              <p className="text-inkSoft leading-[1.8]" style={{ fontSize: '1.0625rem' }}>
                Carta corta, viva, con criterio. Cambia con el mercado y con lo que tenga sentido el día que vengas.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-line">
            {[
              { n: '01', t: 'Carnes maduradas', d: 'Cortes nacionales y de importación seleccionados pieza a pieza.' },
              { n: '02', t: 'Brasa de encina', d: 'Calor lento, ahumado limpio, sin trampas.' },
              { n: '03', t: 'Guarniciones de mercado', d: 'Verdura de temporada asada al rescoldo.' },
              { n: '04', t: 'Vinos de productor', d: 'Carta corta, viva, con criterio.' }
            ].map((item) => (
              <article key={item.n} className="menu-card group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="font-display italic text-accent text-2xl leading-none">{item.n}</div>
                    <h3 className="mt-5 font-display font-normal" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                      {item.t}
                    </h3>
                    <p className="mt-3 text-inkSoft leading-relaxed text-[15px]">{item.d}</p>
                  </div>
                  <span className="text-inkSoft/40 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section id="local" className="relative py-24 lg:py-40 local-bg overflow-hidden section-hover">
        <div className="noise" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <span className="bg-number" aria-hidden="true">03</span>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Capítulo 03 — El local</div>
              <div className="editorial-bar mt-8" />
              <h2 className="mt-6 font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Un sitio para <span className="italic text-accent">quedarse</span>.
              </h2>
              <p className="mt-8 max-w-lg text-ink/85 leading-[1.8]" style={{ fontSize: '1.0625rem' }}>
                Madera, hierro y luz baja. Un local pensado para cenas largas, sobremesa con vino y conversación que no acaba en el postre.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] lg:aspect-[16/14] border border-line/80 overflow-hidden bg-gradient-to-br from-accentSoft via-surface to-bg">
                <div className="noise" />
                <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] text-inkSoft">Lost Grill · Madrid</div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="font-display italic text-ink/90 text-5xl leading-none">03</div>
                  <div className="text-right text-[11px] uppercase tracking-[0.25em] text-inkSoft">El espacio</div>
                </div>
                <div className="absolute inset-12 border border-line/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Encuentra el fuego</div>
            <div className="editorial-bar mt-8" />
            <h2 className="mt-6 font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Pásate por <span className="italic text-accent">Lost Grill</span>.
            </h2>
            <p className="mt-8 text-inkSoft leading-[1.8] max-w-xl" style={{ fontSize: '1.0625rem' }}>
              Estamos terminando de afinar los detalles de contacto. En cuanto cerremos teléfono, email y dirección exacta, los publicamos aquí.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-line border border-line">
            <div className="bg-bg p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Teléfono</div>
              <div className="mt-5 font-display text-2xl text-ink/90">Próximamente</div>
              <div className="mt-2 text-sm text-inkSoft">Pendiente de publicar</div>
            </div>
            <div className="bg-bg p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Email</div>
              <div className="mt-5 font-display text-2xl text-ink/90">Próximamente</div>
              <div className="mt-2 text-sm text-inkSoft">Pendiente de publicar</div>
            </div>
            <div className="bg-bg p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent">Ubicación</div>
              <div className="mt-5 font-display text-2xl text-ink/90">Madrid</div>
              <div className="mt-2 text-sm text-inkSoft">Dirección exacta próximamente</div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-inkSoft">Horario</span>
            <span className="h-px w-12 bg-accent" />
            <span className="font-display italic text-ink/80">Próximamente</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-line py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-xl">Lost <span className="italic text-accent">Grill</span></div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-inkSoft">Parrilla · Madrid</div>
          </div>
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-inkSoft">
            <a href="#sobre-nosotros" className="nav-link">Sobre</a>
            <a href="#carta" className="nav-link">Carta</a>
            <a href="#local" className="nav-link">Local</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-inkSoft/70">
            © {new Date().getFullYear()} Lost Grill
          </div>
        </div>
      </footer>
    </main>
  );
}
