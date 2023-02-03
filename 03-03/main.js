// Rumus Luas Segitiga

const alas = 2;
const tinggi = 3;
const sisiLain = 2;

const luasSegitiga = 0.5 * alas * tinggi;
console.log(luasSegitiga);
// Rumus  Keliling Segitiga
const kelilingSegitiga = alas + tinggi + sisiLain;
console.log(kelilingSegitiga);

// -----------------------------------------------------------------------------------
// Rumus Luas Persegi Panjang

const panjang = 5;
const lebar = 3;

const luasPersegi = panjang * lebar;
console.log(luasPersegi);
// Rumus Keliling Persegi Panjang
const kelilingPersegi = 2*panjang + 2*lebar;
console.log(kelilingPersegi);

// -----------------------------------------------------------------------------------
// Rumus Luas Lingkaran

const phi = 3.14;
const radius = 3;

const luasLingkaran = phi * radius**2;
console.log(luasLingkaran);
// Keliling LIngkaran
const kelilingLingkaran = 2 * phi * radius;
console.log(kelilingLingkaran);

// ------------------------------------------------------------------------------------
// Rumus Volume Balok

const pBalok = 4;
const lBalok = 4;
const tBalok = 6;

const volumeBalok = pBalok * lBalok * tBalok;
console.log(volumeBalok);
// Rumus Keliing balok
const kelilingBalok = 4 * (pBalok + lBalok + tBalok);
console.log(kelilingBalok);

// ----------------------------------------------------------------------------------
// Rumus Volume Tabung

const radiusTabung = 5
const tinggiTabung = 10

const volumeTabung = phi * (radiusTabung**2) * tinggiTabung;
console.log(volumeTabung);
// Rumus Keliling Tabung
const kelilingTabung = 2 * ((2 * radiusTabung) + tinggiTabung);
console.log(kelilingTabung);