"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { ArrowDownRight, Circle, Terminal, Triangle } from "lucide-react"

export function Hero() {
  const { profile } = portfolioData

  return (
    <section className="min-h-screen relative overflow-hidden bg-background text-foreground pt-20 px-4 md:px-12">
      {/* Dynamic Gradient Background (Top Right) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-200 via-purple-200 to-yellow-100 blur-[100px] opacity-60 rounded-full -translate-y-1/2 translate-x-1/4 -z-10 dark:opacity-20" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="space-y-8 relative z-10">


          <div className="space-y-2 mt-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="flex items-center gap-4"
            >
               <span className="text-4xl">👋</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-serif">
              Hello! <span className="font-sans font-bold block mt-2 text-5xl md:text-7xl text-primary">I&apos;m {profile.name.split(' ')[0]}</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 py-4">
             <div className="h-px bg-border w-24"></div>
             <h2 className="text-xl md:text-2xl font-medium">{profile.title}</h2>
             <Terminal className="w-6 h-6" />
          </div>

          <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
            Hello! I&apos;m {profile.name.split(' ')[0]}, a <b>{profile.title}</b>, design thinker, and product craftsman.
            I specialize in building scalable web applications and intuitive user experiences.
          </p>

          <div className="flex flex-col gap-2 mt-8 text-sm font-medium">
             <div className="flex items-center gap-2">
               <span>✓</span> Product must be authentic
             </div>
             <div className="flex items-center gap-2">
               <span>✓</span> Solve pain points elegantly
             </div>
             <div className="flex items-center gap-2">
               <span>✓</span> User testing, feedback, and validation
             </div>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Let&apos;s Talk
            </button>
            <button className="flex text-orange-500 items-center gap-2 font-medium hover:underline">
              Download Cv <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative h-[600px] flex items-center justify-center">
           {/* Abstract Shapes */}
           <div className="absolute top-10 left-10 w-8 h-8 border-2 border-primary rounded-full " />
           <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary rounded-full" />
           <div className="absolute top-1/2 right-0 w-24 h-24 border-t-4 border-r-4 border-foreground rounded-full border-orange-500 rotate-45" />

           {/* Hero Image / Video Container */}
           <div className="relative w-full max-w-md aspect-[3/4] rounded-[100px] overflow-hidden bg-muted shadow-2xl">
              <video 
                src="/Carter_Coding_Video_Creation.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline 
              />
           </div>

           {/* Floating "adhika hiya" Circle */}
           <motion.div
             animate={{ y: [-40, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute md:left-5 bottom-30 z-10 "
           >
             <motion.div 
               animate={{ rotate: [0, 5, 0, -5, 0] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="w-48 h-48 relative flex items-center justify-center"
            >
              <div className="absolute top-1/2 right-0 w-24 h-24 border-t-4 border-r-4 border-foreground rounded-full border-orange-500 rotate-45" />
              <Circle className="w-full h-full text-primary absolute inset-0 drop-shadow-xl" fill="currentColor" strokeWidth={0} />
              <Circle className="w-36 h-36 text-primary absolute inset-8 drop-shadow-xl z-7" fill="white" strokeWidth={0} />
              <Circle className="w-40 h-40 text-primary absolute inset-2 drop-shadow-xl fill-orange-500 z-8" strokeWidth={0} />
              <Circle className="w-36 h-36 text-primary absolute inset-6 drop-shadow-xl z-9" fill="currentColor" strokeWidth={0} />
              <Circle className="w-35 h-35 text-primary absolute inset-6 drop-shadow-xl z-9" fill="currentColor" strokeWidth={0} />

               <span className="font-sans font-medium text-xl text-center leading-tight relative z-10 pt-8 text-primary-foreground">ADHIKA<br/>HIYA!</span>
             </motion.div>
           </motion.div>
        </div>

      </div>
      
    </section>
  )
}
