# 🧃 Juicer Website Clone — by Taha Saif

A modern, fully responsive **Juicer Website Clone** built using **Next.js** and **Tailwind CSS**.
This project replicates the design and interactions of [Juicer](https://jucier-ttm.webflow.io/) while leveraging the power of Next.js for performance, SEO, and maintainability.

---

## 🚀 Project Overview

The goal of this project is to **rebuild the Juicer website** using **Next.js + Tailwind CSS** for a fast, componentized, and developer-friendly setup.
All pages, components, and layouts are built with a focus on:

* Clean, reusable React components
* Static generation for performance
* Responsive design for all screen sizes
* SEO-friendly structure with `<head>` tags

🔗 **Live Demo:** *[](https://jucier-website-clone-internship-pro.vercel.app/)*

---

## 🛠️ Tech Stack

| Category   | Technology                                                        |
| ---------- | ----------------------------------------------------------------- |
| Framework  | **Next.js**                                          |
| Language   | **TypeScript**                                                    |
| Styling    | **Tailwind CSS**                                                  |
| Deployment | **Vercel**                                                        |
| Assets     | **Next/Image** optimization                                       |
| Data       | **Static JSON** files (`products.json`, `posts.json`, `faq.json`) |

---

## 📄 Pages Implemented

| Page               | Route             | Features                                                             |
| ------------------ | ----------------- | -------------------------------------------------------------------- |
| **Home**           | `/`               | Hero section, product showcase, features, testimonials, blog preview |
| **About**          | `/about`          | Brand story, mission, identity                                       |
| **Shop**           | `/shop`           | Product grid, pricing, “Shop Now” buttons                            |
| **Product Detail** | `/product/[slug]` | Dynamic pages using static data                                      |
| **Blog Listing**   | `/blog`           | All blog posts grid                                                  |
| **Blog Post**      | `/blog/[slug]`    | Individual post details                                              |
| **FAQ**            | `/faq`            | Accordion-style FAQs                                                 |
| **Contact**        | `/contact`        | Contact form with front-end validation                               |
| **Checkout**       | `/checkout`       | Checkout simulation UI                                               |
| **Style Guide**    | `/style-guide`    | Typography, colors, and UI showcase                                  |
| **404 Page**       | `/not-found`      | Custom error page                                                    |

---

## 🧩 Components

The UI is split into **reusable components** for scalability and maintainability:

* `Navbar.tsx` – responsive navigation bar with mobile menu
* `Footer.tsx` – structured footer with links
* `HeroSection.tsx` – main landing hero banner
* `ProductGrid.tsx`, `ProductCard.tsx` – dynamic product displays
* `Carousel.tsx` – testimonial or promotional slider
* `Accordion.tsx` – collapsible FAQ section
* `Form.tsx` – contact and newsletter forms
* `Gallery.tsx`, `PromoSection.tsx`, `SplashFeature.tsx` – visual product highlights

Additional interactive visuals:

* `bubble-canvas.jsx` for animated background
* `marquee-strips.tsx` for scrolling brand effects

---

## 📱 Responsive Design

Designed and tested for:

* **Mobile (≤768px):** stacked sections, full-width hero
* **Tablet (768–1024px):** two-column layouts
* **Desktop (≥1024px):** multi-column product and blog grids

Responsive typography and images ensure consistency across devices.
The hero section and hollow text effects adjust dynamically with breakpoints.

---

## 💾 Data Handling

All content is **statically generated** using JSON data stored in `/data`:

* **`products.json`** → id, slug, name, price, description, images
* **`posts.json`** → id, slug, title, excerpt, content, image
* **`faq.json`** → id, question, answer

**Next.js `getStaticPaths` and `getStaticProps`** (or their App Router equivalents) are used to build product and blog pages at build time.

---

## 🧱 Project Structure

```
├── app/
│   ├── about/
│   ├── blog/
│   ├── checkout/
│   ├── contact/
│   ├── faq/
│   ├── shop/
│   ├── style-guide/
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── Checkout.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductGrid.tsx
│   ├── Carousel.tsx
│   ├── Gallery.tsx
│   ├── PromoSection.tsx
│   ├── SplashFeature.tsx
│   ├── Story.tsx
│   ├── ads.tsx
│   ├── ambassador.tsx
│   ├── benefits.tsx
│   ├── bubble-canvas.jsx
│   ├── marquee-strips.tsx
│   ├── products.tsx
│   └── titled.tsx
│
├── data/
│   ├── faq.json
│   ├── posts.json
│   └── products.json
│
├── public/
│   ├── images/
│   ├── favicon.ico
│
├── globals.css
└── README.md
```

---

## 🧑‍💻 Development Timeline

| Day       | Task                                                           |
| --------- | -------------------------------------------------------------- |
| **Day 1** | Initialize Next.js app, Tailwind setup, layout (Navbar/Footer) |
| **Day 2** | Build Home page (Hero, Product showcase, Blog preview)         |
| **Day 3** | Implement Shop page + Product grid                             |
| **Day 4** | Dynamic Product Detail pages (`[slug]`)                        |
| **Day 5** | Blog listing and detail pages                                  |
| **Day 6** | About, FAQ, and Contact pages                                  |
| **Day 7** | Responsive tweaks, animations, final polish, deploy            |

---

## 🌍 Deployment

Deployed via **Vercel** for automatic builds and global CDN distribution.
Each push to GitHub triggers a new deployment.

Features:

* ✅ Free SSL (HTTPS)
* ✅ Automatic builds from `main` brabnch
* ✅ SEO-ready with meta tags via `next/head`

---

## 🧠 Key Learnings

* Component-based architecture with reusability in mind.
* Static site generation with dynamic data.
* Handling responsive UI challenges (hero scaling, text visibility).
* Integrating SEO, accessibility, and performance optimizations in Next.js.

---

## 👨‍💻 Author

**Taha Saif**
Full Stack Developer
🌐 [Portfolio](https://tahaa-portfolio.vercel.app/)
📧 [Contact Me](mailto:tahasaif.dev@gmail.com)

---


