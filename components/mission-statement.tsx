"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const WORDS = [
  { text: "Engineering", accent: true },
  { text: "systems," },
  { text: "mentoring" },
  { text: "the" },
  { text: "next" },
  { text: "generation," },
  { text: "shipping", accent: true },
  { text: "with" },
  { text: "precision." },
]

export default function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[]
    if (!section || words.length === 0) return

    // Set initial opacity
    gsap.set(words, { opacity: 0.15 })

    // Scrub-driven word reveal
    gsap.to(words, {
      opacity: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        {/* Label */}
        <p
          className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em]"
          style={{ color: "#94A3B8" }}
        >
          Engineering scalable UI since 2019
        </p>

        {/* Main statement */}
        <h2
          className="text-center text-4xl leading-[0.95] font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordsRef.current[i] = el }}
              className="mr-[0.3em] inline-block last:mr-0"
              style={{
                color: word.accent ? "#5EEAD4" : "#F1F5F9",
                opacity: 0.15,
              }}
            >
              {word.text}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
