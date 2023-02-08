# Pengambilan Keputusan 2

## Perulangan

Pembahasan:

1. Konsep perulangan
2. Perulangan dengan for
3. Perulangan dengan while
4. Perulangan dengan do-while

### Konsep
Iteratif
Seperti if mengecek kondisi dan akan menjalankan terus menerus program sampai pada akhirnya berhenti

Sebaiknya setiap proses ada akhirnya, termasuk itu dalam perulangan

Tambahan:
Algoritma yang baik adalah yang ada hasilnya, baru kemudian yang sesuai tujuan.

### for
konsep penulisan sintaks = for (...;...;...){}
pada kurung ada 3 element. element pertama untuk inisiasi variabel, element kedua untuk kondisi apakah perulangannya terpenuhi apa tidak, statement ketiga asignment.

break; = fungsinya untuk mengakriri kode dan langsung ke kode setelah kurung tutup kurang kurawal
continue; = funsginya untuk mengakriri kode setelah kurung kurawal dan kembali ke atas lagi

Perbedaaan inisiasi var di luar if dan di dalam if
jika di luar maka dianggap variabel global, apabila di dalam maka var  akan dihapus setelah selesai kode program perulangan. juga akan memengaruhi memory. var yang di inisiasi di luar akan memakan memory lebih besar karena masih disimpan setelah proses perulangan.

### While
konsep penulisannya mirip dengan if
while (){}
Inisiasi var di luar, kondisi di dalam kurung, dan dilanjutkan kode program yang isinya yang diinginkan dan diakhiri dengan asignment.
### Do While
konsep penulisannya seperti while tapi dibalik
do{} while()
Do While sangat jarang dipakai

Tambahan i++ dan ++i

ketika di console i++ menampilkan data awal sebelum di increment, sementara ++i menampilkan data setelah diincrement
contoh 
i =1 
console.log(i++)
console.log(++i)

NaN (Not a Number) + disiapkan untuk number tapi yang tidak bisa dideskripsikan sebagai number

perbedaan antara for dan while
- For dibatasi dengan jelas dan numerik: Contoh = Isi Auarium 3 Ember
- While jelas tetapi tidak kehitung berapa: Contoh= Isi Aquarium sampai penuh

#### Latihan!
