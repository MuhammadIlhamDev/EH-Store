"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6289503596485?text=Halo%20E%26H%20Store,%20saya%20mau%20konsultasi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40 animate-bounce"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
