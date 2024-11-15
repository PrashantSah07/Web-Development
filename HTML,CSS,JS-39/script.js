// console.log(document.cookie);
// document.cookie="name=prashant"
// document.cookie="name2=prashant123"
// console.log(document.cookie); 



// let key = prompt("Enter key code: ");
// let value = prompt("Enter key value: ");

// document.cookie = `key:${key},value:${value}`;
// document.cookie = `key:${encodeURIComponent(key)},value:${encodeURIComponent(value)}`;

// console.log(document.cookie);
// console.log(decodeURIComponent(key));
// console.log(decodeURIComponent(value));



let a = ("heyyyyyyyyy;");
document.cookie = encodeURIComponent(a)

console.log(document.cookie);
console.log(decodeURIComponent(a))