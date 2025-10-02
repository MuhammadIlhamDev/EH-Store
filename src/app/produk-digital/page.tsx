"use client";

import React from "react";
import {
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ProdukDigital: React.FC = () => {
  const router = useRouter();

  const products = [
    {
      icon: "📱",
      title: "Pulsa All Operator",
      desc: "Telkomsel, Indosat, XL, Tri, Smartfren, Axis",
      color: "from-blue-500 to-blue-600",
      link: "/produk-digital/pulsa",
    },
    {
      icon: "📶",
      title: "Paket Data Internet",
      desc: "Paket data murah semua operator",
      color: "from-purple-500 to-purple-600",
      link: "/produk-digital/paket-data",
    },
    {
      icon: "💡",
      title: "Token Listrik PLN",
      desc: "Token listrik PLN prabayar instant",
      color: "from-yellow-500 to-orange-500",
      link: "/produk-digital/token-listrik",
    },
    {
      icon: "🎮",
      title: "Voucher Game",
      desc: "Mobile Legends, Free Fire, PUBG, dll",
      color: "from-green-500 to-emerald-600",
      link: "/produk-digital/voucher-game",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Produk Digital
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pulsa, Paket Data, Token Listrik & Voucher Game - All Operator
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Card Produk */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center text-3xl mb-4`}
                >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                <button
                  onClick={() => router.push(product.link)}
                  className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition"
                >
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>

          {/* Banner Coming Soon */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Fitur Produk Digital Segera Hadir
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Login dengan Google untuk mulai transaksi. Dashboard user, top-up
              saldo, dan history transaksi akan segera diluncurkan
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Harga Real-time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Proses Instant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Harga Termurah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukDigital;
