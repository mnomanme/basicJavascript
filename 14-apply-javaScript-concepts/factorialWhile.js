//14-6 Calculate Factorial of a number using a while loop
var i = 1;
var factorial = 1;

while (i <= 10) {
	factorial = factorial * i;
	// console.log(i, factorial);
	i++;
}
console.log(factorial);

// calculate factorial using function

function numberFactorial(n) {
	var i = 1;
	var num = 1;
	while (i <= n) {
		num = num * i;
		i++;
	}
	return num;
}

var total = numberFactorial(12);
console.log('factorial is =>', total);
