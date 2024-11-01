let btn = document.getElementById("btn");



// btn.addEventListener("click", function () {
//     alert("Hello World 1")
// });

// btn.addEventListener("click", function () {
//     alert("Hello World 2")
// });


// let a = function () {
//     alert("Hello World 1")
// }

// let b = function () {
//     alert("Hello World 2")
// }

// btn.addEventListener("click", a);

// btn.addEventListener("click", b);

// let user = prompt("Enter number in between 1 to 2");
// user = Number.parseInt(user);

// if (user == 2) {
//     btn.removeEventListener("click", b);
// } 


let a = function (event) {
    console.log(event);
    console.log(event.type, event.clientX, event.clientY);
}

btn.addEventListener("click", a);
