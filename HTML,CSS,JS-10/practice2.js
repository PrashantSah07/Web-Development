// Create a navbar and change the first color of it's first element to red.

let a = document.getElementById("t");
console.log(a);
console.log(a.firstElementChild.firstElementChild.style.color = "red");

let b = document.getElementsByTagName("nav");
console.log(b[1].firstElementChild.firstElementChild.style.color = "yellow");

// Create an element with 3 children. Now change the color of first and last element to green. 

console.log(document.getElementsByTagName("div")[0].firstElementChild.firstElementChild.style.color = "green");
console.log(document.getElementsByTagName("div")[0].firstElementChild.lastElementChild.style.color = "green"); 

// Write a javaScript code to change background color of all <li> tags to cyan. 

console.log(document.getElementById("op").style.backgroundColor="cyan"); 

console.log(document.getElementById("op").firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="purple");
