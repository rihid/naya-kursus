# Hari Ke-3: Dasar-Dasar NodeJS
Pembahasan:
1. Universal Javascript
2. Global Object
3. Node Package Manager (NPM)
4. System Interaction
    * environment variable
    * file system


## Universal JS
Dahulu JS hanya bisa berjalan di Browser. Makin ke sini makin berkembang, dan bisa berjalan di luar browser maka muncullah Node JS. Node JS adalah runtime untuk JS agar bis aberjalan di luar browser.

## Global Variabel
Jika di Web browser kita bisa pakai this yang merujuk pada `window` (tab) browser. apabila this di node js merujuk pada variabel `global`.

Note: default js pada node js penamaan filenya adalah index.js, kemudian untuk meninclude halamn file lain bisa pakai require(./namafile.js). Nama index akan otomatis dibaca oleh node js dan bisa dipanggil.

## NPM

Untuk mengelola package di NOde JS

untuk menginisiasi NPM untuk membuat package.json caranya
ketik `npm init` di terminal.
atau ketik `npm init -y` di terminal untuk package default 

perintah `npm run` akan membaca script pada package.json

untuk menginstall modul nmp bisa download dari npmjs.com

di npm ada depedencies yang akan 

### Environtment Variable

Variabel yang ada di sistem kita. Untuk mendapatkan env variabel bisa dari `process.env`


`qoestion mark operator`
`null safety`

### FIle System

`fs`

write pada file system adalah menulis isi dengan menimpa, apabila appent akan menambah di belakangnya