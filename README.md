# 🏡 LuxeLiving

LuxeLiving adalah platform e-commerce modern untuk menjual produk furniture premium. Dibuat dengan teknologi web modern untuk memberikan pengalaman pengguna yang cepat, elegan, dan responsif.

## 🚀 Fitur Utama

- Tampilan produk elegan
- Navigasi cepat
- Komponen modular
- Desain responsif
- Animasi halus menggunakan Framer Motion

## 🛠️ Teknologi yang Digunakan

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## 📦 Cara Memasang & Menjalankan

1. **Clone repositori ini:**

```bash
git clone https://github.com/nobel-saputra/LuxeLiving.git
cd LuxeLiving
```

2. **Install dependencies:**

```bash
npm install
# atau jika menggunakan yarn
yarn
```

3. **Jalankan proyek secara lokal:**

```bash
npm run dev
```

Kemudian buka [http://localhost:3000](http://localhost:3000) di browser kamu.

## 🧑‍💻 Cara Menggunakan

- Semua halaman ada di dalam folder `src/app/`
- Komponen UI dapat ditemukan di `src/components/`
- Gambar produk dan aset lainnya berada di `public/images/`
- Untuk menambahkan produk (saat ini masih hardcoded), edit langsung file di halaman utama
- Untuk mengubah teks, tampilan, atau styling, kamu bisa langsung ubah komponen di dalam folder `src/components/`

## 🌐 Demo Langsung

🔗 [https://luxe-living-nbl.vercel.app](https://luxe-living-nbl.vercel.app)

## 📁 Struktur Folder Singkat

```
LuxeLiving/
├── public/
│   └── images/            # Gambar produk dan aset lainnya
├── src/
│   ├── app/               # Routing & halaman
│   ├── components/        # Komponen UI
│   └── styles/            # Styling tambahan (jika ada)
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🗺️ Roadmap

- [ ] Integrasi pembayaran dengan Midtrans
- [ ] Halaman checkout
- [ ] Wishlist pengguna
- [ ] Admin dashboard
- [ ] Fitur autentikasi pengguna
- [ ] Koneksi ke database (Firebase / Supabase)

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License.
Silakan gunakan, modifikasi, dan kontribusikan sesuai kebutuhan.
