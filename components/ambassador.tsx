"use client"

import React from "react"

type Ambassador = {
  role: string
  name: string
  img: string
  tint: string
}

const AMBASSADORS: Ambassador[] = [
  {
    role: "President",
    name: "Armento Jordon",
    img: "/amb1.avif",
    tint: "color-mix(in oklab, var(--color-warning), white 86%)",
  },
  {
    role: "Founder",
    name: "Georgia Belly",
    img: "/amb2.png",
    tint: "color-mix(in oklab, var(--color-secondary), white 88%)",
  },
  {
    role: "Co-Founder",
    name: "Cyanic Fredom",
    img: "/amb3.png",
    tint: "color-mix(in oklab, var(--color-p), white 88%)",
  },
]

export default function AmbassadorsSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      // Calculate how much of the section has scrolled into view
      const start = vh * 0.3 // start animating when 30% of viewport hits
      const end = rect.height * 0.6 // finish when ~60% scrolled through
      const scrolled = Math.min(Math.max(vh - rect.top - start, 0), end)
      const p = scrolled / end
      setProgress(Number.isFinite(p) ? Math.max(0, Math.min(1, p)) : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const targets = [
    { rot: -12, y: 30, scale: 0.95 },
    { rot: 0, y: 20, scale: 1 },
    { rot: 12, y: 30, scale: 0.95 },
  ]

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ambassadors-title"
      className="relative py-16 md:py-24 overflow-hidden bg-orange-50"
      style={{
        background: "",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="ambassadors-title"
          className="text-balance text-center text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Our ambassadors
        </h2>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          {AMBASSADORS.map((a, i) => {
            const t = targets[i]
            const rot = t.rot * (1 - progress)
            const y = t.y * (1 - progress)
            const sc = t.scale + (1 - t.scale) * progress
            const opacity = 0.4 + 0.6 * progress

            return (
              <article
                key={a.name}
                className="rounded-[28px] p-4 md:p-5 shadow-lg transition-transform duration-300 ease-linear"
                style={{
                  background: a.tint,
                  transform: `translateY(${y}px) rotate(${rot}deg) scale(${sc})`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <div className="rounded-3xl overflow-hidden bg-background shadow-sm p-3 md:p-4">
                  <img
                    src={a.img || "/placeholder.svg"}
                    alt={`${a.name} portrait`}
                    className="w-full h-auto rounded-2xl object-cover"
                    crossOrigin="anonymous"
                  />
                </div>

                <div className="text-center px-4 md:px-6 py-6">
                  <p className="text-sm md:text-base text-muted-foreground">{a.role}</p>
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mt-1">{a.name}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          section :global(article) {
            transform: none !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}
