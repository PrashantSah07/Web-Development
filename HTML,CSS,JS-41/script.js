// Local Storage                             // data not erase even after refresh.

// localStorage.setItem("Name", "Prashant");


// Session Storage                           // data erase after refresh.

// sessionStorage.setItem("Name", "Prashant");
// console.log(sessionStorage.getItem("Name"));
// (sessionStorage.removeItem("Name"));
// sessionStorage.clear();
// console.log(sessionStorage);
// console.log(sessionStorage.length);
// console.log(sessionStorage.key(1));


// Storage Events                // when you change or add data in storage then storage events triggers. 

window.onstorage = function (e) {
    alert("Changed");
    console.log(e);
};

localStorage.setItem("Name", "Prashant");