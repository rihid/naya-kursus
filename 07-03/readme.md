# Event pada DOM

Pembahasan:

1. Jenis-jenis event
2. Menambah event handler pada elemen


## Jenis
Event merupakan kejadian. Pada DOM ada beberap kejadian yang kemungkinan terjadi yang berasal dari perilaku user pada aplikasi kita. Contoh: seperti menekan tombol, menakan klik, melepas klik, dll. Semua ini bisa dikelola melalui event.

1. button memiliki property `onclick`
2. bisa menangani dengan addEventListener() ==> addEventListener adalah fungsi yang memiliki dua parameter wajib, parameter peretama kejadian yang dikenali dom misal 'click
, yang kedua merupakan callback function.


## Menambah Event Handler


.preventDefault ==> mencegah element melakukan hal defaultnya, contohnya tombol submit yang defaultnya 