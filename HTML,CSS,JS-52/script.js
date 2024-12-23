/* There are two types of scope in js -->
1. Local (block,function)
2. Global */


// block scope
// {
//     let a = 5;
//     console.log(a)
// }
// console.log(a)


// function scope

// function ax() {
//     let a = 5;
//     console.log(a)
// }

// ax();
// console.log(a) 


// Global scope 

let i = 7;

{
    let a = 5;
    console.log(a);
    console.log(i)
}

console.log(i)