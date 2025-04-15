"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: "en", name: "English" },
    { code: "it", name: "Italiano" },
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (langCode: "en" | "it") => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black border border-white/20 rounded-lg shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors"
                onClick={() => changeLanguage(lang.code as "en" | "it")}
              >
                <span>{lang.name}</span>
                {language === lang.code && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
