"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Code2, LayoutTemplate, MapPin, Phone, Mail, Linkedin } from "lucide-react"

export function Hero() {
  const { profile } = portfolioData

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Main Title Block */}
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-8 md:row-span-2 rounded-3xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 size={240} strokeWidth={1} />
            </div>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-mono text-sm md:text-base tracking-widest mb-4 uppercase font-semibold">
                Portfolio 2026
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-foreground">
                FRONT-END
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                  ENGINEER
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {profile.summary}
              </p>
            </motion.div>
          </motion.div>

          {/* Video Card */}
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-4 md:row-span-1 rounded-3xl border border-border bg-card overflow-hidden relative group"
          >
             <div className="absolute inset-0">
               <video
                 src="/Carter_Coding_Video_Creation.mp4"
                 autoPlay
                 muted
                 playsInline
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
             </div>
          </motion.div>

          {/* Profile Data Card */}
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-4 md:row-span-1 rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group relative"
          >
             <div className="relative z-10 w-full">
               <div className="flex items-center justify-between mb-2">
                 <div>
                   <h3 className="text-2xl font-bold">{profile.name}</h3>
                   <p className="text-muted-foreground">{profile.title}</p>
                 </div>
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <LayoutTemplate className="text-primary h-6 w-6" />
                 </div>
               </div>
               
               <div className="flex flex-col gap-2.5 mt-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/80 font-mono">
                    <MapPin className="h-4 w-4 text-primary" /> {profile.location}
                  </div>
                  <div className="h-px bg-border my-1" />
                  <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" /> {profile.phone}
                  </a>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" /> {profile.email}
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" /> LinkedIn Profile
                  </a>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
