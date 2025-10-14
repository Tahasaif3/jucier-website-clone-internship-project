"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function PromoSection() {
  return (
    <section className="relative bg-[#1c0522] text-white py-10 sm:py-14 overflow-hidden rounded-[32px] sm:rounded-[48px] mx-4 sm:mx-6 md:mx-10 mt-10">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 gap-10 md:gap-0">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-6 px-2 sm:px-0">
            Feel the zing! <br className="block md:hidden" /> orange blast just landed now!
          </h2>

          {/* Feature Icons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-8">
            {[
              "No artificial sweetness",
              "No preservatives added",
              "100% natural ingredients",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-sm sm:text-base font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[#1c0522] transition-all duration-300"
          >
            View all juices
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE - JUICE CANS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Peach Can */}
          <motion.div
            initial={{ rotate: -10, y: 40, opacity: 0 }}
            whileInView={{ rotate: -10, y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10"
          >
            <Image
              src="/p1.avif"
              alt="Peach Can"
              width={140}
              height={240}
              className="drop-shadow-2xl sm:w-[180px] md:w-[240px] h-auto"
            />
          </motion.div>

          {/* Orange Can */}
          <motion.div
            initial={{ rotate: 12, y: 40, opacity: 0 }}
            whileInView={{ rotate: 12, y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative z-10 -ml-4 sm:-ml-8"
          >
            <Image
              src="/p2.avif"
              alt="Orange Can"
              width={140}
              height={240}
              className="drop-shadow-2xl sm:w-[180px] md:w-[240px] h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
