"use client"

import Image from "next/image"
import { useRef } from "react"

type Product = {
  id: number
  title: string
  price: string
  image: string
}

const products: Product[] = [
  { id: 1, title: "Apple juice", price: "$ 130.40 USD", image: "/68b920b81199443bc5a5f43c_06.png" },
  { id: 2, title: "Orange juice", price: "$ 130.20 USD", image: "/68b92e8f64f3914b840d4c95_product-10.png" },
  { id: 3, title: "Dragonfruit juice", price: "$ 340.80 USD", image: "/68c40b74c2091b030560652e_product-02.avif" },
  { id: 4, title: "Strawberry juice", price: "$ 140.45 USD", image: "/68a40e550b62f5698e6d393b_product-08.avif" },
  { id: 5, title: "Pink-guava juice", price: "$ 240.50 USD", image: "/68b987fc1d0ebc23a40bcb50_05.avif" },
  { id: 6, title: "Mango juice", price: "$ 235.80 USD", image: "/68bea4fdeb15d0f3681da0b6_lemon-can.avif" },
  { id: 7, title: "Blueberry juice", price: "$ 125.30 USD", image: "/68a40e550b62f5698e6d393b_product-08.avif" },
  { id: 8, title: "Lime juice", price: "$ 119.00 USD", image: "/68b987fc1d0ebc23a40bcb50_05.avif" }
]

export default function ExploreFavorites() {
  const listRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (dir: 1 | -1) => {
    const el = listRef.current
    if (!el) return
    const card = el.querySelector("[data-card]") as HTMLElement | null
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.6
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <section className="relative bg-[#f7e6e2] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Explore your favorites
        </h2>

        <div className="relative">
          {/* Controls on right */}
          <div className="absolute right-0 -top-12 hidden items-center gap-3 md:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCards(-1)}
              className="h-10 w-10 rounded-full border border-black/30 bg-white text-black shadow-sm hover:bg-[#d21544]"
            >
              ‹
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCards(1)}
              className="h-10 w-10 rounded-full border bg-white text-black shadow-sm hover:bg-[#d21544]"
            >
              ›
            </button>
          </div>

          <div
            ref={listRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {/* hide scrollbar webkit */}
            <style jsx>{`
              div::-webkit-scrollbar{display:none}
            `}</style>
            {products.map((p) => (
              <div
                key={p.id}
                data-card
                className="group min-w-[260px] snap-center sm:min-w-[300px] md:min-w-[320px]"
              >
                {/* Transparent card: only image */}
                <div className="relative h-[360px] sm:h-[420px]">
                  <div className="absolute inset-0 will-change-transform transition-transform duration-300 ease-out group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:rotate-[6deg]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-extrabold text-neutral-900">{p.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-neutral-600">{p.price}</p>
                  <button className="mx-auto mt-4 inline-flex items-center rounded-full border border-black/80 px-5 py-2 text-sm font-semibold text-black hover:bg-[#d21544] hover:text-white">
                    Shop now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


