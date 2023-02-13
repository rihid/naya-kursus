
const penilaian = (nilai) => {
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

console.log( 'Ini nilainya: ' + penilaian(71));



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
const ganjil = (angka) => {
    return angka % 2 != 0;
}

const angkaGanjil = () => {
    for(let i = -10;i <= 10; i++){
        if(ganjil(i)){
            console.log(i);
        }
    }
}

angkaGanjil();

// Luas Persegi

const rumusLuas = (p, l, cb) => {
    return cb(p * l);
    
}

const luasPersegi = rumusLuas(2, 2, (hasil) => {
    console.log('Luas Persegi Adalah ' + hasil);
    return hasil;
});

console.log(luasPersegi);







