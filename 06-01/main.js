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
/*
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
*/
// Inheritence

class BangunDatar{
    constructor(sisi){
        this.sisi = sisi;
    }

    getRadius(){
        return this.sisi / 2;
    }
}


class Persegi extends BangunDatar{
    constructor(sisi, lebar){
        super(sisi);
        this.lebar = lebar;
    }

    getLuas(){
        return this.sisi  * this.lebar;
    }

    getKeliling(){
        return 2 * (this.sisi + this.lebar);
    }
}


class Segitiga extends BangunDatar{
    constructor(sisi, tinggi, sisiMiring){
        super(sisi);
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }

    getLuas(){
        return (this.sisi / 2) * this.tinggi;
    }
    
    getKeliling(){
        return this.sisi + this.tinggi + this.sisiMiring;
    }
}

class Lingkaran extends BangunDatar{
    constructor(sisi){
        super(sisi);
        this.phi = () => 22 / 7;
    }

    getLuas(){
        return this.phi() * (this.getRadius()**2);
    }
    
    getKeliling(){
        return this.phi() * this.sisi;
    }
}


const rumusPersegi = new Persegi(2, 3);
const rumusSegitiga = new Segitiga(2, 3, 4);
const rumusLingkaran = new Lingkaran(5);

console.log('Luas Segitiga ' + rumusSegitiga.getLuas())
console.log('Keliling Segitiga ' + rumusSegitiga.getKeliling())
console.log('Luas Persegi ' + rumusPersegi.getLuas())
console.log('Keliling Persegi ' + rumusPersegi.getKeliling())
console.log('Luas Lingkaran ' + rumusLingkaran.getLuas())
console.log('Keliling Lingkaran ' + rumusLingkaran.getKeliling())

