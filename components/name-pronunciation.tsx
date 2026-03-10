"use client"

import { useState, useRef } from "react"
import { Volume2 } from "lucide-react"

export default function NamePronunciation() {
  const [isRevealed, setIsRevealed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {
        // Audio play failed - likely no user gesture yet or file missing
      })
    }
  }

  return (
    <div
      className="fixed top-6 left-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      {/* Pronunciation guide - revealed on hover */}
      <div
        className="flex items-center gap-2 overflow-hidden transition-all duration-500 ease-out"
        style={{
          width: isRevealed ? "220px" : "0px",
          opacity: isRevealed ? 1 : 0,
        }}
      >
        <button
          onClick={handlePlayAudio}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-accent/20"
          style={{
            border: "1px solid #5EEAD4",
            color: "#5EEAD4",
          }}
          aria-label="Play name pronunciation"
        >
          <Volume2 size={14} />
        </button>
        <span
          className="font-mono text-xs whitespace-nowrap"
          style={{ color: "#94A3B8" }}
        >
          qurl&middot;arm&middot;ah [ka&apos;la:ma]
        </span>
      </div>

      {/* Name text */}
      <span
        className="font-display text-sm font-medium tracking-wide cursor-default whitespace-nowrap"
        style={{ color: "#F1F5F9" }}
      >
        Qurlarmah Moses
      </span>

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="/audio/qurlarmah-pronunciation.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
