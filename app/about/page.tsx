"use client";
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Send, Mail, ArrowRight, Code, Database, Globe, Cpu } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll variant="fade-down">
          <ClientOnly>
            <h1 className="section-heading text-left">{t("about.title")}</h1>
          </ClientOnly>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch mb-20">
        <AnimateOnScroll variant="fade-right">
          <div className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
            <Image
              src="/profile-image.png"
              alt="Denis Xhafaj"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left">
            <div>
              <ClientOnly>
                <h2 className="text-3xl font-bold mb-6">{t("about.intro")}</h2>
                <p className="text-gray-300 mb-6">{t("about.bio1")}</p>
                <p className="text-gray-300 mb-6">{t("about.bio2")}</p>
                <p className="text-gray-300 mb-8">{t("about.bio3")}</p>
              </ClientOnly>

              <div className="flex space-x-4 mb-8">
                <a target="_blank" href="https://github.com/xaxoman" className="social-icon" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a target="_blank" href="https://it.linkedin.com/in/dennis-xhafaj-b48a2528a" className="social-icon" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a target="_blank" href="mailto:xhafaj.dennis@protonmail.com" className="social-icon" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <ClientOnly>
                <Link target="_blank" href="/doc/CURRICULUM_DENIS_03_2025.pdf" className="btn btn-outline inline-flex items-center">
                  {t("about.resume")} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </ClientOnly>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="text-3xl font-bold mb-10 text-center">{t("about.skills")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 mr-3" />
                  <ClientOnly>
                    <h3 className="text-xl font-bold">{t("about.frontend")}</h3>
                  </ClientOnly>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    React & Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    UI/UX Principles
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 mr-3" />
                  <ClientOnly>
                    <h3 className="text-xl font-bold">{t("about.backend")}</h3>
                  </ClientOnly>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Node.js & Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    MongoDB & PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    RESTful APIs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Authentication & Security
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Serverless Functions
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={300}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 mr-3" />
                  <ClientOnly>
                    <h3 className="text-xl font-bold">{t("about.devops")}</h3>
                  </ClientOnly>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Docker
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Vercel & Netlify
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    AWS Services
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={400}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex items-center mb-4">
                  <Cpu className="w-6 h-6 mr-3" />
                  <ClientOnly>
                    <h3 className="text-xl font-bold">{t("about.other")}</h3>
                  </ClientOnly>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Testing (Jest, Cypress)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    SEO Best Practices
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Agile Methodologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Problem Solving
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="text-3xl font-bold mb-10 text-center">{t("about.experience")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="space-y-8">
            <AnimateOnScroll variant="fade-left">
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-gray-400">2022 - Present</span>
                    <span className="ml-3 px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Current</span>
                  </div>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">TechInnovate Solutions</h4>
                <p className="text-gray-400 mb-4">
                  Leading frontend development for enterprise clients, focusing on creating scalable and maintainable
                  web applications using React and Next.js.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Architected and implemented a component library used across multiple projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Improved application performance by 40% through code optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Mentored junior developers and conducted code reviews
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-right">
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <span className="text-gray-400 mt-2 md:mt-0">2020 - 2022</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">WebSphere Agency</h4>
                <p className="text-gray-400 mb-4">
                  Developed and maintained web applications for clients across various industries, working on both
                  frontend and backend systems.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Built e-commerce platforms with integrated payment systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Implemented RESTful APIs and database schemas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 mt-2"></span>
                    Collaborated with design teams to ensure pixel-perfect implementations
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Education Section TEMP */}
      {/*   <div>
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="text-3xl font-bold mb-10 text-center">{t("about.education")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="space-y-8">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Master's in Computer Science</h3>
                  <span className="text-gray-400 mt-2 md:mt-0">2020 - 2022</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">University of Milan</h4>
                <p className="text-gray-400">
                  Specialized in Software Engineering and Web Technologies. Graduated with honors.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={300}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Bachelor's in Computer Science</h3>
                  <span className="text-gray-400 mt-2 md:mt-0">2016 - 2020</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">University of Crema</h4>
                <p className="text-gray-400">
                  Focused on programming fundamentals, algorithms, and data structures. Completed several practical
                  projects.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div> */}
      </div>
    </div>
  )
}
