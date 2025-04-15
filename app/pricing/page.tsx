"use client";
import { Check } from "lucide-react"
import Link from "next/link"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

export default function Pricing() {
  const plans = [
    {
      name: "pricing.basic.name",
      price: "pricing.basic.price",
      description: "pricing.basic.description",
      features: [
        "Responsive website design",
        "Up to 5 pages",
        "Basic SEO optimization",
        "Contact form",
        "Mobile-friendly design",
        "1 month of support",
      ],
      popular: false,
      buttonText: "pricing.get.started",
      buttonLink: "/contact?plan=basic",
    },
    {
      name: "pricing.professional.name",
      price: "pricing.professional.price",
      description: "pricing.professional.description",
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "E-commerce functionality",
        "Advanced SEO optimization",
        "Blog setup",
        "Social media integration",
        "3 months of support",
        "Performance optimization",
      ],
      popular: true,
      buttonText: "pricing.get.started",
      buttonLink: "/contact?plan=professional",
    },
    {
      name: "pricing.enterprise.name",
      price: "pricing.enterprise.price",
      description: "pricing.enterprise.description",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "Custom functionality",
        "Database integration",
        "User authentication",
        "Admin dashboard",
        "6 months of support",
        "Priority response",
        "Monthly performance reports",
      ],
      popular: false,
      buttonText: "pricing.get.started",
      buttonLink: "/contact?plan=enterprise",
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <ClientOnly>
          <h1 className="section-heading">{t("pricing.title")}</h1>
          <p className="text-xl text-gray-400 text-left max-w-3xl mb-16">{t("pricing.description")}</p>
        </ClientOnly>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border ${plan.popular ? "border-white" : "border-white/20"} rounded-xl p-8 flex flex-col relative ${plan.popular ? "bg-gradient-to-b from-white/15 to-white/5" : "bg-gradient-to-b from-white/10 to-black/90"} shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}

              <ClientOnly>
                <h2 className="text-2xl font-bold mb-2">{t(plan.name)}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${t(plan.price)}</span>
                  {plan.price !== "pricing.enterprise.price" && <span className="text-gray-400 ml-1">USD</span>}
                </div>
                <p className="text-gray-400 mb-6">{t(plan.description)}</p>
              </ClientOnly>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ClientOnly>
                <Link
                  href={plan.buttonLink}
                  className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} text-center`}
                >
                  {t(plan.buttonText)}
                </Link>
              </ClientOnly>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <ClientOnly>
            <h2 className="text-3xl font-bold mb-6">{t("pricing.custom.title")}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">{t("pricing.custom.description")}</p>
            <Link href="/contact" className="btn btn-primary">
              {t("cta.button")}
            </Link>
          </ClientOnly>
        </div>
      </div>
    </div>
  )
}
