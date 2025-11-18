import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20">
      <div className="absolute -z-10 inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.20),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(5,150,105,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.15),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" style={{backgroundImage:'radial-gradient(ellipse at top, rgba(16,185,129,0.15), transparent 60%)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SOC-grade protection for modern teams
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-white tracking-tight">
              Secure your cloud, at machine speed
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-emerald-100/80 max-w-xl">
              Continuous scanning, AI-powered threat detection, and automated remediation in one platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-slate-900 font-semibold shadow hover:bg-emerald-400 transition">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl ring-1 ring-emerald-300/30 px-5 py-3 text-emerald-200 hover:bg-emerald-500/10 transition">
                See features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-emerald-200/70 text-sm">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_,i)=> (
                  <div key={i} className="h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-emerald-400 to-cyan-400" />
                ))}
              </div>
              <span>Trusted by 1,200+ security teams</span>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.1}} className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl ring-1 ring-emerald-400/20 overflow-hidden bg-slate-900/50">
          <div className="absolute -inset-24 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(16,185,129,0.06),transparent,rgba(16,185,129,0.06))] animate-pulse" />
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
}
