// Sintaks Pembuatan class
class Kendaraan {
    // Property
    roda;
    spion;
    cc;
    // Method : Fungsi yang dimasukkan dalam class.
    // KEyword function bisa dihilangkan
    nyala(){
        console.log('nyala')
    }
}
// Memanggil Class Object
console.log(new Kendaraan())

// Bisa juga memakai ini.
const motor = new Kendaraan();
// Memanipulasi Property dalam class
motor.roda = 2;
motor.cc = 150;
motor.spion = 2;

console.log(motor)


// Tugas  

class Segitiga{
    alas;
    tinggi;
    sisiMiring;

    luasSegitiga(){
        return this.alas * this.tinggi;
    }
    kelilingSegitiga(){
        return this.alas + this.tinggi + this.sisiMiring;
    }
}

class Persegi{
    panjang;
    lebar;

    luasPersegi(){
        return this.panjang * this.lebar;
    }
    kelilingPersegi(){
        return 2 * (this.panjang + this.lebar);
    }
}

const rumusSegitiga = new Segitiga;
rumusSegitiga.alas = 5;
rumusSegitiga.tinggi = 2;
rumusSegitiga.sisiMiring = 4;

const rumusPersegi = new Persegi;
rumusPersegi.panjang = 4;
rumusPersegi.lebar = 2;

console.log(rumusSegitiga.luasSegitiga())
console.log(rumusSegitiga.kelilingSegitiga())
console.log(rumusPersegi.luasPersegi())
console.log(rumusPersegi.kelilingPersegi())
