// Convert Nilai

let nilai = 79;

if (nilai >= 80){
    console.log('A');
}
else if (nilai >= 60 && nilai < 80){
    console.log('B');
}
else if (nilai >= 40 && nilai < 60){
    console.log('C');
}
else if (nilai >= 1 && nilai < 40){
    console.log('D');
}
else{
    console.log('E');
}

// Convert juga tapi pakai Switch Case

// Rumus-Rumus

// Rumus Lingkaran

let phi = 3.14;
let r1 = 3;
let r2 = 4;

let luasLingkaran1 = phi * r1**2;
let luasLingkaran2 = phi * r2**2;

if (luasLingkaran1 == luasLingkaran2){
    console.log("Sama");
}
else{
    console.log("Tidak Sama")
}


// Rumus Persegi panjang

let p1 = 6;
let l1 = 3;

let p2 = 6;
let l2 = 3;

let luasPersegi1 = p1 * l1;
let luasPersegi2 = p2 * l2;

if (luasPersegi1 == luasPersegi2){
    console.log("Sama");
}
else{
    console.log("Tidak Sama");
}

// Rumus Segitiga 

let a1 = 2;
let t1 = 3;

let a2 = 2;
let t2 = 4;

let luasSegitiga1 = a1 * t1;
let luasSegitiga2 = a2 * t2;


if (luasSegitiga1 == luasSegitiga2){
    console.log("Sama");
}
else{
    console.log("Tidak Sama");
}

// Rumus Volume Balok


let pBalok1 = 4;
let lBalok1 = 4;
let tBalok1 = 6;

let pBalok2 = 4;
let lBalok2 = 4;
let tBalok2 = 6;

let volumeBalok1 = pBalok1 * lBalok1 * tBalok1;
let volumeBalok2 = pBalok2 * lBalok2 * tBalok2;


if (volumeBalok1 == volumeBalok2){
    console.log("Sama");
}
else{
    console.log("Tidak Sama");
}

// Rumus Volume Tabung

const radiusTabung1 = 5;
const tinggiTabung1 = 10;

const radiusTabung2 = 5;
const tinggiTabung2 = 10;

const volumeTabung1 = phi * (radiusTabung1**2) * tinggiTabung1;
const volumeTabung2 = phi * (radiusTabung2**2) * tinggiTabung2;


if (volumeTabung1 == volumeTabung2){
    console.log("Sama");
}
else{
    console.log("Tidak Sama");
}
