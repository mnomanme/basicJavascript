//14-8 Create a Fibonacci Series using a for loop

// fibo[2] = [2 - 1] + [2 - 2];
// fibo[3] = [3 - 1] + [3 - 2];
// fibo[4] = [4 - 1] + [4 - 2];
// fibo[5] = [5 - 1] + [5 - 2];
// fibo[n] = [n - 1] + [n - 2];
// fibo[i] = [i - 1] + [i - 2];

var fibo = [0, 1];

for (var i = 2; i <= 10; i++) {
	fibo[i] = fibo[i - 1] + fibo[i - 2];
	console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}
console.log(fibo);

// create fibonacci series using function
function fibonacci(n) {
	var fibo = [0, 1];
	for (var i = 2; i <= n; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2];
	}
	return fibo;
}

var total = fibonacci(25);
console.log(total);
