Gaming Gear App
Deskripsi Proyek
Gaming Gear App adalah aplikasi web sederhana yang dibangun menggunakan framework AdonisJS untuk mengelola daftar peralatan gaming. Aplikasi ini memungkinkan pengguna untuk melihat, menambah, mengedit, dan menghapus peralatan gaming. Fitur utama meliputi:

Menampilkan daftar peralatan gaming di halaman utama (/).
Filter daftar berdasarkan type dan category menggunakan dropdown.
Menambah peralatan baru dengan form (/gaming-gears/create).
Melihat detail peralatan (/gaming-gears/:id).
Mengedit peralatan (/gaming-gears/:id/edit).
Menghapus peralatan dengan konfirmasi modal.

Aplikasi ini menggunakan MySQL sebagai database dan Bootstrap 5 untuk styling antarmuka.
Prasyarat
Pastikan Anda memiliki perangkat lunak berikut sebelum menjalankan proyek:

Node.js (versi 14.x atau lebih baru)
npm (biasanya sudah terinstal bersama Node.js)
MySQL (versi 5.7 atau lebih baru)
Akses ke terminal atau command line

Instalasi
Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi:

Clone Repository (jika proyek Anda di GitHub, sesuaikan URL-nya):
git clone <URL_REPOSITORY_ANDA>
cd gaming-gear-app


Instal Dependensi:
npm install


Konfigurasi Environment:

Salin file .env.example menjadi .env:cp .env.example .env


Edit file .env untuk mengatur koneksi database:DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=gaming_gear_db


Pastikan database gaming_gear_db sudah dibuat di MySQL:CREATE DATABASE gaming_gear_db;




Jalankan Migrasi:Jalankan migrasi untuk membuat tabel yang diperlukan:
adonis migration:run


(Opsional) Isi Data Dummy:Gunakan seeder untuk mengisi tabel gaming_gears dengan data contoh:
adonis seed --files GamingGearSeeder.js

Atau, masukkan data secara manual melalui MySQL:
INSERT INTO gaming_gears (name, type, category, price, created_at, updated_at) VALUES
('Razer DeathAdder V2', 'Mouse', 'Mouse', 59.99, NOW(), NOW()),
('Logitech G Pro X', 'Keyboard', 'Keyboard', 129.99, NOW(), NOW()),
('SteelSeries Arctis 7', 'Headset', 'Headset', 149.99, NOW(), NOW()),
('Dell Alienware 27', 'Monitor', 'Monitor', 499.99, NOW(), NOW()),
('Sony DualSense', 'Controller', 'Controller', 69.99, NOW(), NOW()),
('Corsair K95 RGB', 'Keyboard', 'Keyboard', 199.99, NOW(), NOW()),
('HyperX Cloud II', 'Headset', 'Mouse', 99.99, NOW(), NOW()),
('ASUS ROG Swift', 'Monitor', 'Headset', 799.99, NOW(), NOW()),
('Microsoft Xbox Elite', 'Controller', 'Controller', 179.99, NOW(), NOW()),
('Logitech G502 Hero', 'Mouse', 'Mouse', 49.99, NOW(), NOW());



Cara Menjalankan Aplikasi

Jalankan Server:
adonis serve --dev

Aplikasi akan berjalan di http://localhost:3333.

Akses Aplikasi:

Buka http://localhost:3333 di browser untuk melihat daftar peralatan gaming.
Gunakan link "Add New" di navbar untuk menambah peralatan baru.
Klik tombol "View", "Edit", atau "Delete" di daftar untuk mengelola peralatan.


Autentikasi (Opsional):

Aplikasi menggunakan middleware auth untuk rute /gaming-gears/*.
Jika Anda belum mengatur autentikasi, nonaktifkan middleware di start/routes.js:Route.resource('gaming-gears', 'GamingGearController')
  .except(['index'])
  // .middleware(['auth']) // Komentari baris ini


Untuk mengaktifkan autentikasi, jalankan:adonis make:auth
adonis migration:run

Lalu daftar/login melalui UI autentikasi.



Struktur Proyek
Berikut adalah struktur utama proyek:
gaming-gear-app/
├── app/
│   ├── Controllers/
│   │   └── Http/
│   │       └── GamingGearController.js  # Controller untuk mengelola gaming gears
│   ├── Models/
│   │   └── GamingGear.js                # Model untuk tabel gaming_gears
├── database/
│   ├── migrations/
│   │   └── ...                          # File migrasi untuk tabel gaming_gears
│   ├── seeds/
│   │   └── GamingGearSeeder.js          # Seeder untuk data dummy
├── resources/
│   ├── views/
│   │   ├── gaming_gears/
│   │   │   ├── create.edge              # Form untuk menambah data
│   │   │   ├── edit.edge                # Form untuk mengedit data
│   │   │   ├── index.edge               # Daftar gaming gears (digunakan oleh route /)
│   │   │   └── show.edge                # Halaman detail gaming gear
│   │   └── layouts/
│   │       └── main.edge                # Template utama dengan navbar
├── start/
│   └── routes.js                        # Definisi semua route
├── .env.example                         # Contoh konfigurasi environment
├── package.json                         # Dependensi proyek
└── README.md                            # Dokumentasi ini

Fitur Utama

Daftar Gaming Gears: Ditampilkan di route utama (/), dengan filter berdasarkan type dan category menggunakan dropdown.
Tambah Data: Form di /gaming-gears/create dengan dropdown untuk type dan category.
Detail Data: Lihat detail peralatan di /gaming-gears/:id.
Edit Data: Ubah data di /gaming-gears/:id/edit.
Hapus Data: Hapus data dengan konfirmasi modal.
Paginasi: Daftar mendukung paginasi dengan 10 item per halaman.

Teknologi yang Digunakan

AdonisJS 4.x: Framework utama untuk backend.
MySQL: Database untuk menyimpan data gaming gears.
Edge.js: Template engine untuk rendering view.
Bootstrap 5: Untuk styling antarmuka.
Lucid ORM: ORM bawaan AdonisJS untuk berinteraksi dengan database.

Catatan Tambahan

Filter: Filter di halaman utama (/) mendukung kombinasi type dan category. Pilih "All Types" atau "All Categories" untuk menampilkan semua data.
Validasi: Form tambah/edit memiliki validasi untuk memastikan input valid (misalnya, type dan category harus dari daftar yang diizinkan).
Debugging: Metode show di GamingGearController memiliki log untuk debugging (console.log dan console.error).

Kontribusi
Jika Anda ingin berkontribusi:

Fork repository ini.
Buat branch baru (git checkout -b feature/nama-fitur).
Commit perubahan Anda (git commit -m "Menambah fitur X").
Push ke branch Anda (git push origin feature/nama-fitur).
Buat Pull Request.

Lisensi
Proyek ini dilisensikan di bawah MIT License.

Dibuat oleh: [Nama Anda]Tanggal: April 2025
