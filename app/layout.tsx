import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Dennis Xhafaj | Full-Stack Developer",
  description: "Full-stack developer turning ideas into impactful code"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="55ba1438-54fc-4978-90db-9f918791812f"></script>
      </head>
      <body className={`${inter.variable} bg-black text-white min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}


import './globals.css'