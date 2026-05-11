"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  year: string
  status: string
  name: string
  description: string
  techStack: string[]
  impact: string
}

const projects: Project[] = [
  {
    year: "2025",
    status: "Active",
    name: "ISE \u2014 Agri Command",
    description:
      "AI-first agricultural platform for the Kenya Sugar Board. Single source of truth for agricultural data.",
    techStack: ["React", "Node.js", "Docker", "AI/ML"],
    impact: "Aggregated data into single source of truth",
  },
  {
    year: "2025",
    status: "Active",
    name: "Nyeri County e-Services",
    description:
      "Multiplatform government portal with installment processing engine for county revenue.",
    techStack: ["React", "TypeScript", "REST APIs", "PostgreSQL"],
    impact: "Installment processing engine for county revenue",
  },
  {
    year: "2025",
    status: "Completed",
    name: "Intelligent Enterprise UI",
    description:
      "Company-wide accessible design system. Unified UI/UX across all platforms via robust component libraries.",
    techStack: ["React", "Storybook", "Tailwind CSS", "A11y"],
    impact: "Unified UI/UX across all platforms",
  },
  {
    year: "2024",
    status: "Deployed",
    name: "Oasys-ke Architecture",
    description:
      "Agile frontend orchestration and React component execution. Maintained critical milestone delivery.",
    techStack: ["React", "CI/CD", "Agile", "Testing"],
    impact: "95%+ on-time delivery rate",
  },
  {
    year: "2023",
    status: "Awarded",
    name: "iBoost \u2014 Imagine Cup",
    description:
      "Microsoft Imagine Cup Epic Challenge. Led team to victory in the EMEA World Finals.",
    techStack: ["React", "Azure", "AI/ML", "Mobile"],
    impact: "EMEA World Finals Victory",
  },
]

const statusColors: Record<string, string> = {
  Active: "#5EEAD4",
  Completed: "#008080",
  Deployed: "#2DD4BF",
  Awarded: "#FCD34D",
}

export default function ProjectsHall() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#F1F5F9" }}>Projects </span>
            <span style={{ color: "#5EEAD4" }}>Hall of Fame</span>
          </h2>
          <p
            className="max-w-xl font-sans text-lg"
            style={{ color: "#94A3B8" }}
          >
            From award-winning platforms to enterprise design systems, these are
            the projects that define the craft.
          </p>
        </div>

        {/* Staggered Masonry Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group cursor-default rounded-2xl p-6 transition-all duration-300"
              style={{
                backgroundColor: "#282828",
                border: "2px solid rgba(0, 128, 128, 0.2)",
                // Staggered offset for masonry look
                transform:
                  index % 3 === 1
                    ? "translateY(2rem)"
                    : index % 3 === 2
                      ? "translateY(1rem)"
                      : "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "#5EEAD4"
                el.style.boxShadow = "0 0 40px rgba(94, 234, 212, 0.15)"
                el.style.transform = `translateY(${index % 3 === 1 ? "calc(2rem - 4px)" : index % 3 === 2 ? "calc(1rem - 4px)" : "-4px"}) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "rgba(0, 128, 128, 0.2)"
                el.style.boxShadow = "none"
                el.style.transform =
                  index % 3 === 1
                    ? "translateY(2rem)"
                    : index % 3 === 2
                      ? "translateY(1rem)"
                      : "none"
              }}
            >
              {/* Year + Status */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: "#5EEAD4" }}
                >
                  {project.year}
                </span>
                <span className="font-mono text-sm" style={{ color: "#94A3B8" }}>
                  \u00B7
                </span>
                <span
                  className="font-mono text-xs font-bold uppercase"
                  style={{
                    color: statusColors[project.status],
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Name */}
              <h3
                className="mb-3 font-display text-xl font-bold md:text-2xl"
                style={{ color: "#F1F5F9" }}
              >
                {project.name}
              </h3>

              {/* Description — 2 lines max */}
              <p
                className="mb-5 line-clamp-2 font-sans text-sm leading-relaxed"
                style={{ color: "#94A3B8" }}
              >
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md px-3 py-1 font-mono text-xs uppercase"
                    style={{
                      color: "#5EEAD4",
                      border: "1px solid #008080",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact Metric */}
              <p className="font-sans text-sm font-medium" style={{ color: "#F1F5F9" }}>
                &ldquo;{project.impact}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
