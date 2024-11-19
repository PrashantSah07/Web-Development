class Animal {

    cat() {
        console.log("Meow-Meow");
    }
}

class Derived extends Animal {

    dog() {
        console.log("Bhow-Bhow");
    }
}



let a = new Animal();
a.cat();

let d = new Derived();
d.dog();
d.cat();




// class phone {
//     ring() {
//         console.log("ringing")
//     }
//     turnOn() {
//         console.log("turning on")
//     }

//     turnOff() {
//         console.log("turing off")
//     }

// }

// class smartPhone extends phone {

//     videoCalling() {
//         console.log("video calling features in smartPhones")
//     }

//     faceUnlock() {
//         console.log("Unlock the phone screen with face in smartPhones");
//     }
// }

// let p = new phone();
// p.ring();
// p.turnOn();
// p.turnOff();

// let sp = new smartPhone();
// sp.videoCalling();
// sp.faceUnlock();
// sp.ring();
// sp.turnOn();
// sp.turnOff();





// class animal {

//     eat() {
//         console.log("Eating")
//     }

//     roar() {
//         console.log("roaring")
//     }

//     sleep() {
//         console.log("sleeping")
//     }

// }

// class monkey extends animal {
//     eatBanana() {
//         console.log("eating banana");
//     }

//     Agility() {
//         console.log("Monkeys are incredibly agile climbers, thanks to their prehensile tails (in some species) and strong limbs.")
//     }

//     Behavior() {
//         console.log("Monkeys live in complex social groups and display advanced social interactions like cooperation, grooming, and conflict resolution.")
//     }
// }

// class chimpanzee extends monkey {
//     jump() {
//         console.log("jumping")
//     }
// }

// let a = new animal();

// a.eat();
// a.roar();
// a.sleep();

// let m = new monkey();

// m.eatBanana();
// m.Agility();
// m.Behavior();
// m.eat();
// m.roar();
// m.sleep()

// let c = new chimpanzee();
// c.jump();
// c.eatBanana();
// c.Agility();
// c.Behavior();
// c.eat();
// c.roar();
// c.sleep()

