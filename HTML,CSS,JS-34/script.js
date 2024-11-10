// try {
//     console.log(prashant);
// }

// catch (error) {
//     console.log("no worries", Error)
// }

// setTimeout(function () {
//     try {
//         console.log(prashant);
//     }
//     catch {
//         console.log("no worries", Error)
//     }
// }, 1000);




// function data(int) {

//     let promise = new Promise(function (resolve, reject) {
//         console.log(`Fetching data ${int} please wait...`);
//         setTimeout(function () {
//             // resolve("Succesfully resolved your promise " + int + " :)")
//             reject(new Error("Error"));
//         }, 3000)

//     });

//     return promise;

// }

// async function getData() {

//     try {
//         let p1 = await data(1);
//         console.log(p1);
//     }
//     catch (error) {
//         console.log("Something went wrong. Your promises not resolved, Sorry!", error)
//     }

//     try {
//         let p2 = await data(2);
//         console.log(p2);
//     }

//     catch (error) {
//         console.log("Something went wrong. Your promises not resolved, Sorry!", error)
//     }

//     try {
//         let p3 = await data(3);
//         console.log(p3);
//     }

//     catch (error) {
//         console.log("Something went wrong. Your promises not resolved, Sorry!", error)
//     }
// }

// getData();




// function data(int) {

//     let promise = new Promise(function (resolve, reject) {
//         console.log(`Fetching data ${int} please wait...`);
//         setTimeout(function () {
//             let comp = Math.floor(Math.random() * 10);
//             if (comp <= 5) {
//                 resolve("Succesfully resolved your promise " + int + " :)")
//             }
//             else {
//                 reject(new Error("Error"))
//             }
//         }, 3000)

//     });

//     return promise;

// }

// async function getData() {

//     try {
//         let p1 = await data(1);
//         console.log(p1);
//     }
//     catch (error) {
//         console.log("Something went wrong and your promises not resolved, Sorry!", error)
//     }

//     try {
//         let p2 = await data(2);
//         console.log(p2);
//     }

//     catch (error) {
//         console.log("Something went wrong and your promises not resolved, Sorry!", error)
//     }

//     try {
//         let p3 = await data(3);
//         console.log(p3);
//     }
//     catch (error) {
//         console.log("Something went wrong and your promises not resolved, Sorry!", error)
//     }

//     finally {
//         console.log("Done 👍")
//     }
// }

// getData();



// async function data() {

//     let p1 = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Succesfully resolved :)")
//             // reject("Not resolved your promises, sorry!")
//         }, 2000);
//     })



//     let p2 = new Promise(function (resolve, reject) {

//         setTimeout(function () {
//             // resolve("Succesfully resolved :)")
//             reject("Not resolved your promises, sorry!")
//         }, 5000);
//     })



//     let p3 = new Promise(function (resolve, reject) {

//         setTimeout(function () {
//             resolve("Succesfully resolved :)")
//             // reject("Not resolved your promises, sorry!")
//         }, 4000);
//     })

//     try {
//         console.log("Loading data, Please wait....");
//         let data1 = await p1;
//         console.log(data1);
//     }

//     catch (error) {
//         console.log(error);
//     }


//     try {
//         console.log("Loading data, Please wait....");
//         let data2 = await p2;
//         console.log(data2);
//     }

//     catch (error) {
//         console.log(error);
//     }

//     try {
//         console.log("Loading data, Please wait....");
//         let data3 = await p3;
//         console.log(data3);
//     }

//     catch (error) {
//         console.log(error);
//     }

// };

// data();





async function data() {

    let p1 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            let comp = Math.floor(Math.random() * 10);

            if (comp <= 5) {
                resolve("Succesfully resolved :)")
            }
            else {
                reject("Not resolved your promises, sorry!")
            }

        }, 3000);
    })



    let p2 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            let comp = Math.floor(Math.random() * 10);

            if (comp <= 5) {
                resolve("Succesfully resolved :)")
            }
            else {
                reject("Not resolved your promises, sorry!")
            }

        }, 2000);
    })



    let p3 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            let comp = Math.floor(Math.random() * 10);

            if (comp <= 5) {
                resolve("Succesfully resolved :)")
            }
            else {
                reject("Not resolved your promises, sorry!")
            }

        }, 5000);
    })



    try {
        console.log("Loading data, Please wait....");
        let data1 = await p1;
        console.log(data1);
    }

    catch (error) {
        console.log(error);
    }


    try {
        console.log("Loading data, Please wait....");
        let data2 = await p2;
        console.log(data2);

    } catch (error) {
        console.log(error);
    }


    try {
        console.log("Loading data, Please wait....");
        let data3 = await p3;
        console.log(data3);

    } catch (error) {
        console.log(error);
    }

    finally {
        console.log("Done 👍")
    }

}

data();