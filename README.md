# Service HP FastFix - Website Landing Page

## Struktur File

Proyek ini telah dipisahkan menjadi beberapa file terorganisir untuk kemudahan maintenance dan pengembangan:

```
project-folder/
├── index.html          # File HTML utama
├── styles.css          # File CSS untuk styling
├── script.js           # File JavaScript untuk interaktivitas
└── README.md           # Dokumentasi proyek
```

## Deskripsi File

### 1. index.html

File utama HTML yang berisi:

- Struktur halaman website
- Navigation bar
- Hero section
- Services section (Software & Hardware)
- Features section
- Contact section
- WhatsApp float button
- Links ke file CSS dan JavaScript eksternal

### 2. styles.css

File CSS yang berisi semua styling untuk:

- Reset CSS
- Hero section dengan animasi
- Navigation bar responsif
- Service cards dengan hover effects
- Feature grid layout
- Contact section
- WhatsApp floating button
- Responsive design untuk mobile
- Animasi dan transitions

### 3. script.js

File JavaScript yang menangani:

- Navbar scroll effect (transparan saat scroll)
- Smooth scrolling untuk navigation links
- Scroll animation observer untuk service cards dan features
- Intersection Observer untuk animasi masuk elemen

## Fitur Website

### ✨ Fitur Utama

- **Responsive Design**: Tampil sempurna di desktop dan mobile
- **Smooth Animations**: Animasi yang halus dan menarik
- **WhatsApp Integration**: Tombol floating WhatsApp untuk kontak langsung
- **Interactive Elements**: Hover effects dan scroll animations
- **Modern UI/UX**: Desain modern dengan gradient dan glassmorphism

### 📱 Layanan yang Ditampilkan

**Software Services:**

- Flash/Install Ulang ROM (Rp 80.000)
- Bypass FRP Google Account (Rp 50.000)
- Remove Pattern/PIN/Password (Rp 50.000)
- Mi Cloud Remove Tanpa Server (Rp 50.000)
- Mi Cloud Remove Dengan Server (Rp 130.000)

**Hardware Services:**

- Ganti LCD Touchscreen (Jasa: Rp 65.000)

### 🎨 Desain Features

- **Gradient Backgrounds**: Warna gradien yang menarik
- **Glassmorphism Effect**: Efek kaca pada navigation dan contact cards
- **Floating Animations**: Animasi mengambang pada background
- **Pulse Effects**: Efek pulse pada CTA button
- **Smooth Transitions**: Transisi halus pada semua elemen interaktif

## Cara Penggunaan

1. **Setup Proyek**:

   - Buat folder untuk proyek
   - Simpan semua file dalam folder yang sama

2. **Menjalankan Website**:

   - Buka file `index.html` di browser
   - Atau gunakan live server untuk development

3. **Kustomisasi**:
   - Edit konten di `index.html`
   - Ubah styling di `styles.css`
   - Tambah interaktivitas di `script.js`

## Kustomisasi

### Mengubah Informasi Kontak

Edit bagian contact di `index.html`:

```html
<div class="contact-item">
  <h3>📱 WhatsApp</h3>
  <p>0895-0359-6485</p>
  <!-- Ubah nomor ini -->
</div>
```

### Mengubah Link WhatsApp

Edit link WhatsApp float button di `index.html`:

```html
<a href="https://wa.me/6289503596485?text=..." <!-- Ubah nomor di sini --></a>
```

### Mengubah Harga Layanan

Edit price list di setiap service card:

```html
<li>Xiaomi/Redmi/Poco <span class="price">Rp 80.000</span></li>
```

### Mengubah Warna Theme

Edit variabel warna di `styles.css`:

```css
/* Primary colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Accent colors */
background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
```

## Browser Support

Website ini mendukung:

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## Performance Features

- **Optimized CSS**: CSS yang efisien tanpa library eksternal
- **Lightweight JavaScript**: JavaScript vanilla tanpa dependencies
- **Fast Loading**: Tidak ada library eksternal yang berat
- **Mobile Optimized**: Responsive design yang cepat di mobile

## Maintenance

### Menambah Layanan Baru

1. Copy struktur service-card di `index.html`
2. Ubah konten sesuai layanan baru
3. Tidak perlu mengubah CSS atau JS

### Update Styling

1. Edit `styles.css` untuk perubahan visual
2. Gunakan browser developer tools untuk testing
3. Test di berbagai ukuran layar

## Contact & Support

Untuk pertanyaan atau bantuan mengenai website ini:

- WhatsApp: 0895-0359-6485
- Lokasi: Bandung, Jawa Barat

---

_Website ini dibuat untuk Service HP FastFix - Solusi terpercaya untuk semua kebutuhan service HP Anda!_
