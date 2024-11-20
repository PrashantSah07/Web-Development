// class animal {
//     constructor() {
//         console.log("i am a constructor...")             // constructor also called in parents class.
//     }
//     eat() {
//         console.log("eating")
//     }
// }

// class dog extends animal {

//     // constructor() {                             // behind the scean.
//     //     super();
//     // }

//     sleep() {
//         console.log("sleeping")
//     }
// }

// let d = new dog();



// class animal {
//     constructor(x) {
//         console.log("I'm child class constructor with the value of x is: " + x);
//     }

//     eat() {
//         console.log("eating")
//     }
// }

// class dog extends animal {
//     constructor() {
//         console.log("I'm parents class constructor");
//         super(7);                                             // super method must have to call from parents class to child class if constructor is present in parents class.
//     }

//     sleep() {
//         console.log("sleeping")
//     }
// }

// let d = new dog();



class boy {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(`the value of x is: ${this.x} and and value of y is: ${this.y}`);
    }

    sleep() {
        console.log("sleeping");
    }

    eat() {
        console.log("eating");
    }

}

class girl extends boy {

    constructor(a, b) {
        super(3, 4);
        this.a = a;
        this.b = b;
        console.log(`the value of a is: ${this.a} and the value of b is: ${this.b}`);
    }

    go() {
        console.log("going");
    }

    come() {
        console.log("coming");
    }

}

let b = new boy(1, 2);
b.sleep();
b.eat();

let g = new girl(5, 6);
g.sleep();
g.eat();
g.go();
g.come();

