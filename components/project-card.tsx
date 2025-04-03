import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { IconType } from "react-icons"

interface TechBadge {
  name: string
  color: string
}

interface ProjectCardProps {
  title: string
  description: string
  icon?: string
  iconComponent?: IconType
  iconColor?: string
  link: string
  techStack: TechBadge[]
}

export default function ProjectCard({
  title,
  description,
  icon,
  iconComponent: IconComponent,
  iconColor = "#93C5FD",
  link,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1E3A8A]/30 rounded-lg p-6 border border-[#1E3A8A] hover:border-[#93C5FD] transition-all duration-300 group project-card">
      <Link href={link} className="block h-full" target="_blank">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#1E3A8A]/70 flex items-center justify-center">
              {IconComponent ? (
                <IconComponent size={24} color={iconColor} />
              ) : (
                <Image
                  src={icon || "/placeholder.svg?height=48&width=48"}
                  alt={title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-[#93C5FD] mt-1">{description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`tech-badge bg-${tech.color}-900/30 text-${tech.color}-300 border border-${tech.color}-800`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ArrowUpRight className="text-[#93C5FD] group-hover:text-white transition-colors" />
        </div>
      </Link>
    </div>
  )
}

