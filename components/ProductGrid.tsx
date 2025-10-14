'use client'

import Image from "next/image"
import { useState } from "react"

const products = [
  {
    id: 1,
    slug: "blueberry-juice",
    title: "Blueberry juice",
    image: "/68a40e550b62f5698e6d393b_product-08.avif",
    bg: "/68b7c72bb51ce6bfa20b0800_product-category5-bg.avif"
  },
  {
    id: 2,
    slug: "dragonfruit-juice",
    title: "Dragonfruit juice",
    image: "/68c40b74c2091b030560652e_product-02.avif",
    bg: "/68b7c77e1f8816fc1fae5922_product-category4-bg.avif"
  },
  {
    id: 3,
    slug: "grapes-juice",
    title: "Grapes juice",
    image: "/687e23450be1b336d5f731c7_product-03.avif",
    bg: "/68a5b054748a32f45f0ad935_grapes_image.png"
  },
  {
    id: 4,
    slug: "lemon-juice",
    title: "Lemon juice",
    image: "/68bea4fdeb15d0f3681da0b6_lemon-can.avif",
    bg: "/68b7c71223b7f3f89aefa218_product-category3-bg.avif"
  },
  {
    id: 5,
    slug: "lime-juice",
    title: "Lime juice",
    image: "/68b987fc1d0ebc23a40bcb50_05.avif",
    bg: "/68b7c4e19ff7f2820991e1d1_product-category1-bg.avif"
  }
]

export default function ProductGrid() {
  const [clickedId, setClickedId] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setClickedId(id)
    // Reset animation after 300ms
    setTimeout(() => setClickedId(null), 300)
  }

  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        {/* ✅ Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <article key={product.id} className="group relative">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                
                {/* Image Container with Background */}
                <div
                  className="relative aspect-square overflow-hidden rounded-[24px] sm:rounded-[32px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.bg})` }}
                >
                  <div
                    onClick={() => handleClick(product.id)}
                    className={`relative w-full h-full cursor-pointer will-change-transform transition-transform duration-300 ease-out ${
                      clickedId === product.id ? "translate-x-3" : ""
                    } group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:rotate-[5deg]`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="px-3 sm:px-6 py-4 sm:py-5">
                  <h3 className="text-center text-base sm:text-xl font-bold tracking-tight text-gray-900">
                    {product.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
