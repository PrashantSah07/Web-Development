let a = document.querySelector("div");
console.log(a);

let b = document.getElementsByTagName("h1")[0];
console.log(b);

// (a.innerHTML = a.innerHTML + "Hello World");

// (a.innerHTML = a.innerHTML + "<h1>Hello World write in &lt;h1&gt; tag<h1/>");


let div = document.createElement("p");
div.innerHTML = ("i am a para inside the div creating by DOM");
a.appendChild(div);
a.prepend(div);
a.before(div);
a.after(div);
a.replaceWith(div);


// for (let aa = 1; aa <= 10; aa++) {
//     let div = document.createElement("p");
//     div.innerHTML = (`i am a para inside the div creating by DOM ${aa}`);
//     a.appendChild(div);
// }