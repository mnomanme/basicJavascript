//14-10 Create Fibonacci series in a recursive way

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

function fibonacci(n) {
	if (n == 0) {
		return [0];
	} else if (n == 1) {
		return [0, 1];
	} else {
		var fibo = fibonacci(n - 1);
		// console.log(fibo);
		var newElement = fibo[n - 1] + fibo[n - 2];
		// console.log(newElement);
		fibo.push(newElement);
		return fibo;
	}
}
var result = fibonacci(6);
console.log('fibo series', result);
