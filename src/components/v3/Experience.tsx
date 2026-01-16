import { portfolioData } from "@/data/portfolio"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Experience() {
  const { experience } = portfolioData

  return (
    <section className="py-24 px-4 md:px-12 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-end gap-4 mb-16">
           <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary">Experience</h2>
           <div className="h-px bg-border flex-1 mb-4 opacity-50"></div>
        </div>

        <div className="flex flex-col gap-8">
          {experience.map((exp, index) => (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              delay={index * 0.1}
            >
            <div 
              className="group relative bg-background/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
               
               <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium tracking-wider mb-4 border border-border/50">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-3xl font-serif font-semibold mb-2  text-orange-500 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="text-lg text-primary font-medium mb-6">
                    {exp.company}
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-2">
                         <span className="select-none text-primary/60">•</span>
                         <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
