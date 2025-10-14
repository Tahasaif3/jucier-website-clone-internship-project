"use client"

import * as React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

type Img = { src: string; alt: string }

interface GallerySplitScrollProps {
  images: Img[]
  className?: string
  itemWidth?: number
  itemHeight?: number
  spread?: number
  fitToEdges?: boolean
  edgePadding?: number
}

function Tile({
  img,
  scrollYProgress,
  itemWidth,
  itemHeight,
  offsetX,
  offsetY,
  rotateDeg,
  clusterScale,
}: {
  img: Img
  scrollYProgress: MotionValue<number>
  itemWidth: number
  itemHeight: number
  offsetX: number
  offsetY: number
  rotateDeg: number
  clusterScale: MotionValue<number>
}) {
  const prefersReduced = useReducedMotion()

  const xMv = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, offsetX])
  const yMv = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, offsetY])
  const rMv = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, rotateDeg])

  const x = useSpring(xMv, { stiffness: 120, damping: 20 })
  const y = useSpring(yMv, { stiffness: 120, damping: 20 })
  const rotate = useSpring(rMv, { stiffness: 120, damping: 20 })

  return (
    <motion.figure
      className="absolute rounded-2xl overflow-hidden shadow-lg ring-1 ring-foreground/10"
      style={{
        width: itemWidth,
        height: itemHeight,
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        x,
        y,
        rotate,
        scale: clusterScale,
      }}
    >
      <motion.img
        src={img.src || "/placeholder.svg"}
        alt={img.alt}
        draggable={false}
        className="h-full w-full object-cover transition-all duration-500 ease-in-out"
        whileHover={{
          filter: "blur(6px)",
          scale: 1.05,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      />
    </motion.figure>
  )
}

export function GallerySplitScroll({
  images,
  className,
  itemWidth = 380,
  itemHeight = 260,
  spread = 220,
  fitToEdges = true,
  edgePadding = 10,
}: GallerySplitScrollProps) {
  const tiles = React.useMemo<Img[]>(
    () => Array.from({ length: 4 }, (_v, i) => images[i % images.length]),
    [images]
  )

  const sectionRef = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const clusterScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1]), {
    stiffness: 120,
    damping: 20,
  })

  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const [{ w, h }, setSize] = React.useState({ w: 0, h: 0 })

  React.useEffect(() => {
    if (!wrapperRef.current) return
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect
      if (cr) setSize({ w: cr.width, h: cr.height })
    })
    ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [])

  const maxX = Math.max(0, w / 2 - itemWidth / 2 - edgePadding)
  const maxY = Math.max(0, h / 2 - itemHeight / 2 - edgePadding)

  const finalX = fitToEdges && maxX > 0 ? maxX : spread
  const finalY = fitToEdges && maxY > 0 ? maxY : spread

  const directions = [
    { x: -finalX, y: -finalY, rotate: -6 },
    { x: finalX, y: -finalY, rotate: 6 },
    { x: -finalX, y: finalY, rotate: 6 },
    { x: finalX, y: finalY, rotate: -6 },
  ]

  return (
<section
  ref={sectionRef}
  className={cn(
    "relative w-full bg-transparent",
    // smaller scroll section on mobile
    "h-[130vh] sm:h-[160vh] md:h-[180vh] lg:h-[200vh]",
    className
  )}
  aria-label="Gallery Split Scroll Animation"
>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div ref={wrapperRef} className="relative w-screen h-screen">
          {tiles.map((img, i) => (
            <Tile
              key={`${img.src}-${i}`}
              img={img}
              scrollYProgress={scrollYProgress}
              itemWidth={itemWidth}
              itemHeight={itemHeight}
              offsetX={directions[i].x}
              offsetY={directions[i].y}
              rotateDeg={directions[i].rotate}
              clusterScale={clusterScale}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance text-black dark:text-white">
              The crispness of freshness
            </h2>
            <button className="mt-4 inline-flex items-center rounded-full border text-black border-black/10 px-5 py-2 text-sm hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10 transition-colors">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
