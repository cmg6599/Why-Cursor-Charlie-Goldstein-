"use client"

import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const pitchPoints = [
  "You don't switch for models — you switch for outcomes.",
  "Cursor replaces the entire fragmented tool loop.",
  "Own workflow plus team adoption — that's how you win the narrative, not \"we shipped first.\"",
  "Once they're back with repo context + memory + personalization — they stick.",
]

export function PitchSection() {
  const listRef = useRef<HTMLUListElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (prefersReducedMotion) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    )

    if (listRef.current) {
      observer.observe(listRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="back"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            {"How I'd Pitch a Developer to Come Back"}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            className="my-8 p-[clamp(1.35rem,3vw,1.85rem)] rounded-3xl border border-white/[0.08] max-w-[36rem]"
            style={{
              background: "linear-gradient(165deg, rgba(22, 26, 38, 0.95), #11141d)",
            }}
          >
            <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[0.82rem] tracking-[0.14em] uppercase text-[#8b93a7] mb-4">
              Reframe convo from:
            </p>
            <p
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.1rem,1rem+0.45vw,1.35rem)] leading-snug text-[#8b93a7] line-through mb-2.5"
              style={{ textDecorationColor: "rgba(248, 113, 113, 0.45)" }}
            >
              {"\"Which model is better\""}
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[clamp(1rem,0.92rem+0.35vw,1.15rem)] leading-snug tracking-wide text-[#8b93a7] mb-2.5">
              <span className="mr-1.5 text-[#60a5fa] font-bold" aria-hidden="true">→</span>
              to
            </p>
            <p
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.1rem,1rem+0.45vw,1.35rem)] leading-snug text-[#60a5fa]"
              style={{ textShadow: "0 0 40px rgba(59, 130, 246, 0.25)" }}
            >
              {"\"Which tool makes you ship faster?\""}
            </p>
          </div>
        </RevealOnScroll>

        <ul
          ref={listRef}
          className={`pitch-points list-none p-0 max-w-[48ch] ${isInView ? "is-inview" : ""}`}
        >
          {pitchPoints.map((point, i) => (
            <li
              key={i}
              className="py-3.5 pl-5 border-l-2 border-l-[#3b82f6] mb-2 text-[#8b93a7]"
              style={{ animationDelay: `${0.2 + i * 0.25}s` }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
