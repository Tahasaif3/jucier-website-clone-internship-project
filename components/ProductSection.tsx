'use client'

import React from 'react';

export default function JuiceProductCards() {
  const products = [
    {
      name: 'Apple juice',
      image: '/68b92e8f64f3914b840d4c95_product-10.png',
      bgColor: 'bg-pink-200',
      buttonColor: 'text-red-600 border-red-600 hover:bg-red-600 hover:text-white'
    },
    {
      name: 'Blueberry juice',
      image: '/68a40e550b62f5698e6d393b_product-08.avif',
      bgColor: 'bg-sky-200',
      buttonColor: 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Dragonfruit juice',
      image: '/68a412ceb9bdf199350edf5a_product-09.png',
      bgColor: 'bg-pink-300',
      buttonColor: 'text-fuchsia-600 border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white'
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {products.map((product, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-between rounded-[2rem] ${product.bgColor} p-10 shadow-xl hover:shadow-2xl transition-all duration-500`}
          >
            {/* Title */}
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {product.name}
            </h2>

            {/* Button */}
            <button
              className={`relative mb-3 px-6 py-4 text-lg font-semibold text-gray-900 bg-transparent border-2 border-gray-900 rounded-full overflow-hidden group/button transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">
                Shop now
              </span>
            </button>

            {/* Image */}
            <div className="flex justify-center items-center mt-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-auto object-contain transform transition-transform duration-700 group-hover:translate-x-3 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
