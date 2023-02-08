// Angka Genap

console.log("Angka Genap");
let i = -10;
for(;i <= 10; i+=2){
    console.log(i);
}

console.log("Baawah ini juga Perulagan tapi While");
let j = -10;
while(j <= 10){
    console.log(j);
    j+=2;
}

// Angka Ganjil
console.log('Angka Ganjil');

let x = -10;
for(;x <= 10; x++){
    if (x % 2 == 0){
        continue;
    }
    else{
        console.log(x);
    }
}

console.log('Angka ganjil juga, tapi pakai while');

let y = -10
while(y < 10){
    y++;
    if (y % 2 == 0){
        continue;
    }
    else{
        console.log(y);
    } 
    
    
}
