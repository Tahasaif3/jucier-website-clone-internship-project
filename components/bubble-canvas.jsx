"use client"

import { useEffect, useRef } from "react"

export function BubblesCanvas({
  className,
  emitters = [
    { xRatio: 0.43, yRatio: 0.62 },
    { xRatio: 0.57, yRatio: 0.62 },
  ],
}) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    function resize() {
      const rect = canvas.parentElement?.getBoundingClientRect()
      const w = Math.floor((rect?.width || window.innerWidth) * dpr)
      const h = Math.floor((rect?.height || 500) * dpr)
      canvas.width = w
      canvas.height = h
      canvas.style.width = `${Math.floor(w / dpr)}px`
      canvas.style.height = `${Math.floor(h / dpr)}px`
    }
    resize()
    window.addEventListener("resize", resize)

    const bubbles = []

    function spawn() {
      const { width: w, height: h } = canvas
      emitters.forEach((e) => {
        const count = 2 + Math.floor(Math.random() * 3)
        for (let i = 0; i < count; i++) {
          const x = e.xRatio * w + (Math.random() - 0.5) * (w * 0.04)
          const y = e.yRatio * h + (Math.random() - 0.5) * (h * 0.01)
          const r = 1.5 * dpr + Math.random() * (3.5 * dpr)
          const vy = -0.8 * dpr - Math.random() * (1.2 * dpr)
          const vx = (Math.random() - 0.5) * (0.3 * dpr)
          const alpha = 0.25 + Math.random() * 0.35
          const maxLife = 120 + Math.random() * 100
          bubbles.push({ x, y, r, vy, vx, alpha, life: 0, maxLife, emitter: e })
        }
      })
    }

    function step() {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i]
        b.life++
        const drift = b.emitter.xRatio < 0.5 ? 0.15 : -0.15
        b.x += b.vx + drift * Math.sin((b.life / b.maxLife) * Math.PI) * dpr
        b.y += b.vy
        const fade = 1 - b.life / b.maxLife
        if (b.y < -20 * dpr || fade <= 0) {
          bubbles.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = `rgba(255,255,255,${0.08 + b.alpha * 0.5})`
        ctx.fill()
        ctx.strokeStyle = `rgba(255,255,255,${0.25 + b.alpha * 0.3})`
        ctx.lineWidth = 0.8 * dpr
        ctx.stroke()
      }

      if (bubbles.length < 220) spawn()
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [emitters])

  return <canvas ref={ref} className={className} aria-hidden="true" role="presentation" />
}
