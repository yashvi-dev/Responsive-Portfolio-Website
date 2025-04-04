import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function MobileHeader() {
  return (
    <div className="w-full p-4 flex flex-col items-center">
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden bg-[#1E3A8A]/50 mb-3 border-2 border-[#93C5FD]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profileP-YvC7eAhs2Wn87qE4O6AaVvXZ6MCshe.jpeg"
          alt="Yashvi Neema"
          width={112}
          height={112}
          className="object-cover w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-xl font-bold text-center text-white">Yashvi Neema</h1>
      <p className="text-[#93C5FD] text-sm">Software Developer</p>

      {/* Navigation */}
      <nav className="w-full mt-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1kmCzJZVLFKS3z3--KHHamkMI7qui7xfP/view?usp=sharing"
              target="_blank"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        <Link
          href="https://github.com/yashvi-dev"
          target="_blank"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/yashvi-neema/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
        </Link>
        <Link
          href="https://x.com/Yashvii_Neema"
          target="_blank"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
        </Link>
        <Link
          href="https://leetcode.com/u/2mSyYDj9ht/"
          target="_blank"
          aria-label="Leetcode"
        >
          <SiLeetcode className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
        </Link>
      </div>
    </div>
  );
}
