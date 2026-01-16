"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Projects() {
  const { projects } = portfolioData

  return (
    <section className="py-24 px-4 md:px-12 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-20 text-center">
             <div className="space-y-4">
               <div className="w-12 h-12 mx-auto border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>
               <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">My Playground</h4>
               <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-foreground">
                 Side <span className="text-primary">Projects.</span>
               </h2>
               <p className="text-muted-foreground max-w-md mx-auto text-lg pt-4 leading-relaxed">
                 A clearer look at my personal experiments, open source contributions, and fun builds.
               </p>
             </div>
          </div>

          <div className="flex justify-center gap-8 overflow-x-auto pb-12 -mx-4 px-4 md:-mx-12 md:px-12 snap-x snap-mandatory scrollbar-hide">
             {projects.map((project, index) => (
              <ScrollReveal 
                key={index}
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={index * 0.1}
                width="fit-content"
              >
               <motion.div 
                 className="flex-none w-[350px] snap-center group"
               >
                  <div className="flex flex-col gap-4">
                     {/* Simple Visual Block */}
                     <div className="w-full aspect-[4/3] bg-muted/30 rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                        <div className="text-muted-foreground/20 font-serif text-3xl uppercase">
                           {project.name}
                        </div>
                        
                        {/* Simple tech badges at bottom */}
                        <div className="absolute bottom-3 left-3 flex gap-2">
                           {project.tech?.slice(0, 2).map(t => (
                             <span key={t} className="bg-background text-foreground text-[10px] px-2 py-1 rounded border border-border">{t}</span>
                           ))}
                        </div>
                     </div>

                     {/* Content Block */}
                     <div className="space-y-2">
                        <div className="flex items-center justify-between">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Web Design</span>
                           <h3 className="text-xl font-serif font-bold text-foreground">
                             {project.name}
                           </h3>
                        </div>

                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="pt-2">
                           <button className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-orange-500 transition-colors flex items-center gap-2">
                             View Case Study <ArrowUpRight className="w-3 h-3" />
                           </button>
                        </div>
                     </div>
                  </div>
               </motion.div>
               </ScrollReveal>
             ))}
          </div>


       </div>
    </section>
  )
}
