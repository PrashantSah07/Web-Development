// class home {
//     hello() {
//         console.log("Hello world!")
//     }

//     static bye() {
//         console.log("bye-bye")
//     }
// }

// let h = new home();
// h.hello();
// // h.bye();                         // You can't call using class object. Calling only with class name.
// home.bye();





// class animal {
//     static run() {
//         console.log("running");
//     }
// }

// class dog extends animal {
//     static go() {
//         console.log("going");
//     }

//     static run() {
//         super.run();
//         console.log("running-running");
//     }
// }
// let a = new animal();
// animal.run();

// let d = new dog();
// dog.run()
// dog.go(); 




class animal {
    constructor(name) {
        this.animalName = animal.uppercase(name);
    }
    walk() {
        console.log("Animal '" + this.animalName + "' walking...")
    }

    static uppercase(name) {
        return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    }
}

let a = new animal("lion");
a.walk();