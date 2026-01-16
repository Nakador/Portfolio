"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
  const { projects } = portfolioData

  return (
    <section className="bg-muted/30 py-20 px-4 md:px-12">
       <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-20 text-center">
             <div className="space-y-4">
               <div className="w-12 h-12 mx-auto border-2 border-dashed border-muted-foreground rounded-full animate-spin-slow"></div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase text-foreground">Case Study</h2>
               <p className="text-muted-foreground max-w-md mx-auto text-sm">
                 Selected works showcasing comprehensive design thinking and technical execution.
               </p>
             </div>
          </div>

          <div className="space-y-24">
             {projects.map((project, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
                 className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
               >
                  {/* Image/Visual Block */}
                  <div className="w-full lg:w-3/5">
                     <div className="bg-card p-2 rounded-2xl shadow-xl overflow-hidden aspect-[4/3] group relative">
                        <div className="absolute inset-0 bg-muted animate-pulse">
                           {/* Placeholder for project image since we don't have distinct images per project in data yet */}
                           <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-3xl opacity-20 uppercase">
                              {project.name} Visual
                           </div>
                        </div>
                        <div className="absolute bottom-6 left-6 flex gap-2">
                           {project.tech?.slice(0, 2).map(t => (
                             <span key={t} className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider">{t}</span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Content Block */}
                  <div className="w-full lg:w-2/5 space-y-6">
                     <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                       Web Design
                     </div>
                     
                     <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-foreground">
                       {project.name} <br/> 
                       <span className="text-muted-foreground">Project Solution</span>
                     </h3>

                     <p className="text-muted-foreground leading-relaxed">
                       {project.description}
                     </p>
                     
                     <div className="pt-4">
                        <button className="flex items-center gap-2 font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 border-b border-foreground pb-1 text-foreground">
                          See Details <ArrowUpRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-32 p-12 bg-card rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
             <div>
                <h3 className="text-3xl font-serif font-bold mb-2 text-foreground">Have a project in mind?</h3>
                <p className="text-muted-foreground">Let&apos;s build something extraordinary together.</p>
             </div>
             <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105">
                Start a Project
             </button>
          </div>
       </div>
    </section>
  )
}
