'use client'

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import InfiniteReviewCarousel from '@/components/carousel';
import { GallerySplitScroll } from '@/components/Gallery';

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
      const images = [
    { src: "/gallery1.avif", alt: "Assorted canned drinks in ice" },
    { src: "/gallery2.avif", alt: "Yellow drink with lemon beside a can" },
    { src: "/gallery3.avif", alt: "Poolside blue drink with limes" },
    { src: "/gallery4.avif", alt: "Citrus drink placeholder" },
  ]

  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, digital wallets, and bank transfers. For more details about specific payment options, please visit our payment page."
    },
    {
      question: "Can I modify or cancel my order after it's been placed?",
      answer: "Orders can typically be modified or cancelled within 2 hours of placement. After that time, the order enters our preparation process. Please contact our customer service team immediately for assistance."
    },
    {
      question: "How do I know if a product is in stock?",
      answer: "You can check product availability on our website. Items marked as 'In Stock' are available for immediate shipping. Items marked as 'Pre-order' will ship within the specified timeframe."
    },
    {
      question: "Do you offer expedited shipping options?",
      answer: "Yes! We offer standard shipping, express shipping, and overnight delivery options. Shipping costs and delivery times will be shown at checkout based on your location."
    },
    {
      question: "Do you offer discounts or seasonal offers?",
      answer: "We regularly offer seasonal promotions, bundle deals, and exclusive discounts for our newsletter subscribers. Follow us on social media to stay updated on current offers!"
    },
    {
      question: "How do I place an order for the juicer online?",
      answer: "Simply browse our products, add items to your cart, proceed to checkout, enter your shipping and payment information, and confirm your order. You'll receive a confirmation email with tracking details."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navbar */}
     <Navbar/>

      {/* Header Section */}
      <div className="bg-amber-50 py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Sip and Learn: FAQs
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Get quick answers to the most common questions about our juices — from ingredients, flavors, and health benefits to freshness, storage, and delivery.
          </p>
        </div>
      </div>

      {/* FAQ + Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Section (smaller width) */}
          <div className="flex justify-center ">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-[420px] h-[550px]">
              <img
                src="/image-removebg-preview.png"
                alt="Juice Bottle"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: FAQ Accordion Section (wider width) */}
          <div className="space-y-4 w-full max-w-2xl mx-auto md:mx-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-5 bg-amber-50 hover:bg-yellow-50 flex items-center justify-between gap-4 transition-colors duration-300"
                >
                  <span className="text-lg font-bold text-gray-900 text-left">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <Minus size={24} className="text-gray-900" />
                    ) : (
                      <Plus size={24} className="text-gray-900" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-5 bg-white border-t-2 border-gray-900 animate-fadeIn">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>

      {/* Divider */}
      <InfiniteReviewCarousel/>
      <GallerySplitScroll images={images} className="mt-2 bg-transparent" />
      {/* Footer Navigation */}
            <div className="border-t-2 border-gray-900 my-12"></div>

    <Footer/>
    </div>
  );
}
