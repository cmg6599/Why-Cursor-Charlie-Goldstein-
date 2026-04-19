"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function RevealOnScroll({ children, className = "", as: Tag = "div" }: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null)
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
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const Component = Tag as React.ElementType

  return (
    <Component
      ref={ref}
      className={`${className} ${isInView ? "is-inview" : ""}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </Component>
  )
}
