"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RotatingGreetingProps {
  greetings: string[]
  interval?: number
  className?: string
}

export default function RotatingGreeting({ greetings, interval = 3000, className }: RotatingGreetingProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)

      // After animation out completes, change the word and animate in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length)
        setIsAnimating(false)
      }, 500) // Half of the transition time
    }, interval)

    return () => clearInterval(timer)
  }, [greetings.length, interval])

  return (
    <span className={cn("inline-block relative", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-500 transform",
          isAnimating ? "opacity-0 -translate-y-8" : "opacity-100 translate-y-0",
        )}
      >
        {greetings[currentIndex]}
      </span>
    </span>
  )
}
