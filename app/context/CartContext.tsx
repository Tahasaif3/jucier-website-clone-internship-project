'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: number
  slug: string
  title: string
  price: string
  quantity: number
  size: string
  image: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (key: string, quantity: number) => void
  removeFromCart: (key: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: CartItem) => {
    const cartKey = `${product.id}-${product.size}`
    const existingItem = cart.find(item => `${item.id}-${item.size}` === cartKey)

    if (existingItem) {
      setCart(cart.map(item =>
        `${item.id}-${item.size}` === cartKey
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ))
    } else {
      setCart([...cart, product])
    }
  }

  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(key)
    } else {
      setCart(cart.map(item =>
        `${item.id}-${item.size}` === key
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const removeFromCart = (key: string) => {
    setCart(cart.filter(item => `${item.id}-${item.size}` !== key))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}