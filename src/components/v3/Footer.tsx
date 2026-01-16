"use client"

import { portfolioData } from "@/data/portfolio"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const { profile } = portfolioData

  return (
    <footer className="py-24 px-4 md:px-12 relative overflow-hidden bg-zinc-950 text-zinc-200 dark:bg-background dark:text-foreground dark:border-t dark:border-border/40 transition-colors duration-300">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 dark:via-background/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-20 dark:opacity-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand & Summary */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold">Md.</h2>
            <div className="flex gap-4">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 dark:bg-secondary/50 hover:bg-primary hover:text-white transition-colors border border-white/10 dark:border-border">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 dark:bg-secondary/50 hover:bg-primary hover:text-white transition-colors border border-white/10 dark:border-border">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif">Contact</h3>
            <div className="space-y-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-zinc-400 dark:text-muted-foreground hover:text-primary transition-colors group">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{profile.email}</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400 dark:text-muted-foreground group">
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 dark:text-muted-foreground group">
                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{profile.location}</span>
                </div>
            </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
             <h3 className="text-xl font-bold font-serif">Sitemap</h3>
             <ul className="space-y-3 text-zinc-400 dark:text-muted-foreground">
                 <li>
                     <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Home</button>
                 </li>
                 <li>
                     <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Experience</button>
                 </li>
                 <li>
                     <button onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Arsenal</button>
                 </li>
                 <li>
                     <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Side Projects</button>
                 </li>
             </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 dark:border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-muted-foreground/60">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p>Designed & Built with ❤️</p>
      </div>
    </footer>
  )
}
