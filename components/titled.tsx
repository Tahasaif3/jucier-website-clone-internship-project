"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type GalleryImage = { src: string; alt: string }

export default function TiltedGallery({ images }: { images: GalleryImage[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        } else {
          // Reset animation when leaving view
          setInView(false)
        }
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  // ✅ Balanced positions for desktop
  const desktopLefts = [10, 28, 46, 64, 82]
  const desktopRotations = [-8, -3, 2, 4, -5]

  // ✅ Simplified positions for mobile
  const mobileLefts = [15, 40, 65]
  const mobileRotations = [-5, 0, 5]

  return (
    <section ref={ref} className="relative flex flex-col items-center overflow-hidden px-2 sm:px-4">
      <div className="relative h-[220px] sm:h-[270px] md:h-[340px] w-full max-w-6xl mx-auto">
        {/* Background strip */}
        <div
          className="absolute inset-0 -z-10 rounded-[1.5rem] sm:rounded-[2rem]"
          style={{ backgroundColor: "#F6F2E9" }}
        />

        {/* Images */}
        <div className="relative h-full w-full">
          {images.map((img, i) => {
            // ✅ Responsive positioning
            const isMobile = typeof window !== "undefined" && window.innerWidth < 640
            const left = isMobile
              ? `${mobileLefts[i % mobileLefts.length]}%`
              : `${desktopLefts[i % desktopLefts.length]}%`
            const rotate = isMobile
              ? `${mobileRotations[i % mobileRotations.length]}deg`
              : `${desktopRotations[i % desktopRotations.length]}deg`

            return (
              <motion.figure
                key={i}
                initial={{
                  scale: 0.7,
                  opacity: 0,
                  left: "50%",
                  rotate: 0,
                  y: "-50%",
                }}
                animate={
                  inView
                    ? {
                        scale: 1,
                        opacity: 1,
                        left,
                        rotate,
                        transition: {
                          duration: 1,
                          delay: i * 0.15,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }
                    : {
                        scale: 0.7,
                        opacity: 0,
                        left: "50%",
                        rotate: 0,
                      }
                }
                className={cn(
                  "absolute top-1/2 overflow-hidden bg-white shadow-xl",
                  "rounded-xl sm:rounded-2xl",
                  "h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48"
                )}
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
