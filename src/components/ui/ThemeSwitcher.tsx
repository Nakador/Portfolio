"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const themes = [
  { name: "Electric Blue", value: "default", color: "bg-blue-500" },
  { name: "Retro Red", value: "retro-red", color: "bg-red-500" },
  { name: "Cyber Green", value: "cyber-green", color: "bg-green-500" },
  { name: "Midnight Purple", value: "midnight-purple", color: "bg-purple-600" },
  { name: "Solar Orange", value: "solar-orange", color: "bg-orange-500" },
  { name: "Neon Pink", value: "neon-pink", color: "bg-pink-500" },
  { name: "Ocean Teal", value: "ocean-teal", color: "bg-teal-500" },
  { name: "Royal Gold", value: "royal-gold", color: "bg-yellow-500" },
  { name: "Slate Gray", value: "slate-gray", color: "bg-slate-500" },
  { name: "Berry Rose", value: "berry-rose", color: "bg-rose-500" },
  { name: "Mint Fresh", value: "mint-fresh", color: "bg-emerald-400" },
  { name: "Crimson Dark", value: "crimson-dark", color: "bg-red-700" },
  { name: "Indigo Deep", value: "indigo-deep", color: "bg-indigo-600" },
]

interface ThemeSwitcherProps {
  fixed?: boolean
  className?: string
}

export function ThemeSwitcher({ fixed = true, className }: ThemeSwitcherProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [colorTheme, setColorTheme] = React.useState("default")

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Handle color theme switching
  React.useEffect(() => {
    // Determine current color theme from body attribute if needed, 
    // but simplified: we control the data-theme attribute on <body> directly here
    // alongside next-themes for dark/light
    const root = document.querySelector("body")
    if (root) {
      if (colorTheme === "default") {
        root.removeAttribute("data-theme")
      } else {
        root.setAttribute("data-theme", colorTheme)
      }
    }
  }, [colorTheme])

  if (!mounted) {
    return null
  }

  return (
    <div className={cn(
      "flex items-center gap-2",
      fixed && "fixed top-6 right-6 z-50",
      className
    )}>
      {/* Dark/Light Toggle */}
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background  shadow-sm hover:bg-accent transition-colors text-primary"
      >
        <AnimatePresence mode="wait">
          {resolvedTheme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5 text-primary hover:text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className=""
            >
              <Sun className="h-5 w-5 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="sr-only">Toggle theme</span>
      </button>

      {/* Palette Switcher */}
      {/* <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-orange-500 shadow-sm hover:bg-accent transition-colors text-primary"
        >
          <Palette className="h-5 w-5 text-white hover:text-primary" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute right-0 top-12 flex flex-col gap-2 rounded-lg border border-border bg-background/80 backdrop-blur-md p-3 shadow-lg min-w-[140px]"
            >
              <span className="text-xs font-semibold text-muted-foreground px-1">
                Accent Color
              </span>
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setColorTheme(t.value)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "flex items-center bg-primary gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-accent transition-colors",
                    colorTheme === t.value && "bg-accent font-medium"
                  )}
                >
                  <span className={cn("h-3 w-3 rounded-full", t.color)} />
                  {t.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
  )
}
