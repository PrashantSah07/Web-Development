// let user = !false
// while (user) {
//     let age = prompt("enter your age here: ");
//     age = Number.parseInt(age); 

//     if (age <= 0) {
//         alert("Please enter a valid age");
//         console.error("age not valid");
//         break;
//     }
//     else if (age < 18) {
//         alert("You cannot drive");
//     } else {
//         alert("you can drive");
//     }

//     user = confirm("Do you want to play again?");

// }





// let num = prompt("enter the number");
// num = Number.parseInt(num);

// if (num > 4) {
//     location.href = "https://google.com";
// } else
//     alert("Entered write number")
//     document.write("HEHE BOI")





// let pageColor = prompt("Enter the page background color name correctly:");

// document.body.style.backgroundColor = pageColor;
// console.log(pageColor); 





let comp = Math.floor(Math.random() * 3);
let user = prompt("Enter 'snake','water' or 'gun' :");                    //---> RULE (snake>water, water>gun, gun>snakea)

if (comp == 0) {
    comp = 'snake';
} else if (comp == 1) {
    comp = 'water';
} else if (comp == 2) {
    comp = 'gun';
}

alert("The winner is: ");

if (comp == "snake" && user == "snake") {
    alert("Match draw, try again!");
} else if (comp == "snake" && user == "water") {
    alert("Computer wins");
} else if (comp == "snake" && user == "gun") {
    alert("User wins");
} else if (comp == "water" && user == "water") {
    alert("Match draw, try again!");
} else if (comp == "water" && user == "snake") {
    alert("User wins");
} else if (comp == "water" && user == "gun") {
    alert("Computer wins");
} else if (comp == "gun" && user == "gun") {
    alert("Match draw, try again!");
} else if (comp == "gun" && user == "snake") {
    alert("Computer wins");
} else if (comp == "gun" && user == "water") {
    alert("User wins");
}

document.write("<br>User input: " + user + "<br>Computer input: " + comp + "<br>")          //--->  '<br>' is used to create a new line in HTML

if ((comp == "snake" && user == "gun") || (comp == "water" && user == "snake") || (comp == "gun" && user == "water")) {
    document.write("Congratulations, You Won!");
} else if ((comp == "snake" && user == "water") || (comp == "water" && user == "gun") || (comp == "gun" && user == "snake")) {
    document.write("You lose!");
} else if ((comp == "snake" && user == "s") || (comp == "water" && user == "water") || (comp == "gun" && user == "gun")) {
    document.write("Match tied");
}