import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.4)_100%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="relative border-t border-emerald-400/10 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-emerald-200/70">
          <p>© {new Date().getFullYear()} AegisCloud. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
