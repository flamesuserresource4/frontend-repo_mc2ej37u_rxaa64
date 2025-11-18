import { ShieldCheck, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="flex items-center gap-3">
              <span className="relative grid place-items-center">
                <span className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-md" />
                <span className="relative rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent p-2 ring-1 ring-emerald-400/30">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                </span>
              </span>
              <span className="text-white font-semibold tracking-tight">AegisCloud</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-slate-300 hover:text-white transition">Sign in</a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400 transition">
                Get started
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg ring-1 ring-emerald-400/30 p-2 text-emerald-300">
              <Menu className="h-5 w-5" />
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-emerald-400/10 px-6 py-3 space-y-2">
              <a href="#features" className="block text-slate-200">Features</a>
              <a href="#pricing" className="block text-slate-200">Pricing</a>
              <a href="#faq" className="block text-slate-200">FAQ</a>
              <a href="#cta" className="block rounded-lg bg-emerald-500 text-slate-900 font-semibold text-center py-2">Get started</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
