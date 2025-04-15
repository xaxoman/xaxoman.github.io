"use client";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Zap, Users, Star } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import RotatingGreeting from "@/components/rotating-greeting"
import AnimatedBackground from "@/components/animated-background"
import ServiceCard from "@/components/service-card"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

export default function Home() {
  const greetings = ["Hello", "Ciao", "Salut", "Hola", "你好", "مرحبًا"]

  const services = [
    {
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
      icon: Code,
      color: "blue",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Performance optimization",
        "SEO-friendly structure",
        "Accessibility compliance",
      ],
    },
    {
      titleKey: "services.performance.title",
      descriptionKey: "services.performance.description",
      icon: Zap,
      color: "green",
      features: [
        "Core Web Vitals improvement",
        "Image and asset optimization",
        "Code splitting and lazy loading",
        "Server-side rendering",
        "Caching strategies",
      ],
    },
    {
      titleKey: "services.consultation.title",
      descriptionKey: "services.consultation.description",
      icon: Users,
      color: "purple",
      features: [
        "Technical architecture planning",
        "Code quality assessment",
        "Performance audits",
        "Technology stack recommendations",
        "Team training and workshops",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        <AnimatedBackground />
        <div className="hero-gradient absolute inset-0 z-0"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <AnimateOnScroll variant="fade-down" delay={100}>
              <ClientOnly>
                <h1 className="hero-heading font-bold mb-6 leading-tight">
                  <RotatingGreeting greetings={greetings} />, {t("hero.greeting").split(",")[1]}
                  <br />
                  {t("hero.tagline")}
                </h1>
              </ClientOnly>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={300}>
              <ClientOnly>
                <p className="text-xl text-gray-400 max-w-3xl mb-10">{t("hero.description")}</p>
              </ClientOnly>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={500}>
              <ClientOnly>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-primary animate-pulse-glow">
                    {t("hero.cta.website")} <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Link>
                  <Link href="/about" className="btn btn-outline">
                    {t("hero.cta.about")}
                  </Link>
                </div>
              </ClientOnly>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="section-heading text-center">{t("services.title")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} variant="fade-up" delay={100 * (index + 1)}>
                <ClientOnly>
                  <ServiceCard
                    title={t(service.titleKey)}
                    description={t(service.descriptionKey)}
                    icon={service.icon}
                    features={service.features}
                    color={service.color}
                  />
                </ClientOnly>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="section-heading text-center">{t("projects.title")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll variant="fade-left">
              <div className="group bg-gradient-to-b from-white/10 to-black/90 border border-white/20 rounded-xl p-4 shadow-lg">
                <div className="overflow-hidden rounded-xl mb-4 aspect-video relative">
                  <Image
                    src="/about-projects/itrack-frame.png?height=600&width=800"
                    alt="Project thumbnail"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="tag tag-blue mb-2">E-commerce</span>
                <h3 className="text-xl font-bold mb-2">Modern Online Store</h3>
                <p className="text-gray-400 mb-4">
                  A fully responsive e-commerce platform with integrated payment processing and inventory management.
                </p>
                <Link href="/projects/ecommerce" className="flex items-center text-white font-medium">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-right">
              <div className="group bg-gradient-to-b from-white/10 to-black/90 border border-white/20 rounded-xl p-4 shadow-lg">
                <div className="overflow-hidden rounded-xl mb-4 aspect-video relative">
                  <Image
                    src="/about-projects/project_emerson.png?height=600&width=800"
                    alt="Project thumbnail"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="tag tag-green mb-2">SaaS</span>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">
                  A real-time analytics platform for businesses to track performance metrics and customer behavior.
                </p>
                <Link href="/projects/analytics" className="flex items-center text-white font-medium">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up">
            <ClientOnly>
              <div className="mt-12 text-center">
                <Link href="/projects" className="btn btn-outline">
                  {t("projects.cta")}
                </Link>
              </div>
            </ClientOnly>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll>
            <ClientOnly>
              <h2 className="section-heading text-center">{t("testimonials.title")}</h2>
            </ClientOnly>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Working with Denis was a game-changer for our business. He delivered a website that exceeded our
                  expectations and has significantly improved our online presence."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={300}>
              <div className="p-6 border border-white/20 rounded-xl bg-gradient-to-b from-white/10 to-black/90 shadow-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Denis is incredibly talented and professional. He understood our requirements perfectly and delivered
                  a solution that has helped us streamline our operations."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-400">Founder, GrowthLab</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimateOnScroll variant="zoom-in">
            <ClientOnly>
              <div className="bg-gradient-to-b from-white/10 to-black/80 border border-white/20 rounded-2xl p-8 md:p-12 text-center shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
                <Link href="/contact" className="btn btn-primary">
                  {t("cta.button")}
                </Link>
              </div>
            </ClientOnly>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
