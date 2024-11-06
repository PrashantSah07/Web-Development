// let promise = new Promise(function (resolve, reject) {
//     console.log("Fetching data, please wait...");

//     setTimeout(function () {
//         resolve(true);
//     }, 3000);
// });

// console.log(promise);

// promise.then(function (value) {
//     console.log(value);
//     return 56;
// }).then(function (value) {
//     console.log("returned value", value)
// }) 




// let promise = new Promise(function (resolve, reject) {
//     console.log("Fetching data, please wait...");

//     setTimeout(function () {
//         let comp = Math.floor(Math.random() * 100);

//         if (comp <= 50) {
//             resolve(true);
//         }
//         else {
//             reject(new Error("Sorry!"));
//         }
//     }, 3000);

// });

// console.log(promise);

// promise.then(function (value) {
//     console.log(value);
//     return 56;
// }).then(function (value) {
//     console.log("returned value", value)
// }).catch(function (error) {
//     console.log("Some error occurred in promise", error)
// });



// let promise = new Promise(function (resolve, reject) {

//     console.log("Fetching data, please wait...");

//     setTimeout(function () {
//         let comp = Math.floor(Math.random() * 20);

//         if (comp <= 10) {
//             resolve(true);
//         }
//         else {
//             reject("Something went wrong!");
//         }
//     }, 3000);


// });

// console.log(promise);

// promise
//     .then(function (value) {
//         console.log(value);
//         console.log("Your promises successfully done 👍");

//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve(56);
//             }, 2000);
//         });

//     }).then(function (returnedValue) {

//         console.log("Returned Value: ", returnedValue);
//         return "Prashant";

//     }).then(function (againReturnedValue) {

//         setTimeout(function () {
//             console.log("Again Returned Value: ", againReturnedValue);
//         }, 2000)

//     }).catch(function (error) {
//         console.log("Sorry, your promises not completed:(", error);
//     });




function loadScript(src) {

    console.log("Loading your script, please wait...");

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let sc = document.createElement("script");
            sc.src = src;
            document.head.appendChild(sc);
            sc.onload = () => {
                resolve(1);
            };
            sc.onerror = () => {
                reject(0);
            };
        }, 3000);

    });

};

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");

p1.then(function (value) {
    console.log("Successfully loaded the script with the returned value of:", value);
}).catch(function (error) {
    console.log("Sorry, we are unable to load the script and the returned value:", error);
});


