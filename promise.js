const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = false;
    if(isCoffeMakerReady){
        resolve("kopi berhasil dibuat");
    }else{
        reject("mesin kopi tidak bisa dipakai");
    }
}

const makeCofee = () => {
    return new Promise(executorFunction);
}

const coffePromise = makeCofee();
console.log(coffePromise);