"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SteamFramePortrait from "./steam-frame-portrait"

gsap.registerPlugin(ScrollTrigger)

interface CommunityRole {
  title: string
  organization: string
  stat: string
  statLabel: string
  description: string
}

const communityRoles: CommunityRole[] = [
  {
    title: "Microsoft Learn Student Ambassador",
    organization: "Gold Status",
    stat: "60+",
    statLabel: "Azure Certs",
    description:
      "Organizing workshops and certification bootcamps for aspiring cloud engineers.",
  },
  {
    title: "Google Developer Student Club Lead",
    organization: "Compose Camp",
    stat: "250+",
    statLabel: "Members",
    description:
      "Led 3-month skilling campaign in Android development and Jetpack Compose.",
  },
  {
    title: "MksU Hackfest Convener",
    organization: "Lead Organizer",
    stat: "200+",
    statLabel: "Devs Upskilled",
    description:
      "Organized 3-day hackathon: 15+ sustainability projects and 200+ developers.",
  },
]

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
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
      id="community"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#F5F1E8" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="mb-2 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#0F172A" }}>Community </span>
            <span style={{ color: "#008080" }}>Ecosystem</span>
          </h2>
          <p
            className="mt-4 font-sans text-lg"
            style={{ color: "#0F172A", opacity: 0.7 }}
          >
            Qurlarmah Moses &middot; 24 y.o
          </p>
        </div>

        {/* Community Grid — 3 columns */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {communityRoles.map((role, index) => (
            <div
              key={role.title}
              ref={(el) => { cardsRef.current[index] = el }}
              className="overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "white",
                border: "2px solid rgba(15, 23, 42, 0.1)",
              }}
            >
              {/* Image area with stat overlay */}
              <div
                className="relative flex h-48 items-center justify-center overflow-hidden rounded-t-xl"
                style={{ backgroundColor: "#E8E4DB" }}
              >
                <div className="text-center">
                  <span
                    className="block font-mono text-4xl font-bold"
                    style={{ color: "#008080" }}
                  >
                    {role.stat}
                  </span>
                  <span
                    className="font-sans text-xs font-medium uppercase"
                    style={{ color: "#0F172A", letterSpacing: "0.1em", opacity: 0.6 }}
                  >
                    {role.statLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="mb-2 inline-block rounded-md px-2 py-0.5 font-mono text-xs"
                  style={{
                    backgroundColor: "rgba(0, 128, 128, 0.1)",
                    color: "#008080",
                  }}
                >
                  {role.organization}
                </span>
                <h3
                  className="mb-2 font-display text-lg font-bold"
                  style={{ color: "#0F172A" }}
                >
                  {role.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#0F172A", opacity: 0.7 }}
                >
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Quote + Steam Frame Portrait */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Bio Quote */}
          <div className="flex-1">
            <p
              className="font-sans text-xl leading-relaxed md:text-2xl"
              style={{ color: "#0F172A" }}
            >
              Since joining the developer community, I&apos;ve been all in —
              upskilling students, chasing impact, and bringing the{" "}
              <span className="font-bold" style={{ color: "#008080" }}>
                fight to every hackathon
              </span>
              .
            </p>
          </div>

          {/* Portrait */}
          <div className="flex-shrink-0">
            <SteamFramePortrait />
          </div>
        </div>
      </div>
    </section>
  )
}
