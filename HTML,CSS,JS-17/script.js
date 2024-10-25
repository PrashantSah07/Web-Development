let click = document.getElementsByClassName("menu")[0];
let click2 = document.getElementsByClassName("cut-menu")[0];
let visible = document.querySelector(".navbar2");

console.log(click);

let isOn = false;

click.addEventListener("click", function () {
    if (isOn) {
        visible.style.display = "block";
        visible.style.animation = "transition 0.2s linear 1 forwards";
        click.style.display = "none"
        click2.style.display = "block"
    }
    else {
        visible.style.animation = "transition2 0.2s linear 1 forwards";
    }

    isOn = !isOn;
})

let isOnn = false;

click2.addEventListener("click", function () {
    if (isOnn) {
        visible.style.display = "block";
        visible.style.animation = "transition 0.2s linear 1 forwards";
    }
    else {
        visible.style.animation = "transition2 0.2s linear 1 forwards";
        click.style.display = "block"
        click2.style.display = "none"
    }

    isOnn = !isOnn;
}) 
