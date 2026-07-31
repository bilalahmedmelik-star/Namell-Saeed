const WORDS = [
  'Strategy',
  'Advertising',
  'Marketing',
  'Storytelling',
  'Branding',
  'Campaigns',
  'Media',
  'Creative',
];

export function Marquee() {
  return (
    <div className="border-y border-ink-200 bg-ink-900 text-cream-50 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {WORDS.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="font-display italic text-3xl md:text-5xl px-8">
                  {w}
                </span>
                <span className="text-ember-400 text-3xl md:text-5xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
