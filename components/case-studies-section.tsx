"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

interface CaseStudy {
  title: string
  problem: string
  architecture: string
  techStack: string[]
  cicd: string
  metrics: string[]
}

const caseStudies: CaseStudy[] = [
  {
    title: "ISE - Agri Command Platform",
    problem:
      "Kenya Sugar Board needed a unified platform to aggregate fragmented agricultural data from multiple regional sources into a single source of truth.",
    architecture:
      "Designed a modular React frontend with domain-driven component architecture. Implemented a real-time data aggregation layer with Node.js microservices containerized in Docker.",
    techStack: ["React", "Node.js", "Docker", "PostgreSQL", "REST APIs"],
    cicd: "GitHub Actions CI/CD pipeline with Docker image builds, automated testing, and staged deployments to Azure Container Apps.",
    metrics: [
      "Single source of truth for agricultural data",
      "Automated tedious manual workflows",
      "Reduced data reconciliation time by 80%",
    ],
  },
  {
    title: "Intelligent Enterprise Design System",
    problem:
      "Multiple product teams across the organization were building inconsistent UIs, leading to fragmented user experiences and duplicated engineering effort.",
    architecture:
      "Engineered a centralized, accessible component library built on React with Storybook documentation. Established design tokens, theming infrastructure, and automated accessibility auditing.",
    techStack: [
      "React",
      "Storybook",
      "Tailwind CSS",
      "axe-core",
      "TypeScript",
    ],
    cicd: "Automated visual regression testing with Chromatic, npm package publishing via GitHub Actions, and Storybook static deployment.",
    metrics: [
      "Unified UI/UX across all company platforms",
      "Reduced new feature development time by 40%",
      "WCAG 2.1 AA compliance across all components",
    ],
  },
  {
    title: "iBoost — Imagine Cup EMEA",
    problem:
      "Develop an innovative solution for the Microsoft Imagine Cup Epic Challenge that addresses real-world sustainability and accessibility challenges.",
    architecture:
      "Built a cross-platform application leveraging Azure AI services with a React frontend. Implemented real-time data processing and AI inference pipelines.",
    techStack: ["React", "Azure AI", "Azure Functions", "Mobile", "REST APIs"],
    cicd: "Rapid prototyping with continuous deployment to Azure Static Web Apps. Feature flags for A/B testing during competition demos.",
    metrics: [
      "Victory at EMEA World Finals",
      "Selected from 100,000+ global participants",
      "Team Leader driving product strategy and technical execution",
    ],
  },
]

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".case-study-card")
      if (!cards) return

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
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
            Architecture Case Studies
          </h2>
          <p className="font-sans text-lg max-w-xl" style={{ color: "#94A3B8" }}>
            Deep-dive technical breakdowns of architectural decisions, CI/CD
            strategies, and measurable outcomes.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="case-study-card rounded-xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "#282828",
                border: "1px solid #2D2D2E",
              }}
            >
              {/* Card Header - Always Visible */}
              <button
                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                onClick={() => toggleExpand(index)}
              >
                <div>
                  <h3
                    className="font-display text-xl md:text-2xl font-bold mb-1"
                    style={{ color: "#F1F5F9" }}
                  >
                    {study.title}
                  </h3>
                  <p className="font-sans text-sm" style={{ color: "#94A3B8" }}>
                    {study.problem.slice(0, 120)}...
                  </p>
                </div>
                <ChevronDown
                  className="flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    color: "#5EEAD4",
                    transform:
                      expandedIndex === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                  size={24}
                />
              </button>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div
                  className="px-6 md:px-8 pb-6 md:pb-8 space-y-6"
                  style={{ borderTop: "1px solid #2D2D2E" }}
                >
                  {/* Problem */}
                  <div className="pt-6">
                    <h4
                      className="font-display text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5EEAD4" }}
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

                  {/* Architecture */}
                  <div>
                    <h4
                      className="font-display text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5EEAD4" }}
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

                  {/* Tech Stack */}
                  <div>
                    <h4
                      className="font-display text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5EEAD4" }}
                    >
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md font-mono text-xs"
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
                  </div>

                  {/* CI/CD */}
                  <div>
                    <h4
                      className="font-display text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5EEAD4" }}
                    >
                      CI/CD Strategy
                    </h4>
                    <p
                      className="font-mono text-xs leading-relaxed p-4 rounded-lg"
                      style={{
                        backgroundColor: "#1E1E1F",
                        color: "#94A3B8",
                        border: "1px solid #2D2D2E",
                      }}
                    >
                      {study.cicd}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4
                      className="font-display text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5EEAD4" }}
                    >
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {study.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-start gap-2 font-sans text-sm"
                          style={{ color: "#F1F5F9" }}
                        >
                          <span style={{ color: "#5EEAD4" }}>&#x2192;</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
