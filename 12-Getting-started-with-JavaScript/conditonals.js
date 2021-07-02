// 12-10 Make conditional decision, if-else, comparison

var biscuitPrice = 8;

if (biscuitPrice < 10) {
    // '<' this is less than sign
    console.log("I will eat the biscuits");
} else {
    console.log("Khali cha is better");
}

var busFare = 1000;

if (busFare == 1000) {
    // '==' this is equal sign
    console.log("I will go");
} else {
    console.log("train is better");
}

var busFare = 1000;

if (busFare != 1000) {
    // '==' this is not equal sign
    console.log("I will go");
} else {
    console.log("train is better");
}

// 12-11 Multiple conditions, fulfill both conditions, else if

var getJob = true;
var savingsAmout = 5000000;

if (getJob == true && savingsAmout > 500000) {
    // '&&' this sign both statements is true otherwise shows 'no'
    console.log("Asho patri khuji");
} else {
    console.log("Tor biya nai");
}

var getJob = false;
var savingsAmout = 50000;

if (getJob == true || savingsAmout > 500000) {
    // '||' this is one statement is true then it's OK
    console.log("Asho patri khuji");
} else {
    console.log("Tor biya nai");
}

var getJob = true;
var savingsAmout = 50000;

if (getJob == true && savingsAmout > 500000) {
    console.log("Asho patri khuji");
} else if (getJob == true) {
    console.log("okay wait some days");
} else {
    console.log("Tor biya nai");
}
