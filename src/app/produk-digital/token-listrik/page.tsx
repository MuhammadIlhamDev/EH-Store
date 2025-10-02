"use client";

import React, { useState } from "react";
import { ArrowLeft, Zap, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const TokenListrikPage: React.FC = () => {
  const router = useRouter();
  const [meterNumber, setMeterNumber] = useState("");
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);
  const [customerName, setCustomerName] = useState("");

  const nominalToken = [
    { nominal: 20000, token: "Rp20.000" },
    { nominal: 50000, token: "Rp50.000" },
    { nominal: 100000, token: "Rp100.000" },
    { nominal: 150000, token: "Rp150.000" },
    { nominal: 200000, token: "Rp200.000" },
    { nominal: 250000, token: "Rp250.000" },
    { nominal: 300000, token: "Rp300.000" },
    { nominal: 500000, token: "Rp500.000" },
    { nominal: 1000000, token: "Rp1.000.000" },
  ];

  const handleCheckMeter = () => {
    // Simulasi cek nomor meter
    if (meterNumber.length >= 11) {
      setCustomerName("Budi Santoso"); // Simulasi nama pelanggan
    }
  };

  const handleBuy = () => {
    if (!meterNumber || !selectedNominal) {
      alert("Mohon lengkapi nomor meter dan pilih nominal token");
      return;
    }
    alert(
      `Pembelian token listrik ${selectedNominal.toLocaleString()} untuk meter ${meterNumber} sedang diproses. Fitur pembayaran akan segera hadir!`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/produk-digital")}
            className="cursor-pointer flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Produk Digital
          </button>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              💡
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Token Listrik PLN
            </h1>
            <p className="text-xl text-gray-600">
              Token listrik PLN prabayar instant
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Input Nomor Meter */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                <Zap className="w-5 h-5 inline mr-2" />
                Nomor Meter / ID Pelanggan
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={meterNumber}
                  onChange={(e) =>
                    setMeterNumber(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Masukkan 11-12 digit nomor meter"
                  maxLength={12}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                />
                <button
                  onClick={handleCheckMeter}
                  disabled={meterNumber.length < 11}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cek
                </button>
              </div>
              {customerName && (
                <div className="mt-2 flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                  <Home className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    Nama Pelanggan: {customerName}
                  </span>
                </div>
              )}
            </div>

            {/* Pilihan Nominal */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-3">
                Pilih Nominal Token
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nominalToken.map((item) => (
                  <button
                    key={item.nominal}
                    onClick={() => setSelectedNominal(item.nominal)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedNominal === item.nominal
                        ? "border-orange-600 bg-orange-50"
                        : "border-gray-300 hover:border-orange-400"
                    }`}
                  >
                    <div className="font-bold text-lg text-gray-800">
                      {item.token}
                    </div>
                    <div className="text-sm text-gray-600">
                      Token Listrik
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Informasi Penting */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <h3 className="font-bold text-yellow-800 mb-2">
                ⚠️ Informasi Penting
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Pastikan nomor meter sudah benar sebelum melakukan pembelian</li>
                <li>• Token akan dikirim otomatis via WhatsApp & SMS</li>
                <li>• Proses pengisian instant maksimal 5 menit</li>
                <li>• Admin fee sudah termasuk dalam harga</li>
              </ul>
            </div>

            {/* Detail Pembelian */}
            {selectedNominal && meterNumber && customerName && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">Detail Pembelian</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nomor Meter:</span>
                    <span className="font-semibold">{meterNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nama Pelanggan:</span>
                    <span className="font-semibold">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nominal Token:</span>
                    <span className="font-semibold">
                      Rp{selectedNominal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-800 font-bold">Total Bayar:</span>
                    <span className="text-orange-600 font-bold text-xl">
                      Rp{selectedNominal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Button Beli */}
            <button
              onClick={handleBuy}
              disabled={!meterNumber || !selectedNominal || !customerName}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Beli Token Sekarang
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Token instant • Harga terbaik • Aman & terpercaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenListrikPage;