// Syncronous Programming

// let a = prompt("What is your name? ");
// let b = prompt("Which class do you study right now? ");
// let c = prompt("Enter your age here: ");

// console.log(`Your name is '${a}', you are studying '${b}' and your age is '${c}'`);


// Asyncronous Programming

// console.log("Start");

// setTimeout(function () {
//     console.log("I am exuting this function after 3 seconds")
// }, 3000);

// console.log("End"); 



// function add(a, b) {
//     console.log(a + b);
// }

// add(3, 4); 


// Arrow Funtion 

// const greet = () => {
//     console.log("Good morning");
// };

// greet();


// const add = (a, b) => {
//     console.log(`The sum of ${a} and ${b} is = `, a + b);
// };

// add(3, 5); 



// const add = (a, b) => a + b

// console.log(add(3, 5)); 


// Callback Function

// function CallbackFn(name) {
//     console.log(name);
// }

// const loadScript = (src, Callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = Callback("Prashant");
//     document.head.append(sc);
// };

// loadScript("https://www.google-analytics.com/ga.js", CallbackFn); 



// function add(a, b) {
//     console.log(`adding ${a} and ${b} =`, a + b)
// }

// function Callback(a, b) {
//     add(a, b);
// }

// Callback(5, 8); 


function calculate(a, b, opration) {
    return opration(a, b);
}


let addition = calculate(5, 4, function (num1, num2) {
    return num1 + num2;
});

console.log(addition);

let substraction = calculate(7, 4, function (num1, num2) {
    return num1 - num2;
});

console.log(substraction);

const multiplication = (a, b) => a * b;

let mulResult = calculate(3, 2, multiplication);
console.log(mulResult);