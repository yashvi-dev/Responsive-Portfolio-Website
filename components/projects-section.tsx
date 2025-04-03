import ProjectCard from "./project-card"
import { SiReact, SiNextdotjs, SiExpress } from "react-icons/si"
import { FaCode } from "react-icons/fa"
import { BiMoney } from "react-icons/bi"
import { WiDayCloudy } from "react-icons/wi"

interface ProjectsSectionProps {
  limit?: number
}

export default function ProjectsSection({ limit }: ProjectsSectionProps) {
  const projects = [
    {
      title: "AI-Coffee-Shop-Ecommerce",
      description: "A full-stack e-commerce platform with product catalog and cart functionality",
      iconComponent: SiReact,
      iconColor: "#61DAFB", // React blue
      link: "https://github.com/yashvi-dev/Ai-coffee-shop-ecommerce",
      techStack: [
        { name: "React", color: "cyan" },
        { name: "Node.js", color: "green" },
        { name: "Material UI", color: "cyan" },
      ],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      iconComponent: SiNextdotjs,
      iconColor: "#FFFFFF", // Next.js white
      link: "https://github.com/yashvi-dev/portfolio",
      techStack: [
        { name: "Next.js", color: "blue" },
        { name: "Tailwind CSS", color: "blue" },
        { name: "TypeScript", color: "blue" },
      ],
    },

    {
      title: "Express Book Reviews",
      description: "Book review API built with Express.js for IBM project",
      iconComponent: SiExpress,
      iconColor: "#FFFFFF", // Express white
      link: "https://github.com/yashvi-dev/IBM-expressBookReviews",
      techStack: [
        { name: "Express.js", color: "green" },
        { name: "Node.js", color: "green" },
        { name: "MongoDB", color: "green" },
      ],
    },
    {
      title: "Expense Tracker",
      description: "Track and manage personal expenses with visualization",
      iconComponent: BiMoney,
      iconColor: "#4CAF50", // Green
      link: "https://expense-tracker-lyart-delta.vercel.app/",
      techStack: [
        { name: "React", color: "blue" },
        { name: "Context API", color: "blue" },
        { name: "CSS", color: "blue" },
      ],
    },

    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts",
      iconComponent: WiDayCloudy, // Using Weather Icons package instead
      iconColor: "#F59E0B", // Amber color for weather
      link: "https://github.com/yashvi-dev/weather-app",
      techStack: [
        { name: "JavaScript", color: "yellow" },
        { name: "OpenWeather API", color: "blue" },
        { name: "CSS", color: "blue" },
      ],
    },
    {
      title: "Mini Projects Collection",
      description: "Collection of small web development projects and experiments",
      iconComponent: FaCode,
      iconColor: "#93C5FD", // Light blue
      link: "/mini-projects",
      techStack: [
        { name: "HTML/CSS", color: "orange" },
        { name: "JavaScript", color: "yellow" },
        { name: "React", color: "blue" },
      ],
    },
  ]

  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {displayedProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          iconComponent={project.iconComponent}
          iconColor={project.iconColor}
          link={project.link}
          techStack={project.techStack}
        />
      ))}
    </div>
  )
}

