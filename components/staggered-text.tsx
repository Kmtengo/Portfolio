"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface StaggeredTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export default function StaggeredText({
  text,
  className = "",
  style,
  delay = 0,
  as: Tag = "h1",
}: StaggeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll(".char")

    gsap.set(chars, { yPercent: 100, opacity: 0 })

    gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.03,
      delay: delay,
    })
  }, [delay])

  // Split text into characters using Intl.Segmenter for proper unicode handling
  const segments = (() => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
      return Array.from(segmenter.segment(text), (s) => s.segment)
    }
    return Array.from(text)
  })()

  return (
    <div ref={containerRef} className="overflow-hidden" aria-label={text}>
      <Tag className={className} style={style} aria-hidden="true">
        {segments.map((char, i) => (
          <span
            key={i}
            className="char inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Tag>
    </div>
  )
}
