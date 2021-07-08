function whosPaying(names) {

/******Don't change the code above*******/

    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    var randomName = Math.floor(Math.random() * names.length);

    var item = names[randomName];

    return item + " is going to buy lunch today!";

/******Don't change the code below*******/
}

whosPaying();
