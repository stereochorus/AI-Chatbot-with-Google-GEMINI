# AI Chatbot dengan Google Gemini

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini%20Pro-purple.svg)](https://ai.google.dev/)

Proyek ini adalah backend untuk aplikasi chatbot yang ditenagai oleh model AI generatif dari Google, yaitu **Gemini Pro**. Aplikasi ini menyediakan API sederhana yang dapat diintegrasikan dengan berbagai antarmuka pengguna (frontend) untuk menciptakan pengalaman percakapan yang cerdas dan dinamis.

## ✨ Fitur Utama

*   **Integrasi Google Gemini:** Menggunakan model `gemini-pro` untuk respons yang relevan dan kontekstual.
*   **API Sederhana:** Endpoint yang mudah digunakan untuk mengirim pesan dan menerima balasan dari chatbot.
*   **Berbasis Node.js & Express:** Backend yang ringan, cepat, dan efisien.
*   **Konfigurasi Aman:** Menggunakan file `.env` untuk menyimpan kredensial API dengan aman, memisahkannya dari kode sumber.

## 📋 Persyaratan

Sebelum Anda memulai, pastikan Anda telah menginstal perangkat lunak dan memiliki kelengkapan berikut di mesin Anda:

*   Node.js (disarankan versi v18.x atau yang lebih baru).
*   npm (biasanya terinstal bersama Node.js).
*   Akun Google dan **API Key** dari Google AI Studio.

## 🚀 Instalasi & Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

1.  **Clone Repositori**
    ```bash
    git clone https://github.com/NAMA_PENGGUNA/AI-Chatbot-with-Google-GEMINI.git
    cd AI-Chatbot-with-Google-GEMINI
    ```
    > **Catatan:** Ganti `NAMA_PENGGUNA` dengan nama pengguna GitHub Anda jika Anda melakukan *fork* pada repositori ini.

2.  **Instal Dependensi Proyek**
    Jalankan perintah berikut untuk mengunduh dan menginstal semua paket yang diperlukan.
    ```bash
    npm install
    ```

3.  **Buat dan Konfigurasi File `.env`**
    Buat sebuah file baru bernama `.env` di direktori root proyek. Salin konten di bawah ini ke dalam file tersebut.

    ```dotenv
    # Variabel Lingkungan untuk Aplikasi Chatbot

    # Diperoleh dari Google AI Studio (https://aistudio.google.com/app/apikey)
    GEMINI_API_KEY="MASUKKAN_API_KEY_ANDA_DI_SINI"

    # Port untuk menjalankan server (opsional, default 3000)
    PORT=3000
    ```

4.  **Dapatkan API Key Gemini Anda**
    *   Buka Google AI Studio dan masuk dengan akun Google Anda.
    *   Klik tombol "**Create API key**".
    *   Salin kunci API yang baru dibuat dan tempelkan ke dalam file `.env` Anda sebagai nilai dari `GEMINI_API_KEY`.

## ▶️ Menjalankan Aplikasi

Setelah semua konfigurasi selesai, jalankan server dengan perintah:

```bash
npm start
```
Jika tidak ada skrip `start` pada `package.json`, Anda bisa menjalankan langsung dengan Node:
```bash
node index.js
```
Server akan aktif dan berjalan di `http://localhost:3000` (atau port lain yang Anda tentukan di file `.env`).

## 🔌 Penggunaan API

Untuk berinteraksi dengan chatbot, kirim permintaan `POST` ke endpoint `/chat` dengan body JSON yang berisi pesan Anda.

**Contoh menggunakan `curl`:**
```bash
curl -X POST http://localhost:3000/chat \
-H "Content-Type: application/json" \
-d '{"message": "Ceritakan sebuah lelucon tentang pemrograman."}'
```

**Contoh Body Permintaan:**
```json
{
  "message": "Halo, apa kabarmu hari ini?"
}
```

**Contoh Respon Sukses:**
```json
{
  "response": "Kabar baik, terima kasih! Ada yang bisa saya bantu hari ini?"
}
```

---

Selamat mencoba! Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk membuka *Issue*.
