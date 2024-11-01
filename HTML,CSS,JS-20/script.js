
let div = document.querySelector("div");
let p = document.querySelector("p");

// let isOn = false;
// div.addEventListener("click", function () {
//     if (isOn) {
//         setTimeout(function () {
//             location.reload();
//             alert("Page Reloaded!");
//         });
//         p.style.transform = "rotate(360deg)";
//     }
//     p.style.transition = "2s";
//     isOn = !isOn;
// });

let isOn = false;
div.addEventListener("click", function () {
    if (isOn) {
        setTimeout(function () {
            location.reload();
            alert("Page Reloaded!");
        })
        p.style.transform = "rotate(720deg)";
    } else {
        setTimeout(function () {
            location.reload();
            alert("Page Reloaded!");
        })
        p.style.transform = "rotate(360deg)";
    }
    p.style.transition = "2s";
    isOn = !isOn;
});