"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StaggeredText from "./staggered-text"
import TerminalInput from "./terminal-input"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const avatarContainerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)
  const [showSunnies, setShowSunnies] = useState(false)

  // Wait for preloader to finish (~3s)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3200)
    return () => clearTimeout(timer)
  }, [])

  // GSAP ScrollTrigger for hero exit animation
  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyRef.current, {
        yPercent: -20,
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

  // Avatar reveal animation
  useEffect(() => {
    if (!showAvatar || !avatarContainerRef.current) return

    gsap.fromTo(
      avatarContainerRef.current,
      {
        scale: 0.8,
        opacity: 0,
        filter: "blur(20px) brightness(2)",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        duration: 1.2,
        ease: "power3.out",
      }
    )
  }, [showAvatar])

  const handleSunnies = useCallback(() => {
    setShowSunnies(true)
  }, [])

  const handleInit = useCallback(() => {
    setShowAvatar(true)
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
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
            {isReady && (
              <>
                <StaggeredText
                  text="Lead Frontend"
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none"
                  style={{ color: "#F1F5F9" } as React.CSSProperties}
                  delay={0.2}
                />
                <StaggeredText
                  text="Architect"
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none"
                  style={{ color: "#5EEAD4" } as React.CSSProperties}
                  delay={0.5}
                />

                <div className="mt-4 overflow-hidden">
                  <p
                    className="font-sans text-lg md:text-xl leading-relaxed max-w-lg animate-fadeIn"
                    style={{
                      color: "#94A3B8",
                      animationDelay: "1s",
                      animationFillMode: "both",
                    }}
                  >
                    Engineering scalable UI systems since 2019. React,
                    TypeScript, and high-performance web experiences.
                  </p>
                </div>

                <div className="mt-6">
                  <TerminalInput
                    onSunnies={handleSunnies}
                    onInit={handleInit}
                  />
                </div>
              </>
            )}
          </div>

          {/* Right: Avatar / Portrait Area */}
          <div className="flex-1 flex items-center justify-center relative">
            {showAvatar ? (
              <div
                ref={avatarContainerRef}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#1E1E1F",
                  border: "1px solid #2D2D2E",
                }}
              >
                {/* Avatar placeholder - replace with actual avatar image */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center font-display text-4xl md:text-5xl font-bold"
                    style={{
                      backgroundColor: "#014D4E",
                      color: "#5EEAD4",
                      boxShadow:
                        "0 0 40px rgba(94, 234, 212, 0.3), 0 0 80px rgba(94, 234, 212, 0.1)",
                    }}
                  >
                    QM
                  </div>

                  {/* Sunnies overlay */}
                  {showSunnies && (
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{
                        animation: "fadeIn 0.5s ease-out forwards",
                      }}
                    >
                      <div
                        className="font-mono text-4xl"
                        style={{ color: "#5EEAD4" }}
                      >
                        {/* Sunglasses emoji as placeholder - replace with actual glasses overlay */}
                        8-)
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Pre-reveal: Subtle geometric placeholder */
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#5EEAD4" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
