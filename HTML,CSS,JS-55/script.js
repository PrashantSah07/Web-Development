// const sayHello = (name) => {
//     console.log("Hello", name);
// }
// sayHello("Prashant");


// const sayHello = name => {
//     console.log("Hello", name);
// }
// sayHello("Prashant");


// const sayHello = name =>  console.log("Hello,", name);
// sayHello("Prashant");


// const sayHello = (name, roll) => {
//     console.log(`Your name is: ${name} and your roll is: ${roll}`);
// }
// sayHello("Prashant", "Developer");


// const sayHello = (name, roll) => console.log(`Your name is: ${name} and your roll is: ${roll}`);
// sayHello("Prashant", "Developer");




// const item = {
//     name: "Prashant Sah",
//     class: "B.tech",
//     roll: "Software Developer",
//     aboutMe: function () {
//         console.log(` Your name is '${this.name}'\n Your class is '${this.class}'\n and Your roll is '${this.roll}'`);
//     },

// }

// console.log(item.name, item.class, item.roll)
// item.aboutMe()



const item = {
    name: "Prashant Sah",
    class: "B.tech",
    roll: "Software Developer",
    aboutMe: function () {
        // let that = this;
        // setTimeout(function () {
        //     console.log(` Your name is '${that.name}'\n Your class is '${that.class}'\n and Your roll is '${that.roll}'`);
        // }, 2000)

        setTimeout(() => {
            console.log(` Your name is '${this.name}'\n Your class is '${this.class}'\n and Your roll is '${this.roll}'`);
        }, 2000)
    },

}

console.log(item.name, item.class, item.roll)
item.aboutMe()
