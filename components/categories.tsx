"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "All flavors",
    image: "/68a40e550b62f5698e6d393b_product-08.avif",
    bg: "/68b7c72bb51ce6bfa20b0800_product-category5-bg.avif",
    type: "all"
  },
  {
    id: 2,
    title: "Best sellers",
    image: "/68c40b74c2091b030560652e_product-02.avif",
    bg: "/68b7c77e1f8816fc1fae5922_product-category4-bg.avif",
    type: "bestsellers"
  },
  {
    id: 3,
    title: "New arrivals",
    image: "/687e23450be1b336d5f731c7_product-03.avif",
    bg: "/68a5b054748a32f45f0ad935_grapes_image.png",
    type: "new"
  },
  {
    id: 4,
    title: "Limited edition",
    image: "/68bea4fdeb15d0f3681da0b6_lemon-can.avif",
    bg: "/68b7c71223b7f3f89aefa218_product-category3-bg.avif",
    type: "limited"
  },
]

const allProducts = [
  {
    id: 1,
    slug: 'apple-juice',
    title: 'Apple juice',
    price: '$ 130.40 USD',
    originalPrice: '$ 155.40 USD',
    rating: 4.5,
    reviews: 148,
    image: '/68b92e8f64f3914b840d4c95_product-10.png',
    category: 'all'
  },
  {
    id: 2,
    slug: 'orange-juice',
    title: 'Orange juice',
    price: '$ 130.20 USD',
    originalPrice: '$ 155.40 USD',
    rating: 4.5,
    reviews: 148,
    image: '/68b920b81199443bc5a5f43c_06.png',
    category: 'bestsellers'
  },
  {
    id: 3,
    slug: 'dragonfruit-juice',
    title: 'Dragonfruit juice',
    price: '$ 340.80 USD',
    originalPrice: '$ 380.50 USD',
    rating: 4.8,
    reviews: 92,
    image: '/68c40b74c2091b030560652e_product-02.avif',
    category: 'new'
  },
  {
    id: 4,
    slug: 'strawberry-juice',
    title: 'Strawberry juice',
    price: '$ 140.45 USD',
    originalPrice: '$ 165.50 USD',
    rating: 4.6,
    reviews: 156,
    image: '/68a40e550b62f5698e6d393b_product-08.avif',
    category: 'all'
  },
  {
    id: 5,
    slug: 'pink-guava-juice',
    title: 'Pink-guava juice',
    price: '$ 240.50 USD',
    originalPrice: '$ 275.00 USD',
    rating: 4.7,
    reviews: 134,
    image: '/68b987fc1d0ebc23a40bcb50_05.avif',
    category: 'bestsellers'
  },
  {
    id: 6,
    slug: 'mango-juice',
    title: 'Mango juice',
    price: '$ 235.80 USD',
    originalPrice: '$ 270.00 USD',
    rating: 4.9,
    reviews: 178,
    image: '/68bea4fdeb15d0f3681da0b6_lemon-can.avif',
    category: 'limited'
  },
  {
    id: 7,
    slug: 'blueberry-juice',
    title: 'Blueberry juice',
    price: '$ 125.30 USD',
    originalPrice: '$ 150.00 USD',
    rating: 4.4,
    reviews: 98,
    image: '/68a40e550b62f5698e6d393b_product-08.avif',
    category: 'new'
  },
  {
    id: 8,
    slug: 'lime-juice',
    title: 'Lime juice',
    price: '$ 119.00 USD',
    originalPrice: '$ 145.00 USD',
    rating: 4.3,
    reviews: 76,
    image: '/68b987fc1d0ebc23a40bcb50_05.avif',
    category: 'all'
  }
]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [clickedId, setClickedId] = useState<number | null>(null)

  const handleCategoryClick = (categoryType: string) => {
    setSelectedCategory(categoryType)
    setClickedId(null)
  }

  const filteredProducts = selectedCategory 
    ? selectedCategory === 'all' 
      ? allProducts 
      : allProducts.filter(p => p.category === selectedCategory)
    : []

  const showProducts = selectedCategory !== null
  const categoryTitle = categories.find(c => c.type === selectedCategory)?.title

  return (
    <section className="bg-[#fff6de] min-h-screen py-20">
      <div className="max-w-[1300px] mx-auto px-4">
        
        {!showProducts ? (
          <>
            {/* Categories View */}
            <div>
              <h2 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight text-center">
                All product
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-16 text-center leading-relaxed">
                Discover our range of fresh, flavorful juices made with natural ingredients.
                Each blend is crafted to bring you taste, health, and energy in every sip.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
                {categories.map((category) => (
                  <motion.article 
                    key={category.id} 
                    className="group relative w-full max-w-[300px] cursor-pointer"
                    onClick={() => handleCategoryClick(category.type)}
                    whileHover={{ y: -8 }}
                  >
                    <div
                      className="relative overflow-hidden rounded-[32px] w-full h-[280px] shadow-md hover:shadow-xl transition-all duration-500"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:blur-sm"
                        style={{ backgroundImage: `url(${category.bg})` }}
                      ></div>

                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out z-10 group-hover:translate-x-2 group-hover:rotate-[4deg]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={80}
                          height={80}
                          className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900 mt-5 text-center">
                      {category.title}
                    </h3>
                  </motion.article>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Products View */}
            <AnimatePresence mode="wait">
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Back Button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition"
                >
                  ← Back to Categories
                </button>

                <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
                  {categoryTitle}
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-16 text-center">
                  Explore our selected {categoryTitle?.toLowerCase()} juices
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
                  {filteredProducts.map((product, index) => (
                    <Link key={product.id} href={`/Shop/${product.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 60, rotateX: 15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.7,
                          ease: 'easeOut',
                        }}
                        className="flex flex-col items-center cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 8 }}
                          className="relative h-[260px] w-[180px] flex items-center justify-center bg-gradient-to-b from-red-100 to-red-50 rounded-3xl overflow-hidden mb-8"
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 180px, 180px"
                            priority={index < 4}
                          />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                          {product.title}
                        </h3>

                        <div className="flex gap-2 mt-3 text-sm text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>

                        <p className="text-gray-600 text-sm mt-1">({product.reviews} reviews)</p>

                        <p className="text-gray-600 text-lg font-semibold mt-4">
                          {product.price}
                        </p>
                        <p className="text-gray-400 text-sm line-through">
                          {product.originalPrice}
                        </p>

                        <button className="mt-6 mb-4 border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                          Shop now
                        </button>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  )
}