const coffeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
}

//console.log(module);

const isCoffeMachineReady = true;

// -- menggunakan format common --
//membuat object coffeStock ditetapkan sebagai nilai dari module.exports, 
//bisa diimport dan digunakan oleh berkas js lain.

//module.exports = coffeStock;
//module.exports = isCoffeMachineReady;

//kek gini bakalan bikin module yang pertama ketimpa yang kedua,
//maka biar 22nya ke export bisa gunain object literal

module.exports = {coffeStock, isCoffeMachineReady};

// -- menggunakan ES6 -- 
//export default coffeStock;
//export {coffeStock, isCoffeMachineReady};