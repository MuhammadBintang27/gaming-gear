# 🎮 Gaming Gear App

**Gaming Gear App** adalah aplikasi web sederhana berbasis **AdonisJS** yang memungkinkan pengguna untuk **mengelola daftar peralatan gaming**. Dengan fitur CRUD lengkap, pengguna dapat menambahkan, melihat, mengedit, dan menghapus peralatan gaming serta memfilter berdasarkan kategori dan tipe.

## 🚀 Fitur Utama

- 📄 **Daftar Peralatan Gaming**: Ditampilkan di halaman utama (`/`) dengan dukungan **filter kategori dan tipe**.
- ➕ **Tambah Peralatan**: Form dengan validasi dan pilihan tipe/kategori.
- 👁️ **Lihat Detail**: Tampilkan informasi lengkap sebuah peralatan.
- ✏️ **Edit Data**: Ubah data peralatan melalui form.
- 🗑️ **Hapus Data**: Konfirmasi sebelum menghapus data.

## 🧰 Teknologi yang Digunakan

- [AdonisJS 4.x](https://legacy.adonisjs.com/) – Framework backend utama
- [MySQL](https://www.mysql.com/) – Database
- [Lucid ORM](https://legacy.adonisjs.com/docs/4.1/lucid) – ORM AdonisJS
- [Edge.js](https://legacy.adonisjs.com/docs/4.1/views) – Template engine
- [Bootstrap 5](https://getbootstrap.com/) – Framework styling UI

---

## ⚙️ Instalasi

### 1. Clone Repository

```bash
git clone <URL_REPOSITORY_ANDA>
cd gaming-gear-app
```

### 2. Instal Dependensi

```bash
npm install
```

### 3. Konfigurasi Environment

Salin file `.env.example` ke `.env`:

```bash
cp .env.example .env
```

Edit `.env` sesuai konfigurasi database Anda:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=gaming-gear
```

> ⚠️ Pastikan database `gaming-gear` sudah dibuat:

```sql
CREATE DATABASE gaming-gear;
```

### 4. Jalankan Migrasi dan Seeder

```bash
adonis migration:run
adonis seed --files GamingGearSeeder.js
```

---

## ▶️ Menjalankan Aplikasi

```bash
adonis serve --dev
```

Aplikasi akan berjalan di: [http://localhost:3333](http://localhost:3333)

---

## 🗂️ Struktur Proyek

```
gaming-gear-app/
├── app/
│   ├── Controllers/Http/GamingGearController.js
│   └── Models/GamingGear.js
├── database/
│   ├── migrations/
│   └── seeds/GamingGearSeeder.js
├── resources/
│   ├── views/
│   │   ├── gaming_gears/
│   │   │   ├── create.edge
│   │   │   ├── edit.edge
│   │   │   ├── index.edge
│   │   │   └── show.edge
│   │   └── layouts/main.edge
├── start/routes.js
├── .env.example
├── package.json
└── README.md
```

---

## 🧪 Validasi & Debugging

- ✅ Validasi form: memastikan input seperti tipe dan kategori valid.
- 🐛 Debugging tersedia di metode `show()` pada `GamingGearController` menggunakan `console.log()` dan `console.error()`.
