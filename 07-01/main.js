// Cek element tertentu


function cekElem(isi){
    let element = document.querySelectorAll(isi);
    if(element.length == 0){
        throw new Error();
    }else{
        console.log(isi)
    }
}


try{
    cekElem(null);
}
catch(err){
    console.log('Elemen yang dicari gak ada cuy');
    console.log(err)
}


// Menghitung jumlah semua
let sum = document.getElementById('angka').innerText.split('\n').map(Number).reduce( (acc, v) => acc + v,0);
// console.log(sum);

let hasil = document.getElementById('hasil');
hasil.innerHTML = sum;





/* 
Convert String to Number: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
*/

