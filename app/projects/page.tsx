"use client";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "iTrack open-source workout App",
      description:
        "A fully responsive e-commerce platform with integrated payment processing and inventory management.",
      image: "/about-projects/itrack-frame.png?height=600&width=800",
      category: "E-commerce",
      categoryColor: "blue",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      slug: "ecommerce",
    },
    {
      id: 2,
      title: "Emerson Telefonia",
      description: "A real-time analytics platform for businesses to track performance metrics and customer behavior.",
      image: "/about-projects/project_emerson.png?height=600&width=800",
      category: "SaaS",
      categoryColor: "green",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
      slug: "analytics",
    },
    {
      id: 3,
      title: "Pizzeria King",
      description: "A social networking application with real-time messaging, post sharing, and user profiles.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Social",
      categoryColor: "purple",
      technologies: ["React Native", "Firebase", "Redux", "WebSockets"],
      demoUrl: "#",
      githubUrl: "#",
      slug: "social-media",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website for a professional photographer with gallery and booking features.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Portfolio",
      categoryColor: "orange",
      technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
      demoUrl: "#",
      githubUrl: "#",
      slug: "photographer-portfolio",
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <ClientOnly>
          <h1 className="section-heading">{t("projects.page.title")}</h1>
          <p className="text-xl text-gray-400 text-left max-w-3xl mb-16">{t("projects.page.description")}</p>
        </ClientOnly>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white/20 rounded-xl overflow-hidden group bg-gradient-to-b from-white/10 to-black/90 shadow-lg"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`tag tag-${project.categoryColor}`}>{project.category}</span>

                  <div className="flex space-x-2">
                    <a
                      href={project.demoUrl}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ClientOnly>
                  <Link href={`/projects/${project.slug}`} className="flex items-center text-white font-medium">
                    {t("projects.view")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </ClientOnly>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
