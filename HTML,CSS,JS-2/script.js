alert("This is an alert pop-up in the browser");

let a = prompt("Enter the number here: ");
a = Number.parseInt(a);
alert(typeof a);

let check = confirm("Do you want to write in the website or not?");   // This returns true or false
if (check) {
    document.write(a);                  // document.write is used to print anything in the browser page
} else
    document.write("please press " + "YES" + " first to allow");

// ((check) ? document.write(a) : document.write("please press " + "YES" + " first to allow"))