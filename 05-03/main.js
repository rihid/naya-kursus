// Mengecek punya key itu apa tidak
const buah = {nama : 'jeruk', spesies : 'Sinesis', famili : 'Rutaceae', genus : 'Citrus', kelas : 'Magnoliosida',}

function cekKey(obj, key){
    if(obj[key]){
        return 'Ada'
    }
    else{
        return 'Tidak ada'
    }
}
// console.log(Object.keys(buah))
console.log(cekKey(buah, 'spesies'));

// Menghitung yang valuenya number

const angka = {
    x : 'abc',
    y : 10,
    z : 20,
}

 let sum = obj => {
    // if(){}
    return Object.values(obj).filter(val => typeof val == 'number').reduce((acc, v) => (acc + v),0);
 }
  
  console.log(sum(angka));