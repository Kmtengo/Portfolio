"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StaggeredText from "./staggered-text"
import TerminalInput from "./terminal-input"

gsap.registerPlugin(ScrollTrigger)

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

  // Avatar reveal animation — GSAP displacement-style reveal
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
        duration: 1.5,
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
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #014D4E 0%, #111112 70%)",
      }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row md:px-12">
          {/* Left: Text Content — 55% */}
          <div className="flex flex-1 flex-col justify-center gap-4 md:max-w-[55%]">
            {isReady && (
              <>
                <StaggeredText
                  text="Lead Frontend"
                  as="h1"
                  className="font-display text-5xl leading-[0.9] font-bold md:text-7xl lg:text-8xl"
                  style={{ color: "#F1F5F9" }}
                  delay={0.2}
                />
                <StaggeredText
                  text="Architect"
                  as="h1"
                  className="font-display text-5xl leading-[0.9] font-bold md:text-7xl lg:text-8xl"
                  style={{ color: "#5EEAD4" }}
                  delay={0.5}
                />

                <p
                  className="mt-6 max-w-lg font-sans text-lg leading-relaxed opacity-0 md:text-xl"
                  style={{
                    color: "#94A3B8",
                    animation: "fadeIn 0.8s ease-out 1s forwards",
                  }}
                >
                  Engineering scalable UI systems since 2019. React,
                  TypeScript, and high-performance web experiences.
                </p>

                <div className="mt-6">
                  <TerminalInput
                    onSunnies={handleSunnies}
                    onInit={handleInit}
                  />
                </div>
              </>
            )}
          </div>

          {/* Right: Avatar / Portrait Area — 45% */}
          <div className="relative flex flex-1 items-center justify-center md:max-w-[45%]">
            {showAvatar ? (
              <div
                ref={avatarContainerRef}
                className="relative aspect-[4/5] w-64 overflow-hidden rounded-2xl md:w-80 lg:w-96"
                style={{
                  backgroundColor: "#1E1E1F",
                  border: "1px solid rgba(0, 128, 128, 0.3)",
                  boxShadow: "0 0 80px rgba(94, 234, 212, 0.1)",
                }}
              >
                {/* Avatar placeholder — replace with actual portrait image */}
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    className="flex h-32 w-32 items-center justify-center rounded-full font-display text-4xl font-bold md:h-40 md:w-40 md:text-5xl"
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
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      style={{
                        animation: "fadeIn 0.5s ease-out forwards",
                      }}
                    >
                      <span
                        className="font-mono text-4xl"
                        style={{ color: "#5EEAD4" }}
                      >
                        8-)
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Pre-reveal: Subtle pulsing dot */
              <div className="flex aspect-[4/5] w-64 items-center justify-center md:w-80 lg:w-96">
                <div
                  className="h-3 w-3 animate-pulse rounded-full"
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
