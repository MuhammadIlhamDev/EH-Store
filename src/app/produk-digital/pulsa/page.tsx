"use client";

import React, { useState } from "react";
import { ArrowLeft, Phone, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";

const PulsaPage: React.FC = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);

  const operators = [
    {
      name: "Telkomsel",
      prefix: ["0811", "0812", "0813", "0821", "0822", "0823", "0852", "0853"],
    },
    {
      name: "Indosat",
      prefix: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
    },
    { name: "XL", prefix: ["0817", "0818", "0819", "0859", "0877", "0878"] },
    { name: "Tri", prefix: ["0895", "0896", "0897", "0898", "0899"] },
    {
      name: "Smartfren",
      prefix: [
        "0881",
        "0882",
        "0883",
        "0884",
        "0885",
        "0886",
        "0887",
        "0888",
        "0889",
      ],
    },
    { name: "Axis", prefix: ["0831", "0832", "0833", "0838"] },
  ];

  const nominalPulsa = [
    { nominal: 5000, harga: 5500 },
    { nominal: 10000, harga: 10500 },
    { nominal: 15000, harga: 15500 },
    { nominal: 20000, harga: 20500 },
    { nominal: 25000, harga: 25500 },
    { nominal: 30000, harga: 30500 },
    { nominal: 50000, harga: 50500 },
    { nominal: 100000, harga: 100500 },
  ];

 const detectOperator = (number: string) => {
  for (const op of operators) {
    if (op.prefix.some((p) => number.startsWith(p))) {
      return op.name;
    }
  }
  return "";
};


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    if (value.length >= 4) {
      setSelectedOperator(detectOperator(value));
    } else {
      setSelectedOperator("");
    }
  };

  const handleBuy = () => {
    if (!phoneNumber || !selectedNominal) {
      alert("Mohon lengkapi nomor HP dan pilih nominal pulsa");
      return;
    }
    alert(
      `Pembelian pulsa Rp${selectedNominal.toLocaleString()} untuk ${phoneNumber} (${selectedOperator}) sedang diproses. Fitur pembayaran akan segera hadir!`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/produk-digital")}
            className="cursor-pointer flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Produk Digital
          </button>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              📱
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pulsa All Operator
            </h1>
            <p className="text-xl text-gray-600">
              Isi pulsa cepat, mudah, dan murah
            </p>
          </div>

          {/* Form Pembelian */}
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
                onChange={handlePhoneChange}
                placeholder="08xxxxxxxxxx"
                maxLength={13}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              />
              {selectedOperator && (
                <div className="mt-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    Operator: {selectedOperator}
                  </span>
                </div>
              )}
            </div>

            {/* Pilihan Nominal */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-3">
                Pilih Nominal Pulsa
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {nominalPulsa.map((item) => (
                  <button
                    key={item.nominal}
                    onClick={() => setSelectedNominal(item.nominal)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedNominal === item.nominal
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <div className="font-bold text-lg text-gray-800">
                      Rp{item.nominal.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Rp{item.harga.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Pembelian */}
            {selectedNominal && phoneNumber && (
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
                    <span className="text-gray-600">Nominal Pulsa:</span>
                    <span className="font-semibold">
                      Rp{selectedNominal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-800 font-bold">
                      Total Bayar:
                    </span>
                    <span className="text-blue-600 font-bold text-xl">
                      Rp
                      {nominalPulsa
                        .find((item) => item.nominal === selectedNominal)
                        ?.harga.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Button Beli */}
            <button
              onClick={handleBuy}
              disabled={!phoneNumber || !selectedNominal}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
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

export default PulsaPage;
