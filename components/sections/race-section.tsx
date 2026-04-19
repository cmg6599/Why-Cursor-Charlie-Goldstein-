"use client"

import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function RaceSection() {
  return (
    <section
      id="race"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            The Giants Are Running
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[clamp(1rem,3vw,2rem)] mb-10 max-sm:grid-cols-1 max-sm:justify-items-center">
            <div
              className="bg-gradient-to-br from-[#11141d] to-[#161a26] border border-white/[0.08] rounded-3xl p-[clamp(1.25rem,3vw,2rem)] flex justify-center animate-card-pulse"
              style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.02) inset" }}
            >
              <div className="flex flex-col items-center gap-1.5">
                <Image
                  src="/assets/anthropic.svg"
                  alt=""
                  width={72}
                  height={72}
                  className="w-[clamp(56px,14vw,76px)] h-[clamp(56px,14vw,76px)] object-contain"
                />
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wider uppercase text-[#d4a574]">
                  Claude Code
                </span>
              </div>
            </div>

            <div className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.25rem,1rem+1vw,1.75rem)] text-[#60a5fa] max-sm:order-first" style={{ textShadow: "0 0 32px rgba(59, 130, 246, 0.45)" }}>
              VS
            </div>

            <div
              className="bg-gradient-to-br from-[#11141d] to-[#161a26] border border-white/[0.08] rounded-3xl p-[clamp(1.25rem,3vw,2rem)] flex justify-center animate-card-pulse"
              style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.02) inset", animationDelay: "0.4s" }}
            >
              <div className="flex flex-col items-center gap-1.5">
                <Image
                  src="/assets/openai.svg"
                  alt=""
                  width={72}
                  height={72}
                  className="w-[clamp(56px,14vw,76px)] h-[clamp(56px,14vw,76px)] object-contain"
                />
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wider uppercase text-[#10a37f]">
                  Codex
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-[clamp(1.05rem,1rem+0.25vw,1.2rem)] text-[#8b93a7] max-w-[58ch] mx-auto mb-5">
            <strong className="text-[#e8ebf4]">Claude Code and Codex</strong> — foundational model giants — have entered the space. {"They've realized how lucrative the developer tools market is, and now they're joining the race."}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-[clamp(1.05rem,1rem+0.25vw,1.2rem)] text-[#8b93a7] max-w-[58ch] mx-auto mb-10">
            {"Codex is cheap. Claude Code can feel smarter in certain moments."} <strong className="text-[#e8ebf4]">But Cursor owns the workflow.</strong> {"Cursor leads on speed, accuracy, and flow state — the things that decide what developers actually keep in their daily loop."}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            className="text-center p-[clamp(2rem,5vw,3rem)] rounded-3xl border border-[rgba(59,130,246,0.25)]"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.2), transparent 60%), #11141d`,
            }}
          >
            <div className="mx-auto mb-5 max-w-[min(100%,520px)]">
              <Image
                src="/assets/cursor-logo.svg"
                alt="Cursor"
                width={600}
                height={146}
                className="w-full h-auto block animate-cursor-glow"
              />
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.25rem,1.05rem+0.9vw,1.65rem)] mb-4 text-white leading-snug">
              Cursor was <strong className="text-[#60a5fa]">first</strong> — and that compounds.
            </p>
            <p className="mx-auto max-w-[52ch] text-[clamp(0.98rem,0.92rem+0.2vw,1.08rem)] text-[#8b93a7] leading-relaxed">
              {"Early customer adoption and loyalty mean deeper usage, clearer feedback loops, and a sharper sense of what teams want next. First isn't a trophy line in a deck — it's distribution, trust, and the hard-to-copy intuition you only get when you've been in the workflow the longest."}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
