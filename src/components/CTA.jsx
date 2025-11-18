import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 sm:p-12">
          <div className="absolute -inset-1 rounded-[28px] bg-[radial-gradient(600px_200px_at_0%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_200px_at_100%_100%,rgba(16,185,129,0.15),transparent)] opacity-80" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Deploy enterprise-grade security in minutes</h3>
              <p className="mt-3 text-emerald-100/80">Set up in your cloud with a few clicks. No agents. No downtime.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input className="col-span-2 rounded-xl bg-slate-900/70 ring-1 ring-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-emerald-400/40" placeholder="Work email" />
              <button type="button" className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">Get started</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
