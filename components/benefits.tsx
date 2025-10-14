export default function CertifiedBenefits() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        {/* Headline */}
        <h2 className="text-center text-balance font-extrabold tracking-tight text-4xl md:text-6xl">
          100% Natural goodness and
          <br className="hidden md:block" />
          officially vegan certified
        </h2>

        {/* Three features */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img
              src={"/ic1.png?height=64&width=64&query=vegan%20badge"}
              alt="Vegan certification badge"
              className="h-16 w-16 rounded-full object-contain"
              crossOrigin="anonymous"
            />
            <div>
              <p className="font-extrabold">Plant-based & all‑Natural</p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                From nature to you 100% vegan 100% real — purely natural proudly.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img
              src={"/ic2.svg?height=64&width=64&query=organic%20seal"}
              alt="Organic seal icon"
              className="h-16 w-16 rounded-full object-contain"
              crossOrigin="anonymous"
            />
            <div>
              <p className="font-extrabold">Wholesome Organic Sweetness</p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                All‑natural goodness, backed by vegan certification approved.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img
              src={"/ic3.svg?height=64&width=64&query=juice%20glass%20icon"}
              alt="Glass of juice icon"
              className="h-16 w-16 rounded-full object-contain"
              crossOrigin="anonymous"
            />
            <div>
              <p className="font-extrabold">Low in calories, high in nutrients</p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                100% certified vegan, completely natural — just as it should be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
