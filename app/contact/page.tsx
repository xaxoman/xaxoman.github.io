"use client";
import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send, Calendar } from "lucide-react"
import { t } from "@/contexts/language-context"
import ClientOnly from "@/components/client-only"
import CalEmbed from "./CalEmbed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
    // State for form submission success and error
  const [submitError, setSubmitError] = useState(false)

   // Pre-compute all translations at the beginning
  const translations = {
    title: t("contact.title"),
    description: t("contact.description"),
    getInTouch: t("contact.get.in.touch"),
    reachOut: t("contact.reach.out"),
    email: t("contact.email"),
    schedule: t("contact.schedule"),
    location: t("contact.location"),
    formName: t("contact.form.name"),
    formEmail: t("contact.form.email"),
    formSubject: t("contact.form.subject"),
    formMessage: t("contact.form.message"),
    formSending: t("contact.form.sending"),
    formSend: t("contact.form.send"),
    formSuccess: t("contact.form.success"),
    formError: t("contact.form.error") || "Something went wrong. Please try again."
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitSuccess(false)
  setSubmitError(false)

  // Prepare form data for Web3Forms
  const data = {
    ...formData,
    access_key: "dcb39c5a-4bb5-4ae3-8108-449c261f52cc", // Replace with your actual key
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.success) {
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } else {
      setSubmitError(true)
      console.error("Form submission error:", result)
    }
  } catch (error) {
    setSubmitError(true)
    console.error("Form submission error:", error)
  } finally {
    setIsSubmitting(false)
  }
}

  // Actual component rendering
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <ClientOnly>
          <h1 className="section-heading">{translations.title}</h1>
          <p className="text-xl text-gray-400 text-left max-w-3xl mb-16">{translations.description}</p>
        </ClientOnly>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ClientOnly>
              <h2 className="text-2xl font-bold mb-6">{translations.getInTouch}</h2>
              <p className="text-gray-400 mb-8">{translations.reachOut}</p>
            </ClientOnly>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <ClientOnly>
                    <h3 className="text-lg font-medium mb-1">{translations.email}</h3>
                  </ClientOnly>
                  <a target="_blank" href="mailto:xhafaj.dennis@protonmail.com" className="text-gray-400 hover:text-white transition-colors">
                    xhafaj.dennis@protonmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5" /> {/* Changed Phone to Calendar */}
                </div>
                <div>
                  <ClientOnly>
                  <h3 className="text-lg font-medium mb-1">{translations.schedule}</h3>
                  </ClientOnly>
                  <CalEmbed />
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <ClientOnly>
                    <h3 className="text-lg font-medium mb-1">{translations.location}</h3>
                  </ClientOnly>
                  <p className="text-gray-400">Crema, Italy</p>
                </div>
              </div>
            </div>
          </div>

        {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <ClientOnly>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {translations.formName}
                  </label>
                </ClientOnly>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <ClientOnly>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {translations.formEmail}
                  </label>
                </ClientOnly>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your email"
                />
              </div>

              <div>
                <ClientOnly>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {translations.formSubject}
                  </label>
                </ClientOnly>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Subject"
                />
              </div>

              <div>
                <ClientOnly>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {translations.formMessage}
                  </label>
                </ClientOnly>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
                
                {/* Honeypot field to prevent spam */}
                <div style={{ display: "none" }}>
                  <input
                    type="text"
                    name="botcheck"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>

              <ClientOnly>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {translations.formSending}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {translations.formSend} <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </button>
              </ClientOnly>

                {/* Success messages */}
                {submitSuccess && (
                  <div className="bg-green-900/30 text-green-400 p-4 rounded-lg">{translations.formSuccess}</div>
                )}
                {/* Error message */}
                {submitError && (
                  <div className="bg-red-900/30 text-red-400 p-4 rounded-lg">
                    {translations.formError}
                  </div>
                )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
