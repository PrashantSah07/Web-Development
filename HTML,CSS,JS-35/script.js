/* ============= THROWING CUSTOM ERROR'S IN JS ================== */


// let error = new SyntaxError("I'm syntax error");
// console.log(error);

// throw new Error("I'm syntax error");
// throw ReferenceError("I'm reference error");
// throw SyntaxError("I'm syntax error");
// throw TypeError("I'm type error");


// try {
//     prashant
// }
// catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack)
// };


// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// if (age <= 50) {
//     console.log("You are under 50 years old");
// }
// else {
//     throw new Error("You are over 50 years old");
// }; 




/* =============== THE FINALLY CLAUSE ================== */


function promise() {

    try {
        prashant
        return true
    }
    catch (error) {
        console.log(error);
        return false
    }
    finally {
        console.log("I am always run")
    }
}

console.log(promise());