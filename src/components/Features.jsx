import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Radar, Bot, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance, automated',
    desc: 'Map controls to SOC2, ISO27001, HIPAA and generate audit-ready evidence.'
  },
  {
    icon: Radar,
    title: 'Real-time detection',
    desc: 'Stream telemetry across your stack and surface threats in seconds.'
  },
  {
    icon: Bot,
    title: 'AI remediation',
    desc: 'Autofix misconfigurations with safe, reviewable change sets.'
  },
  {
    icon: Lock,
    title: 'Zero-trust access',
    desc: 'Provision least-privilege, rotate secrets, and enforce MFA everywhere.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.08),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-bold text-white">Everything you need to secure your cloud</motion.h2>
          <p className="mt-3 text-emerald-100/80">Built for modern, fast-moving teams.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon,title,desc}, idx) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay: idx*0.05}} className="group rounded-2xl border border-emerald-400/10 bg-slate-900/40 p-6 backdrop-blur hover:border-emerald-400/30 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_20px_60px_-20px_rgba(16,185,129,0.25)] transition">
              <div className="relative h-12 w-12 grid place-items-center">
                <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur" />
                <Icon className="relative h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-emerald-100/70">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-emerald-300 text-xs">
                <BadgeCheck className="h-4 w-4" />
                Included in all plans
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
