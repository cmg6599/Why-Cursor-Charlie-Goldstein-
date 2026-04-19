"use client"

import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function VisionSection() {
  return (
    <section
      id="vision"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            {"Cursor Isn't a Tool. It's Your AI Coding OS."}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-4 my-8 max-sm:grid-cols-1">
            <div
              className="rounded-3xl p-[clamp(1.5rem,4vw,2.25rem)] border border-white/[0.08] min-h-[180px] flex flex-col items-center justify-center gap-4 relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #12151c, #11141d)",
              }}
            >
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[0.85rem] tracking-[0.12em] uppercase text-[#8b93a7]">
                A Tool
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#8b93a7]">
                Claude / Codex
              </span>
            </div>
            <div
              className="rounded-3xl p-[clamp(1.5rem,4vw,2.25rem)] border border-[rgba(59,130,246,0.35)] min-h-[180px] flex flex-col items-center justify-center gap-4 relative overflow-hidden"
              style={{
                background: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.25), transparent 50%), #161a26`,
                boxShadow: "0 0 60px -20px rgba(59, 130, 246, 0.45)",
              }}
            >
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[0.85rem] tracking-[0.12em] uppercase text-[#8b93a7]">
                The Environment
              </span>
              <div className="w-full max-w-[min(280px,88vw)] mx-auto">
                <Image
                  src="/assets/cursor-logo.svg"
                  alt="Cursor"
                  width={600}
                  height={146}
                  className="w-full h-auto block"
                  style={{
                    filter: "invert(1) brightness(1.1) contrast(1.05) drop-shadow(0 0 28px rgba(96, 165, 250, 0.45))",
                  }}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[clamp(1.1rem,1rem+0.4vw,1.35rem)] leading-snug text-white max-w-[48ch]">
            {"The opportunity isn't to compete on intelligence. It's to become the default place developers do their best work."}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="font-[family-name:var(--font-space-grotesk)] font-medium text-[clamp(1.02rem,0.96rem+0.35vw,1.2rem)] leading-normal text-white/90 max-w-[52ch] mt-4">
            And ultimately, to become what developers think of as the gold standard for an AI-powered editor.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
