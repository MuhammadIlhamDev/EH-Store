"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              E&H
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              E&H Store
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-purple-600 transition"
            >
              Home
            </Link>
            <Link
              href="/service-hape"
              className="font-medium text-gray-700 hover:text-purple-600 transition"
            >
              Service Hape
            </Link>
            <Link
              href="/produk-digital"
              className="font-medium text-gray-700 hover:text-purple-600 transition"
            >
              Produk Digital
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block w-full py-2 px-4 hover:bg-purple-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/service-hape"
              className="block w-full py-2 px-4 hover:bg-purple-50 rounded-lg"
            >
              Service Hape
            </Link>
            <Link
              href="/produk-digital"
              className="block w-full py-2 px-4 hover:bg-purple-50 rounded-lg"
            >
              Produk Digital
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
