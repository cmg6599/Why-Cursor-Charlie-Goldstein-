"use client"

import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function ClosingSection() {
  return (
    <section
      id="closing"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08] relative"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            Why I Want to Join the Race
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap items-center gap-[clamp(0.65rem,2vw,1.1rem)] gap-x-[clamp(1rem,3vw,1.5rem)] mb-9 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center shrink-0" aria-hidden="true">
              <div
                className="w-[clamp(52px,11vw,72px)] h-[clamp(52px,11vw,72px)] rounded-full overflow-hidden border-[3px] border-[rgba(96,165,250,0.85)]"
                style={{ boxShadow: "0 0 28px rgba(59, 130, 246, 0.35)" }}
              >
                <Image
                  src="/assets/headshot.png"
                  alt=""
                  width={72}
                  height={72}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="w-[clamp(2.5rem,6vw,4rem)] h-[3px] bg-gradient-to-r from-[#60a5fa] to-transparent" />
              <span className="text-[clamp(1.5rem,3vw,2rem)] leading-none">🏃</span>
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-[clamp(1.15rem,1rem+0.5vw,1.4rem)] text-[#8b93a7] font-medium">
              and run with <strong className="text-white">Cursor</strong>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="max-w-[56ch] space-y-5 text-[clamp(1rem,0.95rem+0.2vw,1.1rem)] text-[#8b93a7] leading-relaxed">
            <p>
              {"I'm"} <strong className="text-[#e8ebf4]">Charles (Charlie) Goldstein</strong>. I was born and raised in the Bay Area — tech is in my blood. When I graduated college, I made it my priority to join a strong company selling the best product in the market — and in 2021, that was AWS, and still is AWS when it comes to cloud infrastructure. It was the pinnacle of enterprise tech sales, and it taught me how to sell complex, high-value solutions to sophisticated buyers at the highest level.
            </p>
            <p>
              {"Nearly five years later, I'm asking myself the same question — where is the best product, and who are the smartest people building it? I see myself wanting to be closer to the nucleus of AI, and there are signals pointing to Cursor. I've watched people I respect — former colleagues, people I admire — making the move here. I follow talent. I follow smart people and leaders."}
            </p>
            <p>
              {"For me, this isn't just a career move — it's the same bet I made in 2021. Find the best product in the market, surround yourself with the best people, and go sell something you genuinely believe in. That's how I feel about Cursor right now."}
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[clamp(1.05rem,1rem+0.25vw,1.2rem)] text-white">
              {"I don't just want to sell Cursor. I want to"} <strong className="text-[#60a5fa]">help win the race.</strong>
            </p>
            <p className="pt-2">
              <a
                href="https://www.linkedin.com/in/charles-goldstein/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 py-3 px-5 rounded-xl border border-[rgba(59,130,246,0.35)] bg-[#11141d] text-[#60a5fa] font-semibold text-[0.95rem] transition-all duration-200 hover:bg-[rgba(59,130,246,0.1)] hover:border-[#60a5fa] hover:-translate-y-0.5 hover:shadow-lg"
                style={{ boxShadow: "0 0 20px -8px rgba(59, 130, 246, 0.3)" }}
              >
                <span
                  className="flex items-center justify-center w-6 h-6 rounded bg-[#0A66C2] text-white text-xs font-bold"
                  aria-hidden="true"
                >
                  in
                </span>
                View my full background on LinkedIn
              </a>
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Finish line */}
      <div className="relative h-12 mt-16 overflow-hidden" aria-hidden="true">
        <div className="checkered absolute inset-0 animate-checkered" />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#60a5fa] to-transparent rounded-full animate-shooting-star"
          style={{ filter: "blur(1px)" }}
        />
      </div>
    </section>
  )
}
