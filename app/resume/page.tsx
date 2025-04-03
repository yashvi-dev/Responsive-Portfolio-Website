"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  useEffect(() => {
    // Redirect to PDF file
    window.location.href = "/resume.pdf"
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Resume</h1>
        <p className="text-blue-100 mb-8">Redirecting to resume PDF...</p>
        <p>
          If you are not redirected automatically,
          <Link href="/resume.pdf" className="text-blue-300 hover:text-blue-100 ml-1">
            click here
          </Link>
        </p>
      </div>
    </div>
  )
}

