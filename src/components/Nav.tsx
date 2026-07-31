import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Nav({ progress }: { progress: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/80 backdrop-blur-md border-b border-ink-200'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-xl text-ink-900 tracking-tight"
          >
            Namell<span className="italic text-ember-600">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-600 hover:text-ember-600 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        {/* scroll progress bar */}
        <div className="h-0.5 bg-ink-200/60">
          <div
            className="h-full bg-ember-500 origin-left transition-transform duration-75"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>
    </>
  );
}
