// 15_5-1 How recursion works and recursion vs iterative

function factorial(num) {
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact = fact * i;
		console.log('i:', i, 'fact:', fact);
	}
	return fact;
}
var result = factorial(5);
console.log('fact result:', result);

// recursive factorial
// 5! = 5*4*3*2*1
// factorialRecursive(num - 1)

function factorialRecursive(num) {
	if (num == 1) {
		console.log('1st:', num);
		return 1;
	} else {
		console.log('2nd', num, '3rd:', num - 1);
		return num * factorialRecursive(num - 1);
	}
}

var numFact = factorialRecursive(6);
console.log('result:', numFact);
