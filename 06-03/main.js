const PembagiError = 'PembagiError';
const inputError = 'InputError'


const pembagian = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            const err = new Error('Masukan tidak boleh 0');
            err.name = PembagiError;
            reject(err);
        }
        
        else if(typeof a != 'number' || typeof b != 'number'){
            const err = new Error('Masukan harus angka cuy');
            err.name = inputError;
            reject(err);
        }
        else{
            setTimeout(() => {
                resolve(a / b);
            }, 1000);
        }
        
    })
};

const main = async () => {
    try{
        const hasil = await pembagian(2, 1);
        console.log(hasil);
        
    }
    catch(err){
        console.log(err);
    }
}
main();

// Promise.all
const mainAll = async () =>{
    try{
        const hasil = await Promise.all([
            pembagian(10, 1),
            pembagian(10, 2),
            pembagian(10, 5),
        ]);
        console.log(hasil);
    }
    catch(err){
        console.log(err);
    }
}
mainAll();

// Promise.race
const mainRace = async () =>{
    try{
        const hasil = await Promise.race([
            pembagian(10, 1),
            pembagian(10, 2),
            pembagian(10, 3),
        ]);
        console.log(hasil);
    }
    catch(err){
        console.log(err);
    }
}
mainRace();

// Promise.allSetled

const mainAllSetled = async () =>{
    try{
        const hasil = await Promise.allSettled([
            pembagian(10, 0),
            pembagian(10, 2),
            pembagian(10, 5),
        ]);

        hasil.filter(hf => hf.status == 'rejected').forEach(has => {
            console.log(has);
        })

        // console.log(hasil);
    }
    catch(err){
        console.log(err);
    }
}
mainAllSetled();