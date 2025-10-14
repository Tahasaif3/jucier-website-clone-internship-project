"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();

  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => setMounted(true), []);

  const dropdownPagesColumn1 = ["Home 1", "Home 2", "Blog", "FAQ", "Shop", "Shop Details"];
  const dropdownPagesColumn2 = [
    "Blog Details",
    "Changelog",
    "Style Guide",
    "Licenses",
    "404 Error Page",
    "Protected Page",
  ];

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => setShowDropdown(false), 200);
  };

  // ✅ Cart Calculations
  const subtotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceNum * item.quantity;
  }, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* ✅ Header */}
      <header className="z-50 w-full bg-[#d91645]" aria-label="Primary">
        <nav
          className={cn(
            "mx-auto max-w-6xl px-4 py-4 md:px-6 flex items-center justify-between relative",
            mounted && "animate-[nav-sway_800ms_ease-out_1]"
          )}
        >
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">JUICER</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-white">
              <path d="M20.5 4.5c-5.3 0-9.2 2.3-11.9 7-.4.7-.7 1.4-.9 2.1 2.3.2 4.5-.2 6.7-1.2 2.6-1.2 4.7-3.1 6.1-5.6zM9.4 14.9c-1.5.6-3 .9-4.6.9H3v.9c0 1.9 1.6 3.4 3.6 3.4 2.8 0 4.9-2.2 4.9-4.9v-.7c-.6.3-1.2.4-1.9.4-.7 0-1.3 0-2-.1z" />
            </svg>
          </Link>

          {/* ✅ Nav Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-6 ml-auto">
            {["Home", "About", "Shop", "Pages", "Blog", "Contact"].map((item) => (
              <li key={item} className="relative">
                {item === "Pages" ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="#"
                      className="text-lg font-semibold tracking-wide text-white/90 hover:text-white"
                    >
                      {item}
                    </Link>

                    {showDropdown && (
                      <div className="absolute left-0 top-full mt-4 w-72 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 p-6 z-50 animate-fadeIn">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {[...dropdownPagesColumn1, ...dropdownPagesColumn2].map((page) => (
                            <Link
                              key={page}
                              href={`/${page.replace(/\s+/g, "-")}`}
                              className="hover:text-[#d91645] font-semibold text-[16px]"
                            >
                              {page}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item === "Home" ? "/" : `/${item}`}
                    className="text-lg font-semibold tracking-wide text-white/90 hover:text-white"
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ✅ Cart & Mobile Toggle */}
          <div className="flex items-center gap-4 ml-4">
            {/* Cart Button (Visible on all devices) */}
            <button
              onClick={() => setShowCart(true)}
              className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#d91645] shadow-sm hover:opacity-90"
            >
              <span>Cart</span>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#d91645] text-white text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger Icon (Mobile) */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-white hover:opacity-80 transition"
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* ✅ Mobile Slide-Down Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#d91645] text-white px-6 py-4 space-y-3 shadow-lg"
            >
              {["Home", "About", "Shop", "Pages", "Blog", "Contact"].map((item) => (
                <div key={item}>
                  {item === "Pages" ? (
                    <>
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                      >
                        {item}
                        <span>{showDropdown ? "−" : "+"}</span>
                      </button>
                      {showDropdown && (
                        <div className="pl-3 mt-2 space-y-2 text-[15px]">
                          {[...dropdownPagesColumn1, ...dropdownPagesColumn2].map((page) => (
                            <Link
                              key={page}
                              href={`/${page.replace(/\s+/g, "-")}`}
                              onClick={() => setShowMobileMenu(false)}
                              className="block text-white/90 hover:text-white"
                            >
                              {page}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item === "Home" ? "/" : `/${item}`}
                      onClick={() => setShowMobileMenu(false)}
                      className="block font-semibold text-lg text-white/90 hover:text-white"
                    >
                      {item}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </header>

{/* ✅ Cart Modal — Slide In from Right */}
<AnimatePresence>
  {showCart && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/60 flex justify-end"
      onClick={() => setShowCart(false)}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[400px] bg-white h-full overflow-y-auto shadow-lg relative p-6"
      >
        <button
          onClick={() => setShowCart(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#d91645] transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[#d91645]">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingCart className="h-16 w-16 text-[#d91645]/20 mb-4" />
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <Link
              href="/shop"
              onClick={() => setShowCart(false)}
              className="mt-4 px-4 py-2 bg-[#d91645] text-white rounded-md hover:bg-[#b8123a] transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start justify-between border-b pb-4">
                  <div className="flex-1">
                     {/* @ts-expect-error:error */}
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-[#d91645] font-medium mt-1">{item.price}</p>
                    <div className="flex items-center mt-3 gap-2">
                      <button
                                          //@ts-expect-error:error
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-full bg-[#d91645]/10 text-[#d91645] flex items-center justify-center hover:bg-[#d91645]/20 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                                          //@ts-expect-error:error
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-[#d91645]/10 text-[#d91645] flex items-center justify-center hover:bg-[#d91645]/20 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    //@ts-expect-error:error
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 ml-2 mt-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="my-2 border-gray-200" />
              <div className="flex justify-between font-bold text-lg text-[#d91645]">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* ✅ Checkout Button */}
              <Link
                href="/Checkout"
                onClick={() => setShowCart(false)}
                className="mt-4 w-full block text-center py-3 bg-[#d91645] text-white font-semibold rounded-md hover:bg-[#b8123a] transition-colors shadow-md hover:shadow-lg"
              >
                Go to Checkout
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
