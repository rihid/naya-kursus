
// Saya adalah penjual buah, ini dagangan saya:
const fruits = ['Anggur', 'Ceri', 'Durian', 'Pepaya', 'Pisang',];
console.log('Awal: ' + fruits);

// Saya menghapus produk buah anggur, lagi gak musim
fruits.shift();
// Saya ganti kotak buah anguur dengan apel saja
fruits.unshift('Apel')
// Toko Buah saya ramai, makannya saya kulakan buah premium dengan nembahin label ke dagangan saya aja dengan label buah bangkok
const premiumFruits = fruits.map((item) => {return item + ' Bangkok'})
// Saya mau menggabungkan produk buah biasa dan buah premium saya
const productAll = [...fruits, ...premiumFruits]
// Oh iya, saya hapus Pisang Bangkok, susah kulakannya
productAll.pop();
// Saya ganti posisi Pisang Bangkok dengan Manggis Bangkok saja yang mudah kulakannya
productAll.push('Manggis Bangkok');
// Saya kulakan Asam Bangkok dan menaruh di kotak dekat dengan Anggur Bangkok dan menghapus Ceri Bangkok
productAll.splice(6, 1, 'Asam Bangkok');



// let keyword = 'Bangkok';
// let key = keyword.toLowerCase();
// //search keyword from names array by name
// let searchResult = productAll.filter(word => word.productAll.toLowerCase().indexOf(key) > -1);
// console.log(searchResult);


console.log(fruits);
console.log(premiumFruits);
console.log(productAll);

const scores = [10, 20, 30];
const hasil = scores.reduce((acc, v)=> {
  return acc + v;
}, 0)

console.log(hasil);