// Sistem antrian sederhana
let antrian = [];

// Pengguna mendaftar — ditambahkan ke akhir antrian
antrian.push("Budi");
antrian.push("Ani");
antrian.push("Citra");
antrian.push("Dedi");
console.log("Antrian awal:", antrian);
// Output: Antrian awal: ["Budi", "Ani", "Citra", "Dedi"]

// Melayani pengguna pertama
let dilayani = antrian.shift();
console.log("Sedang dilayani:", dilayani);
console.log("Sisa antrian:", antrian);
// Output: Sedang dilayani: Budi
// Output: Sisa antrian: ["Ani", "Citra", "Dedi"]

// Pengguna prioritas masuk di depan antrian
antrian.unshift("Eka (Prioritas)");
console.log("Setelah sisipan prioritas:", antrian);
// Output: Setelah sisipan prioritas: ["Eka (Prioritas)", "Ani", "Citra", "Dedi"]

// Cek apakah seseorang ada dalam antrian
console.log("Apakah Ani ada?", antrian.includes("Ani")); // Output: true
console.log("Apakah Budi ada?", antrian.includes("Budi")); // Output: false

// Tampilkan seluruh antrian dengan nomor urut
console.log("--- Daftar Antrian ---");
for (let i = 0; i < antrian.length; i++) {
  console.log(i + 1 + ".", antrian[i]);
}
// Output:
// --- Daftar Antrian ---
// 1. Eka (Prioritas)
// 2. Ani
// 3. Citra
// 4. Dedi

const warna = ["merah", "hijau", "biru", "hijau"];

console.log(warna.indexOf("biru")); // Output: 2
console.log(warna.indexOf("hijau")); // Output: 1 — hanya indeks pertama
console.log(warna.indexOf("kuning")); // Output: -1 — tidak ditemukan

const izinAkses = ["admin", "editor", "viewer"];

console.log(izinAkses.includes("admin")); // Output: true
console.log(izinAkses.includes("superuser")); // Output: false

// Penggunaan praktis dalam kondisi if
const rolePengguna = "editor";
if (izinAkses.includes(rolePengguna)) {
  console.log("Akses diberikan.");
} else {
  console.log("Akses ditolak.");
}
// Output: Akses diberikan.

let kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];

// Menghapus 1 elemen mulai dari indeks 1
let dihapus = kota.splice(1, 1);
console.log(dihapus); // Output: ["Bandung"]
console.log(kota); // Output: ["Jakarta", "Surabaya", "Medan"]

// Menyisipkan elemen di posisi tertentu tanpa menghapus
kota.splice(1, 0, "Yogyakarta");
console.log(kota); // Output: ["Jakarta", "Yogyakarta", "Surabaya", "Medan"]

// Mengganti elemen
kota.splice(2, 1, "Semarang");
console.log(kota); // Output: ["Jakarta", "Yogyakarta", "Semarang", "Medan"]

const angka = [10, 20, 30, 40, 50];

console.log(angka.slice(1, 4)); // Output: [20, 30, 40] — indeks 1 sampai sebelum 4
console.log(angka.slice(2)); // Output: [30, 40, 50] — dari indeks 2 hingga akhir
console.log(angka.slice(-2)); // Output: [40, 50] — dua elemen terakhir
console.log(angka); // Output: [10, 20, 30, 40, 50] — array asli tidak berubah



let daftarObat = ["Paracetamol", "Amoxicillin", "Vitamin C"];

let dihapus = daftarObat.pop();
console.log(dihapus); // Output: "Vitamin C"
console.log(daftarObat); // Output: ["Paracetamol", "Amoxicillin"]

let antrian = ["Budi", "Ani", "Citra"];

let dilayani = antrian.shift();
console.log(dilayani); // Output: "Budi"
console.log(antrian); // Output: ["Ani", "Citra"]

// 3. Menambahkan Elemen
//push(nilai) — Menambahkan di akhir
let namaBulan = ["Januari", "Februari", "Maret"];

namaBulan.push("April");
console.log(namaBulan);
// Output: ["Januari", "Februari", "Maret", "April"]

// push() juga mengembalikan panjang array setelah penambahan
let panjangBaru = namaBulan.push("Mei");
console.log(panjangBaru); // Output: 5

// unshift(nilai) — Menambahkan di awal
let namaBulan = ["Februari", "Maret"];

namaBulan.unshift("Januari");
console.log(namaBulan);
// Output: ["Januari", "Februari", "Maret"]

// 4. Menghapus Elemen

//.pop() — Menghapus elemen terakhir
let daftarObat = ["Paracetamol", "Amoxicillin", "Vitamin C"];
let dihapus = daftarObat.pop();
console.log(dihapus); // Output: "Vitamin C"
console.log(daftarObat); // Output: ["Paracetamol", "Amoxicillin"]

// .shift() — Menghapus elemen pertama
let antrian = ["Budi", "Ani", "Citra"];

let dilayani = antrian.shift();
console.log(dilayani); // Output: "Budi"
console.log(antrian); // Output: ["Ani", "Citra"]

// 6. Simulasi Lengkap — Sistem Kalkulator Belanja

// Fungsi-fungsi pembantu
const hitungSubtotal = (harga, jumlah) => harga * jumlah;
const hitungPPN = (subtotal, tarif = 0.11) => subtotal * tarif;
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

function cetakStruk(namaProduk, harga, jumlah) {
  const subtotal = hitungSubtotal(harga, jumlah);
  const pajak = hitungPPN(subtotal);
  const total = hitungTotal(subtotal, pajak);

  console.log("================================");
  console.log("Produk    :", namaProduk);
  console.log("Harga     : Rp", harga);
  console.log("Jumlah    :", jumlah);
  console.log("Subtotal  : Rp", subtotal);
  console.log("PPN (11%) : Rp", pajak);
  console.log("Total     : Rp", total);
  console.log("================================");
}

cetakStruk("Sepatu Lari", 350000, 2);
// Output:
// ================================
// Produk    : Sepatu Lari
// Harga     : Rp 350000
// Jumlah    : 2
// Subtotal  : Rp 700000
// PPN (11%) : Rp 77000
// Total     : Rp 777000
// ================================

// Variasi penulisan Arrow Function:
// Tanpa parameter
const salam = () => "Halo!";
console.log(salam()); // Output: Halo!

// Satu parameter — tanda kurung boleh dihilangkan
const kuadrat = (n) => n * n;
console.log(kuadrat(5)); // Output: 25

// Dua parameter atau lebih — tanda kurung wajib ada
const tambah = (a, b) => a + b;
console.log(tambah(3, 7)); // Output: 10

// Lebih dari satu baris — kurung kurawal dan return diperlukan kembali
const hitungPPN = (harga) => {
  const tarif = 0.11;
  const pajak = harga * tarif;
  return harga + pajak;
};
console.log(hitungPPN(100000)); // Output: 111000

// 4. Function Expression
// Function Expression — fungsi disimpan dalam variabel
const hitungLuasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(hitungLuasPersegiPanjang(5, 3)); // Output: 15

// Perilaku penting return:
function cekUmur(umur) {
  if (umur < 18) {
    return "Belum memenuhi syarat.";
    // Baris di bawah ini tidak akan pernah dieksekusi
    console.log("Ini tidak akan muncul.");
  }
  return "Memenuhi syarat.";
}

console.log(cekUmur(15)); // Output: Belum memenuhi syarat.
console.log(cekUmur(20)); // Output: Memenuhi syarat.

//Contoh lengkap — Fungsi dengan beberapa parameter:
function tampilkanProduk(nama, harga, stok) {
  console.log("Produk :", nama);
  console.log("Harga  : Rp", harga);
  console.log("Stok   :", stok, "unit");
  console.log("---");
}

tampilkanProduk("Sepatu Lari", 350000, 25);
tampilkanProduk("Kaos Polos", 85000, 100);
// Output:
// Produk : Sepatu Lari
// Harga  : Rp 350000
// Stok   : 25 unit
// ---
// Produk : Kaos Polos
// Harga  : Rp 85000
// Stok   : 100 unit
// ---

//Perbedaan fungsi dengan dan tanpa return:
// Tanpa return — hanya mencetak, tidak bisa digunakan lebih lanjut
function cetakTotal(a, b) {
  console.log(a + b);
}
let hasil = cetakTotal(3, 4); // Mencetak 7
console.log(hasil); // Output: undefined — tidak ada nilai yang dikembalikan

// Dengan return — nilai dapat disimpan dan digunakan kembali
function hitungTotal(a, b) {
  return a + b;
}
let total = hitungTotal(3, 4);
console.log(total); // Output: 7
console.log(total * 2); // Output: 14 — dapat digunakan dalam operasi lain


