import { ParticleCanvas } from "@/components/particle-canvas"
import { SitePortrait } from "@/components/site-portrait"
import { HeroSection } from "@/components/sections/hero-section"
import { RaceSection } from "@/components/sections/race-section"
import { MoatSection } from "@/components/sections/moat-section"
import { WinsSection } from "@/components/sections/wins-section"
import { HonestSection } from "@/components/sections/honest-section"
import { PitchSection } from "@/components/sections/pitch-section"
import { VisionSection } from "@/components/sections/vision-section"
import { ClosingSection } from "@/components/sections/closing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <div className="grain" aria-hidden="true" />
      <SitePortrait />
      
      <HeroSection />
      
      <main className="relative z-[2]">
        <RaceSection />
        <MoatSection />
        <WinsSection />
        <HonestSection />
        <PitchSection />
        <VisionSection />
        <ClosingSection />
      </main>
      
      <Footer />
    </>
  )
}
