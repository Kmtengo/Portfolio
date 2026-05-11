"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface CaseStudy {
  project: string
  stack: string[]
  year: string
  metric: string
  problem: string
  architecture: string
  cicd: string
  outcomes: string[]
}

const caseStudies: CaseStudy[] = [
  {
    project: "ISE \u2014 Agri Command",
    stack: ["React", "Node.js", "Docker"],
    year: "2025",
    metric: "Single Source of Truth",
    problem:
      "Kenya Sugar Board needed a unified platform to aggregate fragmented agricultural data from multiple regional sources.",
    architecture:
      "Modular React frontend with domain-driven component architecture. Real-time data aggregation layer with Node.js microservices containerized in Docker.",
    cicd: "GitHub Actions CI/CD with Docker image builds, automated testing, and staged deployments to Azure Container Apps.",
    outcomes: [
      "Single source of truth for agricultural data",
      "Automated tedious manual workflows",
      "Reduced data reconciliation time by 80%",
    ],
  },
  {
    project: "Intelligent Enterprise UI",
    stack: ["React", "Storybook", "Tailwind"],
    year: "2025",
    metric: "Unified UI/UX",
    problem:
      "Multiple product teams building inconsistent UIs, leading to fragmented user experiences and duplicated engineering effort.",
    architecture:
      "Centralized, accessible component library built on React with Storybook documentation. Design tokens, theming infrastructure, and automated accessibility auditing.",
    cicd: "Visual regression testing with Chromatic, npm package publishing via GitHub Actions, Storybook static deployment.",
    outcomes: [
      "Unified UI/UX across all company platforms",
      "Reduced feature development time by 40%",
      "WCAG 2.1 AA compliance across all components",
    ],
  },
  {
    project: "Oasys-ke Architecture",
    stack: ["React", "CI/CD", "Agile"],
    year: "2024",
    metric: "95%+ Delivery",
    problem:
      "Agile frontend orchestration required to maintain high delivery standards across critical enterprise milestones.",
    architecture:
      "React component execution with modular state management. Sprint-driven delivery cycles with continuous integration and automated quality gates.",
    cicd: "Automated testing pipelines, PR-based deployments, and feature branch previews for stakeholder approval.",
    outcomes: [
      "95%+ on-time delivery rate",
      "Streamlined sprint velocity",
      "Zero critical production regressions",
    ],
  },
  {
    project: "iBoost \u2014 Imagine Cup",
    stack: ["React", "Azure", "AI/ML"],
    year: "2023",
    metric: "EMEA Victory",
    problem:
      "Develop an innovative solution for the Microsoft Imagine Cup addressing sustainability and accessibility challenges.",
    architecture:
      "Cross-platform application leveraging Azure AI services with a React frontend. Real-time data processing and AI inference pipelines.",
    cicd: "Rapid prototyping with continuous deployment to Azure Static Web Apps. Feature flags for A/B testing during competition demos.",
    outcomes: [
      "Victory at EMEA World Finals",
      "Selected from 100,000+ global participants",
      "Team Leader driving product strategy",
    ],
  },
]

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const rows = rowsRef.current.filter(Boolean)
      gsap.from(rows, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#F1F5F9" }}>Architecture </span>
            <span style={{ color: "#5EEAD4" }}>Case Studies</span>
          </h2>
        </div>

        {/* Results Table */}
        <div>
          {/* Table Header (desktop) */}
          <div
            className="mb-2 hidden grid-cols-12 gap-4 px-6 md:grid"
            style={{ color: "#94A3B8" }}
          >
            <span className="col-span-4 font-mono text-xs uppercase tracking-[0.15em]">
              Project
            </span>
            <span className="col-span-3 font-mono text-xs uppercase tracking-[0.15em]">
              Stack
            </span>
            <span className="col-span-2 font-mono text-xs uppercase tracking-[0.15em]">
              Year
            </span>
            <span className="col-span-3 font-mono text-xs uppercase tracking-[0.15em]">
              Key Metric
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y" style={{ borderColor: "rgba(45, 45, 46, 0.5)" }}>
            {caseStudies.map((study, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div
                  key={study.project}
                  ref={(el) => { rowsRef.current[index] = el }}
                >
                  {/* Row — hover highlight: bg becomes accent, text inverts */}
                  <button
                    className="group w-full px-6 py-5 text-left transition-colors duration-300 md:grid md:grid-cols-12 md:items-center md:gap-4"
                    style={{
                      backgroundColor: isExpanded
                        ? "rgba(94, 234, 212, 0.08)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = "#5EEAD4"
                        e.currentTarget.querySelectorAll<HTMLElement>("[data-cell]").forEach(
                          (el) => { el.style.color = "#111112" }
                        )
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.querySelectorAll<HTMLElement>("[data-cell]").forEach(
                          (el) => { el.style.color = "" }
                        )
                      }
                    }}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                  >
                    <span
                      data-cell
                      className="block font-display text-lg font-bold transition-colors duration-300 md:col-span-4 md:text-xl"
                      style={{ color: "#F1F5F9" }}
                    >
                      {study.project}
                    </span>
                    <span
                      data-cell
                      className="mt-1 block font-mono text-xs transition-colors duration-300 md:col-span-3 md:mt-0"
                      style={{ color: "#94A3B8" }}
                    >
                      {study.stack.join(" / ")}
                    </span>
                    <span
                      data-cell
                      className="mt-1 hidden font-mono text-sm transition-colors duration-300 md:col-span-2 md:mt-0 md:block"
                      style={{ color: "#94A3B8" }}
                    >
                      {study.year}
                    </span>
                    <span
                      data-cell
                      className="mt-1 flex items-center justify-between font-mono text-sm font-bold transition-colors duration-300 md:col-span-3 md:mt-0"
                      style={{ color: "#5EEAD4" }}
                    >
                      {study.metric}
                      <ChevronDown
                        className="ml-2 flex-shrink-0 transition-transform duration-300"
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                        }}
                        size={18}
                      />
                    </span>
                  </button>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div
                      className="grid gap-6 px-6 py-8 md:grid-cols-2 md:gap-8"
                      style={{
                        backgroundColor: "rgba(40, 40, 40, 0.5)",
                        borderTop: "1px solid rgba(45, 45, 46, 0.5)",
                      }}
                    >
                      <div>
                        <h4
                          className="mb-2 font-mono text-xs font-bold uppercase"
                          style={{ color: "#5EEAD4", letterSpacing: "0.2em" }}
                        >
                          Problem
                        </h4>
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "#94A3B8" }}
                        >
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="mb-2 font-mono text-xs font-bold uppercase"
                          style={{ color: "#5EEAD4", letterSpacing: "0.2em" }}
                        >
                          Architecture
                        </h4>
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "#94A3B8" }}
                        >
                          {study.architecture}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="mb-2 font-mono text-xs font-bold uppercase"
                          style={{ color: "#5EEAD4", letterSpacing: "0.2em" }}
                        >
                          CI/CD Strategy
                        </h4>
                        <p
                          className="rounded-lg p-4 font-mono text-xs leading-relaxed"
                          style={{
                            backgroundColor: "#1E1E1F",
                            color: "#94A3B8",
                            border: "1px solid #2D2D2E",
                          }}
                        >
                          {study.cicd}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="mb-2 font-mono text-xs font-bold uppercase"
                          style={{ color: "#5EEAD4", letterSpacing: "0.2em" }}
                        >
                          Key Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {study.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-2 font-sans text-sm"
                              style={{ color: "#F1F5F9" }}
                            >
                              <span style={{ color: "#5EEAD4" }}>&rarr;</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
