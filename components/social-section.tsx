"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    platform: "GitHub",
    handle: "@qurlarmah",
    href: "https://github.com",
    icon: Github,
    description: "Open source contributions and project repositories",
  },
  {
    platform: "LinkedIn",
    handle: "Qurlarmah Moses",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Professional network and career updates",
  },
  {
    platform: "Twitter/X",
    handle: "@qurlarmah",
    href: "https://x.com",
    icon: Twitter,
    description: "Tech insights, community updates, and dev thoughts",
  },
]

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".social-card")
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
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
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #111112 0%, #014D4E 50%, #111112 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Let&apos;s Connect
          </h2>
          <p className="font-sans text-lg" style={{ color: "#94A3B8" }}>
            Find me across the web
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group p-6 rounded-xl transition-all duration-300 glow-accent-hover"
              style={{
                backgroundColor: "rgba(40, 40, 40, 0.6)",
                border: "1px solid #2D2D2E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#008080"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2D2D2E"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <social.icon size={24} style={{ color: "#5EEAD4" }} />
                <ExternalLink
                  size={16}
                  style={{ color: "#94A3B8" }}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
              <h3
                className="font-display text-lg font-bold mb-1"
                style={{ color: "#F1F5F9" }}
              >
                {social.platform}
              </h3>
              <p
                className="font-mono text-sm mb-2"
                style={{ color: "#5EEAD4" }}
              >
                {social.handle}
              </p>
              <p className="font-sans text-xs" style={{ color: "#94A3B8" }}>
                {social.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
