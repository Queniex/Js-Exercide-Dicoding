const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

async function makeCoffee() {
    // const coffee = await getCoffee();
    // console.log(coffee);

    //handle failure:
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }

    //promise all :
    // try {
    //     await checkAvailability();
    //     await checkStock();
    //     await Promise.all([boilWater(), grindCoffeeBeans()]);
    //     const coffee = await brewCoffee();
    //     console.log(coffee);
    // } catch (rejectedReason) {
    //     console.log(rejectedReason);
    // }
}
     
makeCoffee();


//Soal latihan :
// const fetchingUserFromInternet = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         if (isOffline) {
//           callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
//         }
//         callback(null, { name: 'John', age: 18 });
//       }, 500);
//     });
//   };

// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOffline) {
//                   reject(new NetworkError('Gagal mendapatkan data dari internet'));
//             } else {
//                   resolve({ name: 'John', age: 18 });
//             }
//         }, 500);
//     });
// };

// async function gettingUserName () {
//     try {
//         const user = await fetchingUserFromInternet(false)
//         return user.name;
//     } catch (error) {
//         return error.message;
//     }
// }; 

// //
// class NetworkError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "NetworkError";
//     }
// }

// // TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOffline) {
//                 reject(
//                     new NetworkError("Gagal mendapatkan data dari internet")
//                 );
//             } else {
//                 resolve({ name: "John", age: 18 });
//             }
//         }, 500);
//     });
// };

// // TODO: 2
// async function gettingUserName() {
//     try {
//         const fetch = await fetchingUserFromInternet(false);
//         return fetch.name;
//     } catch (rejectedReason) {
//         return rejectedReason;
//     }
// }

// console.log(gettingUserName());