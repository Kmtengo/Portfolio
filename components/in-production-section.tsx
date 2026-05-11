"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Global Awards" },
  { value: 250, suffix: "+", label: "Devs Mentored" },
  { value: 95, suffix: "%+", label: "Delivery Rate" },
  { value: 200, suffix: "+", label: "Devs Upskilled" },
  { value: 60, suffix: "+", label: "Azure Certs" },
]

export default function InProductionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Counter animations
      stats.forEach((stat, index) => {
        const el = countersRef.current[index]
        if (!el) return

        const obj = { value: 0 }
        gsap.to(obj, {
          value: stat.value,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString() + stat.suffix
          },
        })
      })

      // Staggered card entrance
      const cards = cardsRef.current.filter(Boolean)
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="in-production"
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #111112 0%, #014D4E 50%, #111112 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#F1F5F9" }}>In </span>
            <span style={{ color: "#5EEAD4" }}>Production</span>
          </h2>
        </div>

        {/* Stats Grid — 5 columns on lg */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => { cardsRef.current[index] = el }}
              className="text-center"
            >
              <span
                ref={(el) => { countersRef.current[index] = el }}
                className="mb-2 block font-mono text-5xl font-bold md:text-6xl"
                style={{ color: "#5EEAD4", fontVariantNumeric: "tabular-nums" }}
              >
                0{stat.suffix}
              </span>
              <span
                className="font-sans text-xs font-bold uppercase"
                style={{ color: "#94A3B8", letterSpacing: "0.2em" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Supporting quote */}
        <p
          className="mx-auto mt-16 max-w-2xl text-center font-sans text-xl italic leading-relaxed md:mt-24 md:text-2xl"
          style={{ color: "#94A3B8" }}
        >
          Challenging the{" "}
          <span className="font-bold not-italic" style={{ color: "#5EEAD4" }}>
            limits
          </span>
          , winning projects. Bringing it all each and every{" "}
          <span className="font-bold not-italic" style={{ color: "#5EEAD4" }}>
            sprint
          </span>
          .
        </p>
      </div>
    </section>
  )
}
