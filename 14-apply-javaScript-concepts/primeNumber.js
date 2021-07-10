//14-11 Check whether a number is a Prime Number or not

var n = 71;

for (i = 2; i < n; i++) {
	// console.log('i =>', i, 'div result =>', n / i, 'remainder =>', n % i);
	if (n % i == 0) {
		console.log('Your number is not a Prime Number');
		break;
	} else {
		console.log('Your number is a Prime Number');
		break;
	}
}
// console.log('Your number is a Prime Number');

// check prime number using function
function isPrime(n) {
	for (i = 2; i <= n; i++) {
		if (n % i == 0) {
			return 'This is not Prime';
		} else {
			return 'This is Prime';
		}
	}
}
var primeNumber = isPrime(70);
console.log(primeNumber);
