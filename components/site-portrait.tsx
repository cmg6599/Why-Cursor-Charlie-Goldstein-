"use client"

import Image from "next/image"

export function SitePortrait() {
  return (
    <a
      className="fixed z-10 rounded-full p-0.5 opacity-0 scale-[0.88] animate-portrait-in transition-transform duration-200 hover:scale-105"
      href="#closing"
      aria-label="Charles (Charlie) Goldstein — jump to closing"
      style={{
        top: "clamp(0.65rem, 2vw, 1.1rem)",
        right: "clamp(0.65rem, 2vw, 1.1rem)",
        width: "clamp(52px, 11vw, 84px)",
        height: "clamp(52px, 11vw, 84px)",
        background: "linear-gradient(140deg, #60a5fa, rgba(255, 255, 255, 0.22), #3b82f6)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.55), 0 0 48px -12px rgba(59, 130, 246, 0.45)",
      }}
    >
      <Image
        src="/assets/headshot.png"
        alt="Headshot of Charles (Charlie) Goldstein"
        width={176}
        height={176}
        className="w-full h-full object-cover rounded-full block bg-[#11141d]"
        style={{ objectPosition: "center 18%" }}
        priority
      />
    </a>
  )
}
