// let sum = (a, b) => {
//     console.log(a + b);
// };

// let sub = (a, b) => {
//     console.log(a - b);
// };

// let mul = (a, b) => {
//     console.log(a * b);
// };

// let div = (a, b) => {
//     console.log(a / b);
// };


// function maths(a, b) {
//     setTimeout(function () {
//         sum(a, b);
//         setTimeout(function () {
//             sub(a, b);
//             setTimeout(function () {
//                 mul(a, b);
//                 setTimeout(function () {
//                     div(a, b);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);

// }

// maths(4, 5); 



// function asyncFunction1(callback) {
//     setTimeout(() => {
//         console.log("Async Function 1 Done");
//         callback();
//     }, 1000);
// }

// function asyncFunction2(callback) {
//     setTimeout(() => {
//         console.log("Async Function 2 Done");
//         callback();
//     }, 1000);
// }

// function asyncFunction3(callback) {
//     setTimeout(() => {
//         console.log("Async Function 3 Done");
//         callback();
//     }, 1000);
// }

// asyncFunction1(() => {
//     asyncFunction2(() => {
//         asyncFunction3(() => {
//             console.log("All Async Functions Completed");
//         });
//     });
// });



function add(a, b) {
    console.log(a + b);
};


function execute() {

    setTimeout(function () {
        add(4, 5);
        setTimeout(function () {
            add(7, 5);
            setTimeout(function () {
                add(4, 0);
                setTimeout(function () {
                    add(8, 5);
                    setTimeout(function () {
                        add(9, 5);
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
};

execute();