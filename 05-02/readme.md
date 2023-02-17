Tambahan dulu dari materi sebelumnya:

Unary = Operandnya satu (True atau false)
Binary = Operandnya dua (Operasi aritmatik)
Ternary = Ada tiga operan

# Struktur Data Array

Pembahasan:

1. Konsep struktur data
2. Konsep array
3. Operasi dasar pada array
4. Fungsi-fungsi pada array

Struktur data artinya datanya bukan cuma satu. Seperti organisasi yang pastinya anggotanya bukan hanya satu dan terstruktur.
## Array

penulisannya menggunakan kurung siku contoh [10, 20,]; disarankan di akhir penulisan ditambahkan koma untuk memudahkan apabila akan menambah data baru.

## Operasi pada array
* menampilkan indeks pada array: 
const scores = [1, 5, 7,];
console.log(scores[0]);
* mengubah isi array:
scores[1] = 10;
* indeks array bisa diubah walau diinisialisasi sebagai variabel const. artinya, const hanya berurusan dengan datanya, bukan indeks pada array. berbeda kasus kalau arraynya diiubah panjangnya misal.

Array itu tidak dicopy, tapi direferensikan. Contohnya:
const scores = [1, 5, 7,];
const values = scores;

values[1] = 8;
console.log(scores, values);
* Hasil dari pengubahan ini akan berpengaruh pada scores karena scores merupakan isi dari variabel vlaues.

Namun array bisa dicopy, contoh penulisan untuk proses copy array

Note: Array bisa dimasukkan dalam array.
const scores = [1, 5, 7,];
const values = [...scores];
* titik tiga itu dinamakan spread operator, artinya array yang ada di dalam values akan dikeluarkan dan disebarkan menjadi copy.

Menghapus array bisa dengan.
const scores = [1, 5, 7,];
scores.pop() // menghapus array dari indeks belakang
scores .shift() // Menghapus array dari indeks depan
Menambah array 
scores.unshift(1); // menambah isi array di depan
scores.push(1); // menambah isi array di belakang
scores.splice(2, 0, 9); // Menambah di tengah, parameter pertama artinya di indeks berapa mau ditambahkan, param kedua artinya berapa indeks di belakang yang dihapus, dan param terakhir adalah value yan mau ditambhakan. Artinya splice bisa digunakan untuk menghapus dan menambah.

## Fungsi-fungsi pada array
* Panjang array (Length)
untuk mencari panjang array bisa menggunakan proprety length.
const scores = [1, 5, 7,];
console.log(scores.length);


* ForEach
Foreach adalah fungsi untuk menampilkan array. Foreach cuma melooping dan tidak mereturn apa-apa.

* map
Sama dengan foreach, bedanya map akan mereturn array baru yang panjangnya sama engan array yang dimap dan akan mereturn array baru (Immutability)

* reduce

method ini mereturn 4 parameter, pertama accumulator (nilai terakhir dari proses reduce), kedua element array, ketiga indeksnya, keempat semuanya.
accumjlator berawal dari param kedua berupa 0 bisanaya dan bisa bertambah seiring nilai yan gdikembalikan dengan return

Tambahan:

dalam konsep variabel, data harus ada dahulu baru bisa disimpan dalam variabel, begitulah komputer membaca kode.

Tugas

Buat array dan lakukan semua operasinya. Array string shift, unshift, pop, push, splice, map reduce.

