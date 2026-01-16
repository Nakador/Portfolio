"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { Calendar, MapPin, Building2 } from "lucide-react"

export function Experience() {
  const { experience } = portfolioData

  return (
    <Section title="Experience" subtitle="My professional journey journey helping companies scale.">
        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pb-12">
            {experience.map((job, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] md:-left-[11px] top-0 h-4 w-4 md:h-5 md:w-5 rounded-full border-4 border-background bg-primary" />

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start justify-between mb-4">
                         <div>
                             <h3 className="text-2xl font-bold">{job.role}</h3>
                             <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                <Building2 size={16} />
                                {job.company}
                             </div>
                         </div>
                         
                         <div className="flex flex-col gap-1 text-sm text-muted-foreground font-mono bg-accent/30 p-2 rounded-lg min-w-[160px]">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} /> {job.period}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} /> {job.location}
                            </div>
                         </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-muted-foreground mb-6">
                        <ul className="list-disc pl-5 space-y-2">
                            {job.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-mono font-medium border border-border"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
  )
}
