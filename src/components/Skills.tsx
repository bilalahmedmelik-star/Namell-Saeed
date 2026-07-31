const GROUPS = [
  {
    title: 'Strategy',
    items: ['Brand Positioning', 'Audience Research', 'Campaign Planning', 'Go-to-Market'],
  },
  {
    title: 'Advertising',
    items: ['Art Direction', 'Copywriting', 'Print & Social', 'Concept Development'],
  },
  {
    title: 'Marketing',
    items: ['Content Strategy', 'Channel Mix', 'Community Building', 'Brand Voice'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-ember-600">
            Capabilities
          </span>
          <span className="h-px flex-1 bg-ink-200" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {GROUPS.map((g, gi) => (
            <div
              key={g.title}
              className="reveal reveal-blur rounded-3xl border border-ink-200 bg-cream-100 p-8 hover:bg-cream-200 transition-colors duration-300"
              style={{ ['--reveal-delay' as string]: `${gi * 80}ms` }}
            >
              <h3 className="font-display text-2xl text-ink-900">{g.title}</h3>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-ink-600 group/li"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ember-500 group-hover/li:scale-150 transition-transform duration-200" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
