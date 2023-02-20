# Struktur Data Object

Pembahasan:

Konsep object
Operasi dasar pada object
Object dan array destructuring
Spread operator

## Konsep
Object merupakan salah satu bentuk struktur data, mirip dengan array. Untuk mengakses Object kita bisa melewati key yang berupa label string. Strutur pada object ada key dan value. Syntax penulisan Oject:

const siswa = {nama: 'Hamdan', usia: 18};
console.log(siswa['nama']);
console.log(siswa['usia']);

Cara kedua mengakses object 
console.log(siswa.nama);
console.log(siswa.usia);

Untuk memanipulasi object 
siswa.nama = 'Rizal'; // Dari Object yang ada di atas.
console.log(siswa.nama); // Akan menampilakn Rizal

Pada object bisa menambahkan panjang data (Key dan Value). Berbeda dengan di array yang hanya bisa mengedit saja, dan tidak bisa menmabah panjan gdata.
// contoh
siswa.alamat = 'Bandung';
console.log(siswa);
* Menghapus Object
delete siswa.kelas; // Menhapus data kelas
* Menampilakn hanya key dari OBject
console.log(Object.keys(siswa)); //
* Menampikan hanya value dari Object
console.log(Object.values(siswa));



  1 const siswa = {
  7         nama: 'Hamdan',
  6         usia: 18,
  5         kelas: 'XII',
  4         'alamat lengkap': 'Jalan Kurang',
  3 };
  2 
  1 console.log(siswa['alamat lengkap']);

  Bisa juga seperti array dengan key-nya number
    const siswa = {
  5         0: 'Hamdan',
  4         1: 18,
  3         2: 'XII',
  2 };
  1 
10  console.log(siswa[0]);

* Loop pada Object

Object tidak punya property length. maka membutuhkan object keys yang akan membuat array baru kemudian array baru itu nanti di cari lengthnya
contoh 

 //AKan memunculkan panjang object
  2 const max = Object.keys(siswa).length;
  1 for (let i = 0; i < max; i++) {
  12          console.log(i);
  1 }
  2 

// akan memunculkan nama key-nya

 
  2 const keys = Object.keys(siswa);
  1 for (let i = 0; i < keys.length; i++) {
12          console.log(keys[i]);
  1 }
  2 

// Memunculkan value nya

 
  2 const keys = Object.keys(siswa);
  1 for (let i = 0; i < keys.length; i++) {
12          console.log(keys[i], siswa[keys[i]]);
  1 }
  2 

* ForEach pada Object

  4 
  3 Object.keys(siswa).forEach(k => {
  2         console.log(k, siswa[k]); // k adalah key dan siswa[k] valuenya.
  1 });



* Tambahan:
untuk key yang memiliki spasi karena dua kata atau lebih penulisannya seperti ni 
SIfat object dan array akan refference. apabila ditambah value akan ikut bertambah

  6 
  5 const murid = siswa;
  4 
  3 murid.nilai = 90;
  2 
  1 console.log(siswa);
 Untuk mengcopy bisa dengan
 // Hasilnya murid akan ketambahan nilai sementara siswa tidak.
  5 const murid = Object.assign({}, siswa);
  4 
  3 murid.nilai = 90;
  2 
  1 console.log(siswa);
15  console.log(murid);
  
  cara lain bisa dengan:

    1 
10  const murid = {...siswa};
  1 
  2 murid.nilai = 90;
  3 
  4 console.log(siswa);
  5 console.log(murid);
  6

### Object Destructuring

contoh 

 10 // Menampilkan Object Biasa
  9 
  8 const siswa = {
  7         nama: 'Hamdan',
  6         usia: 18,
  5         kelas: 'XII',
  4 };      
  3 
  2 // object destructuring
  1 const { nama, usia } = siswa;
12  
  1 console.log(nama, usia, kelas);
  2 

Bisa menggunakan spread opertor juga

  4 
  3 // object destructuring
  2 const { nama, ...murid } = siswa;
  1 
13  console.log(nama, murid); // Akan menampilkan value dari key nama di object siswa  + keseluruhan objec murid


### Tugas

 11 
 10 // Tugas:
  9 // 1. buat fungsi untuk cek apakah object punya key tertentu atau tidak // True atau false
  8 
  7 // 2.
  6 // {
  5 //   "x": "abc",
  4 //   "y": 10,
  3 //   "z": 20,
  2 // }
  1 // Tampilkan penjumlahan dari angka yang ada

* Truthy dan Falsy si dini referensinya:
https://developer.mozilla.org/en-US/docs/Glossary/Truthy