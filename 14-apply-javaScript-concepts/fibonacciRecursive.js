// 14-9 Fibonacci Element in a Recursive Way
function fibonacci(n) {
	if (n == 0) {
		return 0;
	}
	if (n == 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}
var result = fibonacci(5);
console.log(result);
