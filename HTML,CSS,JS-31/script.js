// let promise = new Promise(function (resolve, reject) {
//     console.log("Please wait...");
//     setTimeout(function () {
//         resolve(true);
//     }, 2000);
// });

// promise.then(function (value) {
//     console.log("Successfully resolved your promise using first handlers with value:", value);
// });

// promise.then(function (value) {
//     console.log("Successfully resolved your promise using second handlers with value:", value);
// }); 



let promise = new Promise(function (resolve, reject) {
    console.log("Please wait...");

    setTimeout(function () {
        resolve(true);
    }, 2000);
});

promise.then(function (value) {
    console.log("Successfully resolved the promise with returned value:", value);
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve("returned value of first handlers");
        }, 2000);
    });
}).then(function (value) {
    console.log(value);
});

promise.then(function (value2) {
    console.log("I am another handlers of promise with returned value:", value2);
    return "returned value of second handlers";

}).then(function (value) {
    setTimeout(function () {
        console.log(value);
    }, 2000);
});
