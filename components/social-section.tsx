"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Kmtengo", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/qurlarmah", icon: Linkedin },
  { label: "X", href: "https://x.com/qurlarmah", icon: Twitter },
  { label: "Email", href: "mailto:hello@qurlarmah.dev", icon: Mail },
]

// Fanned card rotations
const fanAngles = [-8, -3, 3, 8]

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".connect-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
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
      id="contact"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #F5F1E8 0%, #F5F1E8 60%, #5EEAD4 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
        {/* Heading */}
        <div className="connect-heading mb-16">
          <h2 className="mb-4 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            <span style={{ color: "#0F172A" }}>Connect With </span>
            <span style={{ color: "#008080" }}>Qurlarmah</span>
          </h2>
        </div>

        {/* Fanned Card Stack */}
        <div
          ref={cardsRef}
          className="group relative mx-auto mb-16 flex h-64 w-48 items-center justify-center md:h-80 md:w-56"
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute h-full w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundColor: i === 0 ? "#008080" : i === 1 ? "#014D4E" : i === 2 ? "#111112" : "#282828",
                transform: `rotate(${fanAngles[i]}deg)`,
                zIndex: 4 - i,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
            />
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="mb-8 font-sans text-lg"
          style={{ color: "#0F172A", opacity: 0.7 }}
        >
          Follow Qurlarmah on the web
        </p>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-sans text-sm font-bold uppercase transition-colors duration-300"
              style={{ color: "#0F172A", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#008080"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#0F172A"
              }}
            >
              <social.icon size={18} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
