let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let container = document.querySelector(".container");

// let user=prompt("enter number");

// for (let a = 1; a <=user; a++) {
//     let div = document.createElement('div');
//     div.innerHTML = a;
//     container.append(div);
// };

let count = 1;
if (plusButton) {

    plusButton.addEventListener("click", function () {
        let div = document.createElement('div');
        div.classList.add("box");
        div.innerHTML = count;
        count += 1;
        container.append(div);
    });
}

else {
    console.warn("plusButton not exist")
}

minusButton.addEventListener("click", function () {

    let boxes = document.querySelector(".container").lastElementChild;
    boxes.remove();
    count -= 1;

});

