"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"; 


export default function Abouts() {
  const [hovered, setHovered] = useState(false)
  const router = useRouter();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-[#fff9e6] to-[#ffe8b8] py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto relative overflow-hidden">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-[36px] sm:text-[42px] md:text-[56px] font-bold leading-tight text-black mb-6 tracking-tight">
          Where the freshness meets convenience in every sip!
        </h1>
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#333] mb-8 max-w-[600px] mx-auto md:mx-0">
          At Juicer, we believe that real refreshment comes from nature. Our juices are crafted
          using 100% natural ingredients, bursting with the authentic flavors of fresh fruits — no
          additives, no artificial nonsense. Whether you're on the go or relaxing at home, each can
          deliver the perfect blend of taste and energy. Sip confidently, knowing every drop is made
          with care and quality in mind.
        </p>
        <button 
          aria-label="Explore our products"
          onClick={() => router.push("/Shop")}
          className="inline-block px-8 py-3 border-2 border-black rounded-full text-[16px] font-semibold text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
        >
          Explore products
        </button>
      </div>

      {/* Right Image with bubble hover animation */}
      <div
        className="flex justify-center md:justify-end relative flex-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative z-10 flex justify-center md:justify-end">
          {/* Bubbles rising animation */}
          {hovered && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[10%]">
              <motion.div
                className="absolute w-3 h-3 bg-[#ffcc66] rounded-full opacity-70"
                initial={{ scale: 0, y: 0, opacity: 0 }}
                animate={{ scale: 1, y: -80, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-[#ffb347] rounded-full opacity-70 left-4"
                initial={{ scale: 0, y: 0, opacity: 0 }}
                animate={{ scale: 1, y: -60, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-[#ffd27f] rounded-full opacity-60 -left-3"
                initial={{ scale: 0, y: 0, opacity: 0 }}
                animate={{ scale: 1, y: -100, opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
              />
            </div>
          )}

          <Image
            src="/6880a8db3c4dfdf7f0e83196_01bf0b0b03d7044fe8259d1f4fa4eb2e_cta-image.avif"
            alt="Juice can"
            width={600}
            height={600}
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}
