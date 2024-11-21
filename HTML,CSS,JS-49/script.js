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



// class complex {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//         console.log(`real part: ${this.real}, imaginary part: ${this.imaginary}`)
//     }

//     set changeNo(a) {
//         this.real = a;
//     }

//     set changeNo2(b) {
//         this.imaginary = b;
//         console.log(`real part: ${this.real}, imaginary part: ${this.imaginary}`)
//     }

// }

// let c = new complex(2, 4);
// c.changeNo = (6);
// c.changeNo2 = (2);


// let c2 = new complex(6, 2);
// c2.changeNo = (10);
// c2.changeNo2 = (0);
// console.log(c, c2)




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