import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import MobileHeader from "@/components/mobile-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yashvi Neema - Portfolio",
  description: "Personal portfolio and resume of Yashvi Neema",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-[#1E3A8A] to-black">
          {/* Desktop Sidebar - hidden on mobile */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Mobile view container */}
          <div className="md:hidden w-full">
            <MobileHeader />

            {/* Main content for mobile */}
            <main className="p-4 overflow-auto">{children}</main>
          </div>

          {/* Main content for desktop */}
          <main className="hidden md:block flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'