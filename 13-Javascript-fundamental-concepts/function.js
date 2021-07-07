// 13-8 Function, call function
function sayLoveYou() {
	console.log('Jaan o baby');
	console.log('Billi baby... koi tumi');
}
sayLoveYou();

var date = 14;
var place = 'Restaurant';

sayLoveYou();

var hangoutPlace = 'TSC';

sayLoveYou();

// 13-9 Function Parameter, multiple parameter, function return
function doubleIt(num) {
	var result = num * 2;
	console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(500);

function doubleNum(num) {
	var result = num * 2;
	return result;
}

var first = doubleNum(5);
var second = doubleNum(50);
var third = doubleNum(500);

var total = first + second + third;

console.log(first, second, third);
console.log(total);

function add(num1, num2) {
	var result = num1 + num2;
	return result;
}
var sum = add(15, 25);
console.log(sum);
