import { Leaf, Beaker, Flame, PillBottleIcon, Droplet } from "lucide-react"
import CertifiedBenefits from "@/components/benefits"
import MarqueeStrip from "@/components/marquee-strips"
import Navbar from "@/components/Navbar"
import StorySection from "@/components/Story"
import AmbassadorsSection from "@/components/ambassador"
import InfiniteReviewCarousel from "@/components/carousel"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <StorySection />
      <CertifiedBenefits />
      <MarqueeStrip
        items={[
          {
            icon: <Leaf className="w-6 h-6 text-green-600" />,
            label: "No artificial flavouring",
          },
          {
            icon: <Beaker className="w-6 h-6 text-amber-600" />,
            label: "No additives",
          },
          {
            icon: <Flame className="w-6 h-6 text-red-500" />,
            label: "Low calories",
          },
          {
            icon: <PillBottleIcon className="w-6 h-6 text-purple-600" />,
            label: "Probiotic",
          },
          {
            icon: <Droplet className="w-6 h-6 text-sky-600" />,
            label: "No added sugar",
          },
        ]}
      />
     <AmbassadorsSection/>
    <InfiniteReviewCarousel/>
    <Footer/>
    </main>
  )
}
