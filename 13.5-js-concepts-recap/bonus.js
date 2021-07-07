//13_5-1 What is javascript, key features of javascript
// 13_5-2 How javascript code executes

// 13_5-3 Revisit string, array, loop
var marks = [66, 99, 70, 77, 88, 40, 39];

for (i = 0; i < marks.length; i++) {
	var elements = marks[i];
	console.log(elements);
}

console.log('outside');
console.log('go gulisthan');

//13_5-4 Remove confusion with function and function vs loop
function add(number1, number2) {
	var total = number1 + number2;
	return total;
}
var result1 = add(22, 44);
console.log(result1);

console.log('this is works now ');
console.log('this is now define');

var result2 = add(3434, 343);
console.log(result2);

// find the largest number
function largestNum(numbers) {
	var larger = numbers[0];
	for (var i = 0; i < numbers.length; i++) {
		var elements = numbers[i];
		if (elements > larger) {
			larger = elements;
		}
	}
	return larger;
}
var number = [10, 3, 45]; // array declare in a variable & catch in function
var largeOutput = largestNum(number);
var largeOutput = largestNum([21, 33, 545, 66]); // array declare inside function parameter
console.log('largest output', largeOutput);
