"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { SiLeetcode } from "react-icons/si"

export default function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 z-40 w-64 h-screen bg-gradient-to-b from-[#1E3A8A] to-black text-white overflow-y-auto">
      <div className="flex flex-col items-center p-6 h-full min-h-screen">
        <div className="mb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden bg-[#1E3A8A] mb-4 border-2 border-[#93C5FD] transition-transform duration-300 hover:scale-105 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profileP-YvC7eAhs2Wn87qE4O6AaVvXZ6MCshe.jpeg"
              alt="Yashvi Neema"
              width={144}
              height={144}
              className="object-cover w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-white">Yashvi Neema</h1>
        </div>

        <div className="text-center mb-6">
          <p className="text-[#93C5FD]">Software Developer</p>
          <p className="text-[#93C5FD]">Web Developer & Problem Solver</p>
          <p className="text-[#93C5FD]">Building Web3 & ML Projects</p>
        </div>

        <nav className="mb-8 w-full">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="block px-4 py-2 rounded hover:bg-[#1E40AF] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block px-4 py-2 rounded hover:bg-[#1E40AF] transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="block px-4 py-2 rounded hover:bg-[#1E40AF] transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block px-4 py-2 rounded hover:bg-[#1E40AF] transition-colors">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-3 mt-auto mb-6">
          <Link href="https://github.com/yashvi-dev" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/yashvi-neema/" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
          </Link>
          <Link href="https://x.com/Yashvii_Neema" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
          </Link>
          <Link href="https://leetcode.com/u/2mSyYDj9ht/" target="_blank" aria-label="Leetcode">
            <SiLeetcode className="w-5 h-5 text-white hover:text-[#93C5FD] transition-colors" />
          </Link>
        </div>

        <div className="text-sm text-[#93C5FD]">©{new Date().getFullYear()} Yashvi_Neema</div>
      </div>
    </aside>
  )
}

