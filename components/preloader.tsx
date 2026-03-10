"use client"

import { useEffect, useState, useRef } from "react"
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
      {/* QM Monogram SVG with stroke draw animation */}
      <svg
        viewBox="0 0 200 200"
        className="w-24 h-24 md:w-32 md:h-32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="QM Monogram"
      >
        {/* Q letter */}
        <path
          d="M60 40 C30 40 20 65 20 100 C20 135 30 160 60 160 C80 160 92 148 97 130 L110 150"
          stroke="#5EEAD4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-draw"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400,
            "--stroke-length": "400",
          } as React.CSSProperties}
        />
        {/* M letter */}
        <path
          d="M100 160 L100 60 L130 120 L160 60 L160 160"
          stroke="#5EEAD4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-draw"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400,
            "--stroke-length": "400",
            animationDelay: "0.5s",
          } as React.CSSProperties}
        />
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
