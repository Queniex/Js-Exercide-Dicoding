const stock = {
    coffeeBeans : 10,
    water : 1000,
}

const checkStock = () => {
    return new Promise ((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250){
            resolve("Stock cukup. Bisa membuat Kopi");
        }else{
            reject("Stock tidak cukup");
        }
    });
};

//fungsi menangani status resolve dan reject
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
const handleFailure = resolvedReason => {
    console.log(resolvedReason);
}

//checkStock().then(handleSuccess,handleFailure);
//menggunakan onRejected catch:
checkStock()
    .then(handleSuccess)
    .catch(handleFailure);