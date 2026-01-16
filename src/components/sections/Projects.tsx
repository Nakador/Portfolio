"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { ArrowUpRight, Github } from "lucide-react"

export function Projects() {
  const { projects } = portfolioData

  return (
    <Section title="Featured Projects" subtitle="A selection of my recent work in web development.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
          >
             <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <Github size={24} />
                    </div>
                    <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                </p>
             </div>

             <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech?.map((t) => (
                    <span 
                        key={t} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                        {t}
                    </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
