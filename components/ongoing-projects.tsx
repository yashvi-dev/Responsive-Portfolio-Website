import ProjectCard from "./project-card";
import { SiTensorflow } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

export default function OngoingProjects() {
  const ongoingProjects = [
    {
      title: "Review Analyzer",
      description:
        "ML-powered review analysis system with visualization dashboard",
      iconComponent: SiTensorflow,
      iconColor: "#FF6F00", // TensorFlow orange
      link: "https://ml-review-analyzer.vercel.app/",
      techStack: [
        { name: "Next.js", color: "blue" },
        { name: "BERT", color: "yellow" },
        { name: "DistilBERT", color: "yellow" },
        { name: "XGBoost", color: "green" },
        { name: "GCN", color: "purple" },
      ],
    },
    {
      title: "Women's Safety Tracking System",
      description:
        "Real-time safety tracking platform with location sharing, authentication, and emergency alerts.",
      iconComponent: FaShieldAlt,
      iconColor: "#F9A8D4", // Light pink
      link: "https://github.com/yashvi-dev/Women-Safety-Tracking-System",
      techStack: [
        { name: "Next.js", color: "blue" },
        { name: "Socket.io", color: "green" },
        { name: "clerk", color: "blue" },
      ],
    },
  ];

  return (
    <section id="ongoing-projects">
      <h2 className="text-3xl font-bold text-white mb-8">Ongoing Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ongoingProjects.map((project, index) => (
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
    </section>
  );
}
