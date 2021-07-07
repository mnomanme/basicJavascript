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

// doubleIt function is used show output double value
function doubleIt(num) {
	var result = num * 2;
	console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(500);

// doubleNum function is used show output double value of adding sum
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

// add function is used for sum of two parameters
function add(num1, num2) {
	var result = num1 + num2;
	return result;
}
var sum = add(15, 25);
console.log(sum);

// 13-10 Comment, multiple lines comment
