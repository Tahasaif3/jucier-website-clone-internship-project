'use client'

import React from 'react';

const InfiniteReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "Taylor Morgan",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "Tastes just like freshly squeezed oranges — zesty, bright, and full of life. You can tell it's the real deal, not from concentrate.",
      color: "bg-blue-200",
    },
    {
      id: 2,
      name: "Casey Rivers",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 5,
      text: "This strawberry juice is perfectly sweet with a smooth, fruity finish. It's like sipping summer in a glass! I love how natural it tastes, not too sugary.",
      color: "bg-yellow-200",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      text: "Tropical and tangy with just the right amount of sweetness. The pineapple flavor is super refreshing and instantly lifts my mood.",
      color: "bg-pink-200",
    },
    {
      id: 4,
      name: "Jessica Williams",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 5,
      text: "So crisp and clean — like biting into a fresh apple. Not overly sweet, just really smooth and refreshing. My kids and I both love it!",
      color: "bg-green-200",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      text: "Rich and tangy with that perfect tropical vibe. Easily one of my favorites. The mango flavor is so authentic and delicious!",
      color: "bg-blue-200",
    },
    {
      id: 6,
      name: "Emma Davis",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      text: "Refreshing and naturally sweet! The grape juice has a wonderful balance of flavors that makes every sip enjoyable. Highly recommend!",
      color: "bg-purple-200",
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className=" bg-orange-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
        <p className="text-gray-600">Fresh juice, fresh reviews!</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex group hover:pause-animation" style={{ width: '100%' }}>
          <div className="flex gap-6 animate-scroll-rtl" style={{ width: 'fit-content' }}>
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className={`flex-shrink-0 w-80 h-full ${review.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0`}
                style={{
                  transform: `rotate(-8deg)`
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-gray-800">{review.name}</h3>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 24px));
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 20s linear infinite;
          will-change: transform;
        }

        .group:hover .animate-scroll-rtl {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteReviewCarousel;