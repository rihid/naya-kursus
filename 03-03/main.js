// Rumus Luas Segitiga

const alas = 2;
const tinggi = 3;
const sisiLain = 2;

const luasSegitiga = 0.5 * alas * tinggi;
console.log('Luas Segitiga = ', luasSegitiga);
// Rumus  Keliling Segitiga
const kelilingSegitiga = alas + tinggi + sisiLain;
console.log('Keliling Segitiga = ', kelilingSegitiga);

// -----------------------------------------------------------------------------------
// Rumus Luas Persegi Panjang

const panjang = 5;
const lebar = 3;

const luasPersegi = panjang * lebar;
console.log('Luas Persegi Panjang = ', luasPersegi);
// Rumus Keliling Persegi Panjang
const kelilingPersegi = 2*panjang + 2*lebar;
console.log('Keliling Persegi Panjang = ', kelilingPersegi);

// -----------------------------------------------------------------------------------
// Rumus Luas Lingkaran

const phi = 3.14;
const radius = 3;

const luasLingkaran = phi * radius**2;
console.log('Luas Lingkaran = ', luasLingkaran);
// Keliling LIngkaran
const kelilingLingkaran = 2 * phi * radius;
console.log('Keliling Lingkaran = ', kelilingLingkaran);

// ------------------------------------------------------------------------------------
// Rumus Volume Balok

const pBalok = 4;
const lBalok = 4;
const tBalok = 6;

const volumeBalok = pBalok * lBalok * tBalok;
console.log('Volume Balok = ', volumeBalok);
// Rumus Keliing balok
const kelilingBalok = 4 * (pBalok + lBalok + tBalok);
console.log('Keliling Balok = ', kelilingBalok);

// ----------------------------------------------------------------------------------
// Rumus Volume Tabung

const radiusTabung = 5
const tinggiTabung = 10

const volumeTabung = phi * (radiusTabung**2) * tinggiTabung;
console.log('Volume Tabung = ', volumeTabung);
// Rumus Keliling Tabung
const kelilingTabung = 2 * ((2 * radiusTabung) + tinggiTabung);
console.log('Keliling Tabung = ', kelilingTabung);
