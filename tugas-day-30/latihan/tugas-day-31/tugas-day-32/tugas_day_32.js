// tugas_day_32.js

// Langkah 1: Tebak Dulu, Baru Cek

// Potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus"); // Menambah "Jus" di akhir array
menu.unshift("Air"); // Menambah "Air" di awal array
let terakhirDibuang = menu.pop(); // Menghapus elemen terakhir ("Jus")
let pertamaDibuang = menu.shift(); // Menghapus elemen pertama ("Air")
menu.splice(1, 1); // Menghapus elemen di indeks 1 ("Teh")
let irisan = menu.slice(1, 3); // Mengambil elemen dari indeks 1 sampai 3 (["Roti", "Susu"])

console.log(terakhirDibuang); // "Jus"
console.log(pertamaDibuang); // "Air"
console.log(menu); // ["Kopi", "Roti", "Susu"]
console.log(irisan); // ["Roti", "Susu"]
console.log(menu.indexOf("Susu")); // 2
console.log(menu.indexOf("Nasi")); // -1
console.log(menu.includes("Kopi")); // true
console.log(menu[menu.length - 1]); // "Susu"

// Potongan B
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3); // 5
let y = cetakTambah(2, 3); // undefined, karena hanya mencetak
console.log(x); // 5
console.log(y); // undefined

// Potongan C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20)); // 40000
console.log(hitungDiskonPersen(50000)); // 45000

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?"); // Tidak akan tercetak
  }
  return "bukan negatif";
}

console.log(cekAngka(-5)); // "negatif"
console.log(cekAngka(5)); // "bukan negatif"

// Langkah 2: Perbaiki 7 Kesalahan
let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.push("Susu"); // FIX: Menggunakan push untuk menambah di akhir

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.splice(1, 1); // FIX: Menggunakan splice untuk menghapus

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.indexOf("Roti") !== -1; // FIX: Memperbaiki logika pengecekan

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length - 1]; // FIX: Menggunakan length - 1

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100; // FIX: Menambahkan return
}

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
  return subtotal * 0.11; // FIX: Menambahkan return
};

console.log(daftarBelanja, adaRoti, terakhir); // [ 'Kopi', 'Roti', 'Susu' ] true Susu
console.log(hitungDiskon(100000, 20)); // 80000
console.log(hitungPajak(80000)); // 8800

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
const hitungTotal = (subtotal, pajak) => subtotal + pajak; // FIX: Memastikan fungsi terdefinisi sebelum dipanggil
console.log(hitungTotal(80000, hitungPajak(80000))); // 88800

// Langkah 3: Bikin Kasir Sendiri
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// Menambah item ke keranjang
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.push("Nasi Goreng");

// Mengecek apakah menu ada di keranjang
console.log(kasirKeranjang.includes("Jus Jeruk")); // false

// Mengambil 3 item pertama dari keranjang
let paketCepat = kasirKeranjang.slice(0, 3);
console.log(paketCepat); // ["Kopi Susu", "Es Teh", "Roti Bakar"]

// Function pertama: mencari harga menu
function kasirCariHarga(namaMenu) {
  let index = kasirNamaMenu.indexOf(namaMenu);
  return index !== -1 ? kasirHargaMenu[index] : 0; // Mengembalikan harga atau 0
}

// Function kedua: menghitung subtotal
const kasirHitungSubtotal = () => {
  let subtotal = 0;
  for (let item of kasirKeranjang) {
    subtotal += kasirCariHarga(item);
  }
  return subtotal; // Mengembalikan subtotal
};

// Function ketiga: menghitung diskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) return subtotal * 0.15;
  else if (subtotal >= 50000) return subtotal * 0.10;
  else if (subtotal >= 25000) return subtotal * 0.05;
  return 0;
};

// Function keempat: menghitung pajak
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// Function kelima: mencetak struk
const kasirCetakStruk = (subtotal, diskon, pajak) => {
  console.log(`Struk Pembelian:`);
  kasirKeranjang.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  console.log(`Subtotal: ${subtotal}`);
  console.log(`Diskon: ${diskon}`);
  console.log(`Pajak: ${pajak}`);
  console.log(`Total: ${subtotal - diskon + pajak}`);
};

// Uji 2 skenario
// Skenario 1
kasirKeranjang.push("Jus Jeruk");
let subtotal1 = kasirHitungSubtotal();
let diskon1 = kasirHitungDiskon(subtotal1);
let pajak1 = kasirHitungPajak(subtotal1 - diskon1);
kasirCetakStruk(subtotal1, diskon1, pajak1);

// Skenario 2
kasirKeranjang = ["Kopi Susu", "Roti Bakar"];
let subtotal2 = kasirHitungSubtotal();
let diskon2 = kasirHitungDiskon(subtotal2);
let pajak2 = kasirHitungPajak(subtotal2 - diskon2);
kasirCetakStruk(subtotal2, diskon2, pajak2);
