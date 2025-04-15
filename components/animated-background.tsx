"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Create a grid of dots
    const gridSize = 40 // Space between dots
    const dotSize = 1.5 // Size of each dot
    const animationSpeed = 0.5 // Speed of the wave animation

    // Animation loop
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate grid dimensions
      const columns = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      // Draw grid of dots with wave effect
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          // Create a wave effect
          const distanceToCenter = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2))

          const waveOffset = Math.sin(distanceToCenter * 0.02 - time * animationSpeed) * 3
          const opacityBase = 0.2 // Base opacity
          const opacityWave = Math.sin(distanceToCenter * 0.01 - time * animationSpeed) * 0.15 + 0.15

          // Draw dot
          ctx.beginPath()
          ctx.arc(x, y + waveOffset, dotSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${opacityBase + opacityWave})`
          ctx.fill()
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}
