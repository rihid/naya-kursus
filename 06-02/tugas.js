// FUngsi Pembagian
const PembagiError = 'PembagiError';
const InputError = 'InputError'

function pembagian(x, y){
    if(y === 0){
        const err = new Error();
        err.name = PembagiError;
        throw err;
    }
    else if(typeof x && y != 'number'){
        const err = new Error();
        err.name = InputError;
        throw err;
    }
    else{
        console.log(x / y);
    }
}

try{
    pembagian(1, 0);
}
catch(err){
    if(err.name == PembagiError){
        console.log('Pembagi tidak boleh 0');
    }
    if(err.name == InputError){
        console.log('Inputan harus angka')
    }
}