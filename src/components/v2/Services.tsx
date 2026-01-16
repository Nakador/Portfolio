"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { Code, Terminal, Cpu, PenTool, Layout, Server } from "lucide-react"

export function Services() {
  const { skills } = portfolioData
  
  // Icon mapping for categories (simple approximation)
  const icons = [Code, Terminal, Layout, Server, Cpu, PenTool]

  return (
    <section className="bg-background py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Left: Title & Description */}
           <div className="lg:col-span-4 space-y-8">
              <div className="space-y-2">
                 <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-foreground pl-3 my-4">
                   My Services ?
                 </h4>
                 <h2 className="text-5xl md:text-6xl font-serif font-black leading-tight uppercase text-foreground">
                   What I&apos;m <br/> Offering
                 </h2>
              </div>
              
              <div className="w-12 h-1 bg-foreground"></div>

              <div className="flex items-center justify-between pt-12">
                <button className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                   ↓
                </button>
                <div className="h-24 w-[1px] bg-border"></div>
                <div className="text-xs font-mono rotate-90 origin-left translate-x-4 text-foreground">SCROLL TO SEE MORE</div>
              </div>
           </div>

           {/* Right: Grid of Services (mapped from skills) */}
           <div className="lg:col-span-8">
              <div className="text-muted-foreground mb-12 max-w-lg text-sm">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {skills.map((category, idx) => {
                   const Icon = icons[idx % icons.length]
                   return (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1 }}
                       className="group border border-border hover:border-foreground p-8 flex flex-col justify-between aspect-square transition-colors duration-300"
                     >
                       <Icon className="w-10 h-10 stroke-[1] mb-6 group-hover:rotate-12 transition-transform duration-500 text-foreground" />
                       
                       <div>
                         <h3 className="text-lg font-bold uppercase mb-4 text-foreground">{category.category}</h3>
                         <ul className="text-sm text-muted-foreground space-y-1">
                           {category.items.slice(0, 4).map((item, i) => (
                             <li key={i}>• {item}</li>
                           ))}
                         </ul>
                       </div>

                       <div className="flex justify-between items-center mt-6 pt-6 border-t border-border group-hover:border-foreground/10">
                          <span className="text-xs font-bold uppercase tracking-widest text-foreground">Read More</span>
                          <span className="text-foreground">→</span>
                       </div>
                     </motion.div>
                   )
                 })}
                 
                 {/* "All Services" Link Block */}
                 <div className="flex items-center justify-center">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                      All Services
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
