// let body = document.querySelector("body");


// let btn = document.createElement("button");
// btn.innerHTML = "Click";

// body.prepend(btn);

// btn.classList.add("click");

// let btnClick = document.querySelector(".click");

// console.log(btnClick);


// let a;
// btnClick.addEventListener("click", function () {
//     if (true) {
//         a = setTimeout(function () {
//             alert("Hello");
//         }, 3000);
//     }

//     let b = confirm("Do you want prashant?");

//     if (b) {

//     }
//     else {
//         clearTimeout(a);
//     }
// });




let body = document.querySelector("body");


let btn = document.createElement("button");
btn.innerHTML = "Click";

let btn2 = document.createElement("button");
btn2.innerHTML = "Cancel";

body.prepend(btn2);
body.prepend(btn);

btn.classList.add("click");
btn2.classList.add("click2");

let btnClick = document.querySelector(".click");
let btnClick2 = document.querySelector(".click2");

console.log(btnClick);
console.log(btnClick2);


let a;
btnClick.addEventListener("click", function () {
    if (true) {
        a = setTimeout(function () {
            alert("Hello");
        }, 3000);
    }

});

btnClick2.addEventListener("click", function () {
    if (true) {
        clearTimeout(a);
    }

});