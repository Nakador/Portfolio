"use client"

import { useState, useEffect } from 'react'
import { Hero } from '@/components/v3/Hero'
import { Experience } from '@/components/v3/Experience'
import { Services } from '@/components/v3/Services'
import { Projects } from '@/components/v3/Projects'
import { EducationAndHobbies } from '@/components/v3/EducationAndHobbies'
import { Footer } from '@/components/v3/Footer'

import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { Circle, ArrowUp } from "lucide-react"

// Force light mode for V3 to match the design aesthetics (or use ThemeProvider context if preferred)
export default function PageV3() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Navbar logic
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Scroll to top button logic
      if (currentScrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <main className="font-sans text-foreground bg-background selection:bg-primary selection:text-primary-foreground min-h-screen">
      
      {/* Invisible Hover Zone at top to reveal navbar */}
      <div 
        className="fixed top-0 left-0 w-full h-24 z-40 bg-transparent"
        onMouseEnter={() => setIsVisible(true)}
      />

      {/* V3 Navbar - Floating Pill Design */}
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'}`}
      >
        <div className="bg-background/80 backdrop-blur-md border border-border/40 rounded-full px-6 py-3 shadow-lg flex items-center gap-8">
           {/* Logo */}
           <div 
             className="font-serif italic text-2xl font-bold cursor-pointer hover:scale-105 transition-transform"
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           >
             Md.
           </div>

           {/* Navigation Links */}
           <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">
                Experience
              </button>
              <button onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">
                Arsenal
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">
                Side Projects
              </button>
           </div>

           {/* Theme Switcher */}
           <div className="pl-4 border-l border-border/50">
              <ThemeSwitcher fixed={false} />
           </div>
        </div>
      </nav>

      <Hero />
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="arsenal">
        <Services />
      </div>
      
      <div id="projects">
        <Projects />
      </div>

      <div id="education">
        <EducationAndHobbies />
      </div>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-background">
         <div className="max-w-7xl mx-auto relative">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-500/10 blur-3xl rounded-full" />
             <div className="relative bg-background/40 backdrop-blur-xl border border-border/50 p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left hover:border-primary/50 transition-colors duration-500">
                 <div className="space-y-4 max-w-xl">
                    <h3 className="text-3xl md:text-5xl font-serif font-black text-foreground">Ready to start?</h3>
                    <p className="text-muted-foreground text-lg">Let&apos;s build something extraordinary together. I&apos;m currently available for new projects.</p>
                 </div>
                 <button className="bg-foreground text-background px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-2xl shrink-0">
                    Get in Touch
                 </button>
             </div>
          </div>
      </section>
      
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-orange-500 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </main>
  )
}
