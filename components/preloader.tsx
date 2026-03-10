"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"
import gsap from "gsap"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsLoading(false)
            document.body.style.overflow = ""
          },
        })
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#111112" }}
    >
      {/* QM Monogram — primary Bauhaus variant */}
      <svg
        viewBox="0 0 240 240"
        className="w-24 h-24 md:w-32 md:h-32 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="QM Monogram loading indicator"
      >
        <g>
          {/* M — Left Triangle */}
          <motion.polygon
            points="40,200 80,80 120,200"
            fill="#5EEAD4"
            stroke="#5EEAD4"
            strokeWidth="12"
            strokeLinejoin="round"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
          />

          {/* M — Right Triangle */}
          <motion.polygon
            points="100,200 140,80 180,200"
            fill="#2DD4BF"
            stroke="#2DD4BF"
            strokeWidth="12"
            strokeLinejoin="round"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: "multiply", transformOrigin: "center bottom", transformBox: "fill-box" }}
          />

          {/* Q — Circle */}
          <motion.circle
            cx="140"
            cy="130"
            r="50"
            fill="none"
            stroke="#5EEAD4"
            strokeWidth="16"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: [0, 1, 1, 0], rotate: [-90, 0, 0, 90] }}
            transition={{ duration: 3, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
            style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          />

          {/* Q — Tail */}
          <motion.line
            x1="170"
            y1="160"
            x2="210"
            y2="200"
            stroke="#5EEAD4"
            strokeWidth="16"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.8, ease: "easeInOut", repeat: Infinity }}
          />
        </g>
      </svg>

      {/* Loading text */}
      <p
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-sm tracking-[0.3em] pulse-opacity"
        style={{ color: "#5EEAD4" }}
      >
        Loading QURLARMAH
      </p>
    </div>
  )
}
