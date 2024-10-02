console.log(document.body.firstChild);        //--->  this is shows the first element of body of HTML 
console.log(document.body.lastChild);         //--->  this is shows the last element of body of HTML 
console.log(document.body.childNodes);        //--->  this is shows the all element of body of HTML 
console.log(document.body.innerHTML);         //--->  this is shows the all content of body of HTML 
console.log(document.body.outerHTML);         //--->  this is shows the all content of body with '<body></body>' text of HTML 


console.log(document.head.firstChild);        //--->  this is shows the first element of head of HTML 
console.log(document.head.lastChild);         //--->  this is shows the last element of head of HTML 
console.log(document.head.childNodes);        //--->  this is shows the all element of head of HTML 
console.log(document.head.innerHTML);         //--->  this is shows the all content of head of HTML 
console.log(document.head.outerHTML);         //--->  this is shows the all content of head with '<head></head>' text of HTML 


console.log(document.body.childNodes[0]) == console.log(document.body.firstChild);
console.log(document.body.childNodes[document.body.childNodes.length - 1]) == console.log(document.body.lastChild);

console.log(document.head.childNodes[0]) == console.log(document.head.firstChild);
console.log(document.head.childNodes[document.head.childNodes.length - 1]) == console.log(document.head.lastChild);

