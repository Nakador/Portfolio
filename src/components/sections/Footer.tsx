import { portfolioData } from "@/data/portfolio"

export function Footer() {
    return (
      <footer className="py-8 border-t border-border mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
             <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <a href={`mailto:${portfolioData.profile.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
                   Email
                </a>
                <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                   LinkedIn
                </a>
                <span className="flex items-center gap-2">
                   {portfolioData.profile.phone}
                </span>
                <span className="flex items-center gap-2">
                   {portfolioData.profile.location}
                </span>
             </div>
        </div>
      </footer>
    );
  }
