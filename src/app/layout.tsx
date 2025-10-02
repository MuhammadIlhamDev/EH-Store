import "./globals.css";
import Navbar from "@/app/components/Navbar";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export const metadata = {
  title: "E&H Store",
  description: "Solusi Lengkap untuk Kebutuhan HP & Digital Anda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-16">{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
