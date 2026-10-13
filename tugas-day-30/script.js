<<<<<<< HEAD
// Tugas Day 30: Kasir Warung dengan Percabangan
// Materi: if, else if, else, switch, dan Truthy/Falsy
// Penjelasan singkat ditulis dalam komentar Bahasa Indonesia.

console.log("=== Langkah 1: Tebak dulu, baru cek ===");

/*
Potongan A
Tebakan saya sebelum run:
- 0 -> tidak masuk
- "0" -> masuk
- "" -> tidak masuk
- [] -> masuk
- null -> tidak masuk
- -1 -> masuk

Kenapa? Karena JavaScript memperlakukan value truthy/falsy seperti:
- 0, "", null, undefined, false, NaN -> falsy
- "0", [], -1 -> truthy
*/

// Potongan A
if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Hasil asli Potongan A:
// 2: masuk
// 4: masuk
// 6: masuk

// Pertanyaan 1:
// "0" tetap masuk karena string berisi angka "0" bukan string kosong, jadi ia truthy.
// [] tetap masuk karena array kosong masih dianggap truthy di JavaScript.
// Jadi walau tampak "kosong", nilai itu tetap bukan nilai falsy.

console.log("\n=== Potongan B ===");

/*
Potongan B
Tebakan saya sebelum run:
- "Diskon 5%"
Alasannya: kondisi pertama yang benar akan dipilih, dan 120000 >= 25000 benar.
Jadi program tidak sempat sampai diskon 15%.
*/

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil asli Potongan B:
// Diskon 5%

// Pertanyaan 2:
// belanja = 120000, jadi kondisi belanja >= 25000 benar.
// Karena program mengecek dari atas ke bawah dan berhenti di kondisi pertama yang benar,
// maka hasilnya Diskon 5% bukan Diskon 15%.
// Cara memperbaikinya: urutkan dari diskon terbesar dulu:
// if (belanja >= 100000) { ... } else if (belanja >= 50000) { ... } else if (belanja >= 25000) { ... }

console.log("\n=== Potongan C ===");

/*
Potongan C
Tebakan saya sebelum run:
- "Promo Akhir Pekan"
- "Promo Keluarga"

Alasannya: switch akan masuk ke case "sabtu" lalu terus kebawah sampai bertemu break.
Karena tidak ada break setelah case "sabtu", program akan jatuh ke case "minggu".
*/

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Hasil asli Potongan C:
// Promo Akhir Pekan
// Promo Keluarga

// Pertanyaan 3:
// Yang tercetak dua baris karena case "sabtu" tidak diberi break.
// Setelah masuk case "sabtu", program berjalan terus ke bawah sampai menemukan break di case "minggu".
// Agar hanya satu baris yang tercetak, tambahkan break di akhir setiap case, misalnya:
// case "sabtu":
//   console.log("Promo Akhir Pekan");
//   break;

console.log("\n=== Langkah 2: Perbaiki 5 kesalahan ===");

// Data awal
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX: kondisi diskon harus dicek dari yang paling besar dulu
// Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX: variabel `jenismember` typo; harus `jenisMember`
// Potongan member. "gold" 5000, "silver" 2000, lainnya 0.
// Seharusnya untuk "gold": 5000
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX: `=` adalah assignment, bukan perbandingan; harus `===`
// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// FIX: total akhir harus 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX: uang pas juga dianggap lunas, jadi pakai `>=`
// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Hasil yang benar di console harus:
// Voucher tidak dipakai
// Status: Lunas
// 8000 5000 67000

// Pertanyaan: ke-5 kesalahan dalam satu kalimat singkat masing-masing
// 1. Kondisi diskon salah urutannya, sehingga 80000 masuk ke diskon 5% padahal seharusnya 10%; diperbaiki dengan urutan dari nilai terbesar ke kecil.
// 2. Variabel `jenismember` typo dan tidak cocok dengan nama variabel yang dibuat; diperbaiki menjadi `jenisMember`.
// 3. `switch (jenismember)` salah karena nama variabel typo dan juga `case "gold"` tidak ada `break`, sehingga program tidak berhenti di case yang benar; diperbaiki dengan `switch (jenisMember)` dan `break`.
// 4. `if ((kodeVoucher = ""))` salah karena menggunakan `=` untuk membandingkan; diperbaiki menjadi `===` agar membandingkan nilai, bukan mengubah nilai.
// 5. `if (uangBayar > totalAkhir)` salah karena uang pas tidak dihitung lunas; diperbaiki menjadi `>=` agar uang sama dengan total dianggap lunas.

// Mana kesalahan yang menyebabkan error dan mana yang tidak error?
// - `if ((kodeVoucher = ""))` tidak error karena `=` adalah operasi assignment yang valid.
//   Tapi hasilnya salah karena ia mengubah nilai `kodeVoucher` menjadi "".
// - Variabel typo `jenismember` juga tidak error jika JavaScript tidak tahu variabel tersebut? Ia akan error karena variabel tidak didefinisikan.
//   Jadi kesalahan ini akan menghasilkan ReferenceError.
// - Kesalahan urutan diskon dan tanda `>` tidak error, tapi hasilnya salah.
// - Kesalahan `=` pada `if` juga tidak error, hanya logika yang salah.

// Bedanya `=`, `==`, dan `===`
// - `=` : assignment, untuk memberi nilai ke variabel.
// - `==` : perbandingan lembut, membandingkan nilai tanpa memerhatikan tipe data.
// - `===` : perbandingan ketat, membandingkan nilai dan tipe data sekaligus.
// Kode `if (kodeVoucher = "")` tidak error karena `=` valid secara syntax, tapi ia bukan perbandingan.
// Ia malah mengubah `kodeVoucher` menjadi "".

console.log("\n=== Langkah 3: Bikin kasir sendiri ===");

// Data awal
// Simpan data dalam variabel yang berbeda dari Langkah 1 dan 2
const kasirNamaPelanggan = "Rina";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// Fungsi kasir
function jalankanKasir(
  namaPelanggan,
  totalBelanja,
  hari,
  jenisMember,
  kodeVoucher,
  uangBayar
) {
  // 1. Diskon belanja
  let diskonBelanja = 0;
  if (totalBelanja >= 100000) {
    diskonBelanja = totalBelanja * 0.15;
  } else if (totalBelanja >= 50000) {
    diskonBelanja = totalBelanja * 0.1;
  } else if (totalBelanja >= 25000) {
    diskonBelanja = totalBelanja * 0.05;
  }

  // 2. Potongan member
  let potonganMember = 0;
  switch (jenisMember) {
    case "gold":
      potonganMember = 5000;
      break;
    case "silver":
      potonganMember = 2000;
      break;
    default:
      potonganMember = 0;
  }

  // 3. Promo hari
  let potonganHari = 0;
  switch (hari) {
    case "jumat":
      potonganHari = 3000;
      break;
    case "sabtu":
    case "minggu":
      potonganHari = 5000;
      break;
    default:
      potonganHari = 0;
  }

  // 4. Validasi nama menggunakan Truthy/Falsy
  if (namaPelanggan) {
    console.log(`Pelanggan: ${namaPelanggan}`);
  } else {
    console.log("Nama pelanggan belum diisi");
  }

  // 5. Voucher menggunakan Truthy/Falsy
  let potonganVoucher = 0;
  if (kodeVoucher) {
    potonganVoucher = 2000;
    console.log(`Voucher dipakai: ${kodeVoucher}`);
  } else {
    console.log("Voucher tidak dipakai");
  }

  // 6. Total akhir
  let totalAkhir = totalBelanja - diskonBelanja - potonganMember - potonganHari - potonganVoucher;
  console.log(`Total akhir: ${totalAkhir}`);

  // 7. Status pembayaran
  if (uangBayar > totalAkhir) {
    const kembalian = uangBayar - totalAkhir;
    console.log(`Status: Lunas, kembalian: ${kembalian}`);
  } else if (uangBayar === totalAkhir) {
    console.log("Status: Lunas (uang pas)");
  } else {
    const kekurangan = totalAkhir - uangBayar;
    console.log(`Status: Kurang, kekurangan: ${kekurangan}`);
  }

  console.log("-------------------------");
}

// Skenario 1
// Nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", uang 100000
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Total akhir: 72000
// Status: Lunas, kembalian: 28000
console.log("Skenario 1");
jalankanKasir("Rina", 90000, "sabtu", "silver", "SENJA10", 100000);

// Skenario 2
// Nama "Edo", belanja 120000, hari "jumat", member "gold", voucher kosong, uang 93000
// Hasil:
// Pelanggan: Edo
// Voucher tidak dipakai
// Total akhir: 93000
// Status: Lunas (uang pas)
console.log("Skenario 2");
jalankanKasir("Edo", 120000, "jumat", "gold", "", 93000);

// Skenario 3
// Nama kosong, belanja 20000, hari "selasa", member "bronze", voucher kosong, uang 12000
// Hasil:
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Total akhir: 20000
// Status: Kurang, kekurangan: 8000
console.log("Skenario 3");
jalankanKasir("", 20000, "selasa", "bronze", "", 12000);

// Pertanyaan 1:
// Urutan else if pada diskon dimulai dari angka terbesar agar kondisi yang paling spesifik dulu dipilih.
// Jika dibalik, maka untuk total belanja 120000, nilai pertama yang benar adalah >= 25000, sehingga program akan berhenti di diskon 5% dan hasilnya salah.
// Jadi pengecekan terbaik: mulai dari yang tertinggi.


// Pertanyaan 2:
// Promo hari lebih cocok memakai switch karena nilainya adalah pilihan yang sudah tetap dan terbatas.
// Kita hanya mengecek satu variabel ("jumat", "sabtu", "minggu", dan default), sehingga switch lebih ringkas dan mudah dibaca.
// if...else if juga bisa, tapi untuk banyak pilihan yang eksak, switch lebih cocok.

// Pertanyaan 3:
// Pada switch promo hari, saya sengaja tidak menulis break di antara case "sabtu" dan case "minggu" karena kedua case punya hasil yang sama, yaitu potongan 5000.
// Program akan "jatuh" dari case "sabtu" ke case "minggu" tanpa menghentikan eksekusi, lalu hasilnya tetap benar karena kedua case punya nilai yang sama.

// Pertanyaan 4:
// 3 nilai yang membuat if (namaPelanggan) bernilai false adalah:
// - "" (string kosong)
// - null
// - undefined
// Selain itu, 0, false, dan NaN juga false.

// Pertanyaan 5:
// if (-1) -> true, karena angka selain 0 pada JavaScript adalah truthy.
// if (-1 > 0) -> false, karena -1 tidak lebih besar dari 0.
// Jadi hasilnya berbeda karena yang satu mengecek nilai itu sendiri, sementara yang lain mengecek kondisi perbandingan.

console.log("\n=== Bonus: Hitung jumlah hari dalam bulan ===");

//
// Bonus (+5 poin)
// Bulan 4, 6, 9, 11 -> 30 hari
// Bulan 2 -> 28 atau 29 hari
// Bulan 1, 3, 5, 7, 8, 10, 12 -> 31 hari
// selain itu -> "Bulan tidak valid"

let bulan = 4;

switch (bulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 hari");
    break;
  case 2:
    console.log("28 atau 29 hari");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 hari");
    break;
  default:
    console.log("Bulan tidak valid");
}

// Kenapa beberapa case bisa digabung tanpa break?
// Karena beberapa bulan memiliki hasil yang sama.
// Contohnya: case 4, 6, 9, 11 semua sama-sama menghasilkan "30 hari".
// Jika tidak ada break, program akan terus turun ke bawah sampai menemukan break.
// Jadi beberapa case bisa dibungkus dalam satu blok dan tetap menghasilkan hasil yang sama.

console.log("\n=== Selesai ===");
=======
// Tugas Day 30: Kasir Warung dengan Percabangan
// Materi: if, else if, else, switch, dan Truthy/Falsy
// Penjelasan singkat ditulis dalam komentar Bahasa Indonesia.

console.log("=== Langkah 1: Tebak dulu, baru cek ===");

/*
Potongan A
Tebakan saya sebelum run:
- 0 -> tidak masuk
- "0" -> masuk
- "" -> tidak masuk
- [] -> masuk
- null -> tidak masuk
- -1 -> masuk

Kenapa? Karena JavaScript memperlakukan value truthy/falsy seperti:
- 0, "", null, undefined, false, NaN -> falsy
- "0", [], -1 -> truthy
*/

// Potongan A
if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Hasil asli Potongan A:
// 2: masuk
// 4: masuk
// 6: masuk

// Pertanyaan 1:
// "0" tetap masuk karena string berisi angka "0" bukan string kosong, jadi ia truthy.
// [] tetap masuk karena array kosong masih dianggap truthy di JavaScript.
// Jadi walau tampak "kosong", nilai itu tetap bukan nilai falsy.

console.log("\n=== Potongan B ===");

/*
Potongan B
Tebakan saya sebelum run:
- "Diskon 5%"
Alasannya: kondisi pertama yang benar akan dipilih, dan 120000 >= 25000 benar.
Jadi program tidak sempat sampai diskon 15%.
*/

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil asli Potongan B:
// Diskon 5%

// Pertanyaan 2:
// belanja = 120000, jadi kondisi belanja >= 25000 benar.
// Karena program mengecek dari atas ke bawah dan berhenti di kondisi pertama yang benar,
// maka hasilnya Diskon 5% bukan Diskon 15%.
// Cara memperbaikinya: urutkan dari diskon terbesar dulu:
// if (belanja >= 100000) { ... } else if (belanja >= 50000) { ... } else if (belanja >= 25000) { ... }

console.log("\n=== Potongan C ===");

/*
Potongan C
Tebakan saya sebelum run:
- "Promo Akhir Pekan"
- "Promo Keluarga"

Alasannya: switch akan masuk ke case "sabtu" lalu terus kebawah sampai bertemu break.
Karena tidak ada break setelah case "sabtu", program akan jatuh ke case "minggu".
*/

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Hasil asli Potongan C:
// Promo Akhir Pekan
// Promo Keluarga

// Pertanyaan 3:
// Yang tercetak dua baris karena case "sabtu" tidak diberi break.
// Setelah masuk case "sabtu", program berjalan terus ke bawah sampai menemukan break di case "minggu".
// Agar hanya satu baris yang tercetak, tambahkan break di akhir setiap case, misalnya:
// case "sabtu":
//   console.log("Promo Akhir Pekan");
//   break;

console.log("\n=== Langkah 2: Perbaiki 5 kesalahan ===");

// Data awal
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX: kondisi diskon harus dicek dari yang paling besar dulu
// Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX: variabel `jenismember` typo; harus `jenisMember`
// Potongan member. "gold" 5000, "silver" 2000, lainnya 0.
// Seharusnya untuk "gold": 5000
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX: `=` adalah assignment, bukan perbandingan; harus `===`
// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// FIX: total akhir harus 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX: uang pas juga dianggap lunas, jadi pakai `>=`
// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Hasil yang benar di console harus:
// Voucher tidak dipakai
// Status: Lunas
// 8000 5000 67000

// Pertanyaan: ke-5 kesalahan dalam satu kalimat singkat masing-masing
// 1. Kondisi diskon salah urutannya, sehingga 80000 masuk ke diskon 5% padahal seharusnya 10%; diperbaiki dengan urutan dari nilai terbesar ke kecil.
// 2. Variabel `jenismember` typo dan tidak cocok dengan nama variabel yang dibuat; diperbaiki menjadi `jenisMember`.
// 3. `switch (jenismember)` salah karena nama variabel typo dan juga `case "gold"` tidak ada `break`, sehingga program tidak berhenti di case yang benar; diperbaiki dengan `switch (jenisMember)` dan `break`.
// 4. `if ((kodeVoucher = ""))` salah karena menggunakan `=` untuk membandingkan; diperbaiki menjadi `===` agar membandingkan nilai, bukan mengubah nilai.
// 5. `if (uangBayar > totalAkhir)` salah karena uang pas tidak dihitung lunas; diperbaiki menjadi `>=` agar uang sama dengan total dianggap lunas.

// Mana kesalahan yang menyebabkan error dan mana yang tidak error?
// - `if ((kodeVoucher = ""))` tidak error karena `=` adalah operasi assignment yang valid.
//   Tapi hasilnya salah karena ia mengubah nilai `kodeVoucher` menjadi "".
// - Variabel typo `jenismember` juga tidak error jika JavaScript tidak tahu variabel tersebut? Ia akan error karena variabel tidak didefinisikan.
//   Jadi kesalahan ini akan menghasilkan ReferenceError.
// - Kesalahan urutan diskon dan tanda `>` tidak error, tapi hasilnya salah.
// - Kesalahan `=` pada `if` juga tidak error, hanya logika yang salah.

// Bedanya `=`, `==`, dan `===`
// - `=` : assignment, untuk memberi nilai ke variabel.
// - `==` : perbandingan lembut, membandingkan nilai tanpa memerhatikan tipe data.
// - `===` : perbandingan ketat, membandingkan nilai dan tipe data sekaligus.
// Kode `if (kodeVoucher = "")` tidak error karena `=` valid secara syntax, tapi ia bukan perbandingan.
// Ia malah mengubah `kodeVoucher` menjadi "".

console.log("\n=== Langkah 3: Bikin kasir sendiri ===");

// Data awal
// Simpan data dalam variabel yang berbeda dari Langkah 1 dan 2
const kasirNamaPelanggan = "Rina";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// Fungsi kasir
function jalankanKasir(
  namaPelanggan,
  totalBelanja,
  hari,
  jenisMember,
  kodeVoucher,
  uangBayar
) {
  // 1. Diskon belanja
  let diskonBelanja = 0;
  if (totalBelanja >= 100000) {
    diskonBelanja = totalBelanja * 0.15;
  } else if (totalBelanja >= 50000) {
    diskonBelanja = totalBelanja * 0.1;
  } else if (totalBelanja >= 25000) {
    diskonBelanja = totalBelanja * 0.05;
  }

  // 2. Potongan member
  let potonganMember = 0;
  switch (jenisMember) {
    case "gold":
      potonganMember = 5000;
      break;
    case "silver":
      potonganMember = 2000;
      break;
    default:
      potonganMember = 0;
  }

  // 3. Promo hari
  let potonganHari = 0;
  switch (hari) {
    case "jumat":
      potonganHari = 3000;
      break;
    case "sabtu":
    case "minggu":
      potonganHari = 5000;
      break;
    default:
      potonganHari = 0;
  }

  // 4. Validasi nama menggunakan Truthy/Falsy
  if (namaPelanggan) {
    console.log(`Pelanggan: ${namaPelanggan}`);
  } else {
    console.log("Nama pelanggan belum diisi");
  }

  // 5. Voucher menggunakan Truthy/Falsy
  let potonganVoucher = 0;
  if (kodeVoucher) {
    potonganVoucher = 2000;
    console.log(`Voucher dipakai: ${kodeVoucher}`);
  } else {
    console.log("Voucher tidak dipakai");
  }

  // 6. Total akhir
  let totalAkhir = totalBelanja - diskonBelanja - potonganMember - potonganHari - potonganVoucher;
  console.log(`Total akhir: ${totalAkhir}`);

  // 7. Status pembayaran
  if (uangBayar > totalAkhir) {
    const kembalian = uangBayar - totalAkhir;
    console.log(`Status: Lunas, kembalian: ${kembalian}`);
  } else if (uangBayar === totalAkhir) {
    console.log("Status: Lunas (uang pas)");
  } else {
    const kekurangan = totalAkhir - uangBayar;
    console.log(`Status: Kurang, kekurangan: ${kekurangan}`);
  }

  console.log("-------------------------");
}

// Skenario 1
// Nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", uang 100000
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Total akhir: 72000
// Status: Lunas, kembalian: 28000
console.log("Skenario 1");
jalankanKasir("Rina", 90000, "sabtu", "silver", "SENJA10", 100000);

// Skenario 2
// Nama "Edo", belanja 120000, hari "jumat", member "gold", voucher kosong, uang 93000
// Hasil:
// Pelanggan: Edo
// Voucher tidak dipakai
// Total akhir: 93000
// Status: Lunas (uang pas)
console.log("Skenario 2");
jalankanKasir("Edo", 120000, "jumat", "gold", "", 93000);

// Skenario 3
// Nama kosong, belanja 20000, hari "selasa", member "bronze", voucher kosong, uang 12000
// Hasil:
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Total akhir: 20000
// Status: Kurang, kekurangan: 8000
console.log("Skenario 3");
jalankanKasir("", 20000, "selasa", "bronze", "", 12000);

// Pertanyaan 1:
// Urutan else if pada diskon dimulai dari angka terbesar agar kondisi yang paling spesifik dulu dipilih.
// Jika dibalik, maka untuk total belanja 120000, nilai pertama yang benar adalah >= 25000, sehingga program akan berhenti di diskon 5% dan hasilnya salah.
// Jadi pengecekan terbaik: mulai dari yang tertinggi.


// Pertanyaan 2:
// Promo hari lebih cocok memakai switch karena nilainya adalah pilihan yang sudah tetap dan terbatas.
// Kita hanya mengecek satu variabel ("jumat", "sabtu", "minggu", dan default), sehingga switch lebih ringkas dan mudah dibaca.
// if...else if juga bisa, tapi untuk banyak pilihan yang eksak, switch lebih cocok.

// Pertanyaan 3:
// Pada switch promo hari, saya sengaja tidak menulis break di antara case "sabtu" dan case "minggu" karena kedua case punya hasil yang sama, yaitu potongan 5000.
// Program akan "jatuh" dari case "sabtu" ke case "minggu" tanpa menghentikan eksekusi, lalu hasilnya tetap benar karena kedua case punya nilai yang sama.

// Pertanyaan 4:
// 3 nilai yang membuat if (namaPelanggan) bernilai false adalah:
// - "" (string kosong)
// - null
// - undefined
// Selain itu, 0, false, dan NaN juga false.

// Pertanyaan 5:
// if (-1) -> true, karena angka selain 0 pada JavaScript adalah truthy.
// if (-1 > 0) -> false, karena -1 tidak lebih besar dari 0.
// Jadi hasilnya berbeda karena yang satu mengecek nilai itu sendiri, sementara yang lain mengecek kondisi perbandingan.

console.log("\n=== Bonus: Hitung jumlah hari dalam bulan ===");

//
// Bonus (+5 poin)
// Bulan 4, 6, 9, 11 -> 30 hari
// Bulan 2 -> 28 atau 29 hari
// Bulan 1, 3, 5, 7, 8, 10, 12 -> 31 hari
// selain itu -> "Bulan tidak valid"

let bulan = 4;

switch (bulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 hari");
    break;
  case 2:
    console.log("28 atau 29 hari");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 hari");
    break;
  default:
    console.log("Bulan tidak valid");
}

// Kenapa beberapa case bisa digabung tanpa break?
// Karena beberapa bulan memiliki hasil yang sama.
// Contohnya: case 4, 6, 9, 11 semua sama-sama menghasilkan "30 hari".
// Jika tidak ada break, program akan terus turun ke bawah sampai menemukan break.
// Jadi beberapa case bisa dibungkus dalam satu blok dan tetap menghasilkan hasil yang sama.

console.log("\n=== Selesai ===");
>>>>>>> e9d8e96f3fa00fbcd79bd54202e363fbb3949f33
