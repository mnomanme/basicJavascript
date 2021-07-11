// 15_5-2 Travelling in a Jungle and counting wild animals

var depth = 30;
var animal = 0;

if (depth <= 10) {
	animal = depth * 50;
	console.log('first:', animal);
} else if (depth <= 20) {
	var firstPart = 10 * 50;
	var remaining = depth - 10;
	console.log('remaind', remaining);

	var secondPart = remaining * 100;
	// console.log(secondPart);
	animal = firstPart + secondPart;
	console.log('second:', animal);
} else {
	var firstPart = 10 * 50;
	var secondPart = 10 * 100;
	var remaining = depth - 20;
	console.log('remaind', remaining);

	var thirdPart = remaining * 300;
	// console.log(thirdPart);
	animal = firstPart + secondPart + thirdPart;
	console.log('third:', animal);
}
console.log('Total animal =>', animal);

// animal count using function

function animalCount(depth) {
	var animal = 0;

	if (depth <= 10) {
		animal = depth * 50;
		console.log('first:', animal);
	} else if (depth <= 20) {
		var firstPart = 10 * 50;
		var remaining = depth - 10;
		console.log('remaind', remaining);

		var secondPart = remaining * 100;
		// console.log(secondPart);
		animal = firstPart + secondPart;
		console.log('second:', animal);
	} else {
		var firstPart = 10 * 50;
		var secondPart = 10 * 100;
		var remaining = depth - 20;
		// console.log('remaind', remaining);

		var thirdPart = remaining * 300;
		// console.log(thirdPart);
		animal = firstPart + secondPart + thirdPart;
		// console.log('third:', animal);
	}
	return animal;
}
var animal = animalCount(19);
console.log('Jungle animal =>', animal);
