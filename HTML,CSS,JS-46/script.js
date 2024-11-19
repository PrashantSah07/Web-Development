/* ============== METHOD OVERRIDING =============== */

// class aa {
//     hello() {
//         console.log("hello")
//     }
// }
// class bb extends aa {
//     hello() {
//         console.log("hello overrides")
//     }
//     hi() {
//         console.log("hi")
//     }

// }

// let a = new aa();
// let b = new bb();
// a.hello();
// b.hi();
// b.hello();





// class employee {

//     login() {
//         console.log(`Employee has logged in`);
//     }
//     logout() {
//         console.log(`Employee has logged out`);
//     }
//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves} leaves`);
//     }

// }

// class programmer extends employee {
//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);
//     }
//     requestCoffee(x) {
//         console.log(`Employee has requested ${x} coffee`);
//     }

// }

// let e = new employee();
// let p = new programmer();

// e.login();
// e.logout();
// e.requestLeaves(3);

// p.login();
// p.logout();
// p.requestLeaves(3);
// p.requestCoffee(2); 


/* ============= SUPER KEYWORDS ============== */


// class Animal {
//     speak() {
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak(); 
//         console.log("Dog barks");
//     }
// }

// const dog = new Dog();
// dog.speak();





// class employee {

//     login() {
//         console.log(`Employee has logged in`);
//     }
//     logout() {
//         console.log(`Employee has logged out`);
//     }
//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves} leaves`);
//     }

// }

// class programmer extends employee {
//     requestLeaves(leaves) {
//         super.requestLeaves(leaves)
//         console.log(`One extra leave is granted`);
//     }
//     requestCoffee(x) {
//         console.log(`Employee has requested ${x} coffee`);
//     }

// }

// let e = new employee();
// let p = new programmer();

// e.login();
// e.logout();
// e.requestLeaves(3);

// p.login();
// p.logout();
// p.requestLeaves(4);
// p.requestCoffee(2);




