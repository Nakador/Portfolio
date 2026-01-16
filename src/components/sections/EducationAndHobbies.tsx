"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { GraduationCap, Music, Tent, Plane, Heart } from "lucide-react"

export function EducationAndHobbies() {
  const { education, interests } = portfolioData

  const getIcon = (interest: string) => {
    const lower = interest.toLowerCase()
    if (lower.includes("music")) return <Music size={18} />
    if (lower.includes("camping")) return <Tent size={18} />
    if (lower.includes("travel")) return <Plane size={18} />
    return <Heart size={18} />
  }

  return (
    <Section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary w-8 h-8 md:w-10 md:h-10" /> 
                Education
            </h3>
            <div className="flex flex-col gap-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
                    >
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-muted-foreground mt-1 text-lg">{edu.school}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Hobbies Column */}
        <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-8">
                <Heart className="text-red-500 fill-red-500/20 w-8 h-8 md:w-10 md:h-10" /> 
                Hobbies
            </h3>
             <div className="flex flex-col gap-4">
                {interests.map((interest, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-colors"
                    >
                        <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                             {getIcon(interest)}
                        </div>
                        <span className="font-medium text-xl">{interest}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  )
}
