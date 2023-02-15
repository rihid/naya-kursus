


const penilaian = (nilai) => {
    if (nilai >= 80 && nilai <=100){
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
    // menambag\hakan kondisi kalau nilainya gak mask akal
    else{
        return "E";
    }
}

console.log( 'Ini nilainya: ' + penilaian(150));



// Angka Genap
const genap = angka => angka % 2 == 0;


const angkaGenap = () => {
    for(let i = -10;i <= 10; i++){
        if(genap(i)){
            console.log(i);
        }
    }       
}

angkaGenap();

// Angka Ganjil
const ganjil = angka => angka % 2 != 0;

const angkaGanjil = () => {
    for(let i = -10;i <= 10; i++){
        if(ganjil(i)){
            console.log(i);
        }
    }
}

angkaGanjil();


// Volume Balok

const volumeBalok = (p, l, t, cb) => cb(p * l * t);

const tampil = rumus => console.log("Hasil ", rumus);

volumeBalok(1,3,3, tampil);








