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
    // Constuctor
    constructor(alas, tinggi, sisiMiring){
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }

    getLuas(){
        return this.alas * this.tinggi;
    }
    getKeliling(){
        return this.alas + this.tinggi + this.sisiMiring;
    }
}

class Persegi{
    constructor(panjang, lebar){
        this.panjang = panjang;
        this.lebar = lebar;
    }

    getLuas(){
        return this.panjang * this.lebar;
    }
    getKeliling(){
        return 2 * (this.panjang + this.lebar);
    }
}



const rumusSegitiga = new Segitiga(2, 3, 4);
const rumusPersegi = new Persegi(2, 2);

console.log('Luas Segitiga ' + rumusSegitiga.getLuas())
console.log('Keliling Segitiga ' + rumusSegitiga.getKeliling())
console.log('Luas Persegi ' + rumusPersegi.getLuas())
console.log('Keliling Persegi ' + rumusPersegi.getKeliling())
