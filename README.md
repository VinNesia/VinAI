# ToolVerse Nesia AI - Direktori Alat AI

ToolVerse Nesia AI adalah direktori alat AI yang menyerupai desain `anaiorthat.com`, dibangun sebagai situs statis dengan HTML, CSS, dan JavaScript. Di-deploy di [https://vinnesia.github.io/VinAI/](https://vinnesia.github.io/VinAI/).

## Fitur
- **Header**: Menu, mode toggle, dan spotlight feature dengan multi-bahasa.
- **Hero Section**: Tagline, stats, search bar, quick links, dan nav tabs.
- **Featured Section**: Tombol berita, daftar alat terbaru dari `tools.json`, filter kategori, pagination, bookmark, dan integrasi media sosial.
- **Notifikasi**: Notifikasi browser untuk update (opsional).
- **Ulasan Pengguna**: Form ulasan disimpan di localStorage.
- **Multi-Bahasa**: Dukungan bahasa via `languages.json`.
- **Analitik**: Google Analytics (konfigurasi statis).
- **Tutorial**: Halaman terpisah (`tutorial.html`).
- **Fitur Kolaborasi**: Form pengajuan alat lokal.
- **Desain Interaktif**: Animasi CSS.
- **Keamanan**: CAPTCHA sederhana.
- **Mobile App Link**: Konfigurasi PWA.
- **Responsif**: Desain mobile-friendly untuk handphone dan PC/desktop.

## Struktur File
- `index.html`: Struktur utama situs.
- `styles.min.css`: Styling minified menyerupai `anaiorthat.com`.
- `script.min.js`: Logika minified untuk semua fitur.
- `tools.json`: Data alat AI dengan logo default `logo.png`.
- `languages.json`: Data multi-bahasa.
- `tutorial.html`: Halaman tutorial statis.
- `logo.png`: Logo situs digunakan sebagai ikon alat.
- `favicon.png`: Ikon situs.
- `manifest.json`: Konfigurasi PWA.
- `background.jpg` (opsional): Latar belakang (tambahkan jika ada).

## Cara Menjalankan
1. Clone repository: `git clone https://github.com/vinnesia/VinAI.git`.
2. Buka `index.html` di browser atau jalankan server lokal (`python -m http.server 8000`).
3. Tambahkan data alat ke `tools.json`.

## Deployment ke GitHub Pages
1. Push semua file ke repository `vinnesia/VinAI`.
2. Aktifkan GitHub Pages di pengaturan repository (branch: `main`, folder: `/`).
3. Akses situs di [https://vinnesia.github.io/VinAI/](https://vinnesia.github.io/VinAI/).
4. Ganti `G-F4R7TCVG1V` di `index.html` dengan ID Google Analytics kamu jika perlu.

## Catatan
- **Latar Belakang**: Tambahkan `background.jpg` di folder root dan ubah `styles.min.css` dengan `background: url('background.jpg') no-repeat center center fixed; background-size: cover;` untuk menyerupai `anaiorthat.com`.
- Pastikan `logo.png` dan `favicon.png` diunggah (logo: 100x100px, favicon: 16x16 atau 32x32px).
- Notifikasi memerlukan izin browser; uji dengan mengklik "Allow".
- PWA membutuhkan pengujian di browser modern untuk instalasi.
