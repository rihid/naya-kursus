// Angka Genap

console.log("Angka Genap");

for(i = -10;i <= 10; i+= 2){
    console.log(i);
}

console.log("Baawah ini juga angka genap tapi While");

let j = -10;
while(j <= 10){
    console.log(j);
    j+=2;
}

// Angka Ganjil
console.log('Angka Ganjil');

for(x = -10;x <= 10; x++){
    if (x % 2 == 0){
        continue;
    }
    console.log(x);
}

console.log('Angka ganjil juga, tapi pakai while');

let y = -10;
while(y < 10){
    y++;
    if (y % 2 == 0){
        continue;
    }
    console.log(y);
}

// Menurun

console.log('Genap Menurun');

for(i = 10;i >=-10;i-=2){
    console.log(i);

}

console.log('Genap menurun juga, tapi while');

let a = 10;
while(a >=-10){
    console.log(a);
    a-=2;
}

// Ganjil
console.log('Ganjil Menurun');

for(b = 10;b >= -10; b--){
    if (b % 2 == 0){
        continue;
    }
    else{
        console.log(b);
    }

}

console.log('Ganjil Menurun juga, tapi While');

let c = 10;
while(c > -10){
    c--;
    if (c % 2 == 0){
        continue;
    }
    else{
        console.log(c);
    }
}


// console.log('Bintang');

// let z = "";

// for(i=1;i<=5;i++){
//     z+="*";
//     console.log(z);
// }

