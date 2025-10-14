import Navbar from "@/components/Navbar"
import { Hero } from "@/components/HeroSection"
import ProductGrid from "@/components/ProductGrid"
import ExploreFavorites from "@/components/ExploreFavorites"
import SplashFeature from "@/components/SplashFeature"
import Abouts from "@/components/About"
import JuiceSamplerHero from "@/components/JuiceHero"
import JuiceProductCards from "@/components/ProductSection"
import InfiniteReviewCarousel from "@/components/carousel"
import { GallerySplitScroll } from "@/components/Gallery"
import Footer from "@/components/Footer"
import FullScreenImage from "@/components/ads"
export default function Home() {
    const images = [
    { src: "/gallery1.avif", alt: "Assorted canned drinks in ice" },
    { src: "/gallery2.avif", alt: "Yellow drink with lemon beside a can" },
    { src: "/gallery3.avif", alt: "Poolside blue drink with limes" },
    { src: "/gallery4.avif", alt: "Citrus drink placeholder" },
  ]
  return (
    <main className="min-h-dvh text-[var(--color-on-brand)]">
      <Navbar />
      <Hero/>
      <ProductGrid/>
      <Abouts/>
      <ExploreFavorites/>
      <SplashFeature/>
      <FullScreenImage />
      <JuiceProductCards/>
      <InfiniteReviewCarousel/>
      <GallerySplitScroll images={images} className="mt-2 bg-transparent" />
      <Footer/>
    </main>
  )
}
