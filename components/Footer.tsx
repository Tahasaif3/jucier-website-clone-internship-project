import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-orange-50 text-foreground w-full  flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto px-6 py-10 flex-1">
        {/* Top nav with double rules */}
        <div className="border-t border-[var(--footer-border-color)]">
          <nav aria-label="Footer primary" className="py-5 md:py-6">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-y-4 justify-items-start md:justify-items-center text-sm md:text-base font-medium">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/changelog">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/style-guide">
                  Style guide
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/licenses">
                  Licenses
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t border-[var(--footer-border-color)]" />
        </div>

        {/* Info grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                Address: <span className="font-semibold">500 Terry Francine Street</span>
              </li>
              <li>San Francisco, CA 94158</li>
              <li>
                Phone: <span className="font-semibold">123-456-7890</span>
              </li>
              <li>
                Email:{" "}
                <a className="font-semibold underline hover:no-underline" href="mailto:info@mysite.com">
                  info@mysite.com
                </a>
              </li>
            </ul>
          </section>

          {/* Brand + socials */}
          <section className="text-center">
            <div className="mb-4">
              <span className="text-2xl md:text-4xl font-extrabold tracking-wide">JUCIER</span>
              <sup className="text-xs font-semibold ml-1 align-super">®</sup>
            </div>
            <ul className="flex items-center justify-center gap-4 text-lg">
              <li>
                <Link className="hover:underline" href="#">
                  Facebook
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-60">
                •
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Twitter
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-60">
                •
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Instagram
                </Link>
              </li>
            </ul>
          </section>

          {/* Opening hours */}
          <section aria-labelledby="footer-hours" className="md:text-right">
            <h3 id="footer-hours" className="text-lg font-semibold mb-4">
              Opening hours
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                Mon–Fri: <span className="font-semibold">8am–6:30pm</span>
              </li>
              <li>
                Sat: <span className="font-semibold">9am–4pm</span>
              </li>
              <li>
                Sun: <span className="font-semibold">Closed</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-[var(--footer-border-color)] py-4 text-center text-xs md:text-sm leading-relaxed text-foreground/80 bg-orange-100">
        Copyright © 2025 designed by{" "}
        <a className="underline hover:no-underline" href="#" rel="noopener noreferrer">
          Themetechmount
        </a>
        . — Powered by{" "}
        <a className="underline hover:no-underline" href="#" rel="noopener noreferrer">
          Webflow
        </a>
      </div>
    </footer>
  )
}

export default Footer
