'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Lock, Check, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import Image from 'next/image'

export function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const [orderPlaced, setOrderPlaced] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const subtotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''))
    return sum + priceNum * item.quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)
    
    // Show popup for 2 seconds, then show success page
    setTimeout(() => {
      setShowPopup(false)
      setOrderPlaced(true)
      clearCart() // Clear the cart after successful order
    }, 2000)
  }

  // Show empty cart message if no items
  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-[#fffce9] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={48} className="text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-xl text-gray-600 mb-8">
            Add some products to your cart before checking out
          </p>
          <Link href="/">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition">
              Start Shopping
            </button>
          </Link>
        </motion.div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fffce9] to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check size={48} className="text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Order Placed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <p className="text-gray-600 mb-8">
            Order confirmation has been sent to <span className="font-semibold">{formData.email}</span>
          </p>
          <div className="bg-white p-6 rounded-2xl border-2 border-green-500 mb-8">
            <p className="text-sm text-gray-600 mb-2">Order Total</p>
            <p className="text-3xl font-bold text-gray-900">${total.toFixed(2)} USD</p>
          </div>
          <Link href="/">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fffce9]">
      {/* Processing Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-12 text-center max-w-md"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Order</h3>
              <p className="text-gray-600">Please wait while we confirm your payment...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft size={24} />
              <span className="font-semibold">Back</span>
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Checkout Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Shipping Information */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none md:col-span-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none md:col-span-2"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none md:col-span-2"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="PK">Pakistan</option>
                  </select>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Lock size={24} />
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on Card"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength={19}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      maxLength={5}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={4}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition"
              >
                Complete Purchase - ${total.toFixed(2)}
              </motion.button>
            </motion.form>
          </div>

          {/* Right: Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-2xl sticky top-24 space-y-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 pb-6 border-b max-h-96 overflow-y-auto">
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-b from-red-100 to-red-50 rounded-lg flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.size} × {item.quantity}</p>
                      <p className="font-bold text-gray-900 mt-1">{item.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3">
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
                  <span>Tax (10%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="pt-6 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm"
                  />
                  <button 
                    type="button"
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Security Badge */}
              <div className="pt-4 flex items-center gap-2 text-sm text-gray-600">
                <Lock size={16} />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage