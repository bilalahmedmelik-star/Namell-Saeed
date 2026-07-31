import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-28 pb-10 overflow-hidden">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[34rem] w-[34rem] rounded-full bg-ember-400/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-ink-200/40 blur-3xl" />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-6xl">
        <div
          className={`flex items-center gap-2 mb-8 transition-all duration-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <Sparkles className="h-4 w-4 text-ember-500" />
          <span className="text-xs uppercase tracking-[0.3em] text-ink-500">
            Media Science · Year 3
          </span>
        </div>

        <h1 className="font-display font-light leading-[0.92] tracking-tight text-ink-900 text-[15vw] md:text-[11vw] lg:text-[9.5rem]">
          <span
            className={`block transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Namell
          </span>
          <span
            className={`block italic text-ember-600 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Saeed
          </span>
        </h1>

        <p
          className={`mt-10 max-w-xl text-lg md:text-xl text-ink-600 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A third-year media science student crafting{' '}
          <span className="text-ink-900 font-medium">strategy</span>,{' '}
          <span className="text-ink-900 font-medium">advertising</span> and{' '}
          <span className="text-ink-900 font-medium">marketing</span> campaigns
          that make brands impossible to ignore.
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div
          className={`flex items-center gap-2 text-ink-500 transition-opacity duration-700 delay-300 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-600 hover:text-ember-600 transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
