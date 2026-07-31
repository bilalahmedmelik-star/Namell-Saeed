export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 bg-ink-900 text-ink-400 border-t border-ink-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Namell Saeed — Media Science
        </p>
        <p className="text-xs uppercase tracking-[0.25em]">
          Designed & built with care
        </p>
      </div>
    </footer>
  );
}
