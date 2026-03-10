"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    name: "ISE - Agri Command",
    description:
      "AI-first agricultural platform for the Kenya Sugar Board. Aggregated data to create a single source of truth, automating tedious workflows.",
    techStack: ["React", "Node.js", "Docker", "AI/ML"],
    impact: "Single source of truth for agricultural data",
  },
  {
    year: "2025",
    status: "Active",
    name: "Nyeri County e-Services",
    description:
      "Multiplatform government service portal with installment processing engine, increasing county revenue generation.",
    techStack: ["React", "TypeScript", "REST APIs", "PostgreSQL"],
    impact: "Increased county revenue generation",
  },
  {
    year: "2025",
    status: "Completed",
    name: "Intelligent Enterprise UI",
    description:
      "Company-wide accessible design system architecture. Unified UI/UX across all platforms via robust component libraries.",
    techStack: ["React", "Storybook", "Tailwind CSS", "A11y"],
    impact: "Unified UI/UX across all platforms",
  },
  {
    year: "2024",
    status: "Deployed",
    name: "Oasys-ke Architecture",
    description:
      "Agile frontend orchestration and React component execution. Maintained a 95%+ on-time delivery rate for critical milestones.",
    techStack: ["React", "CI/CD", "Agile", "Testing"],
    impact: "95%+ on-time delivery rate",
  },
  {
    year: "2023",
    status: "Awarded",
    name: "iBoost - Imagine Cup",
    description:
      "Microsoft Imagine Cup Epic Challenge. Led team to victory in the World Finals (EMEA) as Team Leader.",
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
      cardsRef.current.forEach((card) => {
        if (!card) return

        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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
      id="projects"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Projects Hall of Fame
          </h2>
          <p className="font-sans text-lg max-w-xl" style={{ color: "#94A3B8" }}>
            Flagship deployments and award-winning platforms that define my
            engineering trajectory.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group p-6 rounded-xl transition-all duration-300 cursor-default glow-accent-hover"
              style={{
                backgroundColor: "#282828",
                border: "1px solid #2D2D2E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#008080"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2D2D2E"
              }}
            >
              {/* Year & Status Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#94A3B8" }}
                >
                  {project.year}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${statusColors[project.status]}20`,
                    color: statusColors[project.status],
                    border: `1px solid ${statusColors[project.status]}40`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Name */}
              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: "#F1F5F9" }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                className="font-sans text-sm mb-4 leading-relaxed"
                style={{ color: "#94A3B8" }}
              >
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md text-xs font-mono"
                    style={{
                      backgroundColor: "#1E1E1F",
                      color: "#5EEAD4",
                      border: "1px solid #2D2D2E",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact Metric */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid #2D2D2E" }}
              >
                <p
                  className="font-sans text-sm font-medium"
                  style={{ color: "#5EEAD4" }}
                >
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
