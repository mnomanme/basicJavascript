//15-3 Random number, random number between 1 to 6

var num = 5.599999;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
var randomNum = Math.random() * 10;
var dice = Math.round(randomNum);

console.log('floor:', result);
console.log('ceil:', result2);
console.log('round:', result3);
console.log('dice:', dice);

// random number ludo 6

for (i = 0; i < 10; i++) {
	var randomNum = Math.random() * 6;
	var dice = Math.round(randomNum);
	console.log(i, 'ludo dice:', dice);
}
