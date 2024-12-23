// let a = 5;

// function init() {
//     let a = 4;
//     console.log(a)
// }

// init();
// console.log(a) 



// function init() {
//     let name = "prashant";
//     function printName() {
//         console.log(name.toUpperCase());
//     }
//     return printName();
// }

// console.log(init())



// function init() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();



// function init() {
//     let a = "Mozilla";
//     function displayName() {
//         console.log(a);
//     }
//     displayName();
//     a = 'Prashant';
//     displayName();
// }
// init();

// console.log(a)                     // cannot access the value of 'a' becoz 'a' is a local scope variable.



// function init() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// let a = init();
// a();




// (function x() {
//     let a = 1;
//     console.log(a)
//     function y() {
//         let a = 2;
//         console.log(a)
//         function z() {
//             let a = 3;
//             console.log(a)
//         }
//         z();
//     }
//     y();
// })();                             // IIFE


function getfunc() {
    function x() {
        let a = 1;
        console.log(a)
        function y() {
            let a = 2;
            console.log(a)
            function z() {
                let a = 3;
                console.log(a)
            }
            z();
        }
        y();
    }
    return x;
}

let a = getfunc();
a();

