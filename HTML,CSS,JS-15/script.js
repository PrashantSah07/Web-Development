let btn = document.getElementsByTagName("p")[0];
let bg = document.querySelector("body");
let border = document.querySelector(".first");

console.log(btn);

let isOn = false; // Initial state

btn.addEventListener("click", function () {
    if (isOn) {
        // Actions when the condition is true (turning it "off")
        btn.style.backgroundColor = "white";
        border.style.border = "2px solid white";
        btn.style.animation = "move 0.2s linear 1 forwards";
        bg.style.backgroundColor = "rgb(5, 3, 12)";
    } else {
        // Actions when the condition is false (turning it "on")
        btn.style.backgroundColor = "black";
        border.style.border = "2px solid rgb(5, 3, 12)";
        btn.style.animation = "moveBack 0.2s linear 1 forwards";
        bg.style.backgroundColor = "rgb(240, 240, 240)";
        bg.style.transition="0.2s";
    }
    // Toggle the state
    isOn = !isOn;
});