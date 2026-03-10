"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 5,
    suffix: "+",
    label: "Global Awards",
    description: "Hackathon victories including Imagine Cup EMEA World Finals",
  },
  {
    value: 250,
    suffix: "+",
    label: "Developers Mentored",
    description: "As Google Developer Student Club Lead over 3 months",
  },
  {
    value: 95,
    suffix: "%+",
    label: "On-Time Delivery",
    description: "Consistent delivery rate across ISE and Oasys-ke projects",
  },
  {
    value: 200,
    suffix: "+",
    label: "Devs Upskilled",
    description: "Through MksU Hackfest — 3 days, 15+ sustainability projects",
  },
  {
    value: 60,
    suffix: "+",
    label: "Azure Certifications",
    description: "Facilitated as Microsoft Learn Student Ambassador (Gold)",
  },
]

export default function InProductionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = countersRef.current[index]
        if (!el) return

        const obj = { value: 0 }
        gsap.to(obj, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString() + stat.suffix
          },
        })
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#F1F5F9" }}
          >
            In Production
          </h2>
          <p className="font-sans text-lg max-w-xl" style={{ color: "#94A3B8" }}>
            Real-world metrics from shipping code, mentoring developers, and
            building platforms at scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(40, 40, 40, 0.5)",
                border: "1px solid rgba(45, 45, 46, 0.5)",
              }}
            >
              <span
                ref={(el) => {
                  countersRef.current[index] = el
                }}
                className="font-mono text-5xl md:text-6xl font-bold block mb-3"
                style={{ color: "#5EEAD4" }}
              >
                0{stat.suffix}
              </span>
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: "#F1F5F9" }}
              >
                {stat.label}
              </h3>
              <p className="font-sans text-sm" style={{ color: "#94A3B8" }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
