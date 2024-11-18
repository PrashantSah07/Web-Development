let item = {
    name: "Prashant",
    userId: "27",
    title: "Sah",
    home: "Katihar",
    hello() {
        alert("Self hello")
    }
};

let item2 = {
    run: "I am another object",
    hello() {
        alert("hello");
    }
};



// Object.setPrototypeOf(item, item2);
item.__proto__ = item2

item2.__proto__ = {
    name2: "Prashant2",
}

console.log(item.run);
item.hello();

console.log(item.name2);
console.log(item2.name2);

Object.setPrototypeOf(item2, {
    hie: "hiiiiiieeeeeeeeeeee"
})

console.log(item2.hie)