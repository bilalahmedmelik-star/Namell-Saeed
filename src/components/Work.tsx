import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Pulse — A Gen-Z Launch Playbook',
    category: 'Brand Strategy',
    year: '2025',
    blurb:
      'A full go-to-market strategy for a fictional energy drink, built around cultural moments and community-led hype loops.',
    tags: ['Positioning', 'Audience Research', 'Launch Plan'],
    accent: 'from-ember-400/30 to-ember-600/10',
  },
  {
    title: 'Mirror — Print Meets Feed',
    category: 'Advertising',
    year: '2025',
    blurb:
      'An integrated ad concept bridging a print magazine spread with a reactive social campaign, designed for scroll-stopping continuity.',
    tags: ['Art Direction', 'Copywriting', 'Social'],
    accent: 'from-ink-200/60 to-ink-400/10',
  },
  {
    title: 'Roots — Local Brand Revival',
    category: 'Marketing',
    year: '2024',
    blurb:
      'A marketing roadmap that repositioned a small local café chain around heritage storytelling and a loyalty-first community model.',
    tags: ['Rebrand', 'Loyalty', 'Content'],
    accent: 'from-ember-400/20 to-ink-200/40',
  },
  {
    title: 'Signal — Media Planning Studio',
    category: 'Strategy',
    year: '2024',
    blurb:
      'A media planning framework comparing channel mix, frequency and budget allocation across three campaign archetypes.',
    tags: ['Media Mix', 'Budgeting', 'Analytics'],
    accent: 'from-ink-300/40 to-ember-400/10',
  },
];

export function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-ember-600">
            Selected Work
          </span>
          <span className="h-px flex-1 bg-ink-200" />
          <span className="text-xs text-ink-400">04 / Projects</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal reveal-scale group relative rounded-3xl border border-ink-200 bg-cream-50 p-8 md:p-10 hover:border-ember-500/50 transition-colors duration-300 overflow-hidden"
              style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
            >
              <div
                className={`pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-400">
                    {p.category}
                  </span>
                  <span className="text-xs text-ink-400">{p.year}</span>
                </div>

                <h3 className="mt-6 font-display text-3xl md:text-4xl font-light leading-tight text-ink-900">
                  {p.title}
                </h3>

                <p className="mt-4 text-ink-600 leading-relaxed">{p.blurb}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-ink-200 text-ink-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-ember-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-medium">View case</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
