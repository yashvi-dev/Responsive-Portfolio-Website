import Introduction from "@/components/introduction"
import TechStack from "@/components/tech-stack"
import ProjectsSection from "@/components/projects-section"
import OngoingProjects from "@/components/ongoing-projects"
import Contact from "@/components/contact"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 md:space-y-20 py-4 md:py-8">
      <Introduction />
      <TechStack />

      <section id="projects">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
          <Link href="/projects" className="text-[#93C5FD] hover:text-white transition-colors text-sm md:text-base">
            View all projects →
          </Link>
        </div>
        <ProjectsSection limit={3} />
      </section>

      <OngoingProjects />
      <Contact />
    </div>
  )
}

