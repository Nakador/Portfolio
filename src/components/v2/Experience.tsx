"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"

export function Experience() {
  const { experience } = portfolioData

  return (
    <section className="bg-muted/30 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-16">
           <h2 className="text-4xl md:text-5xl font-sans font-bold text-center relative inline-block text-foreground">
             EXPERIENCE
             {/* Decorative dot above */}
             <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-border rounded-full blur-[1px]"></span>
           </h2>
        </div>

        <div className="flex flex-col">
           {/* Experience Rows */}
           {experience.map((job, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border items-start hover:bg-card hover:shadow-sm transition-all duration-300 rounded-lg md:rounded-none px-4 md:px-0"
             >
                {/* Mobile View: Stacked */}
                <div className="col-span-7 md:pl-4">
                   <h3 className="text-xl font-bold font-serif text-foreground">{job.role}</h3>
                   <div className="flex items-center gap-2 mt-1 mb-4">
                     <span className="text-foreground font-medium">{job.company}</span>
                     {/* Tech stack pills could go here if desired */}
                   </div>
                   
                   {/* Achievements List */}
                   <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">
                     {job.achievements.map((item, i) => (
                       <li key={i} className="pl-1">
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="col-span-2 md:text-right text-sm text-muted-foreground font-medium pt-1">
                   {job.location}
                </div>

                <div className="col-span-3 flex items-start justify-end gap-4 md:pr-4 pt-1">
                   <div className="h-8 w-[1px] bg-border hidden md:block"></div>
                   <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap text-foreground">{job.period}</span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
