export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 md:py-32 bg-ink-900 text-cream-50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="reveal flex items-center gap-3 mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-ember-400">
              About
            </span>
            <span className="h-px flex-1 bg-ink-600" />
          </div>

          <div className="reveal reveal-left sticky top-24">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 border border-ink-700 p-8 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-ember-500/20 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-ink-300">
                  Portfolio
                </span>
                <span className="text-xs text-ink-300">2025</span>
              </div>
              <div className="relative">
                <p className="font-display text-6xl md:text-7xl font-light leading-none">
                  N<span className="italic text-ember-400">S</span>
                </p>
                <p className="mt-4 text-sm text-ink-300">
                  Namell Saeed — Media Science
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <h2 className="reveal font-display text-4xl md:text-6xl font-light leading-[1.05]">
            I turn{' '}
            <span className="italic text-ember-400">insight</span> into
            campaigns people actually remember.
          </h2>

          <div className="mt-10 space-y-6 text-ink-200 text-lg leading-relaxed">
            <p className="reveal" style={{ ['--reveal-delay' as string]: '60ms' }}>
              I'm Namell Saeed, a third-year media science student obsessed with
              the space where strategy meets storytelling. My work lives at the
              intersection of advertising, marketing and brand-building —
              turning research into ideas and ideas into campaigns that move
              people.
            </p>
            <p className="reveal" style={{ ['--reveal-delay' as string]: '120ms' }}>
              Right now I'm developing projects around campaign strategy,
              integrated advertising and audience-first marketing — exploring
              how brands can show up authentically across print, social and
              experiential channels.
            </p>
            <p className="reveal" style={{ ['--reveal-delay' as string]: '180ms' }}>
              I believe great communication starts with listening. Every
              project I take on begins with a question: what does this audience
              already care about — and how do we meet them there?
            </p>
          </div>

          <div className="reveal mt-12 grid grid-cols-3 gap-4">
            {[
              { k: '3rd', v: 'Year, Media Science' },
              { k: '4+', v: 'Strategy projects' },
              { k: '∞', v: 'Ideas in progress' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-ink-700 p-5 hover:border-ember-400/50 transition-colors duration-300"
              >
                <p className="font-display text-3xl text-ember-400">{s.k}</p>
                <p className="mt-1 text-xs text-ink-300 uppercase tracking-wider">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
