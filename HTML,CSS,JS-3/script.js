
// DOM-(document object model)       ---       DOM represent the page content as HTML

console.log(window);
console.log(document);                 // shows HTML content in browser 
console.log(document.body);                  //  shows only body content of HTML in browser   
console.log(document.body.textContent)         // shows only the textContent inside the body
console.log(document.head);        //  shows only head content of HTML in browser
console.log(document.title);          //  title name shows of the browser page 
console.log(document.title="Prashant Sah");     // title name changes as 'Prashant Sah' in the browser page
document.body.style.backgroundColor = "red";      // change background color of browser page  
document.body.style.color="yellow";





// BOM-(browser object model)        ---   BOM used to redirect to another URL  
// alert,prompt & confirm are also a part of the BOM

location.href = "https://www.youtube.com/@prashantsahvlogs2257"; 