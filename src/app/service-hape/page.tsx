"use client";

import React from "react";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface ServicePrice {
  brand: string;
  price: string;
}

interface ServiceItem {
  title: string;
  prices: ServicePrice[];
  desc: string;
}

const ServiceHapePage: React.FC = () => {
  const router = useRouter();

  const softwareServices: ServiceItem[] = [
    {
      title: "FLASH/INSTALL ULANG ROM",
      prices: [
        { brand: "Xiaomi/Redmi/Poco", price: "Rp 80.000" },
        { brand: "Infinix/Tecno", price: "Rp 80.000" },
        { brand: "Samsung A Series", price: "Rp 80.000" },
        { brand: "Oppo/Realme", price: "Rp 80.000" },
        { brand: "Vivo", price: "Rp 80.000" },
      ],
      desc: "HP macet di logo? Lemot? Kena virus? Kami install ulang sistem HP supaya lancar lagi",
    },
    {
      title: "BYPASS FRP (GOOGLE ACCOUNT)",
      prices: [{ brand: "Semua merk Android", price: "Rp 50.000" }],
      desc: "Solusi tepat untuk HP yang terkunci akun Google",
    },
    {
      title: "REMOVE PATTERN/PIN/PASSWORD",
      prices: [{ brand: "Semua merk Android", price: "Rp 50.000" }],
      desc: "Proses cepat, data aman jika HP mendukung",
    },
    {
      title: "MI CLOUD REMOVE (Tanpa Server)",
      prices: [{ brand: "Xiaomi/Redmi/Poco", price: "Rp 50.000" }],
      desc: "Khusus untuk pengguna Xiaomi yang terkunci Mi Account",
    },
    {
      title: "MI CLOUD REMOVE (Dengan Server)",
      prices: [{ brand: "Xiaomi/Redmi/Poco", price: "Rp 180.000" }],
      desc: "Untuk kasus Mi Account yang kompleks dan membutuhkan server",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proses Cepat",
      desc: "30 menit - 2 jam",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Bergaransi",
      desc: "Semua layanan bergaransi",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Harga Terjangkau",
      desc: "Kompetitif & ramah kantong",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Teknisi Berpengalaman",
      desc: "Handal & profesional",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tombol Kembali */}
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Home
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service HP Profesional
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flash ROM • FRP Bypass • Remove Lock • Mi Cloud • Ganti LCD
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* SOFTWARE SERVICES */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                SOFTWARE SERVICES
              </h2>
              <p className="text-gray-600">
                Solusi lengkap untuk semua masalah software HP Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600"
                >
                  <h3 className="font-bold text-lg mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {service.prices.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-sm text-gray-600">
                          {item.brand}
                        </span>
                        <span className="font-bold text-purple-600">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HARDWARE SERVICES */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-500 mb-2">
                HARDWARE SERVICES
              </h2>
              <p className="text-gray-600">
                Perbaikan hardware profesional dengan spare part berkualitas
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-500">
                <h3 className="font-bold text-xl mb-4 text-gray-800">
                  GANTI LCD TOUCHSCREEN
                </h3>
                <div className="flex justify-between items-center py-3 mb-4 bg-gray-50 rounded-lg px-4">
                  <span className="font-medium text-gray-700">
                    Jasa Pemasangan
                  </span>
                  <span className="font-bold text-2xl text-red-500">
                    Rp 65.000
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Layar HP pecah karena terjatuh</p>
                  <p>• LCD berubah warna atau bergaris</p>
                  <p>• Touchscreen tidak responsif</p>
                  <p className="italic text-gray-500 mt-4">
                    *Belum termasuk harga spare part LCD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHapePage;
