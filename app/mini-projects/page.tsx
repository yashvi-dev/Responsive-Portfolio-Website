import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FaDice, FaKey, FaDiscord, FaListCheck } from "react-icons/fa6"

export default function MiniProjectsPage() {
  const miniProjects = [
    {
      title: "Guess Game",
      description: "Interactive number guessing game with multiple difficulty levels",
      github: "https://github.com/yashvi-dev/The-Guess-Game",
      preview: "https://gregarious-palmier-98ae44.netlify.app/",
      techStack: ["HTML", "CSS", "JavaScript"],
      icon: FaDice,
      iconColor: "#F59E0B", // Amber
    },
    {
      title: "Password Generator",
      description: "Generate secure passwords with customizable options",
      github: "https://github.com/yashvi-dev/Password-Generator",
      preview: "https://67ead71886b9e1066994eafb--effervescent-bonbon-aa8c7e.netlify.app/",
      techStack: ["HTML", "CSS", "JavaScript"],
      icon: FaKey,
      iconColor: "#10B981", // Emerald
    },
    {
      title: "Discord Bot",
      description: "Custom Discord bot with various commands and features",
      github: "https://github.com/yashvi-dev/Discord_Bot",
      preview: null,
      techStack: ["JavaScript", "Discord.js", "Node.js"],
      icon: FaDiscord,
      iconColor: "#5865F2", // Discord blue
    },
    {
      title: "Beginner-friendly Todo",
      description: "Simple and intuitive todo list application",
      github: "https://github.com/yashvi-dev/Beginner-friendly-Todo",
      preview: "https://melodious-shortbread-cb32e3.netlify.app/",
      techStack: ["React", "CSS", "JavaScript"],
      icon: FaListCheck,
      iconColor: "#EC4899", // Pink
    },
  ]

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#93C5FD] hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <h1 className="text-4xl font-bold text-white mt-4">Mini Projects</h1>
        <p className="text-[#93C5FD] mt-2">A collection of small projects and coding experiments</p>
      </div>

      <div className="grid gap-6">
        {miniProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E3A8A]/30 rounded-lg p-6 border border-[#1E3A8A] hover:border-[#93C5FD] transition-all duration-300 project-card"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-md bg-[#1E3A8A]/70 flex items-center justify-center">
                  <project.icon size={20} color={project.iconColor} />
                </div>
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              </div>

              <p className="text-[#93C5FD] mt-1">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge bg-blue-900/30 text-blue-300 border border-blue-800">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors px-4 py-2 rounded-md text-white text-sm"
                >
                  GitHub Repository
                </Link>
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors px-4 py-2 rounded-md text-white text-sm"
                  >
                    Live Preview
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

