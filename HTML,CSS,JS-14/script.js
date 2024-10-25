let a = document.getElementById("first");

console.log(a);

// a.insertAdjacentText("beforebegin", 'beforebegin');
// a.insertAdjacentText("beforeend", 'beforeend');
// a.insertAdjacentText("afterbegin", 'afterbegin');
// a.insertAdjacentText("afterend", 'afterend');

a.insertAdjacentHTML("beforebegin", '<div class="test">beforebegin<div/>');
a.insertAdjacentHTML("beforeend", '<div class="test">beforeend<div/>');
a.insertAdjacentHTML("afterbegin", '<div class="test">afterbegin<div/>');
a.insertAdjacentHTML("afterend", '<div class="test">afterend<div>');