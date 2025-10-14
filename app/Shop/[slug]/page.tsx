// app/Shop/[slug]/page.tsx
'use client'

import { ProductDetail } from '@/components/products'
import { useParams } from 'next/navigation'
import { useState } from 'react'

type CartItem = {
  id: number
  slug: string
  title: string
  price: string
  quantity: number
  size: string
  image: string
}

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Local cart state for this page
  const [cart, setCart] = useState<CartItem[]>([])

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

    // Optionally store in localStorage or send to parent component
    console.log('Added to cart:', product)
  }

  return <ProductDetail slug={slug} onAddToCart={handleAddToCart} />
}