// let promise = new Promise(function (resolve, reject) {
//     alert("Helloooooooooo");
//     resolve(56);
// });

// let name = "Prashant";
// console.log(`Your name is ${name}`);

// setTimeout(function () {
//     console.log(`I am print your name after 3 seconds i.e. ${name}`);
// }, 3000);

// console.log(`Your name is ${name}2`);

// console.log("Waiting...")

// console.log(promise);




// Promise .then() and catch(); 

// let p1 = new Promise(function (resolve, reject) {
//     console.log("Promise is pending...");

//     setTimeout(function () {
//         // console.log("I am a promise and I am fulfilled");
//         resolve(true);
//     }, 5000);
// });

// let p2 = new Promise(function (resolve, reject) {
//     console.log("Promise is pending...");

//     setTimeout(function () {
//         // console.log("I am a promise and your order is rejected");
//         reject(true);
//         // reject(new Error("ERROR"));
//     }, 5000);
// });


// console.log(p1);
// console.log(p2);


// p1.then(function (value) {
//         console.log(value);
//     })

// p2.catch(function () {
//         console.log("Some error occured in p2");
//     }); 





// let promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let comp = Math.floor(Math.random() * 100);
//         if (comp <= 50) {
//             console.log("Your promises is resolved: computer value => ", comp);
//             resolve(true);
//         }
//         else {
//             console.log("I'm sorry, your promises not fulfilled:( computer value => ", comp);
//             reject(new Error("Page not loaded"));
//         }
//     }, 2000);

// });

// promiseOne
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log("Something went wrong!", error)
//     })

//     .finally(function (final) {
//         console.log("Promises Done, either resolved or rejected");
//     }); 



// let promiseTwo = new Promise(function (resolve, reject) {
//     console.log("Waiting to fetch data from browser...");
//     setTimeout(function () {
//         resolve("{Username}='prashant',{password}='123',{email}='prashant@123'");
//     }, 5000);
// });

// promiseTwo.then(function (value) {
//     console.log("Succesfully resolved your data:", value);
// })
//     .catch(function (error) {
//         console.log("Server not found", error);
//     }); 



let promiseThree = new Promise(function (resolve, reject) {

    console.log("Fetching data please wait...");

    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Prashant", password: "123", Email: "Prashant123@gmail.com" });
        }
        else {
            reject(new Error("Opps, something Went wrong!"))
        };
    }, 3000);

});


// promiseThree.then(function (value) {
//     console.log("Successfully loaded your data", value);
//     console.table(value);
//     console.log(value.username);
//     console.log(value["username"]);
//     for (let a in value) {
//         console.log(a, value[a]);
//     };
// })
//     .catch(function (error) {
//         console.log("Try again later", error)
//     }); 


promiseThree
    .then(function (value) {
        console.log("Successfully loaded your data");
        return value.username;
    }).then(function (username) {                                /* When you want to get only username value then you 
                                                                have to return and get it by using again .then()*/
        console.log(username);

    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("The promise is either resolved or rejected");
    });