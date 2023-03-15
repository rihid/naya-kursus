# Hari Ke-1: Protokol HTTP
Pembahasan:
1. Cara kerja dan bagian-bagian dari protokol HTTP
2. Melakukan HTTP request menggunakan Insomnia REST


HTTP Client yang paling sering dipakai adalah web browser.

HTTP singkatan dari hypertext transfer protocol. untuk mengirimkan semua di web melalui protokol ini. Ketika kita mengunjungi halaman web sebenarnya kita mendownload apa yandg ditampilan pada halaman tersebut.

HTTP ada dua
Server: menyimpad data-data
client: menampilkan data-data

Setiap melakukan request, http client membutuhkan url

Request punya url, method, header dan body. ketika sudah melakukan req tersebut maka akan mendapatkan response (Header, Body, dan status)

### Insomnia
sebuath HTTp Client
method
1. Get: untuk mengambil
2. post: mengirim // Jika menggunakan method ini harus menentukan req bodynya
3. put: meletakkan // create or replace. sudah ada data tinggal diupdate
4. patch: update sebagian data. misal mengganti nama depan 
5. delete: hapus // update juga tetai diupdate menjadi kosong
6. Option: pilihan // dipakai untuk `pre-flight` biasanya. mengecek dulu apakah ada urlnya dlsb baru melakukan req. seperti 
7. head: respon beneran tetapi tidak ada response body

 fitur-fitur insomia
- request

dalam method post terdapat:
// untuk berbasis form
multipart: bisa untuk menambahkan file seperti gambar dan doc
form: cuma bisa kirim teks

// untuk berbasis teks
json
xml
yaml

query

- response

header
body


