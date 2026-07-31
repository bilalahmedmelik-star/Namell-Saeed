import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Work } from '@/components/Work';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import { useScrollProgress } from '@/hooks/useScrollProgress';

function App() {
  const ref = useReveal<HTMLDivElement>();
  const progress = useScrollProgress();

  return (
    <div ref={ref} id="top" className="grain min-h-screen bg-cream-50">
      <Nav progress={progress} />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
