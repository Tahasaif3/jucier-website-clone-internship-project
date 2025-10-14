"use client"

export default function StorySection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: Image */}
          <div className="animate-fadeUp">
            <img
              src="/story.png"
              alt="A glass of peach ice slush with slices on a pastel setup"
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover shadow-sm"
            />
          </div>

          {/* Right: Copy */}
          <div className="text-foreground animate-slideInRight">
            <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight">Our story</h1>

            <p className="mt-6 font-semibold">Sharing resources, time, and support with others in need</p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Juicier began with a simple idea: to bring real fruit, real flavor, and real refreshment into everyday
              life, one can at a time. What started as a small passion for natural, healthy juice blends has grown into
              a vibrant brand dedicated to freshness, wellness, and sustainability. Our juices are crafted from
              handpicked fruits, carefully blended to retain nutrients and capture that just-squeezed flavor. Whether
              you're fueling your morning or refreshing your afternoon, every sip is packed with care and intention.
            </p>

            <div className="mt-8">
              <a href="/products" className="btn-fill-btt" aria-label="Explore products">
                <span>Explore products</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* --- Animations --- */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1.2s ease-out forwards;
        }

        /* --- CTA button animation --- */
        .btn-fill-btt {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 9999px;
          border: 2px solid var(--color-foreground);
          color: var(--color-foreground);
          background: transparent;
          overflow: hidden;
          transition: color 200ms ease, transform 60ms ease;
          will-change: transform;
          isolation: isolate;
        }

        .btn-fill-btt:active {
          transform: translateY(1px);
        }

        .btn-fill-btt::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: var(--color-chart-5);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 360ms cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 0;
        }

        .btn-fill-btt:hover::before,
        .btn-fill-btt:focus-visible::before {
          transform: scaleY(1);
        }

        .btn-fill-btt:hover,
        .btn-fill-btt:focus-visible {
          color: var(--color-primary-foreground);
        }

        .btn-fill-btt > span {
          position: relative;
          z-index: 1;
          font-weight: 600;
          white-space: nowrap;
        }

        /* --- Reduced motion accessibility --- */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeUp,
          .animate-slideInRight,
          .btn-fill-btt {
            animation: none;
            transition: none;
          }
          .btn-fill-btt::before {
            transform: scaleY(1);
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
