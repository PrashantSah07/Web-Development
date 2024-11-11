let username = prompt("Enter your name: ");

if (username == null) {
    document.write("First enter your name");
    console.warn("Enter your name");
}
else if (username == "") {
    document.write("Please enter a valid name");
    console.error("Enter valid name");
}
else {
    let div = document.querySelector('div');
    let p = document.querySelector('p');

    let button = document.createElement('button');
    button.innerHTML = "Refresh"
    p.prepend(button);

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = "Stop";

    setTimeout(function () {
        p.prepend(cancelButton);
    }, 2000);


    async function hack() {
        let p1 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                div.innerHTML = div.innerHTML + ("Initialiging Hack Program...<br>");
                resolve();
            }, 2000);
        })

        let p2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                div.innerHTML = div.innerHTML + (`Hacking ${username}'s username, Please wait...<br>`);
                resolve();
            }, 4000);
        })

        let p3 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                div.innerHTML = div.innerHTML + (`Username found ${username}_sah07<br>`);
                resolve();
            }, 6000);
        })


        let p4 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                div.innerHTML = div.innerHTML + ("Connecting to facebook, Please Wait...<br>");
                resolve();
            }, 8000);
        })


        let p5 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                div.innerHTML = div.innerHTML + ("Succesfully Hacked<br>")
                resolve();
            }, 12000);
        })


        await p1;
        console.log("Done Initialiging");

        await p2;
        console.log("Username hacked");

        await p3;
        console.log("Username found");

        await p4;
        console.log("Connected to facebook");

        await p5;
        console.log(`Succefully hacked ${username}'s id`);

    };

    hack();

    button.addEventListener("click", function () {
        location.reload();
    });

    cancelButton.addEventListener("click", function () {
        div.remove();
        p.remove();
        alert("Paused Hacking");
    });


};


