var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");

function guestListCheck () {

    if (guestList.includes(myName)) {
        return "You are on the list.";
    }
    else {
        return "You are not on the list.";
    }

}

guestListCheck();

///////

or

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome.")
} else {
    alert("Better luck next time.");
}
