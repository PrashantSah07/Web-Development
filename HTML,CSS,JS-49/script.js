// const item = {
//     firstName: "prashant",
//     lastName: "Kumar",
//     age: "21",

//     get firsttName() {
//         return this.firstName.toUpperCase();
//     },

//     get lasttName() {
//         return this.lastName.toUpperCase();
//     }
// }

// console.log(`${item.firsttName} ${item.lasttName}`);
// console.log(item.firstName);





// const item = {
//     firstName: "prashant",
//     lastName: "Kumar",
//     age: "21",


//     set firsttName(v) {
//         return this.firstName = v.toLowerCase();
//     },

//     get lasttName() {
//         return this.lastName.toUpperCase();
//     }
// }

// item.firsttName = 'HI';

// console.log(`${item.firstName} ${item.lasttName}`);
// console.log(item);





// const item = {
//     firstName: "prashant",
//     lastName: "Kumar",
//     age: "21",

//     set firsttName(v) {
//         this.firstName = v;
//     },

//     set lasttName(v) {
//         this.lastName = v;
//     }
// }

// item.firsttName = 'Anurag';
// item.lasttName = 'Singh';

// console.log(`${item.firstName} ${item.lastName}`);
// console.log(item);





// const item = {
//     firstName: "prashant",
//     lastName: "Kumar",
//     age: "21",

//     get firsttName() {
//         // return this.firstName.toUpperCase();
//         return this.firstName = "Hello";
//     },

//     get lasttName() {
//         // return this.lastName.toUpperCase();
//         return this.lastName = "World";
//     }
// }

// console.log(`${item.firsttName} ${item.lasttName}`);
// console.log(item); 







// class animal {
//     constructor(name) {
//         this._name = name;
//     }

//     run() {
//         console.log(this._name + " running...");
//     }

//     get name() {
//         return this._name = "Cow"
//     }

// }

// let a = new animal("Horse");
// console.log(a.name)
// a.run();





class animal {
    constructor(name) {
        this._name = name;
    }

    run() {
        console.log(this._name + " running...");
    }

    get name() {
        return this._name = "Cow"
    }

    set name(newName) {
        this._name = newName;
    }

}

let a = new animal("Horse");
console.log(a._name);
a.name = "monkey";
console.log(a._name);
a.name;
console.log(a._name);
a.run();



/* ======== INSTANCE OF ======== */

let cond = a instanceof animal;
console.log(cond);
let b;
console.log(b instanceof animal);


class newanimal extends animal {
    runn() {
        console.log("i am new animal class which extends animal class");
    }
}

let c = new newanimal();

c.runn();

console.log(c instanceof newanimal);
console.log(c instanceof animal);
console.log(a instanceof newanimal); 