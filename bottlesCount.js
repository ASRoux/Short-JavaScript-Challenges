var numBottles = 99;

function beer() {

    while(numBottles >= 0) {

       let bottleWord = "bottles";

       if (numBottles === 1) {
            bottleWord = "bottle"
        }

       console.log(numBottles + " " + bottleWord + " of beer on the wall, ");
       console.log(numBottles + " " + bottleWord + " of beer.")
       console.log(" Take one down, pass it around, ");
       numBottles--;
       console.log(numBottles + " " + bottleWord + " of beer on the wall.");

    }

}
