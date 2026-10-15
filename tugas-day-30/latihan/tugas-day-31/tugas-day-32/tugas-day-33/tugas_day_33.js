// ============================================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ============================================================

// Potongan A — tebakan sebelum dijalankan:
// "Kopi Susu", "Kopi Susu", 20000, undefined, true, false,
// ["nama", "harga", "kategori"], ["Kopi Susu", 20000, "minuman"]

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

// Hasil Potongan A:
// Kopi Susu
// Kopi Susu
// 20000
// undefined
// true
// false
// [ 'nama', 'harga', 'kategori' ]
// [ 'Kopi Susu', 20000, 'minuman' ]

// Potongan B — tebakan sebelum dijalankan:
// 30000, "Rina: Rp 30000", "Rina: Rp 20000", 20000

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

// Hasil Potongan B:
// 30000
// Rina: Rp 30000
// Rina: Rp 20000
// 20000

// Potongan C — tebakan sebelum dijalankan:
// Senin, Selasa, 0, 1, nama: Kopi, harga: 18000, K, o, p, i

const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

// Hasil Potongan C:
// Senin
// Selasa
// 0
// 1
// nama: Kopi
// harga: 18000
// K
// o
// p
// i

// Percobaan menghasilkan TypeError karena object biasa bukan iterable.
// Catat hasil percobaan; baris for...of dibiarkan sebagai komentar.
try {
  for (let x of kopi) {
    console.log(x);
  }
} catch (error) {
  console.log(error.name + ": " + error.message);
}
// Hasil umumnya: TypeError: kopi is not iterable
// for (let x of kopi) { console.log(x); }

// Jawaban:
// 1. produk.nama memakai nama properti tetap, sedangkan produk[kunci]
//    memakai isi variabel kunci. Stok menjadi undefined karena propertinya dihapus.
// 2. belanja mengubah dompet.saldo langsung melalui this, jadi hasil perubahan
//    tetap tersimpan meskipun nilai return tidak disimpan.
// 3. for...in mengambil indeks/key, sedangkan for...of mengambil nilai iterable;
//    object kopi biasa tidak iterable.

// ============================================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ============================================================

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX: gunakan this agar saldo yang diubah adalah properti object warung.
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX: return mengembalikan sisa saldo kas.
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// FIX: bracket notation diperlukan untuk nama properti yang mengandung tanda hubung.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);

// FIX: delete menghapus properti dari object, bukan sekadar mengisi undefined.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);
console.log("kataSandi" in akun);

// FIX: for...of mengambil isi array, bukan indeksnya.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// FIX: for...in mengambil key dari object.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX: nama method yang benar adalah Object.keys.
console.log(Object.keys(info));

// Jawaban:
// 1. saldoKas harus memakai this; ambilKas harus return; key no-wa harus
//    memakai bracket notation; kataSandi dihapus memakai delete; isi array
//    dicetak dengan for...of; object ditelusuri dengan for...in;
//    Object.key diperbaiki menjadi Object.keys.
// 2. Kode awal error pada saldoKas yang tidak dikenal, akses kontak.no-wa,
//    for...of pada object biasa, dan Object.key. Kesalahan lain dapat berjalan
//    tetapi hasilnya salah, seperti for...in yang mencetak indeks array.
// 3. Mengisi kataSandi dengan undefined masih membuat key-nya ada; delete
//    menghapus key. Buktinya, operator in menghasilkan false setelah delete.

// Hasil Langkah 2:
// 150000
// 120000
// 08123
// { nama: 'Rina' }
// false
// Kopi
// Teh
// Roti
// nama: Warung Senja
// kota: Yogyakarta
// [ 'nama', 'kota' ]

// ============================================================
// LANGKAH 3: KASIR BERBENTUK OBJECT
// ============================================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },

  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Es Teh", kategori: "minuman", harga: 7500, stok: 10 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 10 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 22000, stok: 10 },
    { nama: "Jus Jeruk", kategori: "minuman", harga: 12000, stok: 10 },
  ],

  keranjang: [],

  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && item.stok >= jumlah && jumlah > 0) {
        this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
        item.stok -= jumlah;
        return true;
      }
    }
    return false;
  },

  hitungSubtotal() {
    let subtotal = 0;

    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }

    return subtotal;
  },

  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    } else {
      return 0;
    }
  },

  cetakStruk() {
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const pajak = (subtotal - diskon) * 0.11;
    const total = subtotal - diskon + pajak;

    let daftarItem = "";
    let nomor = 1;

    for (let item of this.keranjang) {
      const harga = this.cariHarga(item.nama);
      daftarItem += `${nomor}. ${item.nama} x${item.jumlah} @ Rp${harga}\n`;
      nomor++;
    }

    console.log(`
=== Struk ${this.nama} ===
${daftarItem}Subtotal: Rp${subtotal}
Diskon: Rp${diskon}
Pajak: Rp${pajak}
Total: Rp${total}
`);

    this.saldoKas += total;
  },
};

// Properti dinamis memakai bracket notation.
const namaProperti = "website";
kasirKedai[namaProperti] = "www.kedaisenja.example";
console.log(namaProperti in kasirKedai);
delete kasirKedai[namaProperti];
console.log(namaProperti in kasirKedai);

// for...in pada object jam operasional.
for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}

// for...in pada object menu pertama.
for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

console.log(Object.keys(kasirKedai.jamOperasional));
console.log(Object.values(kasirKedai.jamOperasional));

// Hitung huruf kecil "a" pada nama kedai.
let jumlahHurufA = 0;

for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}

console.log("Jumlah huruf a:", jumlahHurufA);

// Dua kasus gagal: menu tidak ada dan jumlah melebihi stok.
// Keduanya tidak mengubah keranjang atau stok.
console.log(
  "Menu tidak ada:",
  kasirKedai.tambahKeKeranjang("Menu Tidak Ada", 1)
);
console.log(
  "Jumlah melebihi stok:",
  kasirKedai.tambahKeKeranjang("Kopi Susu", 99)
);

// Uji skenario 1: subtotal Rp110000, diskon 15%.
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.tambahKeKeranjang("Nasi Goreng", 2);
kasirKedai.cetakStruk();

// Hasil skenario 1:
// Subtotal: 110000
// Diskon: 16500
// Pajak: 10285
// Total: 103785

// Uji skenario 2: subtotal Rp52000, diskon 10%.
kasirKedai.keranjang = [];
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.tambahKeKeranjang("Nasi Goreng", 1);
kasirKedai.cetakStruk();

// Hasil skenario 2:
// Subtotal: 52000
// Diskon: 5200
// Pajak: 5148
// Total: 51948

// Percobaan tanpa this akan error karena saldoKas bukan variabel lokal.
// Baris percobaan dibuat sebagai komentar dan error ditangkap agar program lanjut.
const percobaanTanpaThis = function () {
  saldoKas += 1;
};

try {
  percobaanTanpaThis();
} catch (error) {
  console.log(error.name + ": " + error.message);
}
// Hasil umumnya: ReferenceError: saldoKas is not defined
// saldoKas += 1;

// for...of pada object biasa juga menghasilkan TypeError.
try {
  for (let item of kasirKedai) {
    console.log(item);
  }
} catch (error) {
  console.log(error.name + ": " + error.message);
}
// Hasil umumnya: TypeError: kasirKedai is not iterable

// Jawaban:
// 1. Dot notation contohnya kasirKedai.nama; bracket notation contohnya
//    kasirKedai[namaProperti]. Bracket notation diperlukan untuk key dinamis
//    atau key yang berisi karakter seperti tanda hubung.
// 2. this.saldoKas menunjuk properti saldoKas milik object ini. Tanpa this,
//    JavaScript mencari variabel saldoKas dan menghasilkan ReferenceError.
// 3. for...of mengambil nilai dari array atau string; for...in mengambil key
//    object. Keduanya tidak bisa ditukar karena object biasa bukan iterable.
// 4. for...of pada object biasa menghasilkan TypeError, sementara array dan
//    string bisa diulang karena iterable.
// 5. Object.keys menghasilkan nama key; Object.values menghasilkan nilai
//    properti. Contohnya ['buka', 'tutup'] dan ['08:00', '21:00'].
// 6. cariHarga dan hitungSubtotal perlu return agar hasilnya dapat dipakai
//    oleh method lain. Jika hitungSubtotal hanya console.log, pemanggilnya
//    menerima undefined, bukan angka subtotal.

// Hasil penting Langkah 3:
// true
// false
// buka: 08:00
// tutup: 21:00
// nama: Kopi Susu
// kategori: minuman
// harga: 18000
// stok: 10
// [ 'buka', 'tutup' ]
// [ '08:00', '21:00' ]
// Jumlah huruf a: 2
// Menu tidak ada: false
// Jumlah melebihi stok: false
// Skenario 1: subtotal 110000, diskon 16500, pajak 10285, total 103785
// Skenario 2: subtotal 52000, diskon 5200, pajak 5148, total 51948
// ReferenceError: saldoKas is not defined
// TypeError: kasirKedai is not iterable