// let arr = [1, 2];
// let a = arr[0];
// let b = arr[1];                 // No need to do this things
// console.log(a, b)

// let [a, b] = arr;                  // or let [a,b]=[1,2]
// console.log(a, b);





// let arr2 = [4, 6, 8];
// let [a, b, c] = arr2;
// console.log(a, b, c);


// let arr2 = [4, 6, 8, 10, 12];
// let [a, b, c, ...rest] = arr2;
// console.log(a, b, c, rest);


// let arr2 = [4, 6, 8, 10, 12, 14, 16];
// let [a, , c, , e, ...rest] = arr2;
// console.log(a, c, e, rest);



// ********* SPREAD OPERATOR ************* 


// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let item = { ...array };                      // OR let item = { ...[2, 64, 24] };
// console.log(item);
// console.log(item['1']);



// function sum(a1, b1, c1) {
//     return a1 + b1 + c1;
// }

// let arr = [1, 2, 3];
// console.log(`the sum is:`, sum(...arr)) 

