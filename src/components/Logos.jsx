import React from 'react'
import { motion } from 'framer-motion'

export default function Logos() {
  const logos = ['Stripe', 'Vercel', 'Cloudflare', 'Notion', 'Supabase', 'Linear']
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-slate-400">Trusted by forward-thinking teams</motion.p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {logos.map((name) => (
              <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
