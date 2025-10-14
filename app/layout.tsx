import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Fredoka } from "next/font/google"
import { Suspense } from "react"
import { CartProvider } from "./context/CartContext"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Juicer | Fresh Juice, Fresh Energy",
    template: "%s | Juicer",
  },
  description:
    "Juicer offers freshly made juices with organic ingredients — stay healthy, stay fresh!",
  generator: "Taha",
  keywords: [
    "Juicer",
    "Fresh Juice",
    "Organic Drinks",
    "Healthy Lifestyle",
    "Smoothies",
  ],
  authors: [{ name: "Juicer", url: "https://jucier-ttm.webflow.io/" }],
  creator: "Juicer",
  publisher: "Juicer",
  metadataBase: new URL("https://jucier-ttm.webflow.io/"),
  openGraph: {
    title: "Juicer | Fresh Juice, Fresh Energy",
    description:
      "Enjoy freshly made juices with 100% organic ingredients from Juicer.",
    url: "https://jucier-ttm.webflow.io/",
    siteName: "Juicer",
    images: [
      {
        url: "https://juicer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juicer - Fresh Juice Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juicer | Fresh Juice, Fresh Energy",
    description:
      "Get fresh, organic juices delivered to your doorstep with Juicer.",
    images: ["https://juicer.com/og-image.jpg"],
    creator: "@juicer_official",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/68bfb280508eb6e138438c24_favicon-32x32.png",
  },
  alternates: {
    canonical: "https://jucier-ttm.webflow.io/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fredoka.variable} antialiased`}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <CartProvider>
            {children}
          </CartProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
