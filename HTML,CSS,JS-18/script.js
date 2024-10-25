// alert("Hello, Prashant");

// let a = setTimeout(function () {
//     alert("I'm inside the setTimeout");
// }, 2000);

// clearTimeout(a);

// let b = confirm("Do you want to run the setTimeout");
// if (b) {
//     clearTimeout(a);
// }
// else {
//     console.log(a);
// }




// function add(a, b) {
//     alert("The sum of a and b is: " + (a + b));
// }

// setTimeout(() => add(3, 2), 2000);



// function add(a, b) {
//     alert("The sum of a and b is: " + (a + b))
// }

// setTimeout(add, 2000, 3, 4);



// let c = setInterval(function () {
//     alert("I'm inside the setInterval");
// }, 2000);

// clearInterval(c);


// function add(a, b) {
//     alert("The sum of a and b is: " + (a + b));
// }

// let d=setInterval(add, 2000,3, 2);

// clearInterval(d); 



// for (let a=1; a<=10; a++){ 
//     setTimeout(function (){ 
//         console.log(a); 
//     },a*1000);
// }; 
// console.log("Go!") 



// for (let a=10; a>=1; a--){ 
//     setTimeout(function (){ 
//         console.log(a); 
//     },(11-a)*1000);
// }; 
// console.log("Go!") 



// for (let a=10; a>=1; a--){ 
//     setTimeout(function (){ 
//         console.log(a); 
//     },(11-a)*1000);
// }; 

// setTimeout(function (){ 
//     console.log("Go!")
// }, 11000); 



let user = prompt("Set timer > ")
for (let a = user; a >= 1; a--) {
    setTimeout(function () {
        console.log(a);
    }, ((user) - a) * 1000);
};

setTimeout(function () {
    console.log("Go!")
}, (user)*1000);