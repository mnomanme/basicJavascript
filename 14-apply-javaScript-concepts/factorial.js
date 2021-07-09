//14-5 Calculate Factorial of a number using for loop

// 1! = 1X1
//2! = 2X1
//3! = 3X2X1
// 5! = 5X4X3X2X1
//10! = 1*2*3*4*5*6*7*8*9*10

var factorial = 1;

for (let i = 1; i <= 10; i++) {
	var factorial = factorial * i;
	console.log('index value =>', i, 'factorial value =>', factorial);
}

// factorial ouput using function
function numFactorial(n) {
	var factorial = 1;
	for (var i = 1; i <= n; i++) {
		var factorial = factorial * i;
	}
	return factorial;
}

var result = numFactorial(10);
console.log(result);
