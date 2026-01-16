"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
}

export function Section({ children, className, id, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)}>
      {/* Decorative Pixel Grid Divider at Top (Optional per section) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-20"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                {subtitle}
              </p>
            )}
            
            {/* Dotted decorative line under header */}
            <div className="mt-8 flex gap-2">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                 ))}
                 <div className="h-1.5 w-24 rounded-full bg-primary" />
            </div>
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  )
}
