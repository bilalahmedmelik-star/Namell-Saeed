import { ArrowUpRight, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 md:py-32 bg-ink-900 text-cream-50 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="reveal flex items-center gap-3 mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-ember-400">
            Get in touch
          </span>
          <span className="h-px flex-1 bg-ink-600" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="reveal font-display text-5xl md:text-7xl font-light leading-[1.02]">
              Let's build
              <br />
              something{' '}
              <span className="italic text-ember-400">loud</span>.
            </h2>
            <p className="reveal mt-8 text-ink-200 text-lg max-w-md">
              Open to collaborations, internships and creative projects in
              strategy, advertising and marketing.
            </p>

            <a
              href="mailto:namell.saeed@example.com"
              className="reveal mt-10 inline-flex items-center gap-2 text-ember-400 hover:text-ember-500 transition-colors group"
            >
              <Mail className="h-5 w-5" />
              <span className="text-lg">namell.saeed@example.com</span>
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal reveal-right rounded-3xl border border-ink-700 bg-ink-800/50 p-8 space-y-5"
          >
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your name"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="you@email.com"
            />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                rows={4}
                className="w-full rounded-xl bg-ink-900/60 border border-ink-700 px-4 py-3 text-cream-50 placeholder:text-ink-400 focus:outline-none focus:border-ember-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full rounded-xl bg-ember-500 text-ink-900 font-medium py-3.5 hover:bg-ember-400 transition-colors duration-200 disabled:opacity-70"
            >
              {sent ? 'Message sent ✓' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-ink-900/60 border border-ink-700 px-4 py-3 text-cream-50 placeholder:text-ink-400 focus:outline-none focus:border-ember-400 transition-colors"
      />
    </div>
  );
}
