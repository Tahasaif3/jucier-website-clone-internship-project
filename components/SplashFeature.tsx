"use client";

import Image from "next/image";

export default function SplashFeature() {
  return (
    <section className="relative overflow-hidden bg-[#fde8e6] py-16 sm:py-20 lg:py-24">
      {/* Curved headline */}
      <div className="pointer-events-none relative mx-auto mb-6 sm:mb-8 flex max-w-7xl justify-center px-2 sm:px-4 lg:px-8">
        <svg
          viewBox="0 0 1400 220"
          className="h-[120px] sm:h-[180px] md:h-[200px] lg:h-[220px] w-full max-w-7xl"
        >
          <defs>
            <path id="curve" d="M10 120 C 350 10, 1050 10, 1390 120" fill="none" />
          </defs>
          <clipPath id="reveal">
            <rect
              x="0"
              y="0"
              width="1400"
              height="220"
              className="[animation:reveal-x_1.6s_ease-out_forwards]"
            />
          </clipPath>
          <g clipPath="url(#reveal)">
            <text
              className="fill-[#b80f3e] text-[16px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold [font-family:var(--font-fredoka)] text-center"
            >
              <textPath href="#curve" startOffset="0%" textLength="1400">
                Sip, Smile, Repeat, Your daily dose of freshness in every can!
              </textPath>
            </text>
          </g>
        </svg>
      </div>

      {/* Main layout */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-3 sm:px-6 lg:grid-cols-3">
        {/* Left feature */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <AnimatedCurve direction="left" />
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
            Gluten free<br />product
          </h3>
        </div>

        {/* Center image */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto h-[320px] sm:h-[480px] md:h-[600px] lg:h-[780px] w-[320px] sm:w-[480px] md:w-[600px] lg:w-[780px] mt-8 sm:mt-16 lg:mt-36 max-w-full">
            <Image
              src="/689d6833f89ea96a4e2f385c_1122.avif"
              alt="Orange splash"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Right feature */}
        <div className="order-3 text-center lg:text-right">
          <AnimatedCurve direction="right" />
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
            Lightly<br />carbonated
          </h3>
        </div>
      </div>

      {/* Bottom labels */}
      <div className="mx-auto mt-10 sm:mt-12 lg:-mt-24 grid max-w-7xl grid-cols-1 sm:grid-cols-2 gap-8 px-3 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <AnimatedCurve direction="left" small />
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
            Zero calories sugar
          </h3>
        </div>
        <div className="text-center sm:text-right">
          <AnimatedCurve direction="right" small />
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
            No artificial<br />sweetness
          </h3>
        </div>
      </div>
    </section>
  );
}

function AnimatedCurve({
  direction,
  small = false,
}: {
  direction: "left" | "right";
  small?: boolean;
}) {
  const path =
    direction === "left"
      ? small
        ? "M 520 100 C 360 120, 200 140, 40 190"
        : "M 520 40 C 360 80, 200 110, 40 160"
      : small
      ? "M 40 100 C 200 120, 360 140, 520 190"
      : "M 40 40 C 200 80, 360 110, 520 160";

  const containerClass =
    direction === "left"
      ? "mx-auto h-[60px] sm:h-[90px] md:h-[120px] w-[300px] sm:w-[420px] md:w-[560px] lg:-mr-24"
      : "mx-auto h-[60px] sm:h-[90px] md:h-[120px] w-[300px] sm:w-[420px] md:w-[560px] lg:-ml-24";

  return (
    <svg viewBox="0 0 560 220" className={containerClass}>
      <path
        d={path}
        fill="none"
        stroke="#ff2d7a"
        strokeWidth="5"
        strokeDasharray="12 12"
        strokeLinecap="round"
        className="[animation:dashmove_3s_linear_infinite]"
      />
    </svg>
  );
}
