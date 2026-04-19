"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  tw: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let w = 0
    let h = 0
    let stars: Star[] = []
    let raf = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas!.width = Math.floor(w * dpr)
      canvas!.height = Math.floor(h * dpr)
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor((w * h) / 15000)
      stars = Array.from({ length: Math.max(36, Math.min(count, 100)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * Math.PI * 2,
      }))
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h)

      for (const s of stars) {
        s.x += s.vx
        s.y += s.vy
        s.tw += 0.015 + s.z * 0.02

        if (s.x < -10) s.x = w + 10
        if (s.x > w + 10) s.x = -10
        if (s.y < -10) s.y = h + 10
        if (s.y > h + 10) s.y = -10

        const alpha = 0.15 + s.z * 0.55 + Math.sin(s.tw) * 0.12
        const r = 0.6 + s.z * 1.4
        ctx!.beginPath()
        ctx!.fillStyle = `rgba(200, 220, 255, ${Math.max(0.08, Math.min(0.95, alpha))})`
        ctx!.arc(s.x, s.y, r, 0, Math.PI * 2)
        ctx!.fill()
      }

      const linkDist = 80 + w * 0.035
      const cap = Math.min(stars.length, 48)
      for (let i = 0; i < cap; i++) {
        for (let j = i + 1; j < cap; j++) {
          const a = stars[i]
          const b = stars[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            const t = 1 - d / linkDist
            ctx!.strokeStyle = `rgba(59, 130, 246, ${0.045 * t})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    function startLoop() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    if (prefersReducedMotion) {
      resize()
      ctx.fillStyle = "rgba(59, 130, 246, 0.08)"
      for (let i = 0; i < 30; i++) {
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h, 1, 0, Math.PI * 2)
        ctx.fill()
      }
      return
    }

    resize()
    startLoop()

    const handleResize = () => {
      cancelAnimationFrame(raf)
      resize()
      startLoop()
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-85"
      aria-hidden="true"
    />
  )
}
