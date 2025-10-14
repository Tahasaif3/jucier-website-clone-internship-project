"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import FullScreenImage from "@/components/ads"
import TiltedGallery from "@/components/titled"
import Footer from "@/components/Footer"

const blogPosts = [
  {
    id: 1,
    title: "Juice up your day with colors of the rainbow and sip nature's goodness",
    date: "December 14, 2024",
    category: "Juice inspiration",
    image: "/b5.avif",
  },
  {
    id: 2,
    title: "Feel rejuvenated after each sip of the bijuice flavours are delicious",
    date: "August 10, 2024",
    category: "Flavour spotlight",
    image: "/b6.avif",
  },
  {
    id: 3,
    title: "Find a variety of delicious beverages to quench your thirst",
    date: "October 16, 2024",
    category: "Drink of the day",
    image: "/b4.avif",
  },
  {
    id: 4,
    title: "There are many ways to enjoy juicy original test juice",
    date: "June 6, 2024",
    category: "Sips and wellness",
    image: "/b2.avif",
  },
  {
    id: 5,
    title: "Juicey drink delight is packed with essential minerals",
    date: "July 19, 2024",
    category: "Fresh finds",
    image: "/b1.avif",
  },
  {
    id: 6,
    title: "Juicey fizz & freshness soft drink its perfect natural fruit juices",
    date: "November 14, 2024",
    category: "Juice journey",
    image: "/b3.avif",
  },
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setSelectedPost(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedPost(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6 },
    }),
  }

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost)
    if (!post) return null
    const index = blogPosts.findIndex((p) => p.id === selectedPost)
    const prev = blogPosts[index - 1]
    const next = blogPosts[index + 1]

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-orange-50 text-[#1a1a1a]"
      >
        <Navbar/>
        {/* Header */}
        <div className="bg-[#f5f3ed] px-6 md:px-12 py-12 md:py-16 border-b border-black/10">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="font-medium capitalize">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight">{post.title}</h1>
        </div>

        {/* Image */}
        <div className="h-[350px] md:h-[520px] overflow-hidden border-b border-black/10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
          <div className="text-md leading-8 space-y-8">
            <p>
            Juice isn’t just a drink — it’s a revitalizing experience. Bursting with mouthwatering flavors and natural energy, every sip leaves you refreshed, recharged, and ready to take on your day. Taste the delicious difference of true refreshment.Experience the burst of natural energy with every sip of Bijuice. These delicious flavors don’t just taste great — they awaken your senses and leave you feeling refreshed..
            </p>

            <h2 className="text-2xl font-medium mt-10">Every sip awakens Feel rejuvenated with the delicious energy of juice</h2>

            <p>
            You may think you know what refreshment feels like until you try the unique flavors of juice. Each sip holds a balance of sweetness and energy that can shift your entire mood. You may find that what you thought was enough no longer satisfies — juice takes you further. These flavors do more than taste good; they revive your senses and help create vibrant memories of well-being and renewal.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <img
                src="/bd1.png"
                alt="Juice 1"
                className="rounded-2xl h-[250px] md:h-[320px] object-cover border border-black"
              />
              <img
                src="/bg2.png"
                alt="Juice 2"
                className="rounded-2xl h-[250px] md:h-[320px] object-cover border border-black"
              />
            </div>

            <div className="bg-[#f5f3ed] border-1 border-black rounded-4xl p-8 md:p-10 text-center font-medium text-xl">
            You may have a general idea of what refreshment feels like, but it’s worth trying something different to truly awaken your senses. Each sip of Bijuice might surprise you with how it lifts your mood and energizes your day.            </div>

            <p>
            Juice isn’t just a drink; it’s a moment of renewal. With every sip, you’ll feel energy and joy wash over you, as if the juice itself were made to recharge your body and soul. Let the unique flavors guide you to a fresh outlook and a burst of vitality that lasts long after the glass is empty.
            </p>

            {/* Navigation */}
            <div className="flex flex-col md:flex-row justify-between gap-5 mt-16 mb-4">
              {prev ? (
                <button
                  onClick={() => handleClick(prev.id)}
                  className="flex items-center gap-2 text-[#e63946]  text-xl font-semibold hover:-translate-x-1 transition-transform"
                >
                  ← {prev.title}
                </button>
              ) : (
                <div />
              )}

              {next ? (
                <button
                  onClick={() => handleClick(next.id)}
                  className="flex items-center gap-2 text-[#e63946] text-xl font-semibold hover:translate-x-1 transition-transform"
                >
                  {next.title} →
                </button>
              ) : (
                <div />
              )}
            </div>
            <div>
                <button
              onClick={handleBack}
              className="mt-12 px-5 py-2 bg-[#e63946] text-white rounded-full hover:bg-[#d62839] transition"
            >
              Back to blog
            </button>
            </div>
          </div>
          <Footer/>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-[#ede8dd] text-[#1a1a1a]">
      <Navbar />

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#d91645] text-white text-center py-8 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Latest Insights</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Our blog is packed with expert advice, helpful tips, and wellness knowledge to keep you
          informed and inspired.
        </p>
      </motion.header>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            onClick={() => handleClick(post.id)}
            className="bg-[#f5f3ed] rounded-2xl overflow-hidden border border-black cursor-pointer hover:-translate-y-1 transition-transform shadow-[4px_4px_0_#000]"
          >
            <div className="h-[220px] md:h-[260px] overflow-hidden border-b border-black">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span className="capitalize font-medium">{post.category}</span>
              </div>
              <h2 className="text-base md:text-lg font-semibold leading-snug">{post.title}</h2>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Fullscreen ad */}
      <FullScreenImage />

      {/* Gallery Section */}
      <div className="text-center my-20 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#d91645] tracking-tight">
          Our Fresh Gallery
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Explore the beauty and freshness of nature in every sip — vibrant colors, bold flavors, and
          energizing vibes.
        </p>
      </div>

      <TiltedGallery
        images={[
          { src: "/t1.jpg", alt: "Citrus cocktail outdoors" },
          { src: "/t2.jpg", alt: "Kiwi green juice on plate" },
          { src: "/t3.jpg", alt: "Pineapple smoothie glass" },
          { src: "/t4.jpg", alt: "Orange and red mocktail" },
          { src: "/t5.jpg", alt: "Herbal citrus refresher" },
        ]}
      />

      <Footer />
    </div>
  )
}
