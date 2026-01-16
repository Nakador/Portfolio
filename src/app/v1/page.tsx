import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { EducationAndHobbies } from "@/components/sections/EducationAndHobbies";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col">
       <ThemeSwitcher />
       <Hero />
       <Experience />
       <Projects />
       <Skills />
       <EducationAndHobbies />
       <Footer />
    </main>
  );
}
