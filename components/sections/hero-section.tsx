"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }
    requestAnimationFrame(() => setIsVisible(true))
  }, [])

  return (
    <header
      id="hero"
      className="relative min-h-screen min-h-dvh flex items-center justify-center p-[clamp(1.5rem,4vw,3rem)] overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 120% 80% at 50% -20%, rgba(59, 130, 246, 0.35), transparent 55%),
          linear-gradient(180deg, #060810 0%, #05060a 100%)`,
      }}
    >
      {/* Glows */}
      <div
        className="absolute z-0 rounded-full pointer-events-none opacity-25"
        style={{
          width: "min(50vw, 420px)",
          height: "min(50vw, 420px)",
          filter: "blur(80px)",
          left: "-10%",
          top: "20%",
          background: "#d4a574",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute z-0 rounded-full pointer-events-none opacity-25"
        style={{
          width: "min(50vw, 420px)",
          height: "min(50vw, 420px)",
          filter: "blur(80px)",
          right: "-10%",
          top: "25%",
          background: "#10a37f",
        }}
        aria-hidden="true"
      />

      {/* Side logos - hidden on mobile */}
      <div className="absolute inset-0 max-w-[1100px] mx-auto pointer-events-none z-[1] hidden md:block" aria-hidden="true">
        <div
          className={`absolute left-[clamp(-0.5rem,2vw,2rem)] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-0 ${isVisible ? "animate-logo-side-in-left" : ""}`}
          style={{ filter: "drop-shadow(0 0 24px rgba(0, 0, 0, 0.6))" }}
        >
          <Image
            src="/assets/anthropic.svg"
            alt=""
            width={56}
            height={56}
            className="w-12 h-12 object-contain"
          />
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wider uppercase text-[#d4a574]">
            Anthropic
          </span>
        </div>
        <div
          className={`absolute right-[clamp(-0.5rem,2vw,2rem)] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-0 ${isVisible ? "animate-logo-side-in-right" : ""}`}
          style={{ filter: "drop-shadow(0 0 24px rgba(0, 0, 0, 0.6))" }}
        >
          <Image
            src="/assets/openai.svg"
            alt=""
            width={56}
            height={56}
            className="w-12 h-12 object-contain"
          />
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wider uppercase text-[#10a37f]">
            OpenAI
          </span>
        </div>
      </div>

      {/* Large Cursor logo in background */}
      <div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none animate-mega-pulse"
        style={{ width: "min(124vw, 1280px)" }}
        aria-hidden="true"
      >
        <Image
          src="/assets/cursor-logo.svg"
          alt=""
          width={1280}
          height={312}
          className="w-full h-auto block"
          style={{
            filter: "invert(1) brightness(1.28) contrast(1.12) drop-shadow(0 0 48px rgba(96, 165, 250, 0.55)) drop-shadow(0 0 120px rgba(59, 130, 246, 0.35))",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="max-w-[920px] text-center relative z-[2]">
        <p
          className={`hero-entrance text-[clamp(0.85rem,0.8rem+0.3vw,1rem)] text-[#8b93a7] tracking-wide max-w-[36rem] mx-auto mb-5 ${isVisible ? "is-visible" : ""}`}
          style={{ 
            textShadow: "0 2px 24px rgba(5, 6, 10, 0.95)",
            animationDelay: "0.12s"
          }}
        >
          Claude Code. Codex. The foundational model giants have entered the race.
        </p>
        <h1
          className={`hero-entrance font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(2.25rem,1.4rem+3.5vw,3.75rem)] leading-[1.08] tracking-tight mb-1 text-white ${isVisible ? "is-visible" : ""}`}
          style={{ 
            textShadow: "0 2px 32px rgba(5, 6, 10, 0.92), 0 0 40px rgba(5, 6, 10, 0.65)",
            animationDelay: "0.42s"
          }}
        >
          {"It's Race Time at Cursor."}
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(105deg, #fff 0%, #60a5fa 45%, #fff 90%)",
            }}
          >
            And I Want to Compete.
          </span>
        </h1>
        <p
          className={`hero-entrance text-white/95 mt-[clamp(5.75rem,22vh,12.5rem)] mx-auto max-w-[36rem] text-[clamp(0.98rem,0.92rem+0.25vw,1.1rem)] font-medium leading-relaxed ${isVisible ? "is-visible" : ""}`}
          style={{ 
            textShadow: "0 1px 3px rgba(5, 6, 10, 0.9), 0 2px 28px rgba(5, 6, 10, 0.75)",
            animationDelay: "0.72s"
          }}
        >
          {"A scrollable pitch on why I want to join Cursor's sales team — and how I believe Cursor can win the IDE race."}
        </p>
        <p
          className={`hero-entrance mt-4 text-sm text-[#8b93a7] tracking-wide ${isVisible ? "is-visible" : ""}`}
          style={{ 
            textShadow: "0 2px 20px rgba(5, 6, 10, 0.95)",
            animationDelay: "0.95s"
          }}
        >
          <span className="font-semibold text-[#e8ebf4]">Charles (Charlie) Goldstein</span>
          <span className="mx-1.5 opacity-45" aria-hidden="true">·</span>
          San Francisco
        </p>
      </div>
    </header>
  )
}
