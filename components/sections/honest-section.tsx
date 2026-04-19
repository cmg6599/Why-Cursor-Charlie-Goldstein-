"use client"

import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const honestItems = [
  "Price — free tools like Codex",
  "Model curiosity — Claude feels smart in moments",
  "Hype cycles and novelty",
]

export function HonestSection() {
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
      id="honest"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            {"Let's Be Honest"}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-[clamp(1.05rem,1rem+0.2vw,1.15rem)] text-[#e8ebf4] max-w-[48ch] mb-5 leading-relaxed font-medium">
            So why do developers leave Cursor — or drift to experiments elsewhere — even when the product is clearly strong?
          </p>
        </RevealOnScroll>

        <ul
          ref={listRef}
          className={`honest-list list-none p-0 mb-2 max-w-[36ch] ${isInView ? "is-inview" : ""}`}
        >
          {honestItems.map((item, i) => (
            <li
              key={i}
              className="relative py-2.5 pl-6 border-b border-white/[0.08] text-[#8b93a7]"
              style={{ animationDelay: `${0.08 + i * 0.14}s` }}
            >
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3b82f6]"
                style={{ boxShadow: "0 0 12px rgba(59, 130, 246, 0.45)" }}
              />
              {item}
            </li>
          ))}
        </ul>

        <RevealOnScroll>
          <p className="text-[#60a5fa] font-medium mt-6">
            {"That's okay. Here's how we bring them back."}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
