import ProjectsSection from "@/components/projects-section"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8">
      <div className="mb-6 md:mb-8">
        <Link href="/" className="text-[#93C5FD] hover:text-white transition-colors">
          ← Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 md:mt-4">All Projects</h1>
        <p className="text-[#93C5FD] mt-2">A collection of my work and side projects</p>
      </div>

      <ProjectsSection />
    </div>
  )
}

