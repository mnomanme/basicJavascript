// 15_5-1 How recursion works and recursion vs iterative

function factorial(num) {
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact = fact * i;
		// console.log(i, fact);
	}
	return fact;
}
var result = factorial(5);
console.log('fact result:', result);
