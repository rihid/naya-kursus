// Cek element tertentu
const element = document.getElementsByTagName('h2');

if(element.length == 0){
    throw 'Nggak ada';
}else{
    console.log(element);
}


// Menghitung jumlah semua
const sum = document.getElementById('angka').innerText.split('\n').map(Number).reduce( (acc, v) => acc + v,0);
console.log(sum);






/* 
Convert String to Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

