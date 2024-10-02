console.log(document.body);
// let a=document.body; 
// console.log(a.parentElement); 
console.log(document.body.parentElement);
console.log(document.head);
console.log(document.head.parentElement);         //---> body & head are siblings and their parents is HTML  

console.log(document.body.firstChild);
console.log((document.body.firstChild).parentElement);       //---> parents of (document.body.firstChild) i.e.(<body></body>) 
console.log((document.body.firstChild).parentElement.parentElement);   //---> parents element of parents element of (document.body.firstChild) i.e.(HTML)
console.log((document.body.firstChild).parentNode);

console.log(document.head.firstChild);
console.log((document.head.firstChild).parentElement);       //---> parents of (document.body.firstChild) i.e.(<head></head>)
console.log((document.head.firstChild).parentNode);

 
console.log(document.head.nextSibling);        //---> sibling of head i.e. body 
console.log(document.head.nextSibling.previousSibling); 
console.log(document.body.previousSibling.previousSibling);
console.log(document.body.firstChild.nextSibling);                 //---> sibling of firstChild of body element 
console.log(document.body.firstChild.nextSibling.previousSibling);
console.log(document.head.firstChild.nextSibling);                    //---> sibling of firstChild of head element 
console.log(document.head.firstChild.nextSibling.previousSibling); 
console.log(document.head.firstChild.nextSibling.nextSibling.nextSibling);  //---> sibling of sibling of sibling of firstChild of head element 
console.log(document.head.firstChild.nextSibling.nextSibling.nextSibling.previousSibling.previousSibling);      




                                                    // Element only navigation 

// let a=document.head; 
// console.log("First child of a is: ",a.firstChild); 
// console.log("First Element child of a is: ",a.firstElementChild); 

console.log(document.head.firstChild); 
console.log(document.head.firstElementChild); 

console.log(document.head.lastChild); 
console.log(document.head.lastElementChild); 

console.log(document.head.nextSibling);
console.log(document.head.nextElementSibling); 

console.log(document.body.previousSibling);
console.log(document.body.previousElementSibling);  

console.log(document.body.firstElementChild);
