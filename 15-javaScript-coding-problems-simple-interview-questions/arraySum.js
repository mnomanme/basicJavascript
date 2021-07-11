//15-6 Sum of all numbers in an array

var numbers = [56, 37, 29, 20, 44, 90, 66];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	var element = numbers[i];
	sum = sum + element;
}
console.log('Sum of:', sum);

// sum of array using function

function getArrayMarks(marks) {
	var sum = 0;
	for (var i = 0; i < marks.length; i++) {
		var element = marks[i];
		sum = sum + element;
	}
	return sum;
}
var marksExam = [47, 29, 42, 90];
var total = getArrayMarks(marksExam);
console.log('Exam marks:', total);

var result = getArrayMarks([122, 32, 45]);
console.log('Result of sum:', result);
