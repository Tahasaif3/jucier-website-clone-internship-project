"use client"

import Image from "next/image"
import { BubblesCanvas } from "./bubble-canvas"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#d91645] pt-16 pb-4"
      aria-labelledby="hero-title"
    >
      {/* Headline */}
      <div className="mx-auto max-w-6xl px-4 text-center mb-8">
        <h1
          id="hero-title"
          className={cn(
            "text-pretty font-extrabold leading-[0.95] text-white",
            "text-5xl sm:text-7xl md:text-8xl lg:text-[110px]",
            "tracking-tight"
          )}
        >
          <span className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]">Pure Sips, </span>
          <span className="headline-hollow">Straight</span>
          <br className="hidden md:block" />
          <span className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] ml-50">From Nature&apos;s Can!</span>
        </h1>
      </div>

      {/* Stage */}
      <div className="relative mx-auto w-full max-w-6xl" style={{ height: '500px' }}>
        {/* Bubble Canvas */}
        <BubblesCanvas className="pointer-events-none absolute inset-0 z-[5]" />

        {/* Water splash background behind cans */}
        <Image
          src="/68918831778705f4b40a5ba1_water-splash.avif"
          alt="Water splash"
          width={1800}
          height={1000}
          className="pointer-events-none absolute left-1/2 bottom-[0%] z-[4] w-[130%] max-w-none -translate-x-1/2 opacity-90"
          priority
        />

        {/* Background white curve line */}
        <svg
          className="pointer-events-none absolute left-1/2 bottom-[12%] z-[4] w-[140%] max-w-none -translate-x-1/2 opacity-90"
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 200 C 240 120, 480 120, 720 200 S 1200 280, 1440 200" stroke="white" strokeWidth="2.5" strokeOpacity="0.9" fill="none" />
        </svg>

        {/* Floating Fruits */}
        <Image
          src="/orange.avif"
          alt="Orange slice"
          width={80}
          height={80}
          className="absolute left-[8%] top-[35%] z-[7] animate-[float-rotate_6s_ease-in-out_infinite]"
          style={{ '--rotate-start': '10deg', '--rotate-end': '15deg' } as React.CSSProperties}
          priority
        />
        <Image
          src="/berry.avif"
          alt="Berries"
          width={110}
          height={110}
          className="absolute left-[12%] bottom-[8%] z-[7] animate-[float-rotate_7s_ease-in-out_infinite]"
          style={{ '--rotate-start': '-8deg', '--rotate-end': '-12deg' } as React.CSSProperties}
        />
        <Image
          src="/watermelon.avif"
          alt="Watermelon ice cube"
          width={70}
          height={70}
          className="absolute right-[12%] bottom-[10%] z-[7] animate-[float-rotate_5.5s_ease-in-out_infinite]"
          style={{ '--rotate-start': '8deg', '--rotate-end': '12deg' } as React.CSSProperties}
        />

        {/* Cans */}
        <div className="absolute inset-x-0 z-[100] flex items-end justify-center gap-0">
          {/* Lime Can */}
          <Image
            src="/green.avif"
            alt="Lime can"
            width={240}
            height={320}
            className={cn(
              "h-auto w-[180px] sm:w-[200px] md:w-[240px]",
              "origin-bottom ",
              "animate-[can-pop_1s_cubic-bezier(0.2,0.8,0.2,1)_forwards]",
              "drop-shadow-[0_32px_48px_rgba(0,0,0,0.35)]",
              "-mr-16"
            )}
            style={{ '--can-rotate': '-18deg', '--can-y': '0px' } as React.CSSProperties}
            priority
          />

          {/* Lemon Can */}
          <Image
            src="/68bea4fdeb15d0f3681da0b6_lemon-can.avif"
            alt="Lemon can"
            width={250}
            height={330}
            className={cn(
              "h-auto w-[190px] sm:w-[210px] md:w-[250px]",
              "origin-bottom z-[11]",
              "animate-[can-sweep-right_1.1s_cubic-bezier(0.2,0.8,0.2,1)_forwards]",
              "drop-shadow-[0_36px_56px_rgba(0,0,0,0.35)]"
            )}
            style={{ '--can-rotate': '20deg', '--can-y': '0px' } as React.CSSProperties}
            priority
          />
        </div>
      </div>
    </section>
  )
}