// 12-2 Run JavaScript in browser, VSCode, and codepen
console.log(21);

console.log('Good Morning!');

// 12-3 What is variable, declare a variable, see output
var bananaPrice = 16;
console.log(bananaPrice);

//  12-4 Variable type, Numeric, String, Boolean
var seenAfter = 21;
console.log(typeof seenAfter);

var uname = 'kalimuddin zuckerburg';
console.log(typeof uname);

var isHot = true;
var isRich = false;
console.log(typeof isHot);

// 12-5 Variable name naming convention and best practice
var userName = 'Hero Alom';
userName = 'Hero Abdul';
userName = 'Hero Jamal';
userName = 'Hero Mosarraf';
console.log(userName);

// 12-6 Explore string case change index split
var promise = 'I PROMISE I will HARD work to become a programmer ';
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('HARD'));
console.log(promise.split(' '));

// 12-7 Integer float parseInt parseFloat type conversion
var number1 = 20;
var number2 = 20.5;
console.log(number1 + number2);

var number3 = 33;
var number4 = '17.5';
number4 = parseFloat(number4); // convert floating number
number4 = parseInt(number4); // convert integer number
console.log(number3 + number4);

var number5 = 30;
var number6 = 40.5;
number5 = '' + number5; // convert string
console.log(typeof number5);

var number7 = 0.1;
var number8 = 0.2;
var total = number7 + number8;
total = total.toFixed(2);
console.log(total);

// 12-8 Mathematical operations in JavaScript
var price1 = 25;
var price2 = 35;
price2++; // increment of 1
price2--; // decrement of 2
var total = price1 + price2; // sum of
var total = price2 - price1; // sub of
var total = price1 * price2; // multiple of
var total = price2 / price1; // divide of
var total = price2 % price1; // modulas of
console.log(total);

var name1 = 'Mohammad';
var name2 = 'Noman';
var fullName = name1 + ' ' + name2;
console.log(fullName);

// 12-9 Math absolute round floor ceil random
var number = -10;
var absoluteNumber = Math.abs(number); // convert negative to positive
console.log(absoluteNumber);

var roundNumber = 11.4999;
var roundResult = Math.round(roundNumber); // round number is making round figure
console.log(roundResult);

var ceilNumber = 15.4999;
var ceilResult = Math.ceil(ceilNumber); // ceil number is high
console.log(ceilResult);

var floorNumber = 20.9999;
var floorResult = Math.floor(floorNumber); // floor number is down
console.log(floorResult);

var randomResult = Math.random(); // randomly find number fraction figure
console.log(randomResult);

var randomNumber1 = Math.random() * 100;
var randomResult1 = Math.round(randomNumber1); // random number find round figure
console.log(randomResult1);

// 12-12 JavaScript Date timezone and Module Summary
var date = new Date('1996-11-09');
console.log(date);
