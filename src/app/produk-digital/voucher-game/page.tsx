"use client";

import React, { useState } from "react";
import { ArrowLeft, Gamepad2, User } from "lucide-react";
import { useRouter } from "next/navigation";

// Definisi tipe untuk item game
type GameItem = {
  price: number;
  bonus: number;
  [key: string]: string | number;
};

const VoucherGamePage: React.FC = () => {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState("");
  const [gameId, setGameId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);

  const games = [
    {
      name: "Mobile Legends",
      id: "mlbb",
      icon: "🎮",
      needZone: true,
      items: [
        { diamonds: 86, bonus: 0, price: 22000 },
        { diamonds: 172, bonus: 0, price: 44000 },
        { diamonds: 257, bonus: 0, price: 66000 },
        { diamonds: 344, bonus: 0, price: 88000 },
        { diamonds: 429, bonus: 0, price: 110000 },
        { diamonds: 514, bonus: 0, price: 132000 },
        { diamonds: 706, bonus: 0, price: 176000 },
        { diamonds: 1050, bonus: 74, price: 264000 },
        { diamonds: 2195, bonus: 154, price: 528000 },
      ],
    },
    {
      name: "Free Fire",
      id: "freefire",
      icon: "🔥",
      needZone: false,
      items: [
        { diamonds: 50, bonus: 0, price: 7000 },
        { diamonds: 100, bonus: 0, price: 14000 },
        { diamonds: 140, bonus: 0, price: 19000 },
        { diamonds: 210, bonus: 0, price: 28000 },
        { diamonds: 355, bonus: 0, price: 47000 },
        { diamonds: 720, bonus: 0, price: 95000 },
        { diamonds: 1450, bonus: 0, price: 190000 },
        { diamonds: 2180, bonus: 0, price: 285000 },
      ],
    },
    {
      name: "PUBG Mobile",
      id: "pubg",
      icon: "🎯",
      needZone: false,
      items: [
        { uc: 60, bonus: 0, price: 16000 },
        { uc: 325, bonus: 0, price: 82000 },
        { uc: 660, bonus: 0, price: 163000 },
        { uc: 1800, bonus: 0, price: 405000 },
        { uc: 3850, bonus: 0, price: 815000 },
      ],
    },
    {
      name: "Genshin Impact",
      id: "genshin",
      icon: "⚔️",
      needZone: true,
      items: [
        { crystal: 60, bonus: 0, price: 16000 },
        { crystal: 330, bonus: 0, price: 79000 },
        { crystal: 1090, bonus: 0, price: 249000 },
        { crystal: 2240, bonus: 0, price: 489000 },
        { crystal: 3880, bonus: 0, price: 799000 },
        { crystal: 8080, bonus: 0, price: 1599000 },
      ],
    },
    {
      name: "Call of Duty Mobile",
      id: "codm",
      icon: "🔫",
      needZone: false,
      items: [
        { cp: 26, bonus: 0, price: 6000 },
        { cp: 53, bonus: 0, price: 12000 },
        { cp: 106, bonus: 0, price: 24000 },
        { cp: 267, bonus: 0, price: 59000 },
        { cp: 534, bonus: 0, price: 118000 },
        { cp: 1089, bonus: 0, price: 238000 },
      ],
    },
    {
      name: "Valorant",
      id: "valorant",
      icon: "🎪",
      needZone: false,
      items: [
        { vp: 125, bonus: 0, price: 20000 },
        { vp: 420, bonus: 0, price: 65000 },
        { vp: 700, bonus: 0, price: 110000 },
        { vp: 1375, bonus: 0, price: 210000 },
        { vp: 2400, bonus: 0, price: 350000 },
        { vp: 4000, bonus: 0, price: 575000 },
      ],
    },
  ];

  const selectedGameData = games.find((g) => g.id === selectedGame);

  const handleBuy = () => {
    if (!selectedGame || !gameId || !selectedItem) {
      alert("Mohon lengkapi semua data pembelian");
      return;
    }
    if (selectedGameData?.needZone && !zoneId) {
      alert("Mohon masukkan Zone ID");
      return;
    }
    alert(
      `Pembelian ${selectedGameData?.name} untuk ID ${gameId} sedang diproses. Fitur pembayaran akan segera hadir!`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/produk-digital")}
            className="cursor-pointer flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Produk Digital
          </button>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              🎮
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Voucher Game
            </h1>
            <p className="text-xl text-gray-600">
              Top up game favorit kamu dengan harga murah
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Pilih Game */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                <Gamepad2 className="w-5 h-5 inline mr-2" />
                Pilih Game
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {games.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      setSelectedGame(game.id);
                      setSelectedItem(null);
                    }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedGame === game.id
                        ? "border-green-600 bg-green-50"
                        : "border-gray-300 hover:border-green-400"
                    }`}
                  >
                    <div className="text-3xl mb-2">{game.icon}</div>
                    <div className="font-semibold text-sm">{game.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Game ID */}
            {selectedGame && (
              <>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    <User className="w-5 h-5 inline mr-2" />
                    {selectedGameData?.needZone ? "User ID" : "Game ID"}
                  </label>
                  <input
                    type="text"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    placeholder={`Masukkan ${
                      selectedGameData?.needZone ? "User ID" : "Game ID"
                    }`}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-lg"
                  />
                </div>

                {selectedGameData?.needZone && (
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-3">
                      Zone ID / Server ID
                    </label>
                    <input
                      type="text"
                      value={zoneId}
                      onChange={(e) => setZoneId(e.target.value)}
                      placeholder="Masukkan Zone ID"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-lg"
                    />
                  </div>
                )}

                {/* Pilih Item */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Pilih Nominal
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedGameData?.items.map((item, idx) => {
                      const itemKey = Object.keys(item)[0];
                      const itemValue = item[itemKey as keyof typeof item];
                      const bonus = item.bonus;
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedItem(item)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            selectedItem === item
                              ? "border-green-600 bg-green-50"
                              : "border-gray-300 hover:border-green-400"
                          }`}
                        >
                          <div className="font-bold text-lg text-gray-800">
                            {itemValue} {itemKey.toUpperCase()}
                            {bonus > 0 && (
                              <span className="text-sm text-green-600 ml-2">
                                +{bonus} Bonus
                              </span>
                            )}
                          </div>
                          <div className="text-green-600 font-bold mt-1">
                            Rp{item.price.toLocaleString()}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Detail Pembelian */}
            {selectedItem && gameId && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">Detail Pembelian</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Game:</span>
                    <span className="font-semibold">{selectedGameData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {selectedGameData?.needZone ? "User ID" : "Game ID"}:
                    </span>
                    <span className="font-semibold">{gameId}</span>
                  </div>
                  {selectedGameData?.needZone && zoneId && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zone ID:</span>
                      <span className="font-semibold">{zoneId}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Item:</span>
                    <span className="font-semibold">
                      {Object.values(selectedItem)[0]}{" "}
                      {Object.keys(selectedItem)[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-800 font-bold">Total Bayar:</span>
                    <span className="text-green-600 font-bold text-xl">
                      Rp{selectedItem.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Button Beli */}
            <button
              onClick={handleBuy}
              disabled={
                !selectedGame ||
                !gameId ||
                !selectedItem ||
                (selectedGameData?.needZone && !zoneId)
              }
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
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

export default VoucherGamePage;
