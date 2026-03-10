"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SteamFramePortrait from "./steam-frame-portrait"

interface CommunityRole {
  title: string
  organization: string
  stat: string
  statLabel: string
  description: string
  imagePlaceholder: string
}

const communityRoles: CommunityRole[] = [
  {
    title: "Microsoft Learn Student Ambassador",
    organization: "Gold Status",
    stat: "60+",
    statLabel: "Azure Certifications Facilitated",
    description:
      "Hands-on training in developer technologies, organizing workshops and certification bootcamps for aspiring cloud engineers.",
    imagePlaceholder: "/images/community/mlsa.jpg",
  },
  {
    title: "Google Developer Student Club Lead",
    organization: "Compose Camp",
    stat: "250+",
    statLabel: "Members Skilled",
    description:
      "Led a 3-month skilling campaign in Android development and Jetpack Compose, growing the club to 250+ active members.",
    imagePlaceholder: "/images/community/gdsc.jpg",
  },
  {
    title: "MksU Hackfest Convener",
    organization: "Lead Organizer",
    stat: "200+",
    statLabel: "Developers Upskilled",
    description:
      "Organized and led a 3-day hackathon facilitating 15+ sustainability projects and upskilling 200+ developers.",
    imagePlaceholder: "/images/community/hackfest.jpg",
  },
]

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: index * 0.15,
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
      id="community"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "#F1F5F9" }}
            >
              Community Ecosystem
            </h2>
            <p
              className="font-sans text-lg max-w-xl"
              style={{ color: "#94A3B8" }}
            >
              Beyond the code — mentoring, organizing, and building developer
              communities that matter.
            </p>
          </div>

          {/* Steam Frame Portrait */}
          <div className="flex-shrink-0">
            <SteamFramePortrait />
          </div>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityRoles.map((role, index) => (
            <div
              key={role.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group rounded-xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "#282828",
                border: "1px solid #2D2D2E",
              }}
            >
              {/* Image Placeholder */}
              <div
                className="relative w-full h-48 overflow-hidden"
                style={{ backgroundColor: "#1E1E1F" }}
              >
                {/* Stats Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="font-mono text-4xl font-bold block"
                      style={{ color: "#5EEAD4" }}
                    >
                      {role.stat}
                    </span>
                    <span
                      className="font-sans text-xs"
                      style={{ color: "#94A3B8" }}
                    >
                      {role.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "#014D4E",
                      color: "#5EEAD4",
                    }}
                  >
                    {role.organization}
                  </span>
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: "#F1F5F9" }}
                >
                  {role.title}
                </h3>
                <p className="font-sans text-sm" style={{ color: "#94A3B8" }}>
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
