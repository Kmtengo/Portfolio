"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Milestone {
  year: string
  title: string
  description: string
  type: "launch" | "award" | "role"
}

const milestones: Milestone[] = [
  {
    year: "2025",
    title: "ISE - Agri Command Launch",
    description:
      "Deployed AI-first agricultural platform for Kenya Sugar Board. React/Node.js/Docker stack.",
    type: "launch",
  },
  {
    year: "2025",
    title: "Nyeri County e-Services Portal",
    description:
      "Launched multiplatform government service portal with installment processing engine.",
    type: "launch",
  },
  {
    year: "2025",
    title: "Lead Frontend Engineer — ISE",
    description:
      "Led development of company-wide accessible design system architecture at Intelligent Enterprise Solutions.",
    type: "role",
  },
  {
    year: "2024",
    title: "Frontend Engineer — Oasys-ke",
    description:
      "Agile frontend orchestration achieving 95%+ on-time delivery rate for critical milestones.",
    type: "role",
  },
  {
    year: "2024",
    title: "MksU Hackfest Convener",
    description:
      "Organized 3-day hackathon: 200+ developers, 15+ sustainability projects.",
    type: "launch",
  },
  {
    year: "2023",
    title: "Imagine Cup — EMEA Victory",
    description:
      "Won Microsoft Imagine Cup World Finals (EMEA) as Team Leader for iBoost project.",
    type: "award",
  },
  {
    year: "2023",
    title: "GDSC Lead — Compose Camp",
    description:
      "Led Google Developer Student Club, skilling 250+ members in Android and Jetpack Compose.",
    type: "role",
  },
  {
    year: "2022",
    title: "MLSA Gold Status",
    description:
      "Achieved Microsoft Learn Student Ambassador Gold status. Facilitated 60+ Azure certifications.",
    type: "award",
  },
]

const typeColors: Record<string, string> = {
  launch: "#5EEAD4",
  award: "#FCD34D",
  role: "#008080",
}

export default function DeploymentRoadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !progressRef.current) return

    const ctx = gsap.context(() => {
      // Animate the progress line
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      )

      // Animate timeline nodes
      const nodes = sectionRef.current?.querySelectorAll(".timeline-node")
      nodes?.forEach((node) => {
        gsap.fromTo(
          node,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Deployment Roadmap
          </h2>
          <p className="font-sans text-lg max-w-xl" style={{ color: "#94A3B8" }}>
            A chronological timeline of launches, roles, and milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "#2D2D2E" }}
          >
            <div
              ref={progressRef}
              className="w-full origin-top"
              style={{
                backgroundColor: "#5EEAD4",
                height: "100%",
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className="timeline-node relative pl-12 md:pl-16"
              >
                {/* Node Dot */}
                <div
                  className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: typeColors[milestone.type],
                    backgroundColor:
                      milestone.type === "award"
                        ? typeColors[milestone.type]
                        : "#111112",
                  }}
                />

                {/* Content */}
                <div className="flex items-start gap-4">
                  <span
                    className="font-mono text-sm font-medium flex-shrink-0 mt-0.5"
                    style={{ color: typeColors[milestone.type] }}
                  >
                    {milestone.year}
                  </span>
                  <div>
                    <h3
                      className="font-display text-lg font-bold mb-1"
                      style={{ color: "#F1F5F9" }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "#94A3B8" }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
