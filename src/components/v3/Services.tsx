"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { Code, Terminal, Cpu, PenTool, Layout, Server } from "lucide-react"

export function Services() {
  const { skills } = portfolioData
  
  // Icon mapping for categories (simple approximation)
  const icons = [Code, Terminal, Layout, Server, Cpu, PenTool]

  // Custom icon overrides
  const customIcons: Record<string, string> = {
    "React": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", // Wikipedia SVG link was for page, using direct PNG thumb
    "Redux": "https://cdn-images-1.medium.com/max/1600/1*YWr-aGD5v0_Ca6YyDAlF2A.png",
    "RTK Query": "https://avatars.githubusercontent.com/u/73801201?s=200&v=4",
    "Antd": "https://camo.githubusercontent.com/0482c716bddc266bfab9f8473041a87877e24147dcc03443bca2e67b57dc9b26/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f77496a4d446e7372446f50506349562e706e67",
    "Framer Motion": "https://user-images.githubusercontent.com/12479133/218274641-789a7f34-e86d-49d7-8321-72f5c7604473.png", // Replaced broken user-attachments link with reliable one
    "React Testing Library": "https://raw.githubusercontent.com/testing-library/react-testing-library/main/other/goat.png",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/960px-Unofficial_JavaScript_logo_2.svg.png",
    "Storybook": "https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png",
    "GitHub Copilot": "https://images.seeklogo.com/logo-png/42/1/github-copilot-logo-png_seeklogo-428029.png",
    "Anti Gravity": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvinjxr8MVZ69diNIbNNMfcUljy04dIjkqPQ&s",
    "Cursor": "https://cursor.com/marketing-static/icon-512x512.png"
  }

  return (
    <section className="bg-background py-24 px-4 md:px-12 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Left: Title & Description */}
           <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                 <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground border-l-4 border-primary pl-4 my-4">
                   My Stack
                 </h4>
                 <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight text-foreground">
                   Technical <br/> <span className="text-orange-500">Arsenal.</span>
                 </h2>
              </div>
              
              <div className="w-16 h-1 bg-primary rounded-full"></div>

              <p className="text-muted-foreground text-lg leading-relaxed pt-4">
                Tools and technologies I use to build digital products.
              </p>

              <div className="flex items-center justify-between pt-12">
                <div className="h-24 w-[1px] bg-border/60"></div>
                <div className="text-xs font-mono rotate-90 origin-left translate-x-4 text-muted-foreground tracking-widest uppercase">Explore Tech Stack</div>
              </div>
           </div>

           {/* Right: Grid of Services (mapped from skills) */}
           <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {skills.map((category, idx) => {
                   const Icon = icons[idx % icons.length]
                   return (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1 }}
                       className="group relative bg-background/40 backdrop-blur-sm border border-border/50 p-8 flex flex-col justify-between aspect-[4/5] md:aspect-square rounded-3xl hover:border-primary/50 transition-colors duration-500 hover:shadow-lg"
                     >
                       {/* Hover Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                       <div className="relative z-10">
    
                       
                           <div>
                             <h3 className="text-xl font-bold mb-6 text-foreground">{category.category}</h3>
                             <div className="flex flex-wrap gap-3">
                               {category.items.slice(0, 8).map((item, i) => (
                                 <div key={i} className="group/icon relative">
                                    <div className="w-20 h-20 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-orange-500 shadow-sm relative">
                                      {/* Using skillicons.dev for automatic tech logos based on name, or custom override */}
                                      <img 
                                        src={customIcons[item] || `https://skillicons.dev/icons?i=${item.toLowerCase().replace('.', '').replace(' ', '')}&theme=light`}
                                        alt={item}
                                        className="w-12 h-12 object-contain"
                                        onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          // Fallback to skillicons if custom fails, or hide if both fail
                                          if (!target.src.includes('skillicons.dev') && !customIcons[item]) {
                                             target.src = `https://skillicons.dev/icons?i=${item.toLowerCase().replace('.', '').replace(' ', '')}&theme=light`;
                                          } else {
                                             target.style.display = 'none';
                                          }
                                        }} 
                                      />
                                      
                                      <span className="text-[10px] font-bold text-white absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 bg-orange-500 px-2 py-1 rounded-full shadow-lg whitespace-nowrap z-20 pointer-events-none transition-all duration-300 scale-90 group-hover/icon:scale-100">
                                          {item}
                                          {/* Tiny triangle for tooltip */}
                                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rotate-45 transform"></span>
                                      </span>
                                    </div>
                                 </div>
                               ))}
                             </div>
                           </div>
                       </div>


                     </motion.div>
                   )
                 })}
                 

              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
