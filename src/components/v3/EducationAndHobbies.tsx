"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { GraduationCap, Heart, Music, Tent, Plane, Book, Gamepad, Coffee } from "lucide-react"

export function EducationAndHobbies() {
  const { education, interests } = portfolioData

  const getIcon = (interest: string) => {
    const lower = interest.toLowerCase()
    if (lower.includes("music")) return <Music className="w-5 h-5" />
    if (lower.includes("camping")) return <Tent className="w-5 h-5" />
    if (lower.includes("travel")) return <Plane className="w-5 h-5" />
    if (lower.includes("read")) return <Book className="w-5 h-5" />
    if (lower.includes("game")) return <Gamepad className="w-5 h-5" />
    return <Heart className="w-5 h-5" />
  }

  return (
    <section className="py-24 px-4 md:px-12 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Education Column */}
            <div>
                 <div className="flex items-end gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Education</h2>
                    <div className="h-px bg-border flex-1 mb-3 opacity-50"></div>
                 </div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-background/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                        >
                             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300 text-primary">
                                <GraduationCap className="w-12 h-12 rotate-12" />
                             </div>
                            
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                            <p className="text-muted-foreground text-lg">{edu.school}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hobbies Column */}
            <div>
                <div className="flex items-end gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Hobbies</h2>
                    <div className="h-px bg-border flex-1 mb-3 opacity-50"></div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                 {getIcon(interest)}
                            </div>
                            <span className="font-medium text-lg group-hover:text-orange-600 transition-colors">{interest}</span>
                        </motion.div>
                    ))}
                 </div>
            </div>

        </div>
      </div>
    </section>
  )
}
