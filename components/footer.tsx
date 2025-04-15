"use client";
import Link from "next/link"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4">DENNIS XHAFAJ</h3>
            <ClientOnly>
              <p className="text-gray-400 mb-6 text-sm">{t("footer.description")}</p>
            </ClientOnly>
            <div className="flex space-x-4">
              <a href="https://github.com" className="social-icon" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://t.me" className="social-icon" aria-label="Telegram">
                <Send className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="social-icon" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <ClientOnly>
              <h3 className="text-base font-bold mb-4">{t("footer.navigation")}</h3>
            </ClientOnly>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  <ClientOnly>{t("nav.about")}</ClientOnly>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  <ClientOnly>{t("nav.projects")}</ClientOnly>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  <ClientOnly>{t("nav.blog")}</ClientOnly>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  <ClientOnly>{t("nav.pricing")}</ClientOnly>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  <ClientOnly>{t("nav.contact")}</ClientOnly>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ClientOnly>
              <h3 className="text-base font-bold mb-4">{t("footer.contact")}</h3>
              <p className="text-gray-400 mb-4 text-sm">{t("footer.contact.description")}</p>
            </ClientOnly>
            <ClientOnly>
              <Link
                href="/contact"
                className="inline-block border border-white/20 px-5 py-2 rounded-full hover:bg-white/10 transition-all"
              >
                {t("footer.contact.button")}
              </Link>
            </ClientOnly>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center">
          <ClientOnly>
            <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
          </ClientOnly>
          <div className="mt-4 md:mt-0 space-x-6">
            <ClientOnly>
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t("footer.terms")}
              </Link>
            </ClientOnly>
          </div>
        </div>
      </div>
    </footer>
  )
}
