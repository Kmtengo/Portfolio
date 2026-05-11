"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Milestone {
  year: string
  title: string
  description: string
  type: "launch" | "award" | "role"
}

const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Started Software Engineering",
    description: "Began the journey into frontend development and web technologies.",
    type: "launch",
  },
  {
    year: "2021",
    title: "GDSC Lead, Compose Camp",
    description: "Led Google Developer Student Club, skilling 250+ members in Android and Jetpack Compose.",
    type: "role",
  },
  {
    year: "2022",
    title: "MLSA Gold, Azure Certs",
    description: "Achieved Microsoft Learn Student Ambassador Gold status. Facilitated 60+ Azure certifications.",
    type: "award",
  },
  {
    year: "2023",
    title: "Imagine Cup EMEA Victory",
    description: "Won Microsoft Imagine Cup World Finals (EMEA) as Team Leader for iBoost project.",
    type: "award",
  },
  {
    year: "2023",
    title: "MksU Hackfest Convener",
    description: "Organized 3-day hackathon: 200+ developers, 15+ sustainability projects.",
    type: "launch",
  },
  {
    year: "2024",
    title: "Oasys-ke, 95% Delivery",
    description: "Agile frontend orchestration achieving 95%+ on-time delivery rate for critical milestones.",
    type: "role",
  },
  {
    year: "2025",
    title: "ISE Lead, Agri Command",
    description: "Lead Frontend Engineer at Intelligent Enterprise Solutions. Deployed AI-first agricultural platform.",
    type: "role",
  },
  {
    year: "2025",
    title: "Nyeri e-Services",
    description: "Launched multiplatform government service portal with installment processing engine.",
    type: "launch",
  },
]

export default function DeploymentRoadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !progressRef.current) return

    const ctx = gsap.context(() => {
      // Progress line fills on scroll
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

      // Staggered node entrance
      const nodes = sectionRef.current?.querySelectorAll(".timeline-node")
      if (nodes) {
        gsap.from(nodes, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#F1F5F9" }}>Deployment </span>
            <span style={{ color: "#5EEAD4" }}>Roadmap</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Vertical track line */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[2px]"
            style={{ backgroundColor: "rgba(0, 128, 128, 0.3)" }}
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

          {/* Nodes */}
          <div className="space-y-10 md:space-y-14">
            {milestones.map((milestone) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className="timeline-node relative pl-10 md:pl-14"
              >
                {/* Dot */}
                <div
                  className="absolute left-[-5px] top-2 h-3 w-3 rounded-full border-2"
                  style={{
                    borderColor: milestone.type === "award" ? "#FCD34D" : "#008080",
                    backgroundColor:
                      milestone.type === "award" ? "#FCD34D" : "#111112",
                    boxShadow:
                      milestone.type === "award"
                        ? "0 0 12px rgba(252, 211, 77, 0.4)"
                        : "none",
                  }}
                />

                {/* Year */}
                <span
                  className="mb-1 block font-mono text-xl font-bold md:text-2xl"
                  style={{ color: "#5EEAD4" }}
                >
                  {milestone.year}
                </span>

                {/* Title */}
                <h3
                  className="mb-1 font-display text-lg font-bold md:text-xl"
                  style={{ color: "#F1F5F9" }}
                >
                  {milestone.title}
                </h3>

                {/* Description */}
                <p
                  className="max-w-lg font-sans text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
