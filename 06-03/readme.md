# Pemrograman ASinkron

Pembahasan:

1. Konsep pemrograman asinkron dan non-blocking
2. Perbedaan concurrency dengan parallelism
3. Callback, promise, dan async-await

## Konsep

Sebelum masuk sinkron, kita tahu bahwa sincronous adalah proses yang dijalankan dari atas ke bawah dan saling tunggu eksekusinya dan tidak memberikan perilaku yang aneh-aneh.

JS defaultnya asinkron. asinkron kebalikannya sincronous. Ada beberapa proses yang bisa dilakukan pada satu waktu yang sama. sifat prosesnya non-blocking artinya dia jalan tanpa menunggu proses lain selesai. dan prosesnya sendiri tanpa ditunggu proses lain.

Pada JS ada proses yang perlu nunggu, yaitu setTImeout(). akan tetapi nonblocking akan dijalankan dan tidak nunggu setTimeout().

masalah dari asinkron adalah ketidak sinkron, dari masalah inilah maka kita perlu kelola.

## Callback

ada yang namanya callback hell

## promise

untuk membuat promise bisa menginisialisasi object dengan new PRomise(). Promise meminta du parameter resolve dan reject. Ketika ada proses yang diresolve promise, dia masuk then yang meminta callback dan nerima hasil dari promise. Reject konsepnya mirip throw error akan mengembalikan error. Reject akan diterima .catch

## ASync Await

Promise dengan cara supaya menunggu resolve atau reject tidak perlu .then dan cath

* Note: Promise dengan async aawait lebih sering digunakan daripada promise dengan .then .catch.


