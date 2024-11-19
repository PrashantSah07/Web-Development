// class railwayTicket {

//     submit(name) {
//         alert("Form submitted " + name);
//     }

//     cancel(name) {
//         alert("Form cancelled " + name);
//     }

// }

// let passenger1 = new railwayTicket();

// passenger1.submit("Passenger1");
// passenger1.cancel("Passenger1");





// class railwayTicket {

//     submit() {
//         alert(this.name + ": Form submitted ");
//     }

//     cancel() {
//         alert(this.name + ": Form cancelled");
//     }

//     fill(Name) {
//         this.name = Name;
//     }

// }

// // let passenger1 = new railwayTicket();

// // passenger1.fill("Prashant");
// // passenger1.submit();
// // passenger1.cancel();

// // let passenger2 = new railwayTicket();

// // passenger2.fill("Vishal");
// // passenger2.submit();
// // passenger2.cancel();

// let passenger1 = new railwayTicket();
// let passenger2 = new railwayTicket();

// passenger1.fill("Prashant");
// passenger2.fill("Vishal");
// passenger1.submit();
// passenger2.submit();
// passenger1.cancel();
// passenger2.cancel();





class railwayTicket {

    submit() {
        console.log(this.name + ": Form submitted with train number: " + this.trainNO);
        // console.log(`${this.name}: Form submitted with train number: ${this.trainNO}`);
    }

    cancel() {
        console.log(this.name + ": Form cancelled with train number: " + this.trainNO);
        // console.log(`${this.name}: Form submitted with train number:${this.trainNO}`);
    }

    fill(Name, trainNo) {
        this.name = Name;
        this.trainNO = trainNo;
    }

}

let prashant = new railwayTicket();
let ansh = new railwayTicket();
let ansh2 = new railwayTicket();

prashant.fill("Prashant", "01666");
ansh.fill("ansh", "17352");
ansh2.fill("ansh", "11235");
prashant.submit();
ansh.submit();
prashant.cancel();
ansh.cancel();
ansh2.submit();
