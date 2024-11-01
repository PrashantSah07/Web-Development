let resetbtn = document.querySelector(".reset-button");
let allInput = document.querySelectorAll("input")

resetbtn.addEventListener("click", function () {
    for (let input of allInput) {
        input.value = ""
    }

});


