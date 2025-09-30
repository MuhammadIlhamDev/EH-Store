# Service HP FastFix - Website Landing Page

[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/yourusername/fastfix)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Website landing page profesional untuk layanan service HP dengan fitur chatbot interaktif yang cerdas.

## 🆕 Version History

### v1.1.0 (Current)
- ✨ **NEW**: Intelligent chatbot assistant
- 🤖 Auto-reply system untuk pertanyaan umum
- 💬 WhatsApp integration langsung dari chat
- 📱 Full responsive chatbot (mobile full-screen)
- ⚡ Quick reply buttons dengan horizontal scroll
- 🎨 Smooth animations & typing indicator

### v1.0.0 (Initial Release)
- 🌐 Landing page responsif
- 📱 WhatsApp floating button
- 🎨 Modern UI dengan gradient & animations
- 📋 Service pricing list
- 📍 Contact information section

## 📁 Struktur File

```
fastfix/
├── index.html          # File HTML utama
├── style.css           # Styling landing page
├── script.js           # JavaScript landing page
├── chatbot.css         # Styling chatbot (NEW v1.1.0)
├── chatbot.js          # Logic chatbot (NEW v1.1.0)
└── README.md           # Dokumentasi proyek
```

## 🎯 Fitur Utama

### ✨ Landing Page Features (v1.0.0)

- **Responsive Design**: Tampil sempurna di semua device
- **Smooth Animations**: Animasi halus pada scroll & hover
- **Modern UI/UX**: Gradient backgrounds & glassmorphism effects
- **WhatsApp Integration**: Floating button untuk kontak langsung
- **SEO Friendly**: Struktur HTML semantik
- **Fast Loading**: No external dependencies

### 🤖 Chatbot Features (v1.1.0)

- **Smart Auto-Reply**: Deteksi keyword otomatis untuk jawaban cepat
- **Quick Reply Buttons**: 8 tombol shortcut yang bisa di-scroll horizontal
- **Natural Conversation**: Bot memahami berbagai variasi pertanyaan
- **WhatsApp Integration**: Setiap response punya tombol langsung ke WA
- **Typing Indicator**: Animasi typing seperti chat asli
- **Full Responsive**: 
  - Desktop: Popup window (400x600px)
  - Mobile: Full-screen chat
- **Beautiful Animations**: Smooth slide, fade, dan pulse effects

### 💡 Chatbot Capabilities

Bot dapat menjawab pertanyaan tentang:
- 💰 **Harga** semua layanan
- 📱 **Flash ROM** / Install ulang
- 🔓 **FRP Bypass** / Google Account
- 🔒 **Remove Lock** / Lupa pola/PIN
- ☁️ **Mi Cloud** Remove
- 📱 **Ganti LCD** Touchscreen
- 📍 **Lokasi** & jam operasional
- 🛡️ **Garansi** layanan
- ⚡ **Waktu** pengerjaan

## 📱 Layanan yang Ditampilkan

### SOFTWARE SERVICES

| Layanan | Harga |
|---------|-------|
| Flash/Install Ulang ROM | Rp 80.000 |
| Bypass FRP (Google Account) | Rp 50.000 |
| Remove Pattern/PIN/Password | Rp 50.000 |
| Mi Cloud Remove (Tanpa Server) | Rp 50.000 |
| Mi Cloud Remove (Dengan Server) | Rp 180.000 |

### HARDWARE SERVICES

| Layanan | Harga |
|---------|-------|
| Ganti LCD Touchscreen | Rp 65.000 (jasa) |

*Semua layanan bergaransi!*

## 🚀 Cara Penggunaan

### 1. Setup Proyek

```bash
# Clone repository
git clone https://github.com/yourusername/fastfix.git

# Masuk ke folder
cd fastfix

# Buka di browser
# Atau gunakan live server
```

### 2. Menjalankan Website

- **Cara 1**: Double-click `index.html`
- **Cara 2**: Gunakan Live Server (VSCode)
- **Cara 3**: Python Simple Server
  ```bash
  python -m http.server 8000
  ```

### 3. Deploy ke Hosting

Upload semua file ke hosting:
- Vercel
- Netlify
- GitHub Pages
- Hosting tradisional (cPanel)

## 🎨 Kustomisasi

### Mengubah Nomor WhatsApp

**File: `index.html`**
```html
<!-- WhatsApp Float Button -->
<a href="https://wa.me/6289503596485?text=..." 
   <!-- ⬆️ Ubah nomor di sini -->
```

**File: `chatbot.js`**
```javascript
// Line ~280
href="https://wa.me/6289503596485?text=..."
// ⬆️ Ubah nomor di sini juga
```

### Mengubah Warna Tema

**File: `style.css` & `chatbot.css`**
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* ⬆️ Ubah warna sesuai brand Anda */

/* Accent color */
background: #ff6b6b;
/* ⬆️ Ubah accent color */
```

### Menambah Response Chatbot

**File: `chatbot.js`**
```javascript
responses: {
  // Tambahkan response baru di sini
  promo: {
    message: "🎉 Promo bulan ini...",
    hasWhatsApp: true
  }
}
```

### Menambah Quick Reply Button

**File: `chatbot.js`**
```javascript
quickReplies: [
  // Tambahkan button baru
  { text: "🎉 Promo", keyword: "promo" },
]
```

### Mengubah Harga Layanan

**File: `index.html`**
```html
<li>Xiaomi/Redmi/Poco 
  <span class="price">Rp 80.000</span>
  <!-- ⬆️ Ubah harga di sini -->
</li>
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling (Grid, Flexbox, Animations)
- **Vanilla JavaScript**: No dependencies
- **No Framework**: Pure web technologies

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Browsers | ✅ iOS & Android |

## ⚡ Performance

- **Lighthouse Score**: 95+
- **No External Dependencies**: Fast loading
- **Optimized Assets**: Minimal CSS/JS
- **Mobile-First**: Responsive design
- **SEO Ready**: Semantic HTML

## 📖 Dokumentasi Lengkap

### Chatbot API Reference

#### Menambah Response Baru

```javascript
// chatbot.js
responses: {
  keyword_baru: {
    message: "Pesan response Anda di sini<br>Bisa multi-line",
    hasWhatsApp: true // atau false
  }
}
```

#### Menambah Keyword Detection

```javascript
// chatbot.js - processMessage()
if (lowerMessage.includes('keyword')) {
  handleQuickReply('keyword_baru');
  return;
}
```

### Styling Guidelines

```css
/* Primary Colors */
--primary: #667eea;
--primary-dark: #764ba2;
--accent: #ff6b6b;

/* Spacing */
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 3rem;

/* Border Radius */
--radius-sm: 10px;
--radius-md: 15px;
--radius-lg: 20px;
```

## 🐛 Troubleshooting

### Chatbot tidak muncul?
1. Pastikan `chatbot.css` dan `chatbot.js` sudah di-link di `index.html`
2. Cek console browser (F12) untuk error
3. Clear cache browser (Ctrl + Shift + R)

### Quick replies terpotong?
- Sudah fixed di v1.1.0 dengan horizontal scroll
- Geser ke kiri-kanan untuk lihat semua button

### WhatsApp button overlap?
- Sudah fixed: WhatsApp di sebelah kiri chatbot
- Desktop: `right: 110px`
- Mobile: `bottom: 100px`

## 📝 Maintenance

### Update Konten
- Edit `index.html` untuk konten
- Edit `chatbot.js` untuk response bot
- Edit `style.css` & `chatbot.css` untuk styling

### Testing Checklist
- [ ] Test di Chrome, Firefox, Safari
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test chatbot responses
- [ ] Test WhatsApp links
- [ ] Test quick reply scroll
- [ ] Check console untuk errors

## 🤝 Contributing

Contributions are welcome! Silakan:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

**FastFix Service HP**
- 📱 WhatsApp: [0895-0359-6485](https://wa.me/6289503596485)
- 📍 Lokasi: Bandung, Jawa Barat
- ⏰ Jam Operasional: Senin-Minggu, 08.00-21.00 WIB

## 🙏 Acknowledgments

- Icon emoji untuk visual elements
- CSS Gradient inspiration dari UI Gradients
- Chatbot UX pattern dari modern messaging apps

---

**Made with ❤️ for FastFix Service HP**

*Website ini dibuat untuk memberikan pengalaman terbaik bagi pelanggan Service HP FastFix*

---

### 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/fastfix?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/fastfix?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/fastfix?style=social)

### 🔗 Links

- [Live Demo](https://fastfix.example.com)
- [Documentation](https://github.com/yourusername/fastfix/wiki)
- [Report Bug](https://github.com/yourusername/fastfix/issues)
- [Request Feature](https://github.com/yourusername/fastfix/issues)