"use client"

import { useRef, useCallback, useState } from "react"
import gsap from "gsap"

export default function SteamFramePortrait() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glassesRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !glassesRef.current || !portraitRef.current)
        return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      // Magnetic parallax: portrait moves opposite, glasses move with cursor
      gsap.to(portraitRef.current, {
        x: -x * 8,
        y: -y * 8,
        duration: 0.4,
        ease: "power2.out",
      })

      gsap.to(glassesRef.current, {
        x: x * 12,
        y: y * 12,
        duration: 0.3,
        ease: "power2.out",
      })
    },
    []
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    if (!glassesRef.current || !portraitRef.current) return

    gsap.to([portraitRef.current, glassesRef.current], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden cursor-default"
      style={{ backgroundColor: "#1E1E1F" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Portrait */}
      <div
        ref={portraitRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Placeholder avatar - replace with actual portrait image */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center font-display text-2xl font-bold"
          style={{
            backgroundColor: "#014D4E",
            color: "#5EEAD4",
          }}
        >
          QM
        </div>
      </div>

      {/* Steam Frame Glasses Overlay */}
      <div
        ref={glassesRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(-50px)",
          transition:
            "opacity 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        {/* Placeholder glasses - replace with actual steam-frame-glasses.png */}
        <div
          className="font-mono text-3xl"
          style={{
            color: "#5EEAD4",
            textShadow: "0 0 10px rgba(94, 234, 212, 0.5)",
          }}
        >
          &#x2299;&#x2015;&#x2299;
        </div>
      </div>
    </div>
  )
}
