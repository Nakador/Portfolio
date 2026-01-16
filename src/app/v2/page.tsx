"use client"

import { useState, useEffect } from 'react'
import { Hero } from '@/components/v2/Hero'
import { Experience } from '@/components/v2/Experience'
import { Services } from '@/components/v2/Services'
import { Projects } from '@/components/v2/Projects'

import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { Circle } from "lucide-react"

// Force light mode for V2 to match the design aesthetics (or use ThemeProvider context if preferred)
export default function PageV2() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <main className="font-sans text-foreground bg-background selection:bg-primary selection:text-primary-foreground">
      {/* V2 Header / Nav Overlay */}
      {/* V2 Header / Nav Overlay */}
      <nav className="fixed top-6 left-0 w-full z-50 px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Circle */}
           
           <div className={`pointer-events-auto z-10 w-[4.5rem] h-[4.5rem] bg-primary backdrop-blur-md border border-border/40 rounded-full flex items-center justify-center shadow-md hover:scale-105 hover:opacity-100 transition-all duration-500 text-primary-foreground ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
            <div>
              <h1 className="font-serif    italic text-2xl font-bold z-5">Md.</h1>
            </div>
           </div>

           {/* Theme Switcher Circle */}
           <div className={`pointer-events-auto w-[3.5rem] h-[3.5rem] bg-primary backdrop-blur-md border border-border/40 rounded-full flex items-center justify-center shadow-md hover:scale-105 hover:opacity-100 transition-all duration-500 text-primary-foreground ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
              <ThemeSwitcher fixed={false} className="text-primary-foreground" />
           </div>
        </div>
      </nav>

      <Hero />
      <Experience />
      <Services />
      <Projects />
      
      {/* Simple V2 Footer */}
      <footer className="bg-foreground text-background py-20 px-8">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-4xl font-serif">Let&apos;s work together</h2>
            <div className="text-sm text-muted-foreground">
              © 2026 Montassar Daimi. All rights reserved.
            </div>
         </div>
      </footer>
    </main>
  )
}
