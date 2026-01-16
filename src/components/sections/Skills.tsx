"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { CheckCircle2 } from "lucide-react"

export function Skills() {
  const { skills } = portfolioData

  return (
    <Section title="Technical Arsenal" subtitle="Tools and technologies I use to build digital products.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {skills.map((category, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-6"
            >
                <h3 className="text-xl font-bold flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-primary" />
                   {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                        <div 
                            key={item}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-colors"
                        >
                            <CheckCircle2 size={16} className="text-green-500" />
                            <span className="font-medium text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        ))}
      </div>
    </Section>
  )
}
