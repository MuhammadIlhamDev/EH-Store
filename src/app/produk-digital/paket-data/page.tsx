"use client";

import React, { useState } from "react";
import { ArrowLeft, Phone, Wifi } from "lucide-react";
import { useRouter } from "next/navigation";

// Definisikan tipe untuk paket data
interface DataPackage {
  name: string;
  quota: string;
  period: string;
  price: number;
}

const PaketDataPage: React.FC = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<DataPackage | null>(null);

  const operators = ["Telkomsel", "Indosat", "XL", "Tri", "Smartfren", "Axis"];

  const dataPackages: Record<string, DataPackage[]> = {
    Telkomsel: [
      { name: "1GB / 7 Hari", quota: "1GB", period: "7 Hari", price: 15000 },
      { name: "3GB / 30 Hari", quota: "3GB", period: "30 Hari", price: 35000 },
      { name: "8GB / 30 Hari", quota: "8GB", period: "30 Hari", price: 55000 },
      { name: "15GB / 30 Hari", quota: "15GB", period: "30 Hari", price: 85000 },
      { name: "25GB / 30 Hari", quota: "25GB", period: "30 Hari", price: 120000 },
      { name: "50GB / 30 Hari", quota: "50GB", period: "30 Hari", price: 180000 },
    ],
    Indosat: [
      { name: "2GB / 7 Hari", quota: "2GB", period: "7 Hari", price: 12000 },
      { name: "5GB / 30 Hari", quota: "5GB", period: "30 Hari", price: 30000 },
      { name: "10GB / 30 Hari", quota: "10GB", period: "30 Hari", price: 50000 },
      { name: "20GB / 30 Hari", quota: "20GB", period: "30 Hari", price: 80000 },
      { name: "30GB / 30 Hari", quota: "30GB", period: "30 Hari", price: 110000 },
      { name: "60GB / 30 Hari", quota: "60GB", period: "30 Hari", price: 165000 },
    ],
    XL: [
      { name: "1.5GB / 7 Hari", quota: "1.5GB", period: "7 Hari", price: 11000 },
      { name: "4GB / 30 Hari", quota: "4GB", period: "30 Hari", price: 28000 },
      { name: "10GB / 30 Hari", quota: "10GB", period: "30 Hari", price: 48000 },
      { name: "20GB / 30 Hari", quota: "20GB", period: "30 Hari", price: 75000 },
      { name: "35GB / 30 Hari", quota: "35GB", period: "30 Hari", price: 105000 },
      { name: "55GB / 30 Hari", quota: "55GB", period: "30 Hari", price: 155000 },
    ],
    Tri: [
      { name: "2GB / 7 Hari", quota: "2GB", period: "7 Hari", price: 10000 },
      { name: "6GB / 30 Hari", quota: "6GB", period: "30 Hari", price: 25000 },
      { name: "12GB / 30 Hari", quota: "12GB", period: "30 Hari", price: 45000 },
      { name: "25GB / 30 Hari", quota: "25GB", period: "30 Hari", price: 70000 },
      { name: "40GB / 30 Hari", quota: "40GB", period: "30 Hari", price: 95000 },
      { name: "65GB / 30 Hari", quota: "65GB", period: "30 Hari", price: 140000 },
    ],
    Smartfren: [
      { name: "2GB / 7 Hari", quota: "2GB", period: "7 Hari", price: 13000 },
      { name: "5GB / 30 Hari", quota: "5GB", period: "30 Hari", price: 32000 },
      { name: "10GB / 30 Hari", quota: "10GB", period: "30 Hari", price: 52000 },
      { name: "20GB / 30 Hari", quota: "20GB", period: "30 Hari", price: 82000 },
      { name: "30GB / 30 Hari", quota: "30GB", period: "30 Hari", price: 115000 },
      { name: "50GB / 30 Hari", quota: "50GB", period: "30 Hari", price: 160000 },
    ],
    Axis: [
      { name: "1.5GB / 7 Hari", quota: "1.5GB", period: "7 Hari", price: 12000 },
      { name: "4GB / 30 Hari", quota: "4GB", period: "30 Hari", price: 29000 },
      { name: "9GB / 30 Hari", quota: "9GB", period: "30 Hari", price: 49000 },
      { name: "18GB / 30 Hari", quota: "18GB", period: "30 Hari", price: 78000 },
      { name: "30GB / 30 Hari", quota: "30GB", period: "30 Hari", price: 108000 },
      { name: "50GB / 30 Hari", quota: "50GB", period: "30 Hari", price: 158000 },
    ],
  };

  const handleBuy = () => {
    if (!phoneNumber || !selectedOperator || !selectedPackage) {
      alert("Mohon lengkapi semua data pembelian");
      return;
    }
    alert(
      `Pembelian paket ${selectedPackage.name} ${selectedOperator} untuk ${phoneNumber} sedang diproses. Fitur pembayaran akan segera hadir!`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/produk-digital")}
            className="cursor-pointer flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Produk Digital
          </button>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              📶
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Paket Data Internet
            </h1>
            <p className="text-xl text-gray-600">
              Paket data murah semua operator
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Input Nomor HP */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                <Phone className="w-5 h-5 inline mr-2" />
                Nomor HP
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                placeholder="08xxxxxxxxxx"
                maxLength={13}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
              />
            </div>

            {/* Pilih Operator */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                <Wifi className="w-5 h-5 inline mr-2" />
                Pilih Operator
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {operators.map((op) => (
                  <button
                    key={op}
                    onClick={() => {
                      setSelectedOperator(op);
                      setSelectedPackage(null);
                    }}
                    className={`p-3 rounded-lg border-2 transition-all font-medium ${
                      selectedOperator === op
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            {/* Paket Data */}
            {selectedOperator && (
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">
                  Pilih Paket Data
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {dataPackages[selectedOperator].map((pkg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPackage?.name === pkg.name
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <div className="font-bold text-lg text-gray-800">
                        {pkg.quota}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        Masa aktif: {pkg.period}
                      </div>
                      <div className="text-purple-600 font-bold">
                        Rp{pkg.price.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Detail Pembelian */}
            {selectedPackage && phoneNumber && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">Detail Pembelian</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nomor HP:</span>
                    <span className="font-semibold">{phoneNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operator:</span>
                    <span className="font-semibold">{selectedOperator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paket:</span>
                    <span className="font-semibold">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-800 font-bold">Total Bayar:</span>
                    <span className="text-purple-600 font-bold text-xl">
                      Rp{selectedPackage.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Button Beli */}
            <button
              onClick={handleBuy}
              disabled={!phoneNumber || !selectedOperator || !selectedPackage}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Beli Sekarang
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Proses instant • Harga terbaik • Aman & terpercaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketDataPage;
