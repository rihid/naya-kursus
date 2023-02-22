// Penanganan Error
let cekKey = (obj, key) => {
    if(key in obj){
        return 'Ada'
    }
    else{
        throw new Error('Tidak ada cuy');
    }
}


let siswa = {
    nama : 'Heru',
    umur : '0',
}

if ('umu' in siswa){
    console.log('ada cuy');
}
else{
    throw new Error('Tidak ada cuy'); // Bisa langsung tanpa membuat object tetapi tidak akan ditampilkan stacknya, sonvtohnya di bawah.
    // throw 'Tidak ada cuy';
}


