'use client'

import React, { useState } from 'react';

export default function JuiceSamplerHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-yellow-100 flex items-center justify-center p-8">
      <div className="relative w-full max-w-7xl bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-300 rounded-[3rem] overflow-hidden shadow-2xl">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-lime-300/30 via-transparent to-yellow-200/30 animate-pulse"></div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-12 lg:p-16">

          {/* Left Juice Bottle - Kiwi */}
          <div className="flex justify-start lg:-translate-x-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-lime-400/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Image with tilt & hover animation */}
              <div className="relative transform -rotate-20 group-hover:-rotate-9 group-hover:scale-110 transition-all duration-700 ease-out">
                <img
                  src="/water.png"
                  alt="Kiwi Juice"
                  className="w-56 lg:w-64 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center space-y-2 lg:col-span-1">
            <h1 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight">
              Perfect summer juices 
              <span className="text-2xl lg:text-4xl"> try the sampler</span>
            </h1>
            
            <p className="text-gray-700 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Embark on a journey where freshness meets convenience in every meticulously goodness natural 
              ingredients with the ease of accessibility Embark journey where freshness meets convenience in every 
              sip and our meticulously crafted just clean, refreshment made for your lifestyle.
            </p>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-12 py-4 text-lg font-semibold text-gray-900 bg-transparent border-3 border-gray-900 rounded-full overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Shop now
              </span>
              {/* Animated background fill from bottom to top */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 ease-out ${
                  isHovered ? 'translate-y-0' : 'translate-y-full'
                }`}
              ></div>
            </button>
          </div>

          {/* Right Juice Box - Strawberry */}
          <div className="flex justify-end lg:translate-x-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-400/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Image with right tilt & hover animation */}
              <div className="relative transform rotate-20 group-hover:rotate-9 group-hover:scale-110 transition-all duration-700 ease-out">
                <img
                  src="/kiwi.png"
                  alt="Strawberry Juice"
                  className="w-56 lg:w-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-lime-300/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
