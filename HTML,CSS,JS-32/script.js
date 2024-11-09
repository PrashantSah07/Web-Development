let p1 = new Promise(function (resolve, reject) {
    console.log("Waiting for promise 1...");

    setTimeout(function () {
        resolve("Value 1")
    }, 1000);
});

let p2 = new Promise(function (resolve, reject) {
    console.log("Waiting for promise 2...");

    setTimeout(function () {
        resolve("Value 2");
        // reject("value 2");
    }, 2000);
});

let p3 = new Promise(function (resolve, reject) {
    console.log("Waiting for promise 3...");

    setTimeout(function () {
        resolve("Value 3")
    }, 3000)
});

// p1.then(function (value) {
//     console.log("Succesfully resolved your promise 1 with", value);
// });

// p2.then(function (value) {
//     console.log("Succesfully resolved your promise 2 with", value);
// });

// p3.then(function (value) {
//     console.log("Succesfully resolved your promise 3 with", value);
// });


// PROMISE API //


// let promise_all = Promise.all([p1, p2, p3]);

// promise_all.then(function (value) {
//     console.log(value);
// });



// let promise_allSettled = Promise.allSettled([p1, p2, p3]);
// promise_allSettled.then(function (value) {
//     console.log(value);
// });



// let promise_race = Promise.race([p1, p2, p3]);

// promise_race.then(function (value) {
//     console.log(value);
// });



// let promise_any = Promise.any([p1, p2, p3]);

// promise_any.then(function (value) {
//     console.log(value)
// });



let resolve = Promise.resolve(6);

resolve.then(function (value) {
    console.log(value);
});



let reject = Promise.reject("rejected");

reject.catch(function (value) {
    console.log(value);
});