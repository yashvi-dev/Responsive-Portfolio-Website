import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-xl text-[#93C5FD] mb-8">
        If you'd like to collaborate on a project, I'd love to hear from you.
      </p>

      <a
        href="mailto:yashvineema04@gmail.com?subject=Collaboration Inquiry&body=Hi, I'd love to collaborate with you!"
        className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors px-6 py-3 rounded-md text-white font-medium hover:scale-105 transform duration-300"
      >
        <Mail className="w-5 h-5" />
        Email me
      </a>

      <p className="mt-8 text-[#93C5FD]">Or get in touch on socials.</p>
    </section>
  )
}

