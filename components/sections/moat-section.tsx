"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

const floatCards = [
  { title: "Real coding behavior data", delay: "0s" },
  { title: "Iteration loops", delay: "0.15s" },
  { title: "Debugging patterns", delay: "0.3s" },
  { title: "Repo-level context", delay: "0.45s" },
]

export function MoatSection() {
  return (
    <section
      id="moat"
      className="py-[clamp(4rem,10vw,7rem)] px-[clamp(1.25rem,4vw,2rem)] border-t border-white/[0.08]"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03))",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] tracking-tight mb-6 text-white">
            {"Cursor's Moat — The Data Advantage"}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-[clamp(1.05rem,1rem+0.25vw,1.15rem)] text-[#8b93a7] max-w-[60ch] mb-7 leading-relaxed">
            This is the most important differentiator. Cursor sits on a goldmine of proprietary usage data that cannot be replicated:
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-4 gap-4 mb-10 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {floatCards.map((card, i) => (
              <article
                key={i}
                className="bg-[#11141d] border border-white/[0.08] rounded-2xl py-5 px-4 text-center animate-float-y"
                style={{ animationDelay: card.delay }}
              >
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-[0.95rem] font-semibold text-[#e8ebf4] leading-snug">
                  {card.title}
                </h3>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(1.5rem,1.1rem+1.8vw,2.35rem)] leading-tight text-center tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #fff, #60a5fa)",
            }}
          >
            {"Models can be commoditized. Workflow data can't."}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-11 p-[clamp(1.25rem,3vw,1.75rem)] rounded-3xl border border-[rgba(59,130,246,0.22)] bg-[rgba(17,20,29,0.65)]">
            <p className="font-[family-name:var(--font-space-grotesk)] text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#8b93a7] mb-4">
              How to talk about it
            </p>
            <p className="text-[clamp(1rem,0.95rem+0.2vw,1.1rem)] leading-normal text-[#8b93a7] mb-3">
              <span className="inline-block mr-2 py-0.5 px-2 rounded text-[0.68rem] font-bold tracking-wider uppercase align-middle bg-red-500/10 text-red-400">
                Avoid
              </span>
              {"\"Cursor is better because it was first.\""}
            </p>
            <p className="text-[clamp(1rem,0.95rem+0.2vw,1.1rem)] leading-normal text-[#e8ebf4]">
              <span className="inline-block mr-2 py-0.5 px-2 rounded text-[0.68rem] font-bold tracking-wider uppercase align-middle bg-[rgba(59,130,246,0.15)] text-[#60a5fa]">
                Instead
              </span>
              Cursor wins if it owns workflow and team adoption.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
