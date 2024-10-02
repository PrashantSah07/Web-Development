let a = document.getElementById("elem");

console.log(a);                                         //--->  matches - true if i'd or class match in that element otherwise return false
console.log(a.matches(".hehe"));
console.log(a.matches(".box"));
console.log(a.matches("#elem2"))
console.log(a.matches("#elem"))



let b = document.getElementById("elem2");

console.log(b);
console.log(b.matches(".hehe"));
console.log(b.matches(".box"));
console.log(b.matches("#elem2"))
console.log(b.matches("#elem"))



let c = document.getElementById("span");                 //--->  closest 

console.log(c);
console.log(c.closest(".lol"));
console.log(c.closest(".check"));
console.log(c.closest("#home"));
console.log(c.closest("#javaScript"));
console.log(c.closest("#span"));



let d = document.getElementById("javaScript");

console.log(d);
console.log(a.contains(span));                           //---> contains
console.log(b.contains(span));
console.log(c.contains(span));
console.log(d.contains(span));
console.log(span.contains(d));
