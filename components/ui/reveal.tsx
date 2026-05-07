"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import type { CSSProperties, ReactNode } from "react"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  threshold?: number
  as?: keyof JSX.IntrinsicElements
}

const TRANSLATE: Record<RevealDirection, string> = {
  up:    "translateY(24px)",
  down:  "translateY(-24px)",
  left:  "translateX(24px)",
  right: "translateX(-24px)",
  none:  "none",
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold,
  as: Tag = "div",
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : TRANSLATE[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  }

  return (
    // @ts-expect-error — dynamic tag with forwarded ref is typed loosely
    <Tag ref={ref} data-reveal className={cn(className)} style={style}>
      {children}
    </Tag>
  )
}
