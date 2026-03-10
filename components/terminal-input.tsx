"use client"

import { useEffect, useRef, useCallback } from "react"

interface TerminalInputProps {
  onSunnies: () => void
  onInit: () => void
}

export default function TerminalInput({
  onSunnies,
  onInit,
}: TerminalInputProps) {
  const bufferRef = useRef("")
  const cursorRef = useRef<HTMLSpanElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore modifier keys alone
      if (
        e.key === "Shift" ||
        e.key === "Control" ||
        e.key === "Alt" ||
        e.key === "Meta"
      )
        return

      if (e.key === "Enter") {
        const command = bufferRef.current.trim().toLowerCase()
        if (command === "init" || command === "start" || command === "hello") {
          onInit()
        }
        bufferRef.current = ""
        return
      }

      if (e.key === "Backspace") {
        bufferRef.current = bufferRef.current.slice(0, -1)
        return
      }

      if (e.key.length === 1) {
        bufferRef.current += e.key.toLowerCase()

        // Check for "sunnies" easter egg
        if (bufferRef.current.endsWith("sunnies")) {
          onSunnies()
          bufferRef.current = ""
        }
      }
    },
    [onSunnies, onInit]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="flex items-center gap-2 font-mono text-sm" style={{ color: "#94A3B8" }}>
      <span style={{ color: "#5EEAD4" }}>$</span>
      <span>type a command</span>
      <span
        ref={cursorRef}
        className="cursor-blink inline-block w-2 h-4"
        style={{ backgroundColor: "#5EEAD4" }}
      />
    </div>
  )
}
