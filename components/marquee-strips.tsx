"use client"

import type React from "react"

type MarqueeItem = {
  icon: React.ReactNode
  label: string
}

interface MarqueeStripProps {
  items: MarqueeItem[]
  durationSec?: number
}

export default function MarqueeStrip({ items, durationSec = 28 }: MarqueeStripProps) {
  return (
    <section aria-label="Product highlights" className="relative w-full">
      <div
        className="overflow-hidden border-t border-b"
        style={{
          background: "var(--color-destructive)",
          color: "var(--color-primary-foreground)",
          borderColor: "color-mix(in oklab, var(--color-destructive), black 12%)",
        }}
      >
        {/* Wrapper with mask for fade edges */}
        <div
          className="relative flex"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          {/* Marquee content */}
          <div
            className="flex items-center gap-20 md:gap-28 py-5 md:py-6 animate-marquee"
            style={{
              ["--duration" as any]: `${durationSec}s`,
            } as React.CSSProperties}
          >
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 md:gap-4 flex-shrink-0 whitespace-nowrap"
              >
                <div className="flex items-center justify-center bg-white/10 rounded-full p-2">
                  {item.icon}
                </div>
                <span className="text-base md:text-lg font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee var(--duration) linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
