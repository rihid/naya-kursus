# Penanganan Error

Pembahasan:
1. Konsep error
2. Membuat error dengan throw
3. Menangani error dengan try-catch

## Konsep Error

Error ada di mana-mana, makanya perlu yang namanya error handling. terutama error yang dari user ahrus ditangani betul.
- uncaught Syntax Error: unexpected identifier = indetifiear tidak dikenali, artinya indentifier adalah apa-apa yang kita buat seperti variabel, fungsi, dll
 DI js ada class untuk menampilkan error namanya class error.


## Membuat error dengan throw

Error yang dibuat akan membuat program berhenti di mana error dianggil dengan throw. Fungsi error di throw dan tidak direturn karena ekspektasi dari error datanya tidak dikembalikan tetapi di throw.

## Menangani error dengan try-catch

adalah cara membuat gerbagn di proses yang kemungkinan ada terdapat pilihan error, khususnya dari user. seperti prose login dlsb.

####  Try
merupakan mencoba memasukkan proses yang sekiranya terdapat error (ad throw). Kalau ada trhow di dalam try makan akan ditangkap catch.

#### catch

menamgkap error dari try