"use client"

import { useRef, useState, useEffect, useId } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, AnimatePresence, useAnimationControls } from "motion/react"
import StaggeredText from "./staggered-text"
import TerminalInput from "./terminal-input"
import { Volume2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// ─── Animated monogram (fill-reveal teal on hover, runs once per hover) ──────
function MonogramMark({ className }: { className?: string }) {
  const clipId = useId().replace(/:/g, "")
  const controls = useAnimationControls()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleHover = async () => {
    if (isAnimating) return
    setIsAnimating(true)
    await controls.start({
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    })
    setIsAnimating(false)
  }

  const handleLeave = async () => {
    if (isAnimating) return
    await controls.start({
      y: "100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    })
  }

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="QM Monogram"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ cursor: "default", overflow: "visible" }}
    >
      <defs>
        {/* Clip path that reveals from bottom to top */}
        <clipPath id={`fill-clip-${clipId}`}>
          <motion.rect
            x="0"
            y="0"
            width="240"
            height="240"
            initial={{ y: "100%" }}
            animate={controls}
          />
        </clipPath>
      </defs>

      {/* Grey base layer (always visible) */}
      <g fill="#64748B" stroke="#64748B" strokeLinejoin="round" strokeLinecap="round">
        <polygon points="40,200 80,80 120,200" strokeWidth="12" />
        <polygon points="100,200 140,80 180,200" strokeWidth="12" style={{ opacity: 0.75 }} />
        <circle cx="140" cy="130" r="50" fill="none" strokeWidth="16" />
        <line x1="170" y1="160" x2="210" y2="200" strokeWidth="16" />
      </g>

      {/* Teal fill layer — revealed by clip from bottom upward */}
      <g
        fill="#5EEAD4"
        stroke="#5EEAD4"
        strokeLinejoin="round"
        strokeLinecap="round"
        clipPath={`url(#fill-clip-${clipId})`}
      >
        <polygon points="40,200 80,80 120,200" strokeWidth="12" />
        <polygon points="100,200 140,80 180,200" strokeWidth="12" style={{ opacity: 0.75 }} />
        <circle cx="140" cy="130" r="50" fill="none" strokeWidth="16" />
        <line x1="170" y1="160" x2="210" y2="200" strokeWidth="16" />
      </g>
    </svg>
  )
}

// ─── Wavy organic background ──────────────────────────────────────────────────
function WavyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
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
        <ellipse cx="300" cy="600" rx="180" ry="120" opacity="0.5" transform="rotate(-20 300 600)" />
        <ellipse cx="900" cy="200" rx="220" ry="80" opacity="0.4" transform="rotate(15 900 200)" />
        <ellipse cx="1400" cy="700" rx="160" ry="100" opacity="0.45" transform="rotate(-10 1400 700)" />
      </g>
    </svg>
  )
}

// ─── Bottom-left info card ────────────────────────────────────────────────────
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
      <p
        className="font-mono text-[10px] tracking-[0.2em] font-bold mb-2"
        style={{ color: "#5EEAD4" }}
      >
        CURRENTLY BUILDING
      </p>
      <div
        className="rounded-lg p-4 flex flex-col gap-3 min-w-[140px]"
        style={{
          backgroundColor: "rgba(17,17,18,0.7)",
          border: "1px solid #2D2D2E",
          backdropFilter: "blur(8px)",
        }}
      >
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
        <p className="font-display text-xs font-bold leading-tight tracking-wide" style={{ color: "#5EEAD4" }}>
          SCALABLE UI<br />SYSTEMS
        </p>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" aria-hidden="true">
            <circle cx="10" cy="10" r="7" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M10 6v4l3 2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="font-mono text-[10px] leading-tight" style={{ color: "#94A3B8" }}>
            REACT / TS<br />SINCE 2019
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Dashboard menu overlay ───────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "In Production", href: "#in-production" },
  { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Dribbble", href: "#" },
]

const menuImages = [
  { src: "/menu-img-1.jpg", alt: "Architecture" },
  { src: "/menu-img-2.jpg", alt: "Workspace" },
  { src: "/menu-img-3.jpg", alt: "Technology" },
  { src: "/menu-img-4.jpg", alt: "Cityscape" },
]

function DashboardMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="dashboard-menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col md:flex-row overflow-hidden"
          style={{ backgroundColor: "#1A2218" }}
        >
          {/* Subtle wavy lines on menu bg */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke="#5EEAD4" strokeWidth="1" opacity="0.04">
              <path d="M-100 200 C200 80, 500 350, 800 200 S1300 50, 1600 200" />
              <path d="M-100 400 C200 280, 500 520, 800 400 S1300 250, 1600 400" />
              <path d="M-100 600 C200 480, 500 720, 800 600 S1300 460, 1600 600" />
              <path d="M-100 800 C200 680, 500 900, 800 800 S1300 660, 1600 800" />
            </g>
          </svg>

          {/* ── Left: 2×2 image grid with increased gap ── */}
          <div className="relative z-10 w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-5 p-5 h-64 md:h-full">
            {menuImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative overflow-hidden rounded-sm"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ filter: "saturate(0.4) brightness(0.6)" }}
                />
              </motion.div>
            ))}
          </div>

          {/* ── Right: nav links + footer, centered ── */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between items-center px-10 md:px-16 py-10 md:py-14">
            {/* Nav links — centered */}
            <nav aria-label="Dashboard navigation" className="w-full flex flex-col items-center">
              <ul className="flex flex-col gap-1 md:gap-2 items-center w-full">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    className="w-full text-center"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07, ease: "easeOut" }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="font-display font-black leading-none tracking-tight text-balance block w-full"
                      style={{
                        fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)",
                        color: "#F1F5F9",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#5EEAD4" }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#F1F5F9" }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer row: enquiries + socials, centered */}
            <motion.div
              className="flex flex-col items-center gap-4 mt-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
            >
              <p
                className="font-display text-xs font-bold tracking-[0.2em] text-center"
                style={{ color: "#F1F5F9" }}
              >
                BUSINESS ENQUIRIES
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="font-display text-sm font-bold tracking-wider"
                    style={{ color: "#94A3B8", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#5EEAD4" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8" }}
                  >
                    {s.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Top-left name with hover-reveal pronunciation ────────────────────────────
function NameWithPronunciation({ visible }: { visible: boolean }) {
  const [isRevealed, setIsRevealed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }

  const nameStyle: React.CSSProperties = {
    color: "#F1F5F9",
    fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
  }

  return (
    <div
      className="absolute top-6 left-8 md:top-8 md:left-14 z-20"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease 0.4s",
      }}
    >
      {/* QURLARMAH — hover to reveal pronunciation */}
      <div
        className="relative flex items-center gap-3 cursor-default"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
      >
        <StaggeredText
          text="QURLARMAH"
          className="font-display font-black leading-none tracking-tight"
          style={nameStyle}
          delay={0.3}
        />

        {/* Pronunciation reveal */}
        <div
          className="flex items-center gap-2 overflow-hidden transition-all duration-500 ease-out"
          style={{
            width: isRevealed ? "200px" : "0px",
            opacity: isRevealed ? 1 : 0,
            whiteSpace: "nowrap",
          }}
        >
          <button
            onClick={handlePlayAudio}
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-teal-400/20"
            style={{ border: "1px solid #5EEAD4", color: "#5EEAD4" }}
            aria-label="Play name pronunciation"
          >
            <Volume2 size={12} />
          </button>
          <span
            className="font-mono text-[11px]"
            style={{ color: "#FFFFFF" }}
          >
            qurl&middot;arm&middot;ah [ka&apos;la:ma]
          </span>
        </div>
      </div>

      {/* MOSES */}
      <StaggeredText
        text="MOSES"
        className="font-display font-black leading-none tracking-tight"
        style={nameStyle}
        delay={0.5}
      />

      <audio ref={audioRef} preload="auto">
        <source src="/audio/qurlarmah-pronunciation.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSunnies, setShowSunnies] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isReady || !portraitRef.current) return
    gsap.fromTo(
      portraitRef.current,
      { scale: 1.06, opacity: 0, filter: "blur(12px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power3.out", delay: 0.3 }
    )
  }, [isReady])

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
    <>
      <DashboardMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <section
        ref={sectionRef}
        id="hero"
        className="relative min-h-[200vh]"
        style={{ backgroundColor: "#111112" }}
      >
        <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Decorative wavy background */}
          <WavyBackground />

          {/* Top-left: Name with pronunciation on hover */}
          <NameWithPronunciation visible={isReady} />

          {/* Top-center: Animated monogram */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20"
            style={{
              opacity: isReady ? 1 : 0,
              transition: "opacity 0.6s ease 0.8s",
            }}
          >
            <MonogramMark className="w-10 h-10 md:w-12 md:h-12" />
          </div>

          {/* Top-right: Dashboard menu button — white X, rounded-corners square */}
          <div className="absolute top-5 right-8 md:top-7 md:right-14 z-[210]">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex items-center justify-center w-11 h-11 transition-colors duration-200"
              style={{
                backgroundColor: "rgba(30,30,31,0.8)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "8px",
                backdropFilter: "blur(8px)",
                color: "#FFFFFF",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg
                    key="x"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
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
              <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{ background: "linear-gradient(to top, #111112 0%, transparent 100%)" }}
              />
            </div>
          </div>

          {/* Sunglasses easter egg */}
          {showSunnies && (
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <p className="font-mono text-6xl" style={{ color: "#5EEAD4", textShadow: "0 0 20px rgba(94,234,212,0.6)" }}>
                8-)
              </p>
            </div>
          )}

          {/* Terminal input — bottom center */}
          {isReady && (
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
              style={{ opacity: 1, transition: "opacity 0.6s ease 1.4s" }}
            >
              <TerminalInput onSunnies={() => setShowSunnies(true)} onInit={() => {}} />
            </div>
          )}

          {/* Bottom-left info card */}
          <InfoCard visible={isReady} />
        </div>
      </section>
    </>
  )
}
