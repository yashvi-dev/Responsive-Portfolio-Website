import ProjectCard from "./project-card";
import { SiTensorflow } from "react-icons/si";
import { FaPlane } from "react-icons/fa";

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
      title: "Travel Booking System",
      description:
        "Full-featured travel booking platform with authentication, payments, and notifications",
      iconComponent: FaPlane,
      iconColor: "#93C5FD", // Light blue
      link: "https://github.com/yashvi-dev/Travel-Booking-FullStack",
      techStack: [
        { name: "Next.js", color: "blue" },
        { name: "APIs", color: "green" },
        { name: "Google OAuth", color: "red" },
        { name: "Payment Gateway", color: "green" },
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
