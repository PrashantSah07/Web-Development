function data(int) {
    console.log("Getting data...");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(int);
        }, 2000)
    })

    return promise;
}

// async function getData() {

//     let r1 = await data(1);
//     console.log(r1);

//     let r2 = await data(2);
//     console.log(r2);

//     let r3 = await data(3);
//     console.log(r3);

// }

// getData();


(async function () {

    let r1 = await data(1);
    console.log(r1);

    let r2 = await data(2);
    console.log(r2);

    let r3 = await data(3);
    console.log(r3);

})();