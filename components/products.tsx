'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'
import { useCart } from '@/app/context/CartContext'


type CartItem = {
  id: number
  slug: string
  title: string
  price: string
  quantity: number
  size: string
  image: string
}

type Product = {
  id: number
  slug: string
  title: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  image: string
  description: string
  keyIngredients: string
  nutrition: {
    calories: string
    fat: string
    carbs: string
    sugars: string
    fiber: string
    protein: string
  }
  benefits: string[]
  sizes: string[]
}
const products: Product[] = [
  {
    id: 1,
    slug: 'apple-juice',
    title: 'Apple juice',
    price: '$ 130.40 USD',
    originalPrice: '$ 155.40 USD',
    rating: 4.5,
    reviews: 148,
    image: '/68b92e8f64f3914b840d4c95_product-10.png',
    description: 'Rich in antioxidants and vitamin C, it\'s a timeless beverage loved for its comforting taste and natural nourishment. A perfect choice for those seeking a familiar yet wholesome drink. Crisp, juicy, refreshing naturally sweet, apple juice delivers a light refreshing flavor with a smooth finish and a subtle hint of tartness.',
    keyIngredients: 'Water, Apple Juice Concentrate (14%), Sugar, Dietary Fiber (0.6%), Resistant Maltodextrin (0.5%), Polydextrose (0.3%), Nature Identical Flavouring Substances, Acidity Regulator (INS 296), Vitamin C, Stabilizers (INS 415, INS 466), Natural Flavours',
    nutrition: {
      calories: '52-110',
      fat: '0g',
      carbs: '20-28g',
      sugars: '6-8 g (mostly natural)',
      fiber: '0-1.2g',
      protein: '0.9g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Refreshing citrus beverage packed with vitamin C for immunity boost.',
    keyIngredients: 'Water, Orange Juice Concentrate, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '45-100',
      fat: '0g',
      carbs: '11-25g',
      sugars: '9-11g',
      fiber: '0-0.5g',
      protein: '0.7g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Exotic and vibrant dragonfruit juice with natural sweetness.',
    keyIngredients: 'Water, Dragonfruit Puree, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '60-120',
      fat: '0.3g',
      carbs: '13-30g',
      sugars: '9-12g',
      fiber: '1-2g',
      protein: '1.2g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'Rich in Fiber', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Sweet and delicious strawberry juice rich in antioxidants.',
    keyIngredients: 'Water, Strawberry Puree, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '55-110',
      fat: '0.4g',
      carbs: '12-28g',
      sugars: '7-10g',
      fiber: '0.5-1.5g',
      protein: '0.8g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Tropical pink guava juice with natural vitamins and minerals.',
    keyIngredients: 'Water, Guava Puree, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '65-125',
      fat: '0.2g',
      carbs: '15-32g',
      sugars: '8-11g',
      fiber: '2-3g',
      protein: '1.1g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'High in Fiber', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'King of fruits in juice form - smooth, creamy, and delicious.',
    keyIngredients: 'Water, Mango Puree, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '70-130',
      fat: '0.1g',
      carbs: '16-34g',
      sugars: '12-15g',
      fiber: '0.5-1g',
      protein: '0.6g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Antioxidant powerhouse blueberry juice for health enthusiasts.',
    keyIngredients: 'Water, Blueberry Puree, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '50-105',
      fat: '0.2g',
      carbs: '11-26g',
      sugars: '8-10g',
      fiber: '1-2g',
      protein: '0.5g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'High Antioxidants', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
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
    description: 'Zesty and tangy lime juice perfect for refreshment.',
    keyIngredients: 'Water, Lime Juice, Sugar, Natural Flavours, Vitamin C',
    nutrition: {
      calories: '30-80',
      fat: '0g',
      carbs: '8-20g',
      sugars: '2-4g',
      fiber: '0.5g',
      protein: '0.3g'
    },
    benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
    sizes: ['250ml', '500ml', '1L']
  }
]

const newsItems = [
  '🎉 NEW: Limited Edition Tropical Mix - Order Now!',
  '⭐ 5-Star Rated by 10,000+ Customers',
  '🚚 FREE Shipping on Orders Above $50',
  '💯 100% Natural Ingredients - No Preservatives',
  '🌱 Organic & Sustainably Sourced',
]

// Cart Modal Component
export function CartModal({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }: any) {
  const subtotal = cart.reduce((sum: number, item: CartItem) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''))
    return sum + priceNum * item.quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 flex items-end md:items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b sticky top-0 bg-white">
              <h2 className="text-3xl font-bold">Your cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-8">
              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-6 mb-8">
                  {cart.map((item: CartItem) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      layout
                      className="flex gap-6 pb-6 border-b last:border-b-0"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-b from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                        <div className="text-gray-400 text-sm">🧃</div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 mt-1">
                          Product volume: {item.size}
                        </p>
                        <p className="text-lg font-bold text-gray-900 mt-2">{item.price}</p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 transition"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-6 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(`${item.id}-${item.size}`)}
                          className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Summary */}
              {cart.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 border-t pt-6"
                >
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold pt-4 border-t">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)} USD</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Buttons */}
            {cart.length > 0 && (
              <div className="p-8 border-t space-y-3 bg-gray-50">
                <Link href="/checkout" onClick={onClose}>
                  <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition">
                    Continue to checkout
                  </button>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-gray-300 text-gray-900 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Products Listing Component
export function ProductsList({ onAddToCart }: any) {
  return (
    <section className="py-24" id="shop">
      <div className="max-w-[1300px] mx-auto text-center px-6">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
          {products.map((product, index) => (
            <Link key={product.id} href={`/Shop/${product.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center cursor-pointer"
              >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 8 }}
                    className="relative h-[260px] w-[180px] flex items-center justify-center  rounded-3xl overflow-hidden"
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

                <h3 className="text-2xl font-bold text-gray-900 mt-12">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-lg font-semibold mt-2">
                  {product.price}
                </p>

                <button className="mt-4 mb-6 border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Shop now
                </button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductDetail({ slug }: { slug: string }) {
  const product = products.find(p => p.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('500ml')
  const [showNotification, setShowNotification] = useState(false)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/" className="text-red-500 hover:text-red-700 font-semibold">
          ← Back to Products
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 4)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      image: product.image
    })
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  return (
    <div className="bg-[#fffce9] min-h-screen">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-[1300px] mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold mb-8">
          ← Back to Products
        </Link>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-full font-semibold z-30 shadow-lg"
          >
            ✓ Added to cart!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-[1300px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            {/* Left: Product Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center bg-gradient-to-b from-red-50 to-red-100 rounded-3xl h-96 sticky top-20 overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-start">
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xl font-bold">
                  {product.rating}
                </span>
                <span className="text-gray-600">
                  {product.reviews} Reviews
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Select Size
                </p>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-full font-medium border-2 transition ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-black text-black hover:bg-gray-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Quantity:
                </p>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-32 px-4 py-2 border-2 border-black rounded-full text-center font-semibold"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={24} />
                Add to cart
              </button>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t pt-16"
          >
            <h2 className="text-4xl font-bold mb-6">Description</h2>
            <p className="text-gray-700 mb-12 leading-relaxed text-lg">
              {product.description}
            </p>

            <h2 className="text-4xl font-bold mb-6">Key ingredients</h2>
            <p className="text-gray-700 mb-12 leading-relaxed text-lg">
              {product.keyIngredients}
            </p>

            {/* Nutrition & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Nutrition facts</h2>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex justify-between"><span>Calories:</span> <span className="font-semibold">{product.nutrition.calories}</span></li>
                  <li className="flex justify-between"><span>Total Fat:</span> <span className="font-semibold">{product.nutrition.fat}</span></li>
                  <li className="flex justify-between"><span>Carbohydrates:</span> <span className="font-semibold">{product.nutrition.carbs}</span></li>
                  <li className="flex justify-between"><span>Total Sugars:</span> <span className="font-semibold">{product.nutrition.sugars}</span></li>
                  <li className="flex justify-between"><span>Dietary Fiber:</span> <span className="font-semibold">{product.nutrition.fiber}</span></li>
                  <li className="flex justify-between"><span>Protein:</span> <span className="font-semibold">{product.nutrition.protein}</span></li>
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Nutritional health benefit
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Packed with essential nutrients and natural ingredients, our juice supports energy, hydration, and digestion.
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 border border-red-200"
                    >
                      ✓ {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* News Strip */}
          <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 py-4 mt-12 overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...newsItems, ...newsItems].map((news, i) => (
                <span key={i} className="text-white font-semibold text-lg">
                  {news}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 pt-16 border-t"
          >
            <h2 className="text-6xl text-center font-bold mb-12">Explore your Favourites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/Shop/${relProduct.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="relative h-[250px] w-[250px] flex items-center justify-center bg-gradient-to-b from-red-100 to-red-50 rounded-3xl mb-4 overflow-hidden"
                    >
                      <Image
                        src={relProduct.image}
                        alt={relProduct.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 140px, 140px"
                      />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 text-center">
                      {relProduct.title}
                    </h3>
                    <p className="text-gray-600 font-semibold mt-2">
                      {relProduct.price}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
// Default export for Products Listing
export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product: Omit<CartItem, 'id'> & { id: number, slug: string }) => {
    const cartKey = `${product.id}-${product.size}`
    const existingItem = cart.find(item => `${item.id}-${item.size}` === cartKey)

    if (existingItem) {
      setCart(cart.map(item =>
        `${item.id}-${item.size}` === cartKey
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ))
    } else {
      setCart([...cart, { ...product, id: product.id }])
    }
  }

  const handleUpdateQuantity = (key: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(key)
    } else {
      setCart(cart.map(item =>
        `${item.id}-${item.size}` === key
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const handleRemoveItem = (key: string) => {
    setCart(cart.filter(item => `${item.id}-${item.size}` !== key))
  }

  return (
    <div className="bg-[#fffce9] min-h-screen">


      {/* Header with Cart Button */}


      {/* Products Listing */}
      <ProductsList onAddToCart={handleAddToCart} />

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}

// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Star, ShoppingCart } from 'lucide-react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Navbar from './Navbar'
// import Footer from './Footer'


// type Product = {
//   id: number
//   slug: string
//   title: string
//   price: string
//   originalPrice: string
//   rating: number
//   reviews: number
//   image: string
//   description: string
//   keyIngredients: string
//   nutrition: {
//     calories: string
//     fat: string
//     carbs: string
//     sugars: string
//     fiber: string
//     protein: string
//   }
//   benefits: string[]
//   sizes: string[]
// }

// const products: Product[] = [
//   {
//     id: 1,
//     slug: 'apple-juice',
//     title: 'Apple juice',
//     price: '$ 130.40 USD',
//     originalPrice: '$ 155.40 USD',
//     rating: 4.5,
//     reviews: 148,
//     image: '/68b920b81199443bc5a5f43c_06.png',
//     description: 'Rich in antioxidants and vitamin C, it\'s a timeless beverage loved for its comforting taste and natural nourishment. A perfect choice for those seeking a familiar yet wholesome drink. Crisp, juicy, refreshing naturally sweet, apple juice delivers a light refreshing flavor with a smooth finish and a subtle hint of tartness.',
//     keyIngredients: 'Water, Apple Juice Concentrate (14%), Sugar, Dietary Fiber (0.6%), Resistant Maltodextrin (0.5%), Polydextrose (0.3%), Nature Identical Flavouring Substances, Acidity Regulator (INS 296), Vitamin C, Stabilizers (INS 415, INS 466), Natural Flavours',
//     nutrition: {
//       calories: '52-110',
//       fat: '0g',
//       carbs: '20-28g',
//       sugars: '6-8 g (mostly natural)',
//       fiber: '0-1.2g',
//       protein: '0.9g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 2,
//     slug: 'orange-juice',
//     title: 'Orange juice',
//     price: '$ 130.20 USD',
//     originalPrice: '$ 155.40 USD',
//     rating: 4.5,
//     reviews: 148,
//     image: '/68b92e8f64f3914b840d4c95_product-10.png',
//     description: 'Refreshing citrus beverage packed with vitamin C for immunity boost.',
//     keyIngredients: 'Water, Orange Juice Concentrate, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '45-100',
//       fat: '0g',
//       carbs: '11-25g',
//       sugars: '9-11g',
//       fiber: '0-0.5g',
//       protein: '0.7g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 3,
//     slug: 'dragonfruit-juice',
//     title: 'Dragonfruit juice',
//     price: '$ 340.80 USD',
//     originalPrice: '$ 380.50 USD',
//     rating: 4.8,
//     reviews: 92,
//     image: '/68c40b74c2091b030560652e_product-02.avif',
//     description: 'Exotic and vibrant dragonfruit juice with natural sweetness.',
//     keyIngredients: 'Water, Dragonfruit Puree, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '60-120',
//       fat: '0.3g',
//       carbs: '13-30g',
//       sugars: '9-12g',
//       fiber: '1-2g',
//       protein: '1.2g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'Rich in Fiber', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 4,
//     slug: 'strawberry-juice',
//     title: 'Strawberry juice',
//     price: '$ 140.45 USD',
//     originalPrice: '$ 165.50 USD',
//     rating: 4.6,
//     reviews: 156,
//     image: '/68a40e550b62f5698e6d393b_product-08.avif',
//     description: 'Sweet and delicious strawberry juice rich in antioxidants.',
//     keyIngredients: 'Water, Strawberry Puree, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '55-110',
//       fat: '0.4g',
//       carbs: '12-28g',
//       sugars: '7-10g',
//       fiber: '0.5-1.5g',
//       protein: '0.8g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 5,
//     slug: 'pink-guava-juice',
//     title: 'Pink-guava juice',
//     price: '$ 240.50 USD',
//     originalPrice: '$ 275.00 USD',
//     rating: 4.7,
//     reviews: 134,
//     image: '/68b987fc1d0ebc23a40bcb50_05.avif',
//     description: 'Tropical pink guava juice with natural vitamins and minerals.',
//     keyIngredients: 'Water, Guava Puree, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '65-125',
//       fat: '0.2g',
//       carbs: '15-32g',
//       sugars: '8-11g',
//       fiber: '2-3g',
//       protein: '1.1g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'High in Fiber', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 6,
//     slug: 'mango-juice',
//     title: 'Mango juice',
//     price: '$ 235.80 USD',
//     originalPrice: '$ 270.00 USD',
//     rating: 4.9,
//     reviews: 178,
//     image: '/68bea4fdeb15d0f3681da0b6_lemon-can.avif',
//     description: 'King of fruits in juice form - smooth, creamy, and delicious.',
//     keyIngredients: 'Water, Mango Puree, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '70-130',
//       fat: '0.1g',
//       carbs: '16-34g',
//       sugars: '12-15g',
//       fiber: '0.5-1g',
//       protein: '0.6g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 7,
//     slug: 'blueberry-juice',
//     title: 'Blueberry juice',
//     price: '$ 125.30 USD',
//     originalPrice: '$ 150.00 USD',
//     rating: 4.4,
//     reviews: 98,
//     image: '/68a40e550b62f5698e6d393b_product-08.avif',
//     description: 'Antioxidant powerhouse blueberry juice for health enthusiasts.',
//     keyIngredients: 'Water, Blueberry Puree, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '50-105',
//       fat: '0.2g',
//       carbs: '11-26g',
//       sugars: '8-10g',
//       fiber: '1-2g',
//       protein: '0.5g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'High Antioxidants', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   },
//   {
//     id: 8,
//     slug: 'lime-juice',
//     title: 'Lime juice',
//     price: '$ 119.00 USD',
//     originalPrice: '$ 145.00 USD',
//     rating: 4.3,
//     reviews: 76,
//     image: '/68b987fc1d0ebc23a40bcb50_05.avif',
//     description: 'Zesty and tangy lime juice perfect for refreshment.',
//     keyIngredients: 'Water, Lime Juice, Sugar, Natural Flavours, Vitamin C',
//     nutrition: {
//       calories: '30-80',
//       fat: '0g',
//       carbs: '8-20g',
//       sugars: '2-4g',
//       fiber: '0.5g',
//       protein: '0.3g'
//     },
//     benefits: ['GMO Free', 'No Added Sugar', 'Gluten Free', 'No Concentrate', '100% Natural'],
//     sizes: ['250ml', '500ml', '1L']
//   }
// ]

// const newsItems = [
//   '🎉 NEW: Limited Edition Tropical Mix - Order Now!',
//   '⭐ 5-Star Rated by 10,000+ Customers',
//   '🚚 FREE Shipping on Orders Above $50',
//   '💯 100% Natural Ingredients - No Preservatives',
//   '🌱 Organic & Sustainably Sourced',
// ]

// // Products Listing Component
// export function ProductsList() {
//   return (
//     <div className="bg-[#fffce9] min-h-screen">
//       {/* News Strip */}


//       {/* Products Section */}
//       <section className="py-24" id="shop">
//         <div className="max-w-[1300px] mx-auto text-center px-6">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Juices</h2>
//           <p className="text-gray-600 mb-16 text-lg">
//             Fresh, natural, and delicious juice selections for every taste
//           </p>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
//             {products.map((product, index) => (
//               <Link key={product.id} href={`/Shop/${product.slug}`}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 60, rotateX: 15 }}
//                   whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                   transition={{
//                     delay: index * 0.1,
//                     duration: 0.7,
//                     ease: 'easeOut',
//                   }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="flex flex-col items-center cursor-pointer"
//                 >
//                   {/* Can Image */}
                  // <motion.div
                  //   whileHover={{ rotate: 10, scale: 1.1 }}
                  //   transition={{ type: 'spring', stiffness: 200, damping: 8 }}
                  //   className="relative h-[260px] w-[180px] flex items-center justify-center  rounded-3xl overflow-hidden"
                  // >
                  //   <Image
                  //     src={product.image}
                  //     alt={product.title}
                  //     fill
                  //     className="object-contain"
                  //     sizes="(max-width: 768px) 180px, 180px"
                  //     priority={index < 4}
                  //   />
                  // </motion.div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-gray-900 mt-12">
//                     {product.title}
//                   </h3>

//                   {/* Price */}
//                   <p className="text-gray-600 text-lg font-semibold mt-2">
//                     {product.price}
//                   </p>

//                   {/* Button */}
//                   <button className="mt-4 mb-6 border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
//                     Shop now
//                   </button>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Product Detail Page Component
// export function ProductDetail({ slug }: { slug: string }) {
//   const product = products.find(p => p.slug === slug)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState('500ml')

//   if (!product) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
//         <Link href="/" className="text-red-500 hover:text-red-700 font-semibold">
//           ← Back to Products
//         </Link>
//       </div>
//     )
//   }

//   const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 4)

//   return (
//     <div className="bg-[#fffce9] min-h-screen">
//       <Navbar/>
//       {/* Back Button */}
//       <div className="max-w-[1300px] mx-auto px-6 pt-8">
//         <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold mb-8">
//           ← Back to Products
//         </Link>
//       </div>

//       {/* Product Detail */}
//       <section className="py-12">
//         <div className="max-w-[1300px] mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
//           >
//             {/* Left: Product Image */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className=" flex items-center justify-center bg-gradient-to-b from-red-50 to-red-100 rounded-3xl h-96 sticky top-20 overflow-hidden"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//             </motion.div>

//             {/* Right: Product Details */}
//             <div className="flex flex-col justify-start">
//               {/* Rating */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={20}
//                       className="fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <span className="text-xl font-bold">
//                   {product.rating}
//                 </span>
//                 <span className="text-gray-600">
//                   {product.reviews} Reviews
//                 </span>
//               </div>

//               {/* Title */}
//               <h1 className="text-5xl font-bold text-gray-900 mb-6">
//                 {product.title}
//               </h1>

//               {/* Description */}
//               <p className="text-gray-700 leading-relaxed mb-6 text-lg">
//                 {product.description}
//               </p>

//               {/* Price */}
//               <div className="flex items-baseline gap-4 mb-8">
//                 <span className="text-4xl font-bold text-gray-900">
//                   {product.price}
//                 </span>
//                 <span className="text-xl text-gray-400 line-through">
//                   {product.originalPrice}
//                 </span>
//               </div>

//               {/* Size Selection */}
//               <div className="mb-8">
//                 <p className="text-sm font-semibold text-gray-900 mb-3">
//                   Select Size
//                 </p>
//                 <div className="flex gap-3">
//                   {product.sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-6 py-2 rounded-full font-medium border-2 transition ${
//                         selectedSize === size
//                           ? 'border-black bg-black text-white'
//                           : 'border-black text-black hover:bg-gray-100'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="mb-8">
//                 <p className="text-sm font-semibold text-gray-900 mb-3">
//                   Quantity:
//                 </p>
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
//                   className="w-32 px-4 py-2 border-2 border-black rounded-full text-center font-semibold"
//                 />
//               </div>

//               {/* Add to Cart Button */}
//               <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition flex items-center justify-center gap-2">
//                 <ShoppingCart size={24} />
//                 Add to cart
//               </button>
//             </div>
//           </motion.div>

//           {/* Details Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="border-t pt-16"
//           >
//             <h2 className="text-4xl font-bold mb-6">Description</h2>
//             <p className="text-gray-700 mb-12 leading-relaxed text-lg">
//               {product.description}
//             </p>

//             <h2 className="text-4xl font-bold mb-6">Key ingredients</h2>
//             <p className="text-gray-700 mb-12 leading-relaxed text-lg">
//               {product.keyIngredients}
//             </p>

//             {/* Nutrition & Benefits */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-4xl font-bold mb-6">Nutrition facts</h2>
//                 <ul className="space-y-4 text-gray-700 text-lg">
//                   <li className="flex justify-between"><span>Calories:</span> <span className="font-semibold">{product.nutrition.calories}</span></li>
//                   <li className="flex justify-between"><span>Total Fat:</span> <span className="font-semibold">{product.nutrition.fat}</span></li>
//                   <li className="flex justify-between"><span>Carbohydrates:</span> <span className="font-semibold">{product.nutrition.carbs}</span></li>
//                   <li className="flex justify-between"><span>Total Sugars:</span> <span className="font-semibold">{product.nutrition.sugars}</span></li>
//                   <li className="flex justify-between"><span>Dietary Fiber:</span> <span className="font-semibold">{product.nutrition.fiber}</span></li>
//                   <li className="flex justify-between"><span>Protein:</span> <span className="font-semibold">{product.nutrition.protein}</span></li>
//                 </ul>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl"
//               >
//                 <h3 className="text-2xl font-bold mb-4">
//                   Nutritional health benefit
//                 </h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   Packed with essential nutrients and natural ingredients, our juice supports energy, hydration, and digestion.
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {product.benefits.map((benefit) => (
//                     <div
//                       key={benefit}
//                       className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 border border-red-200"
//                     >
//                       ✓ {benefit}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//         <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 py-4 mt-12 overflow-hidden">
//         <motion.div
//           className="flex gap-12 whitespace-nowrap"
//           animate={{ x: ['0%', '-100%'] }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           {[...newsItems, ...newsItems].map((news, i) => (
//             <span key={i} className="text-white font-semibold text-lg">
//               {news}
//             </span>
//           ))}
//         </motion.div>
//       </div>

//           {/* Related Products */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-24 pt-16 border-t"
//           >
//             <h2 className="text-6xl  text-center font-bold mb-12">Explore Favourites</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {relatedProducts.map((relProduct) => (
//                 <Link key={relProduct.id} href={`/product/${relProduct.slug}`}>
//                   <motion.div
//                     whileHover={{ y: -8 }}
//                     className="flex flex-col items-center cursor-pointer"
//                   >
                    // <motion.div
                    //   whileHover={{ rotate: 10, scale: 1.1 }}
                    //   className="relative h-[200px] w-[140px] flex items-center justify-center bg-gradient-to-b from-red-100 to-red-50 rounded-3xl mb-4 overflow-hidden"
                    // >
                    //   <Image
                    //     src={relProduct.image}
                    //     alt={relProduct.title}
                    //     fill
                    //     className="object-contain"
                    //     sizes="(max-width: 768px) 140px, 140px"
                    //   />
                    // </motion.div>
//                     <h3 className="text-lg font-bold text-gray-900 text-center">
//                       {relProduct.title}
//                     </h3>
//                     <p className="text-gray-600 font-semibold mt-2">
//                       {relProduct.price}
//                     </p>
//                   </motion.div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   )
// }

// export default ProductsList