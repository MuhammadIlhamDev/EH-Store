"use client";

import React from "react";
import {
  Wrench,
  Smartphone,
  ChevronRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

// fungsi navigasi sederhana (bisa diganti dengan Next.js router atau React Router)
const navigateTo = (path: string) => {
  window.location.href = `/${path}`;
};

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to E&amp;H Store
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Solusi Lengkap untuk Kebutuhan HP &amp; Digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service Hape Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-300">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Service Hape</h3>
            <p className="text-white/80 mb-6">
              Flash ROM, FRP Bypass, Remove Lock, Mi Cloud, Ganti LCD - Teknisi
              Berpengalaman
            </p>
            <button
              onClick={() => navigateTo("service-hape")}
              className="cursor-pointer w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
            >
              <span>Lihat Layanan</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Produk Digital Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-300">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Produk Digital
            </h3>
            <p className="text-white/80 mb-6">
              Pulsa, Paket Data, Token Listrik, Voucher Game - Semua Operator,
              Harga Termurah
            </p>
            <button
              onClick={() => navigateTo("produk-digital")}
              className="cursor-pointer w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
            >
              <span>Belanja Sekarang</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-xl opacity-90">
            Siap melayani kebutuhan Anda 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg mb-2">0895-0359-6485</p>
            <p className="text-sm opacity-80">
              Chat langsung untuk konsultasi gratis
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Lokasi</h3>
            <p className="text-lg mb-2">Bandung, Jawa Barat</p>
            <p className="text-sm opacity-80">Bisa COD atau datang ke tempat</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
            <p className="text-lg mb-2">Senin - Minggu</p>
            <p className="text-sm opacity-80">08.00 - 21.00 WIB</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          2024 E&amp;H Store. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default HomePage;
