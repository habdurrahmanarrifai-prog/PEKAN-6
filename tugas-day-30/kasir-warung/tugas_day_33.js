const produk = { nama: "Kopi Susu", harga: 20000, stok: 10, kategori: "minuman" };

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

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 20000, stok: 10 },
    { nama: "Teh", kategori: "minuman", harga: 15000, stok: 5 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 10000, stok: 8 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 25000, stok: 4 },
    { nama: "Es Teh", kategori: "minuman", harga: 12000, stok: 6 },
  ],
  keranjang: [],

  cariHarga(namaMenu) {
    for (let menu of this.menu) {
      if (menu.nama === namaMenu) {
        return menu.harga;
      }
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let menu of this.menu) {
      if (menu.nama === namaMenu && menu.stok >= jumlah) {
        this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
        menu.stok -= jumlah;
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
    }
    return 0;
  },

  cetakStruk() {
    console.log("Nama Kedai: " + this.nama);
    console.log("Daftar Belanja:");
    for (let item of this.keranjang) {
      console.log(item.nama + " x" + item.jumlah + ": Rp " + this.cariHarga(item.nama) * item.jumlah);
    }
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const pajak = (subtotal - diskon) * 0.11;
    const total = subtotal - diskon + pajak;
    console.log("Subtotal: Rp " + subtotal);
    console.log("Diskon: Rp " + diskon);
    console.log("Pajak: Rp " + pajak);
    console.log("Total: Rp " + total);
    this.saldoKas += total;
  },
};

// Properti dinamis
const websiteKey = "website";
kasirKedai[websiteKey] = "www.kedaizenja.com";
console.log(websiteKey in kasirKedai); // true
delete kasirKedai[websiteKey];
console.log(websiteKey in kasirKedai); // false

// Menggunakan for...in untuk mencetak jam operasional
for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}

// Menggunakan for...in untuk mencetak menu pertama
for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

// Menggunakan Object.keys dan Object.values
console.log(Object.keys(kasirKedai.jamOperasional));
console.log(Object.values(kasirKedai.jamOperasional));

// Menghitung huruf "a" dalam nama kedai
let countA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    countA++;
  }
}
console.log("Jumlah huruf 'a' dalam nama kedai: " + countA);

// Uji Skenario
// Skenario 1: Kopi Susu x2, Roti Bakar x1
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);
kasirKedai.cetakStruk();

// Skenario 2: Teh x3, Nasi Goreng x1
kasirKedai.tambahKeKeranjang("Teh", 3);
kasirKedai.tambahKeKeranjang("Nasi Goreng", 1);
kasirKedai.cetakStruk();

// Kasus gagal: Menu tidak ada
console.log(kasirKedai.tambahKeKeranjang("Sate", 1)); // false
// Kasus gagal: Jumlah melebihi stok
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 15)); // false

// Bonus: Menu Menipis
kasirKedai.menuMenipis = function() {
  const menuMenipis = [];
  for (let menu of this.menu) {
    if (menu.stok < 5) {
      menuMenipis.push(menu.nama);
    }
  }
  return menuMenipis;
};

console.log(kasirKedai.menuMenipis()); // Menampilkan menu yang stoknya kurang dari 5