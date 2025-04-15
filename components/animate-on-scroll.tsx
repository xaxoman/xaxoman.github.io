"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (variant) {
      case "fade-in":
        return "animate-fade-in"
      case "fade-up":
        return "animate-fade-up"
      case "fade-down":
        return "animate-fade-down"
      case "fade-left":
        return "animate-fade-left"
      case "fade-right":
        return "animate-fade-right"
      case "zoom-in":
        return "animate-zoom-in"
      case "zoom-out":
        return "animate-zoom-out"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        getAnimationClass(),
        isVisible ? "transform-none" : getInitialTransform(variant),
        delay > 0 && `delay-${delay}`,
        className,
      )}
      style={{
        animationDelay: delay ? `${delay}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  )
}

function getInitialTransform(variant: AnimationVariant): string {
  switch (variant) {
    case "fade-up":
      return "translate-y-10"
    case "fade-down":
      return "translate-y-[-10px]"
    case "fade-left":
      return "translate-x-10"
    case "fade-right":
      return "translate-x-[-10px]"
    case "zoom-in":
      return "scale-95"
    case "zoom-out":
      return "scale-105"
    default:
      return ""
  }
}
