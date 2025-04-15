"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  color: string
}

export default function ServiceCard({ title, description, icon: Icon, features, color }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      className="relative h-[350px] w-full cursor-pointer perspective"
      onClick={handleFlip}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute w-full h-full rounded-xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full p-6 rounded-xl border border-white/20 flex flex-col items-center justify-center text-center backface-hidden bg-gradient-to-b from-white/10 to-black/90 shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`w-16 h-16 rounded-full bg-${color}/10 flex items-center justify-center mb-6`}>
            <Icon className={`w-8 h-8 text-${color}-400`} />
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <div className="mt-6 text-sm text-gray-500">Click to see more</div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full p-6 rounded-xl border border-white/20 flex flex-col backface-hidden bg-gradient-to-b from-white/10 to-black/90 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4">{title} Features</h3>
          <ul className="space-y-3 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className={`w-2 h-2 rounded-full bg-${color}-400 mt-1.5 mr-2 shrink-0`}></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-center text-gray-500">Click to flip back</div>
        </div>
      </motion.div>
    </motion.div>
  )
}
