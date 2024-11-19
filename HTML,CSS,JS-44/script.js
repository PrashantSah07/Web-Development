// class college {
//     Name() {
//         console.log("Your name is: " + this.name)
//     }

//     EnrollmentNo() {
//         console.log("Your enrollment number is: " + this.enrollmentNo);
//     }

//     College() {
//         console.log("Your college is: " + this.college);
//     }

//     data(name, enrollment, college) {                                   // No need to do this in using constructor.
//         this.name = name;
//         this.enrollmentNo = enrollment;
//         this.college = college;
//     }

// }

// let student1 = new college();
// student1.data("Prashant", "0191EE211027", "TIT");
// student1.Name();
// student1.EnrollmentNo();
// student1.College();



/* ================ CONSTRUCTOR ================= */


// class hello {
//     constructor() {
//         alert("I am always run when class is called");
//     }
// }

// let h = new hello();




// class college {

//     constructor(name, enrollment, college) {
//         console.log("CONSTRUCTOR CALLED...")
//         this.name = name;
//         this.enrollment = enrollment;
//         this.college = college;
//     }

//     Name() {
//         console.log("Your name is: " + this.name)
//     }

//     EnrollmentNo() {
//         console.log("Your enrollment number is: " + this.enrollment);
//     }

//     College() {
//         console.log("Your college is: " + this.college);
//     }

// }

// let student1 = new college("Prashant", "0191EE211027", "TIT");

// student1.Name();
// student1.EnrollmentNo();
// student1.College();

// let student2 = new college("Prashant", "0191EE211027", "TIT");
// let student3 = new college("Prashant", "0191EE211027", "TIT");





class College {
    constructor(name, enrollment, college) {
        console.log("CONSTRUCTOR CALLED...");

        this.name = name;
        this.enrollment = enrollment;
        this.college = college;

        this.displayDetails();                      // Call a method to display the details
    }

    displayDetails() {
        console.log("Your name is: " + this.name);
        console.log("Your enrollment number is: " + this.enrollment);
        console.log("Your college is: " + this.college);
    }
}

let student1 = new College("Prashant", "0191EE211027", "TIT");
let student2 = new College("Rahul", "0191CS211034", "TIT");
let student3 = new College("Anjali", "0191EC211045", "TIT");
 