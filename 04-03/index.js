// Lingkaran

function phi(){
    return 22 / 7;
}

function luasLingkaran(r){
    rumusLuasLing = phi() * r**2;
    return rumusLuasLing;
}

console.log(luasLingkaran(2));

// Rumus Bangun Ruang

function volumeBalok(p, l, t){
    let rumusVolume = p * l * t;
    return rumusVolume;
}

console.log(volumeBalok(1,3,3));

// Perbandingan aja sih

function perbandinganAngka(angka1, angka2){
    if(angka1 > angka2){
        return ('Angka Pertama Lebih Besar');
    }
    else if(angka1 < angka2){
        return ('Angka Kedua Lebih Besar');
    }
    else if(angka1 == angka2){
        return ('Angka Sama');
    }
    else{
        return ('Inputan Salah');
    }
}

console.log(perbandinganAngka(1, 2));

// Rata-Rata.

function penjumlahan(a, b, c){
    return a + b + c;
}

function rataRata(){
    rata = penjumlahan(3,3,3)/3;
    return rata;
}

console.log(rataRata());


// Tugas menulis if dan for dengan function

// Tugas If

function indeksNilai(nilai){
    if (nilai >= 80){
        return "A";
    }
    else if (nilai >= 60 && nilai < 80){
        return "B";
    }
    else if (nilai >= 40 && nilai < 60){
        return "C";
    }
    else if (nilai >= 1 && nilai < 40){
        return "D";
    }
    else{
        return "E";
    }
}

console.log(indeksNilai(79));


// Tugas For

// Angka Genap
function genap(angka){
    return angka % 2 == 0;
}

function angkaGenap(){
    for(let i = -10;i <= 10; i++){
        if(genap(i)){
            console.log(i);
        }
    }
}

angkaGenap();

// Angka Ganjil
function ganjil(angka){
    return angka % 2 != 0;
}

function angkaGenap(){
    for(let i = -10;i <= 10; i++){
        if(ganjil(i)){
            console.log(i);
        }
    }
}

angkaGenap();

