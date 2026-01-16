"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export const ScrollReveal = ({ children, width = "100%", delay = 0, className = "", direction = "up" }: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0
    },
  }

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
