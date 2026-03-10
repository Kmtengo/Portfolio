"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StaggeredText from "./staggered-text"
import TerminalInput from "./terminal-input"

gsap.registerPlugin(ScrollTrigger)

// Wavy organic background lines rendered as SVG paths
function WavyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Organic wavy lines — subtle teal at low opacity to match dark theme */}
      <g fill="none" stroke="#5EEAD4" strokeWidth="1" opacity="0.06">
        <path d="M-100 200 C100 100, 300 350, 500 200 S900 50, 1100 200 S1500 350, 1700 200" />
        <path d="M-100 300 C150 180, 350 420, 600 300 S950 150, 1200 300 S1550 420, 1800 300" />
        <path d="M-100 420 C200 280, 450 520, 700 420 S1050 280, 1300 420 S1650 520, 1900 420" />
        <path d="M-100 520 C180 380, 380 600, 650 520 S1000 360, 1250 520 S1600 640, 1900 520" />
        <path d="M-100 640 C220 500, 470 720, 750 640 S1100 480, 1350 640 S1700 760, 2000 640" />
        <path d="M-100 760 C250 610, 510 840, 800 760 S1150 600, 1400 760 S1750 880, 2000 760" />
        <path d="M200 -100 C100 100, 350 300, 200 500 S50 700, 200 900 S350 1100, 200 1300" />
        <path d="M400 -100 C280 120, 540 320, 400 550 S230 760, 400 980 S550 1190, 400 1400" />
        <path d="M1200 -100 C1100 150, 1350 380, 1200 600 S1050 820, 1200 1040 S1350 1260, 1200 1450" />
        <path d="M1500 -100 C1380 130, 1630 360, 1500 580 S1350 810, 1500 1030" />
        {/* Larger looping organic blobs */}
        <ellipse cx="300" cy="600" rx="180" ry="120" opacity="0.5" transform="rotate(-20 300 600)" />
        <ellipse cx="900" cy="200" rx="220" ry="80" opacity="0.4" transform="rotate(15 900 200)" />
        <ellipse cx="1400" cy="700" rx="160" ry="100" opacity="0.45" transform="rotate(-10 1400 700)" />
      </g>
    </svg>
  )
}

// Info card shown in the bottom-left — mirrors the "NEXT RACE" card in the reference
function InfoCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute bottom-10 left-8 md:left-14 z-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease 1.2s, transform 0.7s ease 1.2s",
      }}
    >
      {/* Label */}
      <p
        className="font-mono text-[10px] tracking-[0.2em] font-bold mb-2"
        style={{ color: "#5EEAD4" }}
      >
        CURRENTLY BUILDING
      </p>

      {/* Card */}
      <div
        className="rounded-lg p-4 flex flex-col gap-3 min-w-[140px]"
        style={{
          backgroundColor: "rgba(17,17,18,0.7)",
          border: "1px solid #2D2D2E",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Icon row — abstract circuit/code icon */}
        <div className="flex items-center justify-center w-10 h-10">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
            <rect x="4" y="14" width="10" height="12" rx="2" stroke="#5EEAD4" strokeWidth="1.5" />
            <rect x="26" y="14" width="10" height="12" rx="2" stroke="#5EEAD4" strokeWidth="1.5" />
            <line x1="14" y1="20" x2="26" y2="20" stroke="#5EEAD4" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="3" fill="#5EEAD4" />
            <line x1="20" y1="4" x2="20" y2="14" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="20" y1="26" x2="20" y2="36" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Highlighted event name */}
        <p
          className="font-display text-xs font-bold leading-tight tracking-wide"
          style={{ color: "#5EEAD4" }}
        >
          SCALABLE UI
          <br />SYSTEMS
        </p>

        {/* Secondary detail */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" aria-hidden="true">
            <circle cx="10" cy="10" r="7" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M10 6v4l3 2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="font-mono text-[10px] leading-tight" style={{ color: "#94A3B8" }}>
            REACT / TS
            <br />SINCE 2019
          </p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [showSunnies, setShowSunnies] = useState(false)

  // Wait for preloader to finish (~3s)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  // Portrait reveal
  useEffect(() => {
    if (!isReady || !portraitRef.current) return
    gsap.fromTo(
      portraitRef.current,
      { scale: 1.06, opacity: 0, filter: "blur(12px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power3.out", delay: 0.3 }
    )
  }, [isReady])

  // GSAP ScrollTrigger exit
  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(stickyRef.current, {
        yPercent: -15,
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "80% center",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[200vh]"
      style={{ backgroundColor: "#111112" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Decorative wavy background */}
        <WavyBackground />

        {/* Top-left: Stacked name */}
        <div className="absolute top-6 left-8 md:top-8 md:left-14 z-20">
          {isReady && (
            <>
              <StaggeredText
                text="QURLARMAH"
                className="font-display text-2xl md:text-3xl font-black leading-none tracking-tight text-balance"
                style={{ color: "#F1F5F9" } as React.CSSProperties}
                delay={0.3}
              />
              <StaggeredText
                text="MOSES"
                className="font-display text-2xl md:text-3xl font-black leading-none tracking-tight text-balance"
                style={{ color: "#F1F5F9" } as React.CSSProperties}
                delay={0.5}
              />
            </>
          )}
        </div>

        {/* Top-center: Monogram */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
          style={{
            opacity: isReady ? 1 : 0,
            transition: "opacity 0.6s ease 0.8s",
          }}
          aria-label="QM monogram"
        >
          <svg
            viewBox="0 0 60 60"
            className="w-10 h-10 md:w-12 md:h-12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Q shape */}
            <circle cx="22" cy="28" r="13" stroke="#F1F5F9" strokeWidth="3" />
            <line x1="31" y1="37" x2="40" y2="46" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" />
            {/* M shape */}
            <polyline points="34,44 34,16 44,32 54,16 54,44" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Full-bleed centered portrait */}
        <div
          ref={portraitRef}
          className="absolute inset-0 flex items-end justify-center z-10"
          style={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-md md:max-w-lg h-full">
            <Image
              src="/hero-portrait.jpg"
              alt="Qurlarmah Moses — Lead Frontend Architect"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 640px"
            />
            {/* Bottom fade — blends portrait into background */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #111112 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Sunglasses easter egg overlay */}
        {showSunnies && (
          <div
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
            style={{ animation: "fadeIn 0.5s ease forwards" }}
          >
            <p
              className="font-mono text-6xl"
              style={{ color: "#5EEAD4", textShadow: "0 0 20px rgba(94,234,212,0.6)" }}
            >
              8-)
            </p>
          </div>
        )}

        {/* Terminal input — bottom center */}
        {isReady && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            style={{
              opacity: isReady ? 1 : 0,
              transition: "opacity 0.6s ease 1.4s",
            }}
          >
            <TerminalInput
              onSunnies={() => setShowSunnies(true)}
              onInit={() => {}}
            />
          </div>
        )}

        {/* Bottom-left info card */}
        <InfoCard visible={isReady} />
      </div>
    </section>
  )
}
