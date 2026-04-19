"use client"

import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const winCards = [
  { title: "Own the Workflow", description: "Be where devs write, edit, debug, and ship." },
  { title: "Proprietary Data", description: "Irreplaceable real usage insights." },
  { title: "Speed + UX", description: "Developers are ruthless. Win on flow state." },
  { title: "Enterprise Layer", description: "Security, collaboration, scale. This is where sales wins." },
]

export function WinsSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
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
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
    )

    if (wrapRef.current) {
      observer.observe(wrapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="wins"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            {"This Isn't Cursor vs Claude vs Codex"}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.2rem,1rem+1vw,1.65rem)] leading-snug text-white max-w-[42ch] mb-10">
            {"It's who becomes the default AI coding environment for developers and teams."}
          </p>
        </RevealOnScroll>

        <div ref={wrapRef} className="grid gap-4 md:grid-cols-2">
          {winCards.map((card, i) => (
            <article
              key={i}
              className="win-card bg-gradient-to-br from-[#161a26] to-[#11141d] border border-white/[0.08] rounded-2xl py-5 px-6 border-l-[3px] border-l-[#3b82f6]"
              style={{
                transitionDelay: isInView ? `${120 + i * 165}ms` : "0ms",
              }}
            >
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-[1.1rem] mb-1 text-[#60a5fa]">
                {card.title}
              </h3>
              <p className="text-[#8b93a7] text-[0.95rem]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
