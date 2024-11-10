// async function greet() {                             // async always returns a promise.
//     console.log("Good morning");
// }

// console.log(greet());


// function hello() {
//     return new Promise(function (resolve, reject) {
//         console.log("Processing...")
//         setTimeout(function () {
//             resolve(true);
//         }, 2000);
//     })
// }

// hello()
//     .then(function (value) {
//         console.log("Done", value);
//         return hello();
//     })
//     .then((value) => {
//         console.log("Done", value)
//     });



// async function data() {

//     return new Promise(function (resolve, reject) {
//         console.log("Fetching data please wait...");
//         setTimeout(function () {
//             resolve("Successfully resolved your promise")
//         }, 2000)
//     })
// }

// async function getData() {

//     await data().then(function (value) {
//         console.log("Yeh", value)
//         return data();
//     }).then(function (value) {
//         console.log(value)
//     });

//     await data().then(function (value) {
//         console.log("Yeh", value)
//     });



//     let a = await data()
//     console.log("Yeh", a);

//     let b = await data()
//     console.log("Yeh", b)
// }


// getData();



// async function weatherData() {

//     let delhi = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("27deg");
//         }, 2000)
//     })

//     let banglore = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("21deg");
//         }, 5000)
//     })

//     let bhopal = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("22deg");
//         }, 3000)
//     })

//     let pune = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("23deg");
//         }, 7000)
//     })

//     console.log("Fetching delhi weather please wait...");
//     let delhiW = await delhi
//     console.log("Fetched delhi weather:", delhiW)

//     console.log("Fetching banglore weather please wait...");
//     let bangloreW = await banglore
//     console.log("Fetched banglore weather:", bangloreW)

//     console.log("Fetching bhopal weather please wait...");
//     let bhopalW = await bhopal
//     console.log("Fetched bhopal weather:", bhopalW)

//     console.log("Fetching pune weather please wait...");
//     let puneW = await pune
//     console.log("Fetched pune weather:", puneW)

// }

// weatherData();


function loadScript(src, int) {

    console.log(`Loading your script ${int}, please wait...`,);

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let sc = document.createElement("script");
            sc.src = src;
            document.head.appendChild(sc);
            sc.onload = () => {
                resolve(int);
            };
            sc.onerror = () => {
                reject(0);
            };
        }, 3000);

    });

};

async function getLoadscript() {
    let p1 = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", 1);
    console.log("Successfully loaded the script with the returned value of:", p1);
    
    let p2 = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", 2);
    console.log("Successfully loaded the script with the returned value of:", p2);
}

getLoadscript();



