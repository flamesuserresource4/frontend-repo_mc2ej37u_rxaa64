import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: [
      'Up to 3 cloud accounts',
      'Baseline posture checks',
      'Email alerts',
    ],
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/mo',
    highlight: true,
    features: [
      'Unlimited accounts',
      'Real-time threat detection',
      'Slack & webhook alerts',
      'AI remediation suggestions',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'SAML SSO & SCIM',
      'Dedicated support',
      'Private cloud deployment',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</motion.h2>
          <p className="mt-3 text-emerald-100/80">Choose a plan that grows with you.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay: idx*0.05}} className={`rounded-2xl border p-6 backdrop-blur bg-slate-900/40 ${t.highlight? 'border-emerald-400/30 shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_40px_80px_-20px_rgba(16,185,129,0.35)]':'border-emerald-400/10'}`}>
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{t.price}</span>
                <span className="text-emerald-100/70 mb-1">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-emerald-100/80 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold transition ${t.highlight? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400':'ring-1 ring-emerald-300/30 text-emerald-200 hover:bg-emerald-500/10'}`}>
                {t.highlight? 'Start free trial':'Contact sales'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
