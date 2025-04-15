"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage, t } from "@/contexts/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.projects"), href: "/projects" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/60 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          DENNIS XHAFAJ
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-white hover:text-gray-300 transition-colors text-sm`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm"
          >
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 relative" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-40 pt-24 ${
            isScrolled ? "bg-black/80" : "bg-black/90"
          } backdrop-blur-md`}
          style={{ height: "100vh" }}
        >
          <nav className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-lg hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white text-black px-5 py-2 rounded-full w-full text-center text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      )}
    </header>
  )
}
