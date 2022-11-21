//-- menggunakan ES6 --
//import coffeStock from './state';
//import { coffeStock, isCoffeMachineReady } from './state';

//-- menggunakan format common --
//const coffeStock = require('./state');
//Karena ada 2 jadi buat export manfaatin destructing object
const {coffeStock, isCoffeMachineReady} = require('./state');
//console.log(coffeStock);

const makeCofee = (type,miligrams) => {
    if (coffeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    }else{
        console.log("Biji kopi habis!");
    }
}

makeCofee("robusta",80);

console.log("selamat datang!");
console.log("Ada yang bisa dibantu?");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silahkan datang kembali!");
}, 3000); //menunggu selama 3 detik