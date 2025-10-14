"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF4EF] text-center">
        <Navbar/>
      {/* Oops! */}
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-3 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Oops!
      </motion.h2>

      {/* 404 with hover animation */}
      <motion.div
        className="text-[120px] md:text-[180px] font-extrabold leading-none flex items-center justify-center cursor-pointer"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      >
        <motion.span className="text-black" whileHover={{ y: -5 }}>
          4
        </motion.span>
        <motion.span
          className="text-[#D71E28] mx-2"
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          0
        </motion.span>
        <motion.span className="text-black" whileHover={{ y: -5 }}>
          4
        </motion.span>
      </motion.div>

      {/* Texts */}
      <motion.p
        className="text-xl font-bold text-gray-900 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Page not found
      </motion.p>

      <motion.p
        className="text-gray-600 mt-3 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We're sorry, but the page you are looking for cannot be found. It might
        have been moved, renamed, or might never have existed.
      </motion.p>

      {/* Go Home button */}
      <motion.div
        className="mt-8 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-all"
        >
          Go home
        </Link>
      </motion.div>
      <Footer/>
    </div>
  );
}
